import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Main } from '@/components/sections/main'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full', {
    variants: {},
    defaultVariants: {}
  })
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
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export { Layout }
