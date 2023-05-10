import './globals.css'
import { Fira_Code } from 'next/font/google'
import GlobalThemeProvider from '@/components/providers/GlobalThemeProvider'
import { Header } from '@/components/base/header/Header'

const inter = Fira_Code({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'АГНИ Автоматизация',
  description:
    'Веб приложение специально для кафедры Автоматизации и ИТ'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <GlobalThemeProvider>
          <main className='flex min-h-screen flex-col w-full'>
            <Header />
            <div className='flex flex-1 w-full'>
              {children}
            </div>
          </main>
        </GlobalThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
