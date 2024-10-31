import * as React from 'react'
import { cn } from '@/utils/theme'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const styles = {
  root: cva(
    [
      'inline-flex items-center justify-center gap-1',
      'rounded-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      'whitespace-nowrap text-sm font-medium'
    ],
    {
      variants: {
        variant: {
          basic:
            'bg-basic-base-low text-basic-base-high shadow-sm hover:bg-basic-base-low-accent hover:text-brand-base-high-accent',
          inverse:
            'bg-inverse-base-low text-inverse-base-high shadow-sm hover:bg-inverse-base-low-accent hover:text-brand-base-high-accent',
          brand:
            'bg-brand-base-low text-brand-base-high shadow-sm hover:bg-brand-base-low-accent hover:text-brand-base-high-accent',
          destructive:
            'bg-brand-base-low text-brand-base-high shadow-sm hover:bg-brand-base-low-accent hover:text-brand-base-high-accent',
          link: 'text-basic-base-high underline-offset-4 hover:underline'
        },
        size: {
          sm: 'h-8 px-3 text-xs',
          md: 'h-9 px-4 py-2',
          lg: 'h-10 px-8',
          icon: 'h-9 w-9'
        }
      },
      defaultVariants: {
        variant: 'basic',
        size: 'md'
      }
    }
  )
}

type ButtonRef = HTMLButtonElement
type ButtonProps = {
  asChild?: boolean
} & React.ButtonHTMLAttributes<ButtonRef> &
  VariantProps<typeof styles.root>

const Button = React.forwardRef<ButtonRef, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(styles.root({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button }
export type { ButtonRef, ButtonProps }
