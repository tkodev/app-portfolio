import { HTMLAttributes, FC } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Footer } from '@/components/organisms/footer'
import { Header } from '@/components/organisms/header'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full relative'),
  overlay: cva('w-full h-full fixed top-0 left-0')
}

type LayoutProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.root>

const Layout: FC<LayoutProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={cn(styles.root({ className }))} {...rest}>
      <Header />
      {children}
      <Footer />
      <Bg className={cn(styles.overlay())} variant="noise" size="repeat" />
    </div>
  )
}

export { Layout }
