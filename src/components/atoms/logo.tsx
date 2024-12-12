'use client'

import Image from 'next/image'
import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative h-auto w-[72px]'),
  img: cva('absolute left-0 top-0 h-full w-full', {
    variants: {
      variant: {
        light: 'block dark:hidden',
        dark: 'hidden dark:block'
      }
    }
  }),
  baseImg: cva('opacity-0')
}

type LogoRef = HTMLImageElement
type LogoProps = HTMLAttributes<LogoRef> & VariantProps<typeof styles.root>

const Logo = forwardRef<LogoRef, LogoProps>((props, ref) => {
  const { className, ...rest } = props

  const imageProps = {
    width: 192,
    height: 64
  }
  const altString = 'Tko.dev Logo'

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Image
        className={cn(styles.img({ variant: 'light' }))}
        src="/images/logo/logo-light.svg"
        alt={altString}
        {...imageProps}
      />
      <Image
        className={cn(styles.img({ variant: 'dark' }))}
        src="/images/logo/logo-dark.svg"
        alt={altString}
        {...imageProps}
      />
      <Image
        className={cn(styles.baseImg())}
        src="/images/logo/logo-dark.svg"
        alt={altString}
        {...imageProps}
      />
    </div>
  )
})
Logo.displayName = 'Logo'

export { Logo }
export type { LogoProps, LogoRef }
