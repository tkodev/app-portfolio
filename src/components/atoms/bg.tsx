import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full relative bg-center', {
    variants: {
      variant: {
        noise: [
          'bg-[url(/images/bg/noise/light-alt-y@2x.png)] md:bg-[url(/images/bg/noise/light-x@2x.png)]',
          'dark:bg-[url(/images/bg/noise/dark-alt-y@2x.png)] dark:md:bg-[url(/images/bg/noise/dark-x@2x.png)]'
        ],
        'noise-invert': [
          'bg-[url(/images/bg/noise-invert/light-alt-y@2x.png)] md:bg-[url(/images/bg/noise-invert/light-x@2x.png)]',
          'dark:bg-[url(/images/bg/noise-invert/dark-alt-y@2x.png)] dark:md:bg-[url(/images/bg/noise-invert/dark-x@2x.png)]'
        ],
        sand: [
          'bg-[url(/images/bg/sand/adrien-olichon-light-unsplash-y.jpg)] md:bg-[url(/images/bg/sand/adrien-olichon-light-unsplash-x.jpg)]',
          'dark:bg-[url(/images/bg/sand/adrien-olichon-dark-unsplash-y.jpg)] dark:md:bg-[url(/images/bg/sand/adrien-olichon-dark-unsplash-x.jpg)]',
          'opacity-70'
        ]
      },
      size: {
        cover: 'bg-cover',
        contain: 'bg-contain'
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
