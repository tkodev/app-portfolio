import { HTMLAttributes, FC } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Cursor } from '@/components/atoms/cursor'
import { Footer } from '@/components/organisms/footer'
import { Header } from '@/components/organisms/header'
import { cva, cn, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full relative')
}

type LayoutProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.root>

const Layout: FC<LayoutProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={cn(styles.root({ className }))} {...rest}>
      <Header />
      {children}
      <Footer />
      <Bg variant="noise" size="repeat" overlay />
      <Cursor />
    </div>
  )
}

export { Layout }
