import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  card: cva('rounded-xl border bg-card text-card-foreground shadow p-1'),
  cardHeader: cva('rounded-lg flex flex-col p-4'),
  cardTitle: cva('rounded-lg font-semibold leading-none tracking-tight'),
  cardDesc: cva('rounded-lg text-sm text-muted-foreground'),
  cardContent: cva('rounded-lg p-4 pt-0'),
  cardFooter: cva('rounded-lg flex items-center p-4 pt-0'),

  cardImage: cva('rounded-lg relative flex flex-col justify-end', {
    variants: {
      aspect: {
        square: 'aspect-square',
        video: 'aspect-video'
      }
    },
    defaultVariants: {
      aspect: 'square'
    }
  }),
  cardBackdrop: cva('rounded-lg w-full h-full absolute top-0 left-0 bg-center bg-cover'),
  cardOverlay: cva(
    'rounded-lg w-full h-auto relative p-4 bg-gradient-to-t from-card to-transparent',
    {
      variants: {
        mode: {
          light: 'dark:invert',
          dark: 'invert dark:invert-0'
        }
      },
      defaultVariants: {
        mode: 'light'
      }
    }
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

const CardImage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof styles.cardImage> &
    VariantProps<typeof styles.cardOverlay> & { src: string }
>(({ aspect, mode, src, className, children, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardImage({ aspect }))} {...props}>
    <div className={cn(styles.cardBackdrop())} style={{ backgroundImage: `url(${src})` }} />
    <div className={cn(styles.cardOverlay({ mode, className }))}>{children}</div>
  </div>
))
CardImage.displayName = 'CardImage'

export { Card, CardHeader, CardFooter, CardTitle, CardDesc, CardContent, CardImage }
