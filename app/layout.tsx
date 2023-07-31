import './globals.css'
import { Inter } from 'next/font/google'
import  {Providers} from './Provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-black`}>
          {children}
        </body>
        <ReactQueryDevtools initialIsOpen={false} />
      </html>
      
    </Providers>
  )
}
