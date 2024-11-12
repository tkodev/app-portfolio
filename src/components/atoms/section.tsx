import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('h-full min-h-screen relative flex'),
  overlay: cva('w-full h-full absolute top-0 left-0 -z-1'),
  content: cva('w-full grow relative max-w-[1080px] mx-auto py-[96px] px-12')
}

type SectionRef = HTMLDivElement
type SectionProps = HTMLAttributes<SectionRef> &
  VariantProps<typeof styles.root> & {
    bg: ReactNode
  }

const Section = forwardRef<SectionRef, SectionProps>((props, ref) => {
  const { bg, className, children, ...rest } = props

  return (
    <section ref={ref} className={cn(styles.root())} {...rest}>
      <div className={cn(styles.overlay())}>{bg}</div>
      <div className={cn(styles.content({ className }))}>{children}</div>
    </section>
  )
})
Section.displayName = 'Section'

export { Section }
export type { SectionProps, SectionRef }
