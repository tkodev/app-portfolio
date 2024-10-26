import { cva, cn, type VariantProps } from '@/utils/theme'
import { Header } from '@/components/organisms/header'
import { Main } from '@/components/organisms/main'
import { Footer } from '@/components/organisms/footer'

const styles = {
  root: cva('', {
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
      <Header/>
      <Main>
      {children}
      </Main>
      <Footer/>
    </div>
  )
}

export { Layout }
