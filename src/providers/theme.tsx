'use client'

import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes'
import { FC } from 'react'
import { defaultTheme } from '@/constants/theme'

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      themes={['light', 'dark']}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  )
}

export { ThemeProvider }
