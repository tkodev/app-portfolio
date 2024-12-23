import { ComponentProps, forwardRef } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva([
    'flex h-9 w-full px-3 py-1',
    'rounded-full border border-input bg-background shadow-sm transition-colors',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ])
}

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input ref={ref} type={type} className={cn(styles.root({ className }))} {...props} />
  }
)
Input.displayName = 'Input'

export { Input }
