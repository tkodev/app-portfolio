import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full min-h-full bg-basic-base-low shadow-inner')
}

type MainProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Main: React.FC<MainProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <main className={cn(styles.root({ className }))} {...rest}>
      {children}
    </main>
  )
}

export { Main }
