import { forwardRef, HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { NavEntry } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'
import Link from 'next/link'
import { Icon } from '../atoms/icon'

const styles = {
  root: cva('flex items-center gap-2'),
  item: cva('', {
    variants: {
      isGhost: {
        true: '-mx-2'
      }
    }
  })
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
        const { href, name, icon, isHidden, variant, ...rest } = props
        const isExternal = href && (!href.startsWith('/') || href.endsWith('.pdf'))
        if (isHidden) return null

        return href ? (
          <Button
            key={`nav-item-${index}`}
            variant={variant}
            className={cn(styles.item({ isGhost: variant === 'ghost' }))}
            {...rest}
            asChild
          >
            <Link href={href} target={isExternal ? '_blank' : undefined}>
              <Icon icon={icon} />
              {name}
            </Link>
          </Button>
        ) : (
          <Icon
            key={`nav-item-${index}`}
            icon={icon}
            className={cn(styles.item({ isGhost: variant === 'ghost' }))}
          />
        )
      })}
      {children}
    </nav>
  )
})

Nav.displayName = 'Nav'

export { Nav }
export type { NavProps, NavRef }
