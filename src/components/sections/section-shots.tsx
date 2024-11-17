import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Tilt } from '@/components/atoms/tilt'
import { Card, CardImage } from '@/components/molecules/card'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/components/tokens/text'
import { shots } from '@/constants/shots'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-4 overflow-y-visible'),

  row: cva('flex flex-col gap-4'),
  shots: cva('grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4'),

  shot: cva('break-inside-avoid min-h-64')
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
        {shots.map((shot, index) => {
          const src = `/images/shots/${shot}`
          return (
            <Tilt key={`shot-${index}`}>
              <Card className={cn(styles.shot())}>
                <CardImage aspect="square" mode="dark" src={src} />
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
