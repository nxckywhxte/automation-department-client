import './globals.css'
import { Inter } from 'next/font/google'
import GlobalThemeProvider from '@/components/providers/GlobalThemeProvider'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'АГНИ Автоматизация',
  description: 'Веб приложение специально для кафедры Автоматизации и ИТ'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <GlobalThemeProvider>{children}</GlobalThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
