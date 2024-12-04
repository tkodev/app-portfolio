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
  CopyrightIcon
} from 'lucide-react'
import { HTMLAttributes, FC } from 'react'
import { userEntries } from '@/constants/user'
import { useAudio } from '@/hooks/audio'
import { useTheme } from '@/hooks/theme'
import { NavEntry } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['w-full h-auto z-10', 'fixed bottom-0 left-0']),
  fade: cva([
    'w-full h-[128px]',
    'fixed -bottom-[2px] left-0 bg-background/90 backdrop-filter backdrop-blur-xl gradient-mask-t-10'
  ]),
  container: cva([
    'fixed bottom-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[1280px] w-full h-auto z-10'
  ]),
  bar: cva('h-16 flex items-center justify-between px-2 animate-slide-up', {
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

  label: cva('hidden xs:block text-sm')
}

const navItems: NavEntry[] = [
  {
    href: userEntries.tony.linkedin,
    icon: LinkedinIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: userEntries.tony.github,
    icon: GithubIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: `mailto:${userEntries.tony.email}`,
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

  const { audio, state, handleAudioToggle } = useAudio({
    // Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/justin-marshall-elias/an-empty-bus
    src: '/audio/an-empty-bus-justin-marshall-elias-main-version-36442-03-56.mp3',
    loop: true,
    autoPlay: false
  })
  const { handleThemeModeToggle } = useTheme()

  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Icon icon={CopyrightIcon} />
              </Link>
            </Button>
            <span className={cn(styles.label())}>{currentYear} Tony Ko</span>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems}>
              <Button
                variant={state.paused ? 'ghost' : 'secondary'}
                size="icon"
                onClick={handleAudioToggle}
              >
                <Icon icon={state.paused ? MusicIcon : PauseIcon} />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleThemeModeToggle}>
                <Icon icon={SunMoonIcon} />
              </Button>
            </Nav>
          </div>
        </div>
      </div>
      {audio}
    </footer>
  )
}

export { Footer }
