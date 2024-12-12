import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative flex h-auto w-full', {
    variants: {
      height: {
        full: 'min-h-screen',
        auto: 'min-h-5'
      }
    },
    defaultVariants: {
      height: 'full'
    }
  }),
  overlay: cva('-z-1 absolute left-0 top-0 h-full w-full'),
  content: cva('max-w-screen relative mx-auto w-full grow px-8 py-[128px]', {
    variants: {
      width: {
        full: 'max-w-[1280px]',
        narrow: 'max-w-[1080px]'
      }
    },
    defaultVariants: {
      width: 'full'
    }
  })
}

type SectionRef = HTMLDivElement
type SectionProps = HTMLAttributes<SectionRef> &
  VariantProps<typeof styles.root> &
  VariantProps<typeof styles.content> & {
    bg: ReactNode
  }

const Section = forwardRef<SectionRef, SectionProps>((props, ref) => {
  const { bg, height, width, className, children, ...rest } = props

  return (
    <section ref={ref} className={cn(styles.root({ height }))} {...rest}>
      <div className={cn(styles.overlay())}>{bg}</div>
      <div className={cn(styles.content({ width, className }))}>{children}</div>
    </section>
  )
})
Section.displayName = 'Section'

export { Section }
export type { SectionProps, SectionRef }
