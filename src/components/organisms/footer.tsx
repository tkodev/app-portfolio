import { HTMLAttributes, FC } from 'react'
import { Themer } from '@/components/atoms/themer'
import { NavEntry } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  DotIcon,
  FileUserIcon,
  SunMoonIcon
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva([
    'fixed bottom-0 left-0 bg-gradient-to-t from-background to-transparent',
    'w-full h-[96px] z-10'
  ]),
  container: cva([
    'fixed bottom-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[800px] w-full h-auto z-10'
  ]),
  bar: cva([
    'h-16 flex items-center justify-between px-2',
    'rounded-full bg-background/30 shadow-sm',
    'backdrop-filter backdrop-blur-lg'
  ]),

  left: cva('h-full flex items-center px-2'),
  right: cva('h-full flex items-center overflow-x-auto px-2 no-scrollbar'),

  label: cva('hidden md:inline'),
  scroller: cva(['fixed bottom-[96px] left-1/2 -translate-x-1/2 mx-auto', 'w-auto h-auto z-10']),
  bouncer: cva('animate-bounce')
}

const navItems: NavEntry[] = [
  {
    href: 'https://www.linkedin.com/in/tkodev/',
    icon: LinkedinIcon,
    variant: 'secondary',
    size: 'icon'
  },
  {
    href: 'https://github.com/tkodev',
    icon: GithubIcon,
    variant: 'secondary',
    size: 'icon'
  },
  {
    href: 'mailto:tony@tko.dev',
    icon: MailIcon,
    variant: 'secondary',
    size: 'icon'
  },
  {
    href: '/files/tony-ko-resume-q1-2024.pdf',
    icon: FileUserIcon,
    variant: 'secondary',
    size: 'icon'
  },
  { icon: DotIcon }
]

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.root>

const Footer: FC<FooterProps> = (props) => {
  const { className, ...rest } = props

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar())}>
          <div className={cn(styles.left())}>
            <Button variant="secondary" asChild>
              <Link href="#">
                <Icon icon={ChevronUpIcon} /> <span className={cn(styles.label())}>Top</span>
              </Link>
            </Button>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems}>
              <Themer>
                <Button variant="secondary" size="icon">
                  <Icon icon={SunMoonIcon} />
                </Button>
              </Themer>
            </Nav>
          </div>
        </div>
      </div>
      <div className={cn(styles.scroller())}>
        <Icon className={cn(styles.bouncer())} icon={ChevronDownIcon} />
      </div>
    </footer>
  )
}

export { Footer }
