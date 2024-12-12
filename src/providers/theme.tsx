'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'
import { defaultTheme } from '@/constants/theme'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      themes={['light', 'dark']}
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </NextThemeProvider>
  )
}

export { ThemeProvider }
