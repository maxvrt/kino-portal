import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/screens/home/home'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Home/>
  )
}
