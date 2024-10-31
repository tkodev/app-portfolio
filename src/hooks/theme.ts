import { useTheme as useNextTheme } from 'next-themes'
import { useCallback } from 'react'
import { ThemeMode } from '@/types/theme'

const useTheme = () => {
  const { theme, setTheme } = useNextTheme()

  const validTheme: ThemeMode = theme === 'light' ? 'light' : 'dark'
  const inverseTheme: ThemeMode = theme === 'light' ? 'dark' : 'light'

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
