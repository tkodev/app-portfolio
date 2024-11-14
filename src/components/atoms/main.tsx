import { HTMLAttributes, FC } from 'react'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full min-h-full bg-background shadow-inner')
}

type MainProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.root>

const Main: FC<MainProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <main className={cn(styles.root({ className }))} {...rest}>
      {children}
    </main>
  )
}

export { Main }
