import { forwardRef, HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { NavEntry } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'
import Link from 'next/link'
import { Icon } from '../atoms/icon'

const styles = {
  root: cva('flex items-center gap-2'),
  icon: cva('-mx-2')
}

type NavRef = HTMLDivElement
type NavProps = HTMLAttributes<NavRef> &
  VariantProps<typeof styles.root> & {
    items: NavEntry[]
  }

const Nav = forwardRef<NavRef, NavProps>((props, ref) => {
  const { items, children, className, ...rest } = props

  return (
    <nav ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {items.map((props, index) => {
        if (props.href === undefined && !!props.icon) {
          const { icon } = props
          return <Icon key={`nav-item-${index}`} className={cn(styles.icon())} icon={icon} />
        }
        if (props.href !== undefined) {
          const { href, name, icon, isHidden, ...rest } = props
          const isExternal = !href.startsWith('/') || href.endsWith('.pdf')
          if (isHidden) return null
          return (
            <Button key={`nav-item-${index}`} {...rest} asChild>
              <Link href={href} target={isExternal ? '_blank' : undefined}>
                {name}
                <Icon icon={icon} />
              </Link>
            </Button>
          )
        }
      })}
      {children}
    </nav>
  )
})

Nav.displayName = 'Nav'

export { Nav }
export type { NavProps, NavRef }
