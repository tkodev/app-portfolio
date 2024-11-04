import { NavItem } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { ChevronUp, Linkedin, Github, Mail, Dot } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Themer } from '../atoms/themer'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['fixed bottom-0 left-1/2 -translate-x-1/2 px-4 pb-4', 'w-[800px] h-auto max-w-full']),
  container: cva([
    'h-16 flex items-center justify-between gap-4 py-3 px-4',
    'rounded-3xl bg-basic-base-low-accent backdrop-blur-lg shadow-sm'
  ]),

  left: cva('flex items-center'),
  right: cva('flex items-center')
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
    </footer>
  )
}

export { Footer }
