'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

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
      className='p-1 rounded-full border-2 dark:border-gray-100 border-gray-900'
      onClick={() => {
        toggleTheme()
      }}>
      {theme === 'dark' ? (
        <SunIcon className='w-6 h-6' />
      ) : (
        <MoonIcon className='w-6 h-6' />
      )}
    </button>
  )
}
