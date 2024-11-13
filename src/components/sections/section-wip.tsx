import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Section } from '@/components/molecules/section'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['flex items-center justify-center']),
  tagline: cva('text-lg sm:text-xl lg:text-2xl font-alliance-no2')
}

type SectionWipRef = HTMLDivElement
type SectionWipProps = HTMLAttributes<SectionWipRef> & VariantProps<typeof styles.root>

const SectionWip = forwardRef<SectionWipRef, SectionWipProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="sand" attach="fixed" />}
      {...rest}
    >
      <h1 className={cn(styles.tagline())}>Coming Soon</h1>
    </Section>
  )
})
SectionWip.displayName = 'SectionWip'

export { SectionWip }
export type { SectionWipProps, SectionWipRef }
