import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  bold: cva('mix-blend-exclusion stroke-foreground/15'),
  light: cva('mix-blend-exclusion stroke-foreground/5')
}

type CrossRef = SVGSVGElement
type CrossProps = HTMLAttributes<CrossRef> & VariantProps<typeof styles.root>

const Cross = forwardRef<CrossRef, CrossProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <svg
      className={cn(styles.root({ className }))}
      ref={ref}
      width="896"
      height="896"
      viewBox="0 0 896 896"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <line className={cn(styles.bold())} x1="153.354" y1="152.646" x2="743.354" y2="742.646" />
      <line className={cn(styles.bold())} x1="646.354" y1="250.354" x2="250.354" y2="646.354" />
      <circle className={cn(styles.light())} cx="448" cy="448" r="347.5" strokeWidth="25" />
      <circle className={cn(styles.light())} cx="448" cy="448" r="447.5" />
      <circle className={cn(styles.bold())} cx="448" cy="448" r="239.5" />
    </svg>
  )
})
Cross.displayName = 'Cross'

export { Cross }
export type { CrossProps, CrossRef }
