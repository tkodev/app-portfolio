import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full bg-center', {
    variants: {
      variant: {
        gradient: [
          'bg-[url(/images/bg/gradient/light-alt-y@2x.png)] md:bg-[url(/images/bg/gradient/light-x@2x.png)]',
          'dark:bg-[url(/images/bg/gradient/dark-alt-y@2x.png)] dark:md:bg-[url(/images/bg/gradient/dark-x@2x.png)]'
        ],
        sand: [
          'bg-[url(/images/bg/sand/light-y@1x.jpg)] md:bg-[url(/images/bg/sand/light-x@1x.jpg)]',
          'dark:bg-[url(/images/bg/sand/dark-y@1x.jpg)] dark:md:bg-[url(/images/bg/sand/dark-x@1x.jpg)]',
          'opacity-50'
        ],
        noise: ['bg-[url(/images/bg/noise/noise@1x.gif)]', 'pointer-events-none opacity-2.5 z-50']
      },
      size: {
        cover: 'bg-cover',
        contain: 'bg-contain',
        repeat: 'bg-repeat'
      },
      attach: {
        local: 'bg-local',
        fixed: 'bg-fixed',
        scroll: 'bg-scroll'
      }
    },
    defaultVariants: {
      variant: 'sand',
      size: 'cover',
      attach: 'local'
    }
  })
}

type BgRef = HTMLDivElement
type BgProps = HTMLAttributes<BgRef> & VariantProps<typeof styles.root>

const Bg = forwardRef<BgRef, BgProps>((props, ref) => {
  const { variant, size, attach, className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ variant, size, attach, className }))} {...rest} />
  )
})
Bg.displayName = 'Bg'

export { Bg }
export type { BgProps, BgRef }
