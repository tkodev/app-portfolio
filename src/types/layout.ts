import { ButtonProps } from '@/components/atoms/button'
import { SvgComponent } from '@/types/theme'

type NavEntry =
  | {
      href: string
      name?: string
      icon?: SvgComponent
      variant?: ButtonProps['variant']
      size?: ButtonProps['size']
      isDisabled?: boolean
    }
  | {
      href?: undefined
      icon: SvgComponent
    }

export type { NavEntry }
