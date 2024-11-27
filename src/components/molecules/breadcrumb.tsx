import Link from 'next/link'
import { ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'
import { ComponentPropsWithoutRef, ComponentProps, ReactNode, forwardRef, Fragment } from 'react'
import { Icon } from '@/components/atoms/icon'
import { NavEntry } from '@/types/layout'
import { cn, cva } from '@/utils/theme'

const styles = {
  breadcrumbList: cva(
    'flex flex-wrap items-center gap-1.5 break-words text-base text-muted-foreground sm:gap-2.5 font-alliance-no2'
  ),
  breadcrumbItem: cva('inline-flex items-center gap-1.5'),
  breadcrumbLink: cva('transition-colors hover:text-foreground'),
  breadcrumbPage: cva('font-normal text-foreground'),
  breadcrumbSeparator: cva('[&>svg]:w-3.5 [&>svg]:h-3.5'),
  breadcrumbEllipsis: cva('flex h-9 w-9 items-center justify-center')
}

const Breadcrumb = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'nav'> & {
    separator?: ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol ref={ref} className={cn(styles.breadcrumbList({ className }))} {...props} />
  )
)
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn(styles.breadcrumbItem({ className }))} {...props} />
  )
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return <Comp ref={ref} className={cn(styles.breadcrumbLink({ className }))} {...props} />
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(styles.breadcrumbPage({ className }))}
      {...props}
    />
  )
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({ children, className, ...props }: ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn(styles.breadcrumbSeparator({ className }))}
    {...props}
  >
    {children ?? <ChevronRightIcon />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(styles.breadcrumbEllipsis({ className }))}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

const Breadcrumbs = (props: ComponentProps<'nav'> & { id: string; items: NavEntry[] }) => {
  const { id, items, className, children, ...rest } = props
  return (
    <Breadcrumb {...rest}>
      <BreadcrumbList className={className}>
        {items.map((props, index) => {
          const { href, name, icon, isHidden } = props
          const key = `breadcrumb-${id}-${index}`
          const isExternal = href && (!href.startsWith('/') || href.endsWith('.pdf'))
          const isLast = index === items.length - 1
          if (isHidden) return null

          return (
            <Fragment key={key}>
              <BreadcrumbItem>
                {href ? (
                  <BreadcrumbLink href={href} target={isExternal ? '_blank' : undefined} asChild>
                    <Link href={href} target={isExternal ? '_blank' : undefined}>
                      <Icon icon={icon} size="xs" />
                      {name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>
                    <Icon icon={icon} size="xs" />
                    {name}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
        {children}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
Breadcrumbs.displayName = 'Breadcrumbs'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  Breadcrumbs
}
