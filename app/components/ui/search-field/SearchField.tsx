import { ChangeEvent, FC, useRef } from 'react'

import { MaterialIcon } from '../icons/MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
  // фокус при клике по иконке
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log(handleClick);
    inputRef.current?.focus();
  }
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" onClick={handleClick} />
			<input placeholder="Search" value={searchTerm} onChange={handleSearch} ref={inputRef} />
		</div>
	)
}

export default SearchField
