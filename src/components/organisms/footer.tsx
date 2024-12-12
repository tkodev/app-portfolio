'use client'

import Link from 'next/link'
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  DotIcon,
  FileUserIcon,
  SunMoonIcon,
  PauseIcon,
  MusicIcon,
  PlayIcon
} from 'lucide-react'
import { HTMLAttributes, FC } from 'react'
import { profileEntries } from '@/constants/profile'
import { useTheme } from '@/hooks/theme'
import { useBgmStore } from '@/stores/bgm'
import { NavEntry } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['w-full h-auto z-10', 'fixed bottom-0 left-0']),
  fade: cva([
    'w-full h-[96px] pointer-events-none',
    'fixed -bottom-[2px] left-0 bg-background backdrop-filter backdrop-blur-xl gradient-mask-t-10'
  ]),
  container: cva([
    'fixed bottom-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[1280px] w-full h-auto z-10'
  ]),
  bar: cva('h-16 flex items-center justify-between px-2 animate-slide-up', {
    variants: {
      variant: {
        bar: ['rounded-full bg-background/30 shadow-md border', 'backdrop-filter backdrop-blur-lg'],
        flat: 'rounded-none bg-transparent shadow-none border-none'
      }
    },
    defaultVariants: {
      variant: 'flat'
    }
  }),

  left: cva('h-full flex items-center px-2 gap-2'),
  right: cva('h-full flex items-center px-2 gap-2 overflow-x-auto no-scrollbar'),

  bgm: cva('hidden sm:flex')
}

const navItems: NavEntry[] = [
  {
    href: profileEntries.tony.linkedin,
    icon: LinkedinIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: profileEntries.tony.github,
    icon: GithubIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: `mailto:${profileEntries.tony.email}`,
    icon: MailIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: '/files/tony-ko-resume-q4-2024.pdf',
    icon: FileUserIcon,
    variant: 'ghost',
    size: 'icon'
  },
  { icon: DotIcon }
]

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Footer: FC<FooterProps> = (props) => {
  const { variant, className, ...rest } = props

  const { bgmState, setBgmState } = useBgmStore()
  const { handleThemeModeToggle } = useTheme()

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Button
              variant={bgmState === 'playing' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setBgmState(bgmState === 'playing' ? 'stopped' : 'playing')}
            >
              <Icon icon={bgmState === 'playing' ? PauseIcon : PlayIcon} />
            </Button>
            <Button className={cn(styles.bgm())} variant="link" size="none" asChild>
              <Link
                href="https://uppbeat.io/track/justin-marshall-elias/an-empty-bus"
                target="_blank"
              >
                <Icon icon={MusicIcon} />
                An Empty Bus - Justin M. Elias
              </Link>
            </Button>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems}>
              <Button variant="ghost" size="icon" onClick={handleThemeModeToggle}>
                <Icon icon={SunMoonIcon} />
              </Button>
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
