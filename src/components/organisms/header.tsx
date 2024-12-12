import Link from 'next/link'
import {
  DraftingCompassIcon,
  DotIcon,
  NotebookPenIcon,
  CameraIcon,
  ScanFaceIcon
} from 'lucide-react'
import { HTMLAttributes, FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { NavEntry } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['w-full h-auto z-10', 'fixed top-0 left-0']),
  fade: cva([
    'w-full h-[144px] pointer-events-none',
    'fixed -top-[2px] left-0 bg-background backdrop-filter backdrop-blur-xl gradient-mask-b-10'
  ]),
  container: cva([
    'max-w-[1280px] w-full h-auto',
    'fixed top-4 left-1/2 -translate-x-1/2 mx-auto px-4'
  ]),
  bar: cva('w-full h-16 flex items-center justify-between px-2 animate-slide-down', {
    variants: {
      variant: {
        bar: [
          'rounded-full bg-background/30 shadow-md border border-foreground/15',
          'backdrop-filter backdrop-blur-lg'
        ],
        flat: 'rounded-none bg-transparent shadow-none border-none'
      }
    },
    defaultVariants: {
      variant: 'flat'
    }
  }),

  left: cva('h-full flex items-center px-2 gap-2'),
  right: cva('h-full flex items-center px-2 gap-2 overflow-x-auto no-scrollbar'),

  thumb: cva('hidden xs:block w-10 h-10'),
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
