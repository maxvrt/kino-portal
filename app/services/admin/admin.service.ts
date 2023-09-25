import axios from 'api/interceptors'

import { getUsersUrl } from '@/configs/api.config'

export const AdminService = {
	async getCountUsers() {
		// наш axios, с interceptor`ом
		return axios.get<number>(getUsersUrl('/count'));
	},
}
