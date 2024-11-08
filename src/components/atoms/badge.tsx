import * as React from 'react'
import { cn } from '@/utils/theme'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'w-auto h-7 inline-flex items-center gap-1 px-2 rounded-xl border text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        basic: 'bg-basic-base-low-accent text-basic-base-high border-basic-base-low-accent border',
        inverse: 'bg-inverse-base-low text-inverse-base-high border-inverse-base-low-accent border',
        brand: 'bg-brand-base-low text-brand-base-high ',
        destructive: 'bg-destructive-base-low text-destructive-base-high ',
        link: 'text-basic-base-high underline-offset-4 hover:underline'
      }
    },
    defaultVariants: {
      variant: 'basic'
    }
  }
)

export type BadgeProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
