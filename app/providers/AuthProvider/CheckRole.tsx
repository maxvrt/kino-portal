import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

/** Проверяем роль. Будем импортировать динамично - DynamicCheckRole и отключим SSR,
 * так как авторизация работает только на клиентской части.
 */
const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()

	const router = useRouter()

	const Children = () => <>{children}</>
  
  // есть некоторое дублирование в authProvider
	// if (!isOnlyAdmin && !isOnlyUser) return <Children />

	if (user?.isAdmin) return <Children />
  // правило для всех кроме админа - отдаем 404
	if (isOnlyAdmin) {    
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = user && !user.isAdmin
  // правило для страницы для пользователей
	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
