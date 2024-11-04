import { forwardRef } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('w-full h-full bg-center bg-cover', {
    variants: {
      variant: {
        noise: [
          'light:bg-[url(/images/background/noise-light-y@2x.png)] light:md:bg-[url(/images/background/noise-light-x@2x.png)]',
          'dark:bg-[url(/images/background/noise-dark-y@2x.png)] dark:md:bg-[url(/images/background/noise-dark-x@2x.png)]'
        ],
        sand: [
          'light:bg-[url(/images/background/adrien-olichon-light-unsplash-x.jpg)]',
          'dark:bg-[url(/images/background/adrien-olichon-dark-unsplash-x.jpg)]',
          'opacity-30'
        ]
      }
    },
    defaultVariants: {
      variant: 'noise'
    }
  })
}

type BackgroundRef = HTMLDivElement
type BackgroundProps = React.HTMLAttributes<BackgroundRef> &
  VariantProps<typeof styles.root> & {
    //
  }

const Background = forwardRef<BackgroundRef, BackgroundProps>((props, ref) => {
  const { variant = 'noise', className, ...rest } = props

  return <div ref={ref} className={cn(styles.root({ variant, className }))} {...rest} />
})
Background.displayName = 'Background'

export { Background }
export type { BackgroundProps, BackgroundRef }
