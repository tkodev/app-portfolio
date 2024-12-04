import { Slot } from '@radix-ui/react-slot'
import { forwardRef, HTMLAttributes } from 'react'
import { ThemeMode } from '@/types/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('bg-top bg-cover', {
    variants: {
      aspect: {
        video: 'aspect-video',
        square: 'aspect-square'
      },
      position: {
        top: 'bg-top',
        center: 'bg-center',
        bottom: 'bg-bottom'
      }
    },
    defaultVariants: {
      aspect: 'video',
      position: 'center'
    }
  }),
  overlay: cva([
    'w-full h-full p-4 flex flex-col justify-end gap-2',
    'bg-gradient-to-t from-card to-transparent text-foreground'
  ])
}

type PreviewRef = HTMLDivElement
type PreviewProps = HTMLAttributes<PreviewRef> &
  VariantProps<typeof styles.root> & {
    mode?: ThemeMode
    src: string
    asChild?: boolean
  }

const Preview = forwardRef<PreviewRef, PreviewProps>((props, ref) => {
  const { aspect, position, mode, src, asChild, className, children, ...rest } = props
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ aspect, position }), mode)}
      style={{ backgroundImage: `url(${src})` }}
      {...rest}
    >
      {!!children && <div className={cn(styles.overlay({ className }))}>{children}</div>}
    </Comp>
  )
})
Preview.displayName = 'Preview'

export { Preview }
export type { PreviewRef, PreviewProps }
