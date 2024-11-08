import { forwardRef } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full bg-center', {
    variants: {
      variant: {
        noise: [
          'bg-[url(/images/background/noise-light-y@2x.png)] md:bg-[url(/images/background/noise-light-x@2x.png)]',
          'dark:bg-[url(/images/background/noise-dark-y@2x.png)] dark:md:bg-[url(/images/background/noise-dark-x@2x.png)]'
        ],
        sand: [
          'bg-[url(/images/background/adrien-olichon-light-unsplash-x.jpg)]',
          'dark:bg-[url(/images/background/adrien-olichon-dark-unsplash-x.jpg)]',
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

type BackgroundRef = HTMLDivElement
type BackgroundProps = React.HTMLAttributes<BackgroundRef> &
  VariantProps<typeof styles.root> & {
    //
  }

const Background = forwardRef<BackgroundRef, BackgroundProps>((props, ref) => {
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
Background.displayName = 'Background'

export { Background }
export type { BackgroundProps, BackgroundRef }
