import { useQuery } from 'react-query'
import { GenreService } from '@/services/genre/genre.service'
//import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getGenreUrl } from '@/configs/url.config'
import { IMenuItem } from '../menu.types'
import { IGenre } from '@/shared/types/movie.types';

// 3-4 популярных фильма
/**
 * REACT-QUERY запрос и обработка данных с бэка http://localhost:4200/api/genres
 */
export const usePopularGenres = () => {
	//! REACT-QUERY нулевая ступень запроса, первая app\components\layout\Navigation\MenuContainer\genres\GenreMenu.tsx
	// ещё один вариант запроса но уже с функцией в аргументах - app\components\layout\Sidebar\Search\Search.tsx
	const queryData = useQuery(
		// ключи должны быть уникальные?
		'popular genres menu',
		() => GenreService.getAll(),
		// объект с опциями запроса
		{
			// функция, которая принимает ответ запроса (в данном случае, data) и обрабатывает его
			select: ({ data }: { data: IGenre[] }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
			// обработка ошибки
			onError(error) {
				// красивый вывод нотификаций
				//toastError(error, 'Popular genres menu');
			},
		}
	);

	return queryData;
}
