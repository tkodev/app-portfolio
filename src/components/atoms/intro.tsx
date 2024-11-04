import { forwardRef } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('grid grid-rows-2 text-sm font-alliance-no2')
}

type IntroRef = HTMLDivElement
type IntroProps = React.HTMLAttributes<IntroRef> &
  VariantProps<typeof styles.root> & {
    name: string
    title: string
  }

const Intro = forwardRef<IntroRef, IntroProps>((props, ref) => {
  const { name, title, className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div>
        <strong>{name}</strong>
      </div>
      <div>{title}</div>
    </div>
  )
})
Intro.displayName = 'Intro'

export { Intro }
export type { IntroProps, IntroRef }
