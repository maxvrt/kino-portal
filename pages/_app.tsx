//import '@/styles/globals.scss'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import '../app/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

// AppProps & { children: ReactNode; Component: TypeRoles }
type TypeAppProps = AppProps & TypeComponentAuthFields
export default function App({ Component, pageProps }: TypeAppProps) {
  return (
  <MainProvider Component={Component}>
   <Component {...pageProps} />
  </MainProvider>
  )
}
