import Image from 'next/image'
import { FileIcon } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'
import { Icon } from '@/components/atoms/icon'
import { Video } from '@/components/atoms/video'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    'relative bg-background flex items-center justify-center w-full h-full overflow-hidden'
  ),
  icon: cva('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15'),
  comp: cva('relative max-w-full max-h-full w-full h-auto', {
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
        true: 'hover:scale-105 hover:contrast-[1.05] transition-all duration-1000'
      }
    },
    defaultVariants: {
      fill: 'cover'
    }
  })
}

type MediaRef = HTMLImageElement
type MediaProps = HTMLAttributes<MediaRef> &
  VariantProps<typeof styles.comp> & {
    mediaEntry: MediaEntry
  }

const Media: FC<MediaProps> = (props) => {
  const { mediaEntry, aspect, fill, isHover, className } = props

  const { type, frameId: _, caption: _caption, ...mediaProps } = mediaEntry ?? {}

  const Comp = type === 'image' ? Image : Video

  return (
    <div className={cn(styles.root({ className }))}>
      <Icon className={cn(styles.icon())} icon={FileIcon} size="xl" />
      <Comp
        className={cn(styles.comp({ aspect, fill, isHover }))}
        {...mediaProps}
        alt={mediaProps.alt}
      />
    </div>
  )
}
Media.displayName = 'Media'

export { Media }
export type { MediaRef, MediaProps }
