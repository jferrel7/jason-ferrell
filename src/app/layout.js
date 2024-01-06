import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jason Ferrell',
  description: 'The personal and professional website for Jason Ferrell.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
