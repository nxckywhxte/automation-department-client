'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface GlobalThemeProviderProps {
  children?: ReactNode
}

const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}

export default GlobalThemeProvider
