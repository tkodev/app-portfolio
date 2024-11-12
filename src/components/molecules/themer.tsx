'use client'

import { forwardRef, useCallback, MouseEvent, ButtonHTMLAttributes } from 'react'
import { useTheme } from '@/hooks/theme'
import { cn } from '@/utils/theme'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const styles = {
  root: cva()
}

type ThemerRef = HTMLButtonElement
type ThemerProps = ButtonHTMLAttributes<ThemerRef> &
  VariantProps<typeof styles.root> & {
    //
  }

const Themer = forwardRef<ThemerRef, ThemerProps>((props, ref) => {
  const { onClick, className, ...rest } = props
  const { handleThemeModeToggle } = useTheme()

  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      handleThemeModeToggle()
      onClick?.(e)
    },
    [handleThemeModeToggle, onClick]
  )

  return (
    <Slot
      ref={ref}
      className={cn(styles.root({ className }))}
      onClick={handleButtonClick}
      {...rest}
    />
  )
})
Themer.displayName = 'Themer'

export { Themer }
export type { ThemerProps, ThemerRef }
