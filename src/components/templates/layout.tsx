import { Footer } from '@/components/organisms/footer'
import { Header } from '@/components/organisms/header'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full')
}

type LayoutProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Layout: React.FC<LayoutProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={cn(styles.root({ className }))} {...rest}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout }
