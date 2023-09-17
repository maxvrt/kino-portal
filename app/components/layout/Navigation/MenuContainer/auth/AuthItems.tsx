import { FC } from 'react'

// import { useAuth } from '@/hooks/useAuth'

// import { getAdminHomeUrl } from '@/configs/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = { user: {
    name: '111',
    isAdmin: true
  } }

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: 'http://ya.ru',
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
