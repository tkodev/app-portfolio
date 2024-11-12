'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { useTheme } from '@/hooks/theme'
import { cn, cva, VariantProps } from '@/utils/theme'
import Image from 'next/image'

const styles = {
  root: cva('h-auto w-full')
}

const images: Record<string, string> = {
  dark: '/images/tkodev/signature-dark@2x.png',
  light: '/images/tkodev/signature-light@2x.png'
}

type SignatureRef = HTMLImageElement
type SignatureProps = HTMLAttributes<SignatureRef> &
  VariantProps<typeof styles.root> & {
    //
  }

const Signature = forwardRef<SignatureRef, SignatureProps>((props, ref) => {
  const { className, ...rest } = props
  const { theme } = useTheme()

  const imgSrc = images[theme]

  return (
    <Image
      ref={ref}
      className={cn(styles.root({ className }))}
      src={imgSrc}
      width={376}
      height={176}
      alt="Tony's Signature"
      {...rest}
    />
  )
})
Signature.displayName = 'Signature'

export { Signature }
export type { SignatureProps, SignatureRef }
