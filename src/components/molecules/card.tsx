import { Slot } from '@radix-ui/react-slot'
import { forwardRef, HTMLAttributes } from 'react'
import { ThemeMode } from '@/types/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  card: cva([
    'rounded-xl shadow-sm bg-card/30 text-card-foreground overflow-hidden',
    'backdrop-filter backdrop-blur-lg'
  ]),
  cardHeader: cva('flex flex-col p-4 gap-2 border-t border-card-border'),
  cardTitle: cva('font-semibold leading-none tracking-tight'),
  cardDesc: cva('text-sm text-muted-foreground'),
  cardContent: cva('p-4 pt-0'),
  cardFooter: cva('flex items-center p-4 pt-0'),
  cardImage: cva('bg-top bg-cover', {
    variants: {
      aspect: {
        video: 'aspect-video',
        square: 'aspect-square'
      },
      position: {
        top: 'bg-top',
        center: 'bg-center',
        bottom: 'bg-bottom'
      }
    },
    defaultVariants: {
      aspect: 'video',
      position: 'center'
    }
  }),
  cardOverlay: cva([
    'w-full h-full p-4 flex flex-col justify-end gap-2',
    'bg-gradient-to-t from-card to-transparent text-foreground'
  ])
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
    mode?: ThemeMode
    src: string
    asChild?: boolean
  }

const CardImage = forwardRef<CardImageRef, CardImageProps>((props, ref) => {
  const { aspect, position, mode, src, asChild, className, children, ...rest } = props
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      ref={ref}
      className={cn(styles.cardImage({ aspect, position }), mode)}
      style={{ backgroundImage: `url(${src})` }}
      {...rest}
    >
      {!!children && <div className={cn(styles.cardOverlay({ className }))}>{children}</div>}
    </Comp>
  )
})
CardImage.displayName = 'CardImage'

export { Card, CardHeader, CardFooter, CardTitle, CardDesc, CardContent, CardImage }
