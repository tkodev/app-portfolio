import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-auto relative flex', {
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
  overlay: cva('w-full h-full absolute top-0 left-0 -z-1'),
  content: cva('w-full grow relative mx-auto py-[128px] px-8 max-w-screen', {
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
