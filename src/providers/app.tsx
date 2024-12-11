'use client'

import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'
import { defaultTheme } from '@/constants/theme'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider: FC<AppProviderProps> = (props) => {
  const { children } = props

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      themes={['light', 'dark']}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export { AppProvider }
