import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

/**
 * Вывод данных по жанрам (с бэка http://localhost:4200/api/genres)
 */
const GenreMenu: React.FC = () => {
  //! +1 ступень запроса react-query, верхняя (+2) - app\components\layout\Navigation\MenuContainer\MenuContainer.tsx  
	const { isLoading, data } = usePopularGenres();

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu
			menu={{
				title: 'Popular genres',
				items: data || [],
			}}
		/>
	)
}

export default GenreMenu
