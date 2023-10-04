import './globals.css'
import { Inter, Orbitron } from 'next/font/google'
import { Toaster } from 'react-hot-toast'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark:bg-black '>
      <body className={inter.className}>
        <Toaster position="bottom-left" reverseOrder={false} />
        <div className=' max-w-7xl mx-auto'>
          <div className='px-3 sm:px-11 md:px-13 lg:px-14 mt-5' >
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
