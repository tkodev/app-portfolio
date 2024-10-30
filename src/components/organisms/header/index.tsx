import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['fixed top-[16px] left-1/2 -translate-x-1/2', 'w-auto h-auto max-w-full p-[16px]']),
  container: cva(
    'rounded-xxl border-[1px] border-stroke-neutral-low bg-background-neutral-low backdrop-blur-lg p-[24px]'
  )
}

type HeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Header: React.FC<HeaderProps> = (props) => {
  const { className, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>{/* test */}</div>
    </header>
  )
}

export { Header }
