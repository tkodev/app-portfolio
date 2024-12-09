'use client'

import { useScroll, useTransform, motion } from 'motion/react'
import { forwardRef, HTMLAttributes, useRef } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Frame } from '@/components/atoms/frame'
import { Section } from '@/components/organisms/section'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-16'),

  content: cva(['flex flex flex-wrap items-center justify-center gap-16 lg:gap-32']),

  item: cva('', {
    variants: {
      frameId: {
        mobile: 'w-1/5',
        desktop: 'w-full'
      }
    }
  })
}

type SectionFramesRef = HTMLDivElement
type SectionFramesProps = HTMLAttributes<SectionFramesRef> &
  VariantProps<typeof styles.root> & {
    frameEntries: MediaEntry[]
    isParallax?: boolean
  }

const SectionFrames = forwardRef<SectionFramesRef, SectionFramesProps>((props, ref) => {
  const { frameEntries, isParallax = false, className, ...rest } = props

  const contentRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    layoutEffect: false
  })

  const translateFirst = useTransform(scrollYProgress, [1, 0], [0, -32])
  const translateThird = useTransform(scrollYProgress, [1, 0], [0, 32])

  if (!frameEntries.length) return null

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      height="auto"
      bg={<Bg variant="gradient" />}
      {...rest}
    >
      <div ref={contentRef} className={styles.content()}>
        {frameEntries.map((frameEntry, index) => {
          const { frameId } = frameEntry
          const isAnimated = isParallax && !(index % 2)
          const isPrimary = !(Math.floor(index / 2) % 2)
          const style = isAnimated ? { y: isPrimary ? translateFirst : translateThird } : {}
          return (
            <motion.div key={index} className={cn(styles.item({ frameId }))} style={style}>
              <Frame mediaEntry={frameEntry} />
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
})
SectionFrames.displayName = 'SectionFrames'

export { SectionFrames }
export type { SectionFramesProps, SectionFramesRef }
