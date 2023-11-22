import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';
import './globals.css'
import { GlobalContextProvider } from '@/hooks/globalContext';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dus-tee Music',
  description: 'Oficial website for Dus-tee @the_everlasting_storm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={roboto.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
