import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('min-h-screen relative'),
  overlay: cva('w-full h-full absolute top-0 left-0 -z-1')
}

type SectionProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    bg?: React.ReactNode
  }

const Section: React.FC<SectionProps> = (props) => {
  const { bg, className, children, ...rest } = props

  return (
    <section className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.overlay())}>{bg}</div>
      {children}
    </section>
  )
}

export { Section }
