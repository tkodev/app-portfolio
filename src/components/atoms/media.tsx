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
      },
      isHover: {
        true: 'hover:scale-105 transition-all duration-1000'
      }
    }
  })
}

type MediaRef = HTMLImageElement
type MediaProps = HTMLAttributes<MediaRef> &
  VariantProps<typeof styles.root> & {
    mediaEntry: MediaEntry
  }

const Media: FC<MediaProps> = (props) => {
  const { mediaEntry, aspect, fill, isHover, className } = props

  const { type, frameId: _, caption: _caption, ...mediaProps } = mediaEntry ?? {}

  const Comp = type === 'image' ? Image : Video

  return (
    <Comp
      className={cn(styles.root({ aspect, fill, isHover, className }))}
      {...mediaProps}
      alt={mediaProps.alt}
    />
  )
}
Media.displayName = 'Media'

export { Media }
export type { MediaRef, MediaProps }
