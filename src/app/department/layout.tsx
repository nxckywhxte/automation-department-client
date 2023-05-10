export const metadata = {
  title: 'АГНИ Автоматизация - Наша кафедра',
  description: 'Веб приложение специально для кафедры Автоматизации и ИТ'
}

const DepartmentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  )
}

export default DepartmentLayout
