import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  avatar: cva(
    'h-full w-full aspect-square relative flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-muted'
  ),
  avatarImage: cva('h-full w-full'),
  avatarFallback: cva('h-full w-full flex items-center justify-center rounded-full bg-muted')
}

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn(styles.avatar({ className }))} {...props} />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn(styles.avatarImage({ className }))} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(styles.avatarFallback({ className }))}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
