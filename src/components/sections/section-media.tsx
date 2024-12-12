'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Media } from '@/components/atoms/media'
import { Lightbox } from '@/components/organisms/lightbox'
import { Section } from '@/components/organisms/section'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('grid gap-16 md:gap-8 lg:gap-16', {
    variants: {
      isDoubleCol: {
        true: 'md:grid-cols-2',
        false: 'md:grid-cols-1'
      }
    }
  }),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),

  text: cva('lg:w-[65%] lg:order-first flex flex-col gap-4'),

  tableHead: cva('w-[20%]'),
  tableRoles: cva('capitalize')
}

type SectionMediaRef = HTMLDivElement
type SectionMediaProps = HTMLAttributes<SectionMediaRef> &
  VariantProps<typeof styles.root> & {
    mediaEntries: MediaEntry[]
  }

const SectionMedia = forwardRef<SectionMediaRef, SectionMediaProps>((props, ref) => {
  const { mediaEntries, className, ...rest } = props

  if (!mediaEntries.length) return null

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ isDoubleCol: mediaEntries.length > 1, className }))}
      height="auto"
      bg={<Bg variant="texture" size="repeat" attach="local" position="top" />}
      {...rest}
    >
      {mediaEntries.map((mediaEntry, index) => (
        <Lightbox key={`media-${index}`} mediaEntry={mediaEntry}>
          <button>
            <Media mediaEntry={mediaEntry} aspect="video" isHover />
          </button>
        </Lightbox>
      ))}
    </Section>
  )
})
SectionMedia.displayName = 'SectionMedia'

export { SectionMedia }
export type { SectionMediaProps, SectionMediaRef }
