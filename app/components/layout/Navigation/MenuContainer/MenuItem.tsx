import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { MaterialIcon } from '@/ui/icons/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.types'
import cn from 'classnames'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
          <MaterialIcon name={item.icon} />
					<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
