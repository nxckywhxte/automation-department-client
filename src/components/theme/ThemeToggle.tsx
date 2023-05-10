'use client'

import {
  useCallback,
  useEffect,
  useState
} from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [theme, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <button
      className='
        p-1 rounded-md border-2
        dark:border-drForeground
        border-drBackground
        dark:hover:text-drGreen
        dark:hover:border-drGreen
        hover:text-drComment
        hover:border-drComment
        '
      onClick={() => {
        toggleTheme()
      }}>
      {theme === 'dark' ? (
        <SunIcon className='w-5 h-5' />
      ) : (
        <MoonIcon className='w-5 h-5' />
      )}
    </button>
  )
}
