'use client'

import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef } from 'react'
import ReactTilt from 'react-parallax-tilt'
import { cn } from '@/utils/theme'
import { cva, type VariantProps } from 'class-variance-authority'

const styles = {
  root: cva('w-full h-full')
}

type TiltRef = HTMLElement
type TiltProps = HTMLAttributes<TiltRef> &
  VariantProps<typeof styles.root> & {
    className?: string
    asChild?: boolean
  }

const options = {
  scale: 1.025,
  tiltReverse: true,
  tiltMaxAngleX: 15,
  tiltMaxAngleY: 15,
  perspective: 5000,
  transitionSpeed: 2000
}

const Tilt = forwardRef<TiltRef, TiltProps>((props, ref) => {
  const { className, ...rest } = props
  return (
    <ReactTilt {...options}>
      <Slot ref={ref} className={cn(styles.root({ className }))} {...rest} />
    </ReactTilt>
  )
})
Tilt.displayName = 'Tilt'

export { Tilt }
export type { TiltProps, TiltRef }
