'use client'

import {
  Menu,
  Transition
} from '@headlessui/react'
import {
  Fragment,
  useCallback,
  useState
} from 'react'
import Link from 'next/link'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

interface MobileMenuProps {
  title: string
  href: string
}

const linksData: MobileMenuProps[] = [
  {
    title: 'Главная',
    href: '/'
  },
  {
    title: 'Наша кафедра',
    href: '/'
  },
  {
    title: 'Официальный сайт АГНИ',
    href: '/'
  }
]

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [open])

  return (
    <div className=''>
      <Menu
        as='div'
        className='relative inline-block text-left'>
        <div>
          <Menu.Button
            className='inline-flex justify-center rounded-md p-2 border dark:border-drForeground border-drCurrentLine'
            onClick={() => {
              toggleMobileMenu()
            }}>
            {open ? (
              <XMarkIcon className='w-5 h-5' />
            ) : (
              <Bars3Icon className='w-5 h-5' />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          leave='transition ease-in duration-75'>
          <Menu.Items
            className='absolute
                        right-0 mt-2 p-5 w-80 origin-top-right
                        border dark:border-drPurple border-drCurrentLine/20
                        rounded-md dark:bg-drBackground shadow-lg bg-drForeground
                        ring-1 ring-drComment ring-opacity-5
                        focus:outline-none z-50'>
            {linksData.map((item, idx) => (
              <Menu.Item key={idx}>
                <Link href={item.href}>
                  <div
                    className='
                      w-full p-3 hover:cursor-pointer
                      dark:hover:bg-drBackground/90 hover:rounded-md
                      dark:hover:text-drPurple text-sm hover:border
                      dark:hover:border-drPurple hover:text-drComment
                      hover:border-drComment'>
                    {item.title}
                  </div>
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item>
              <div className='w-full h-0.5 bg-drCurrentLine/20 darK:bg-drPurple my-3' />
            </Menu.Item>
            <Menu.Item>
              <div className='w-full flex items-center gap-4 justify-between px-3'>
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
                <ThemeToggle />
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
