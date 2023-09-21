import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

// возврат на предыдущую страницу при авторизации
export const useAuthRedirect = () => {
	const { user } = useAuth();

	const { query, push } = useRouter()

  // если в query-запросе есть редирект ?redirect
	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
    // непосредственно редирект
		if (user) push(redirect)
	}, [user, redirect, push])
}
