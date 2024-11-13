import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Card } from '@/components/atoms/card'
import { Section } from '@/components/molecules/section'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-4'),
  tagline: cva('text-lg sm:text-xl lg:text-2xl font-alliance-no2')
}

type SectionWorksRef = HTMLDivElement
type SectionWorksProps = HTMLAttributes<SectionWorksRef> & VariantProps<typeof styles.root>

const SectionWorks = forwardRef<SectionWorksRef, SectionWorksProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="sand" attach="fixed" />}
      {...rest}
    >
      <div className={cn(styles.row())}>
        <Card>test</Card>
      </div>
      <div className={cn(styles.row())}></div>
    </Section>
  )
})
SectionWorks.displayName = 'SectionWorks'

export { SectionWorks }
export type { SectionWorksProps, SectionWorksRef }
