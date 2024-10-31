import { NavItem } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { ChevronUp, Linkedin, Github, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Nav } from '../organisms/nav'

const styles = {
  root: cva(['fixed bottom-0 left-1/2 -translate-x-1/2 px-4 pb-4', 'w-[800px] h-auto max-w-full']),
  container: cva([
    'grid grid-cols-[auto_1fr_auto] gap-4 items-center py-2 px-4',
    'rounded-3xl bg-basic-base-low-accent backdrop-blur-lg shadow-sm'
  ])
}

const navItems: NavItem[] = [
  {
    href: 'https://www.linkedin.com/in/tkodev/',
    icon: Linkedin,
    variant: 'basic',
    size: 'icon',
    isExternal: true
  },
  {
    href: 'https://github.com/tkodev',
    icon: Github,
    variant: 'basic',
    size: 'icon',
    isExternal: true
  },
  {
    href: 'mailto:tony@tko.dev',
    icon: Mail,
    variant: 'basic',
    size: 'icon',
    isExternal: true
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
        <Button asChild>
          <Link href="#">
            <Icon icon={ChevronUp} /> Back To Top
          </Link>
        </Button>
        <div />
        <Nav items={navItems} />
      </div>
    </footer>
  )
}

export { Footer }
