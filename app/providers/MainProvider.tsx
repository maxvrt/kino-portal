import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import Layout from '@/components/layout/Layout'
import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'
import HeadProvider from './HeadProvider/HeadProvider'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'

// клиент react-query
const queryClient = new QueryClient({
  // дефолтные настройки - при смене вкладки отключаем перезагрузку данных
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

// <TypeComponentAuthFields>
const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
		  <Provider store={store}>
        {/* //! Обертка для работы react-query запросов (в начале нужно для меню жанров dynamic-GenreMenu) */}
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<AuthProvider Component={Component}>
          {/*//! Layout оборачивает компоненты основной структурой */}
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
		  </Provider>
		</HeadProvider>
	)
}

export default MainProvider
