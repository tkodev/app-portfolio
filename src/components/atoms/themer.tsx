'use client'

import { forwardRef } from 'react'
import { ButtonProps, ButtonRef, Button } from '@/components/atoms/button'
import { useTheme } from '@/hooks/theme'
import { Sun, Moon } from 'lucide-react'
import { Icon } from '../atoms/icon'

type ThemerRef = ButtonRef
type ThemerProps = ButtonProps

const Themer = forwardRef<ThemerRef, ThemerProps>((props, ref) => {
  const { ...rest } = props
  const { theme, handleThemeModeToggle } = useTheme()

  return (
    <Button ref={ref} {...rest} onClick={handleThemeModeToggle}>
      <Icon icon={theme === 'light' ? Moon : Sun} />
    </Button>
  )
})
Themer.displayName = 'Themer'

export { Themer }
export type { ThemerProps, ThemerRef }
