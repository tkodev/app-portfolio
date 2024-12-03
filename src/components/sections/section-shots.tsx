'use client'

import Link from 'next/link'
import { CameraIcon, MoveRightIcon } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { CardImage } from '@/components/molecules/card'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/components/templates/text'
import { mediaEntries } from '@/constants/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  cta: cva('flex justify-center'),

  icon: cva('w-auto'),
  text: cva('lg:w-[65%] lg:order-first flex flex-col gap-4'),

  grid: cva('grid grid-cols-3 gap-4 md:gap-8 lg:gap-16'),
  media: cva('flex flex-col gap-4')
}

type SectionShotsRef = HTMLDivElement
type SectionShotsProps = HTMLAttributes<SectionShotsRef> & VariantProps<typeof styles.root>

const SectionShots = forwardRef<SectionShotsRef, SectionShotsProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      height="auto"
      bg={<Bg variant="texture" size="repeat" attach="local" position="top" />}
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.icon())}>
          <Icon icon={CameraIcon} size="3xl" />
        </div>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>Shots.</h1>
          <h2 className={cn(textStyles.h2())}>Capturing Stories Through the Lens.</h2>
          <p>
            Beyond engineering & design, photography allows me to explore creativity and tell
            stories from unique perspectives. Whether it’s the vibrancy of city streets, the
            serenity of landscapes, or the depth of human emotions in portraits, my work reflects a
            passion for capturing life’s fleeting moments with authenticity and style.
          </p>
        </div>
      </div>
      <div className={cn(styles.grid())}>
        {mediaEntries.map((mediaEntry, index) => {
          const { src } = mediaEntry
          const key = `media-${index}`
          const imageSrc = `/images/shots/${src}`
          return (
            <div key={key} className={cn(styles.media())}>
              <CardImage src={imageSrc} aspect="square" />
            </div>
          )
        })}
      </div>
      <div className={cn(styles.cta())}>
        <Button size="lg" asChild>
          <Link href="/works">
            Explore Projects <Icon icon={MoveRightIcon} size="xs" />
          </Link>
        </Button>
      </div>
    </Section>
  )
})
SectionShots.displayName = 'SectionShots'

export { SectionShots }
export type { SectionShotsProps, SectionShotsRef }
