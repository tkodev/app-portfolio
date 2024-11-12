import { HTMLAttributes, ReactNode, FC } from 'react'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('h-full min-h-screen relative flex'),
  overlay: cva('w-full h-full absolute top-0 left-0 -z-1'),
  content: cva('w-full grow relative max-w-[1080px] mx-auto py-[96px] px-12')
}

type SectionProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    bg?: ReactNode
  }

const Section: FC<SectionProps> = (props) => {
  const { bg, className, children, ...rest } = props

  return (
    <section className={cn(styles.root())} {...rest}>
      <div className={cn(styles.overlay())}>{bg}</div>
      <div className={cn(styles.content({ className }))}>{children}</div>
    </section>
  )
}

export { Section }
