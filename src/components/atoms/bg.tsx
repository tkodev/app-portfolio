import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full bg-center', {
    variants: {
      variant: {
        noise: [
          'bg-[url(/images/background/noise/light-y@2x.png)] md:bg-[url(/images/background/noise/light-x@2x.png)]',
          'dark:bg-[url(/images/background/noise/dark-y@2x.png)] dark:md:bg-[url(/images/background/noise/dark-x@2x.png)]'
        ],
        'noise-invert': [
          'bg-[url(/images/background/noise-invert/light-y@2x.png)] md:bg-[url(/images/background/noise-invert/light-x@2x.png)]',
          'dark:bg-[url(/images/background/noise-invert/dark-y@2x.png)] dark:md:bg-[url(/images/background/noise-invert/dark-x@2x.png)]'
        ],
        sand: [
          'bg-[url(/images/background/sand/adrien-olichon-light-unsplash-x.jpg)]',
          'dark:bg-[url(/images/background/sand/adrien-olichon-dark-unsplash-x.jpg)]',
          'opacity-30'
        ],
        debug: ['bg-red-100', 'dark:bg-red-800']
      },
      mode: {
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
      variant: 'noise',
      mode: 'cover',
      attach: 'local'
    }
  })
}

type BgRef = HTMLDivElement
type BgProps = HTMLAttributes<BgRef> &
  VariantProps<typeof styles.root> & {
    //
  }

const Bg = forwardRef<BgRef, BgProps>((props, ref) => {
  const { variant = 'noise', mode, attach, className, ...rest } = props

  return (
    <div
      ref={ref}
      className={cn(styles.root({ variant, mode, attach, className }))}
      {...rest}
      suppressHydrationWarning
    />
  )
})
Bg.displayName = 'Bg'

export { Bg }
export type { BgProps, BgRef }
