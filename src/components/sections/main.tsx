import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full p-1 bg-device-frame'),
  container: cva('h-full rounded-4xl bg-basic-base-low shadow-inner')
}

type MainProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Main: React.FC<MainProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <main className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>{children}</div>
    </main>
  )
}

export { Main }
