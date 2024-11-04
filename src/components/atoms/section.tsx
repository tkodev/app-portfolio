import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('h-full min-h-screen relative flex'),
  overlay: cva('w-full h-full absolute top-0 left-0 -z-1'),
  content: cva('grow relative container mx-auto py-[128px] px-12')
}

type SectionProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    bg?: React.ReactNode
  }

const Section: React.FC<SectionProps> = (props) => {
  const { bg, className, children, ...rest } = props

  return (
    <section className={cn(styles.root())} {...rest}>
      <div className={cn(styles.overlay())}>{bg}</div>
      <div className={cn(styles.content({ className }))}>{children}</div>
    </section>
  )
}

export { Section }
