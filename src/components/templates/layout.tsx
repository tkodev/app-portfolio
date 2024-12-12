import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Cursor } from '@/components/atoms/cursor'
import { Footer } from '@/components/organisms/footer'
import { Header } from '@/components/organisms/header'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative h-full w-full')
}

type LayoutRef = HTMLDivElement
type LayoutProps = HTMLAttributes<LayoutRef> & VariantProps<typeof styles.root>

const Layout = forwardRef<LayoutRef, LayoutProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Header />
      {children}
      <Footer />
      <Bg variant="noise" size="repeat" overlay />
      <Cursor />
    </div>
  )
})
Layout.displayName = 'Layout'

export { Layout }
