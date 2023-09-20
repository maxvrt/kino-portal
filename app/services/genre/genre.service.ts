import axios, { axiosClassic } from 'api/interceptors'

//import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'

//import { ICollection } from '@/components/screens/collections/collections.types'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/configs/api.config'

export const GenreService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`));
	},

	async create() {
		return axios.post<string>(getGenresUrl(''));
	},

	// async update(_id: string, data: IGenreEditInput) {
	// 	return axios.put<string>(getGenresUrl(`/${_id}`), data)
	// },

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`));
	},

	//! внутренние запросы запроса react-query, нулевая ступень - app\components\layout\Navigation\MenuContainer\genres\usePopularGenres.ts
	/**
	 * запрос уйдет на http://localhost:4200/api/genres вызывается внутри useQuery
	 */
	async getAll(searchTerm?: string) {
		//! -1 ступень запроса react-query axiosClassic - app\api\interceptors.ts
		//! -2 ступень запроса getGenresUrl - app\configs\api.config.ts
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	// async getCollections() {
	// 	return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	// },

	// async getById(_id: string) {
	// 	return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	// },

	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		});
	},
};
