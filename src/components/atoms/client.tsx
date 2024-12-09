'use client'

import Image, { ImageProps } from 'next/image'
import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('h-full w-auto relative'),
  img: cva('w-full h-auto absolute top-0 left-0', {
    variants: {
      variant: {
        light: 'block dark:hidden',
        dark: 'hidden dark:block'
      }
    }
  }),
  baseImg: cva('opacity-0')
}

type ImagerRef = HTMLImageElement
type ImagerProps = HTMLAttributes<ImagerRef> &
  VariantProps<typeof styles.root> &
  Omit<ImageProps, 'src'> & {
    lightSrc: string
    darkSrc: string
  }

const Client = forwardRef<ImagerRef, ImagerProps>((props, ref) => {
  const { lightSrc, darkSrc, alt, className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))}>
      <Image className={cn(styles.img({ variant: 'light' }))} src={lightSrc} alt={alt} {...rest} />
      <Image className={cn(styles.img({ variant: 'dark' }))} src={darkSrc} alt={alt} {...rest} />
      <Image className={cn(styles.baseImg())} src={lightSrc} alt={alt} {...rest} />
    </div>
  )
})
Client.displayName = 'Client'

export { Client }
export type { ImagerProps, ImagerRef }
