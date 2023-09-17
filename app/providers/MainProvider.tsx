// import AuthProvider from './AuthProvider/AuthProvider'
// import HeadProvider from './HeadProvider/HeadProvider'
import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { Provider } from 'react-redux'
// import { store } from 'store/store'
import Layout from '@/components/layout/Layout'
// import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'
// import { TypeComponentAuthFields } from '@/shared/types/auth.types'

// клиент react-query
const queryClient = new QueryClient({
  // дефолтные настройки - при смене вкладки отключаем перезагрузку данных
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
interface LayoutProps {
  children: ReactNode;
}
// <TypeComponentAuthFields>
const MainProvider: FC<LayoutProps> = ({ children }) => {
	return (
		// <HeadProvider>
		// 	<Provider store={store}>
        //! в начале нужно для меню, когда делаем запрос на жанры - DynamicGenreMenu
				<QueryClientProvider client={queryClient}>
					{/* <ReduxToastr />
					<AuthProvider Component={Component}> */}
						<Layout>{children}</Layout>
					{/* </AuthProvider> */}
				</QueryClientProvider>
		// 	</Provider>
		// </HeadProvider>
	)
}

export default MainProvider
