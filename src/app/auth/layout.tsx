export const metadata = {
  title: 'АГНИ Автоматизация - Авторизация',
  description: 'Веб приложение специально для кафедры Автоматизации и ИТ'
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  )
}

export default AuthLayout
