import { ButtonProps } from '@/components/atoms/button'
import { SvgComponent } from '@/types/theme'

type NavEntry =
  | ({
      href: string
      name?: string
      icon?: SvgComponent
      isHidden?: boolean
    } & ButtonProps)
  | {
      href?: undefined
      icon: SvgComponent
    }

export type { NavEntry }
