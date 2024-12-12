import { forwardRef, HTMLAttributes } from 'react'
import { Markdown } from '@/components/atoms/markdown'
import { Media } from '@/components/atoms/media'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogProps,
  DialogTitle,
  DialogTrigger
} from '@/components/molecules/dialog'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  content: cva([
    'w-full h-full md:max-w-[90%] md:max-h-[90%]',
    'border bg-background shadow-lg',
    'grid grid-rows-[auto_1fr_auto]'
  ]),

  header: cva('px-8 py-4 border-b'),
  body: cva('grid gap-8 overflow-auto p-8', {
    variants: {
      isDoubleCol: {
        true: [
          'grid-rows-[auto_1fr]',
          'md:grid-rows-1 md:grid-cols-[7fr_5fr]',
          'lg:grid-cols-[8fr_4fr]'
        ],
        false: 'grid-cols-[1fr]'
      }
    }
  }),

  left: cva('flex items-center justify-center min-w-0 min-h-0'),
  right: cva('pr-4'),

  caption: cva('', {
    variants: {
      break: {
        true: 'mb-4'
      }
    }
  })
}

type LightboxRef = HTMLButtonElement
type LightboxProps = HTMLAttributes<LightboxRef> &
  VariantProps<typeof styles.root> &
  DialogProps & {
    mediaEntry: MediaEntry
  }

const Lightbox = forwardRef<LightboxRef, LightboxProps>((props, ref) => {
  const { mediaEntry, className, children, ...rest } = props
  const { caption, alt } = mediaEntry

  return (
    <Dialog {...rest}>
      <DialogTrigger ref={ref} className={cn(styles.root({ className }))} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn(styles.content())} isAnimated isCloseVisible>
        <DialogHeader className={cn(styles.header())}>
          <DialogTitle>Media Preview</DialogTitle>
        </DialogHeader>
        <div className={cn(styles.body({ isDoubleCol: !!caption }))}>
          <div className={cn(styles.left())}>
            <Media mediaEntry={mediaEntry} fill="contain" />
          </div>
          <DialogDescription asChild>
            <Markdown className={cn(styles.right())}>{caption || alt}</Markdown>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  )
})
Lightbox.displayName = 'Lightbox'

export { Lightbox }
export type { LightboxProps, LightboxRef }
