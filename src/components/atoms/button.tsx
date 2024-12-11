import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/theme'
import { cva, type VariantProps } from 'class-variance-authority'

const styles = {
  root: cva(
    [
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 disabled:scale-100'
    ],
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90',
          outline:
            'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
          xs: 'h-7 px-2 text-xs',
          sm: 'h-8 px-3 text-xs',
          default: 'h-9 px-4 py-2',
          lg: 'h-10 px-8',
          xl: 'h-12 px-10',
          icon: 'h-9 w-9'
        },
        isHover: {
          true: 'hover:scale-105 transition-all duration-300',
          false: ''
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
        isHover: false
      }
    }
  )
}

type ButtonRef = HTMLButtonElement
type ButtonProps = ButtonHTMLAttributes<ButtonRef> &
  VariantProps<typeof styles.root> & {
    asChild?: boolean
  }

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { variant, size, asChild = false, className, ...rest } = props
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(styles.root({ variant, size, isHover: variant !== 'link', className }))}
      ref={ref}
      {...rest}
    />
  )
})
Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonRef }
