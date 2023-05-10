export const metadata = {
  title: 'АГНИ Автоматизация - Каталог',
  description: 'Веб приложение специально для кафедры Автоматизации и ИТ'
}

const CatalogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  )
}

export default CatalogLayout
