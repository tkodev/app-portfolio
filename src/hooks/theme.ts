import { useTheme as useNextTheme } from 'next-themes'
import { useCallback } from 'react'
import { defaultTheme } from '@/constants/theme'
import { ThemeMode } from '@/types/theme'

const useTheme = () => {
  const { theme, setTheme } = useNextTheme()

  const validTheme: ThemeMode = theme ? (theme === 'light' ? 'light' : 'dark') : defaultTheme
  const inverseTheme: ThemeMode = theme ? (theme === 'light' ? 'dark' : 'light') : defaultTheme

  const handleThemeModeSet = useCallback((newTheme: ThemeMode) => setTheme(newTheme), [setTheme])
  const handleThemeModeToggle = useCallback(() => {
    if (validTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [validTheme, setTheme])

  return { theme: validTheme, inverseTheme, handleThemeModeSet, handleThemeModeToggle }
}

export { useTheme }
