import { forwardRef, HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { NavEntry } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'
import Link from 'next/link'
import { Icon } from '../atoms/icon'

const styles = {
  root: cva('flex items-center gap-2')
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
          return <Icon key={`nav-item-${index}`} icon={icon} />
        }
        if (props.href !== undefined) {
          const { href, name, icon, variant, size, isDisabled } = props
          const isExternal = !href.startsWith('/') || href.endsWith('.pdf')
          if (isDisabled) return null
          return (
            <Button key={`nav-item-${index}`} variant={variant} size={size} asChild>
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
