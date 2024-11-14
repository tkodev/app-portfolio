import { forwardRef, HTMLAttributes } from 'react'
import { ThemeMode } from '@/types/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  card: cva('rounded-xl border shadow-sm bg-card text-card-foreground overflow-hidden'),
  cardHeader: cva('flex flex-col p-4 gap-2'),
  cardTitle: cva('font-semibold leading-none tracking-tight'),
  cardDesc: cva('text-sm text-muted-foreground'),
  cardContent: cva('p-4 pt-0'),
  cardFooter: cva('flex items-center p-4 pt-0'),
  cardImage: cva('bg-center bg-cover flex flex-col justify-end aspect-video'),
  cardOverlay: cva(
    'p-4 flex flex-col justify-end gap-2 bg-gradient-to-t from-card to-card/50 text-foreground'
  )
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

type CardImageRef = HTMLDivElement
type CardImageProps = HTMLAttributes<CardImageRef> &
  VariantProps<typeof styles.cardImage> & {
    src: string
    mode: ThemeMode
  }

const CardImage = forwardRef<CardImageRef, CardImageProps>((props, ref) => {
  const { mode, src, className, children, ...rest } = props

  return (
    <div
      ref={ref}
      className={cn(styles.cardImage(), mode)}
      style={{ backgroundImage: `url(${src})` }}
      {...rest}
    >
      {!!children && <div className={cn(styles.cardOverlay({ className }))}>{children}</div>}
    </div>
  )
})
CardImage.displayName = 'CardImage'

export { Card, CardHeader, CardFooter, CardTitle, CardDesc, CardContent, CardImage }
