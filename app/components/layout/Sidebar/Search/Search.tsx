import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'

import SearchField from '@/ui/search-field/SearchField'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie/movie.service'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
  // просто заменяет searchTerm
	const debouncedSearch = useDebounce(searchTerm, 500)

  //! Запрос react-query с функцией debouncedSearch в аргументах - для задержки перед поиском
  // ещё один вариант запроса но без функции в аргументах - app\components\layout\Navigation\MenuContainer\genres\usePopularGenres.ts
  // запрос будет перевызван и видимо продублирован дважды так как debouncedSearch передается ещё и в массиве?
	const { isSuccess, data: popularMovies } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getMovies(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch, // определяет, когда выполнить запрос
		}
	)

  // onChange в SearchField
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={popularMovies || []} />}
		</div>
	)
}

export default Search
