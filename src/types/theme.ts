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

type SvgComponent = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
>

export type { NestedTheme, Theme, NestedDictionary, FlattenedDictionary, ThemeMode, SvgComponent }