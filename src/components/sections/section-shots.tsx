import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Tilt } from '@/components/atoms/tilt'
import { Card, CardImage } from '@/components/molecules/card'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/components/templates/text'
import { mediaEntries } from '@/constants/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-4 overflow-y-visible'),

  row: cva('flex flex-col gap-4'),
  shots: cva('grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4 mb-4'),

  shot: cva('break-inside-avoid')
}

type SectionShotsRef = HTMLDivElement
type SectionShotsProps = HTMLAttributes<SectionShotsRef> & VariantProps<typeof styles.root>

const SectionShots = forwardRef<SectionShotsRef, SectionShotsProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="sand" attach="fixed" />}
      {...rest}
    >
      <div className={cn(styles.row())}>
        <h2 className={cn(textStyles.h3())}>Shots</h2>
      </div>
      <div className={cn(styles.shots())}>
        {mediaEntries.map((mediaEntry, index) => {
          const { src } = mediaEntry
          const imageSrc = `/images/shots/${src}`
          return (
            <Tilt key={`shot-${index}`}>
              <Card className={cn(styles.shot())}>
                <CardImage aspect="square" mode="dark" src={imageSrc} />
              </Card>
            </Tilt>
          )
        })}
      </div>
    </Section>
  )
})
SectionShots.displayName = 'SectionShots'

export { SectionShots }
export type { SectionShotsProps, SectionShotsRef }
