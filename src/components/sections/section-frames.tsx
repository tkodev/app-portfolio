import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Frame } from '@/components/atoms/frame'
import { Section } from '@/components/organisms/section'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-16'),

  content: cva(['flex flex flex-wrap items-center justify-center gap-16 lg:gap-32'])
}

type SectionFramesRef = HTMLDivElement
type SectionFramesProps = HTMLAttributes<SectionFramesRef> &
  VariantProps<typeof styles.root> & {
    frameEntries: MediaEntry[]
  }

const SectionFrames = forwardRef<SectionFramesRef, SectionFramesProps>((props, ref) => {
  const { frameEntries, className, ...rest } = props

  if (!frameEntries.length) return null

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      height="auto"
      bg={<Bg variant="gradient" />}
      {...rest}
    >
      <div className={styles.content()}>
        {frameEntries.map((frameEntry, index) => {
          return <Frame key={index} mediaEntry={frameEntry} />
        })}
      </div>
    </Section>
  )
})
SectionFrames.displayName = 'SectionFrames'

export { SectionFrames }
export type { SectionFramesProps, SectionFramesRef }
