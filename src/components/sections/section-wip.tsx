import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/components/tokens/text'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['flex items-center justify-center'])
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
      <h1 className={cn(textStyles.h3())}>Coming Soon</h1>
    </Section>
  )
})
SectionWip.displayName = 'SectionWip'

export { SectionWip }
export type { SectionWipProps, SectionWipRef }
