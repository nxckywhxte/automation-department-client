import { Logo } from '@/components/base/logo/Logo'
import { NavLink } from '@/components/base/header/NavLink'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { MobileMenu } from '@/components/base/header/MobileMenu'

const linksData = [
  {
    title: 'Главная',
    href: '/'
  },
  {
    title: 'Наша кафедра',
    href: '/department'
  },
  {
    title: 'Каталог',
    href: '/catalog'
  }
]

export const Header = () => {
  return (
    <>
      <header
        className='
         flex
         items-center
         justify-between
         p-4
         shadow
         '>
        <div>
          <Logo
            title={'АГНИ Автоматизация'}
            subtitle={
              'Кафедра Автоматизации и ИТ'
            }
          />
        </div>
        <ul className='hidden lg:flex lg:items-center'>
          {linksData.map((link, idx) => (
            <li key={idx}>
              <NavLink
                href={link.href}
                title={link.title}
              />
            </li>
          ))}
        </ul>
        <div className='flex items-flex'>
          <div className='hidden sm:flex sm:items-center sm:gap-2'>
            <ThemeToggle />
            <button
              className='
            dark:bg-drGreen
            bg-drComment
            px-4
            py-2
            rounded-md
            dark:text-drCurrentLine
            text-drForeground
            font-semibold
            border-none
            border-0
            outline-0
            '>
              Авторизация
            </button>
          </div>
          <div className='flex sm:hidden'>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}
