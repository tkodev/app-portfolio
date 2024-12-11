'use client'

import { ThemeProvider } from 'next-themes'
import { TransitionRouter } from 'next-transition-router'
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
      <TransitionRouter
        leave={async (next) => {
          next()
        }}
        enter={async (next) => {
          next()
        }}
        auto
      >
        {children}
      </TransitionRouter>
    </ThemeProvider>
  )
}

export { AppProvider }
