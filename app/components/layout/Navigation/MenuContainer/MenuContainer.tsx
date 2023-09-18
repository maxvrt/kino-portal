import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { firstMenu, userMenu } from './menu.data'

// Создаем новый динамический компонент на основе существующего GenreMenu
//! Верхняя (+2) ступень запроса react-query, +1 - app\components\layout\Navigation\MenuContainer\genres\GenreMenu.tsx
// В самом меню данные подгружаются через react-query-запрос с бэка http://localhost:4200/api/genres
const GenreMenu = dynamic<React.FC>(() => import('./genres/GenreMenu'), {
	ssr: false,
}) as React.FC;


const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={ firstMenu } />
      {/* жанры - делаем запрос к бэку через react-query, для этого есть обертка в app\providers\MainProvider.tsx */}
			<GenreMenu />
			<Menu menu={ userMenu } />
		</div>
	)
}

export default MenuContainer
