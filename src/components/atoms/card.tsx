import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  card: cva('rounded-xl border bg-card text-card-foreground shadow'),
  cardHeader: cva('flex flex-col space-y-1.5 p-6'),
  cardTitle: cva('font-semibold leading-none tracking-tight'),
  cardDesc: cva('text-sm text-muted-foreground'),
  cardContent: cva('p-6 pt-0'),
  cardFooter: cva('flex items-center p-6 pt-0')
}

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.card({ className }))} {...props} />
  )
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.cardHeader({ className }))} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.cardTitle({ className }))} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDesc = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.cardDesc({ className }))} {...props} />
  )
)
CardDesc.displayName = 'CardDesc'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.cardContent({ className }))} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.cardFooter({ className }))} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDesc, CardContent }
