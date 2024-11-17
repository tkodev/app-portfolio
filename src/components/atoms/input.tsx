import { forwardRef, ComponentProps } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva([
    'flex h-9 w-full px-3 py-1',
    'rounded-full border border-input bg-background text-base md:text-sm shadow-sm transition-colors',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ])
}

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(styles.root({ className }))} ref={ref} {...props} />
  }
)
Input.displayName = 'Input'

export { Input }
