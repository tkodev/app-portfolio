import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Card, CardImage } from '@/components/atoms/card'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/components/tokens/text'
import { newArray } from '@/utils/objects'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-4 overflow-x-auto'),

  row: cva('flex flex-col gap-4'),
  listing: cva('grid grid-cols-12 auto-rows-max gap-2 mb-4'),

  category: cva('col-span-6 md:col-span-4 lg:col-span-3'),
  project: cva('col-span-12 md:col-span-6 lg:col-span-4')
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
        <h2 className={cn(textStyles.h3())}>Categories</h2>
      </div>
      <div className={cn(styles.listing())}>
        {newArray(3).map((index) => (
          <Card key={`category-${index}`} className={cn(styles.category())}>
            <CardImage src="/images/works/preview.png" aspect="video" mode="dark">
              test
            </CardImage>
          </Card>
        ))}
      </div>
      <div className={cn(styles.row())}>
        <h2 className={cn(textStyles.h3())}>Projects</h2>
      </div>
      <div className={cn(styles.listing())}>
        {newArray(15).map((index) => (
          <Card key={`category-${index}`} className={cn(styles.project())}>
            <CardImage src="/images/works/preview.png" aspect="square" mode="dark">
              test
            </CardImage>
          </Card>
        ))}
      </div>
    </Section>
  )
})
SectionWorks.displayName = 'SectionWorks'

export { SectionWorks }
export type { SectionWorksProps, SectionWorksRef }
