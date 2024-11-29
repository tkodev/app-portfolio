import Link from 'next/link'
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  DotIcon,
  FileUserIcon,
  SunMoonIcon,
  CopyrightIcon
} from 'lucide-react'
import { HTMLAttributes, FC } from 'react'
import { Themer } from '@/components/atoms/themer'
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
    href: 'https://www.linkedin.com/in/tkodev/',
    icon: LinkedinIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: 'https://github.com/tkodev',
    icon: GithubIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: 'mailto:tony@tko.dev',
    icon: MailIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: '/files/tony-ko-resume-q1-2024.pdf',
    icon: FileUserIcon,
    variant: 'ghost',
    size: 'icon'
  },
  { icon: DotIcon }
]

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Footer: FC<FooterProps> = (props) => {
  const { variant, className, ...rest } = props

  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Icon icon={CopyrightIcon} />{' '}
              </Link>
            </Button>
            <span className={cn(styles.label())}>{currentYear} Tony Ko</span>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems}>
              <Themer>
                <Button variant="ghost" size="icon">
                  <Icon icon={SunMoonIcon} />
                </Button>
              </Themer>
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
