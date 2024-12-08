import { ForwardRefExoticComponent, SVGProps, RefAttributes } from 'react'
import { Config } from 'tailwindcss'

type Theme = NonNullable<Config['theme']>

type ThemeMode = 'light' | 'dark'

type SvgComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
>

export type { Theme, ThemeMode, SvgComponent }
