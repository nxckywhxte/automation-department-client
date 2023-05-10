import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'АГНИ Автоматизация',
  description: 'Веб приложение специально для кафедры Автоматизации и ИТ'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
