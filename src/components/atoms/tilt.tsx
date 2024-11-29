'use client'

import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, forwardRef } from 'react'
import ReactTilt from 'react-parallax-tilt'
import { cn } from '@/utils/theme'
import { cva, type VariantProps } from 'class-variance-authority'

const styles = {
  root: cva('')
}

type TiltRef = HTMLElement
type TiltProps = HTMLAttributes<TiltRef> &
  VariantProps<typeof styles.root> & {
    factor?: number
  }

const Tilt = forwardRef<TiltRef, TiltProps>((props, ref) => {
  const { factor = 1, className, ...rest } = props

  const options = {
    scale: 1.025,
    tiltReverse: true,
    tiltMaxAngleX: 15 * factor,
    tiltMaxAngleY: 15 * factor,
    perspective: 5000 + factor * 1000,
    transitionSpeed: 2000
  }

  return (
    <ReactTilt className={cn(styles.root({ className }))} {...options}>
      <Slot ref={ref} {...rest} />
    </ReactTilt>
  )
})
Tilt.displayName = 'Tilt'

export { Tilt }
export type { TiltProps, TiltRef }
