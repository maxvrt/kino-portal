import axios from 'axios'
import Cookies from 'js-cookie'

import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { API_URL } from '@/configs/api.config'

import { errorCatch } from './api.helpers'

// для авторизованных запросов
const instanceAxios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
// Метод Axios interceptors.request.use, который позволяет зарегистрировать функцию-
// -перехватчик (interceptor) для обработки и модификации запросов перед их отправкой.
// Привязываем токен к запросу в хедер.
instanceAxios.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');
    if (config.headers && accessToken)
      config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  }
  );
// обрабатываем ответ в перехватчике
// конфиг просто возвращаем, работаем с ошибками
instanceAxios.interceptors.response.use(
	(config) => config,
	async (error) => {
    // объект отправленного запроса
		const originalRequest = error.config;
		if (
			(error.response.status === 401 ||	errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			// _isRetry - кастомное поле - был ли запрос повторным ↓↓
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
        // делаем запрос с рефреш-токеном для обновления токена
				await AuthService.getNewTokens();
        // повторно отправляем запрос
				return instanceAxios.request(originalRequest);
			} 
      // если снова ошибка то logout юзера
      catch (e) {
				if (errorCatch(e) === 'jwt expired') removeTokensStorage();
			}
		}

		throw error;
	}
);

export default instanceAxios;

//! -1 ступень react-query, внутренние запросы запроса react-query - app\services\genre\genre.service.ts
// переменные окружения взяты из next.config.js - там ещё автозамена адресов для api с перенаправлением на бэк
export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
