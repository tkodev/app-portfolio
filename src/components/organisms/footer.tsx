import { NavItem } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { ChevronUp, ChevronDown, Linkedin, Github, Mail, Dot } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Themer } from '../atoms/themer'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva([
    'fixed bottom-0 left-0 bg-gradient-to-t from-basic-base-low-accent to-transparent',
    'w-full h-[96px] z-10'
  ]),
  container: cva([
    'fixed bottom-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[800px] w-full h-auto z-10'
  ]),
  bar: cva([
    'h-16 flex items-center justify-between gap-4 py-3 px-4',
    'rounded-3xl bg-basic-base-low shadow-sm border-basic-base-low-accent border'
  ]),
  scroller: cva(['fixed bottom-[96px] left-1/2 -translate-x-1/2 mx-auto', 'w-auto h-auto z-10']),

  left: cva('flex items-center'),
  right: cva('flex items-center'),

  bouncer: cva('animate-bounce')
}

const navItems: NavItem[] = [
  {
    href: 'https://www.linkedin.com/in/tkodev/',
    icon: Linkedin,
    variant: 'basic',
    size: 'icon'
  },
  {
    href: 'https://github.com/tkodev',
    icon: Github,
    variant: 'basic',
    size: 'icon'
  },
  {
    href: 'mailto:tony@tko.dev',
    icon: Mail,
    variant: 'basic',
    size: 'icon'
  }
]

type FooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Footer: React.FC<FooterProps> = (props) => {
  const { className, ...rest } = props

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar())}>
          <div className={cn(styles.left())}>
            <Button asChild>
              <Link href="#">
                <Icon icon={ChevronUp} /> Top
              </Link>
            </Button>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems} />
            <Icon icon={Dot} />
            <Themer />
          </div>
        </div>
      </div>
      <div className={cn(styles.scroller())}>
        <Icon className={cn(styles.bouncer())} icon={ChevronDown} />
      </div>
    </footer>
  )
}

export { Footer }
