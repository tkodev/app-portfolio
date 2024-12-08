import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { Video } from '@/components/atoms/video'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('max-w-full max-h-full w-full h-auto bg-background', {
    variants: {
      aspect: {
        video: 'aspect-video',
        square: 'aspect-square'
      },
      fill: {
        contain: 'object-contain',
        cover: 'object-cover'
      }
    },
    defaultVariants: {
      fill: 'cover'
    }
  })
}

type MediaRef = HTMLImageElement
type MediaProps = HTMLAttributes<MediaRef> &
  VariantProps<typeof styles.root> & {
    mediaEntry: MediaEntry
  }

const Media: FC<MediaProps> = (props) => {
  const { mediaEntry, aspect, fill, className } = props

  const { type, frameId: _, ...mediaProps } = mediaEntry ?? {}

  const Comp = type === 'image' ? Image : Video

  return (
    <Comp
      className={cn(styles.root({ aspect, fill, className }))}
      {...mediaProps}
      alt={mediaProps.alt}
    />
  )
}
Media.displayName = 'Media'

export { Media }
export type { MediaRef, MediaProps }
