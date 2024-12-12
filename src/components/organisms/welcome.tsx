import { forwardRef, HTMLAttributes } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogProps,
  DialogTitle,
  DialogTrigger
} from '@/components/molecules/dialog'
import { SectionWelcome } from '@/components/sections/section-welcome'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  content: cva(['h-full w-full bg-background']),
  body: cva('grid gap-8 overflow-auto p-8')
}

type WelcomeRef = HTMLButtonElement
type WelcomeProps = HTMLAttributes<WelcomeRef> & VariantProps<typeof styles.root> & DialogProps

const Welcome = forwardRef<WelcomeRef, WelcomeProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <Dialog {...rest}>
      <DialogTrigger ref={ref} className={cn(styles.root({ className }))} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn(styles.content())} isAnimated>
        <DialogTitle className={cn(textStyles.sr())}>Welcome Dialog</DialogTitle>
        <DialogDescription className={cn(textStyles.sr())}>
          This allows users to trigger the BGM and to preload images.
        </DialogDescription>
        <SectionWelcome />
      </DialogContent>
    </Dialog>
  )
})
Welcome.displayName = 'Welcome'

export { Welcome }
export type { WelcomeProps, WelcomeRef }
