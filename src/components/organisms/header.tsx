import Link from 'next/link'
import {
  CameraIcon,
  DotIcon,
  DraftingCompassIcon,
  NotebookPenIcon,
  ScanFaceIcon
} from 'lucide-react'
import { FC, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { NavEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['z-10 h-auto w-full', 'fixed left-0 top-0']),
  fade: cva([
    'pointer-events-none h-[96px] w-full',
    'fixed -top-[2px] left-0 bg-background backdrop-blur-xl backdrop-filter gradient-mask-b-10'
  ]),
  container: cva([
    'h-auto w-full max-w-[1280px]',
    'fixed left-1/2 top-4 mx-auto -translate-x-1/2 px-4'
  ]),
  bar: cva('flex h-16 w-full animate-slide-down items-center justify-between px-2', {
    variants: {
      variant: {
        bar: ['rounded-full border bg-background/30 shadow-md', 'backdrop-blur-lg backdrop-filter'],
        flat: 'rounded-none border-none bg-transparent shadow-none'
      }
    },
    defaultVariants: {
      variant: 'flat'
    }
  }),

  left: cva('flex h-full items-center gap-2 px-2'),
  right: cva('no-scrollbar flex h-full items-center gap-2 overflow-x-auto px-2'),

  thumb: cva('hidden h-10 w-10 xs:block'),
  logo: cva('mx-2 sm:mx-4 md:mx-8'),
  intro: cva('hidden sm:block')
}

const isSearchEnabled = false
const navItems: NavEntry[] = [
  { href: '/profile', name: 'Profile', icon: ScanFaceIcon, variant: 'ghost' },
  { href: '/works', name: 'Works', icon: DraftingCompassIcon, variant: 'ghost' },
  { href: '/shots', name: 'Shots', icon: CameraIcon, variant: 'ghost' },
  {
    href: '/blog',
    name: 'Blog',
    icon: NotebookPenIcon,
    variant: 'ghost',
    isHidden: !isSearchEnabled
  },
  { icon: DotIcon, isHidden: !isSearchEnabled }
]

type HeaderProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Header: FC<HeaderProps> = (props) => {
  const { variant, className, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Link className={cn(styles.thumb())} href="/">
              <Avatar>
                <AvatarImage src="/images/tkodev/dp-thumb.jpg" alt="Tony Ko" />
                <AvatarFallback>tko</AvatarFallback>
              </Avatar>
            </Link>
            <Link className={cn(styles.logo())} href="/">
              <Logo />
            </Link>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
