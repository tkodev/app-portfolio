'use client'

import { useTransitionState } from 'next-transition-router'
import { HTMLAttributes, forwardRef } from 'react'
import { SectionLoading } from '@/components/sections/section-loading'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('fixed inset-0 bg-black transition-opacity duration-100 pointer-events-none', {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0'
      }
    },
    defaultVariants: {
      visible: false
    }
  })
}

type LoaderRef = HTMLDivElement
type LoaderProps = HTMLAttributes<LoaderRef> & VariantProps<typeof styles.root>

const Loader = forwardRef<LoaderRef, LoaderProps>((props, ref) => {
  const { className, ...rest } = props

  const { stage } = useTransitionState()
  const isLoading = stage !== 'none'

  return (
    <div ref={ref} className={cn(styles.root({ visible: isLoading, className }))} {...rest}>
      <SectionLoading />
    </div>
  )
})
Loader.displayName = 'Loader'

export { Loader }
