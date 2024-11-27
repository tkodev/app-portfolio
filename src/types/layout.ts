import { ButtonProps } from '@/components/atoms/button'
import { SvgComponent } from '@/types/theme'

type NavEntry = {
  href?: string
  name?: string
  icon?: SvgComponent
  isHidden?: boolean
} & ButtonProps

type PageProps = {
  params: Promise<{ [key: string]: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type { NavEntry, PageProps }
