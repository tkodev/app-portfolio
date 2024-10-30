import { Config } from 'tailwindcss'

type Theme = NonNullable<Config['theme']>

type NestedTheme<T = string> = Record<string, Record<string, T>>

type NestedDictionary = {
  [key: string]: string | NestedDictionary
}
type FlattenedDictionary = {
  [key: string]: string
}

type ThemeMode = 'light' | 'dark'

export type { NestedTheme, Theme, NestedDictionary, FlattenedDictionary, ThemeMode }
