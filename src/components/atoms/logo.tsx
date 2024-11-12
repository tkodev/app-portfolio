'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'
import Image from 'next/image'

const styles = {
  root: cva('h-auto w-[72px] relative'),
  img: cva('w-full h-full absolute top-0 left-0', {
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
    height: 64,
    alt: 'Tko.dev Logo'
  }

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Image
        className={cn(styles.img({ variant: 'light' }))}
        src="/images/logo/logo-light.svg"
        {...imageProps}
      />
      <Image
        className={cn(styles.img({ variant: 'dark' }))}
        src="/images/logo/logo-dark.svg"
        {...imageProps}
      />
      <Image className={cn(styles.baseImg())} src="/images/logo/logo-dark.svg" {...imageProps} />
    </div>
  )
})
Logo.displayName = 'Logo'

export { Logo }
export type { LogoProps, LogoRef }
