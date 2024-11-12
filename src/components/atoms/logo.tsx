'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { useTheme } from '@/hooks/theme'
import { cn, cva, VariantProps } from '@/utils/theme'
import Image from 'next/image'

const styles = {
  root: cva('h-auto w-[72px]')
}

const images: Record<string, string> = {
  dark: '/images/logo/logo-dark.svg',
  light: '/images/logo/logo-light.svg'
}

type LogoRef = HTMLImageElement
type LogoProps = HTMLAttributes<LogoRef> &
  VariantProps<typeof styles.root> & {
    //
  }

const Logo = forwardRef<LogoRef, LogoProps>((props, ref) => {
  const { className, ...rest } = props
  const { theme } = useTheme()

  const imgSrc = images[theme]

  return (
    <Image
      ref={ref}
      className={cn(styles.root({ className }))}
      src={imgSrc}
      width={192}
      height={64}
      alt="Tko.dev Logo"
      {...rest}
    />
  )
})
Logo.displayName = 'Logo'

export { Logo }
export type { LogoProps, LogoRef }
