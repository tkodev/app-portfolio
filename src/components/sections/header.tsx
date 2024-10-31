import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { NavItem } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { Camera, DraftingCompass, Dot } from 'lucide-react'
import Link from 'next/link'
import { Icon } from '../atoms/icon'
import { Intro } from '../atoms/intro'
import { Themer } from '../atoms/themer'
import { Nav } from '../organisms/nav'

const styles = {
  root: cva(['fixed top-0 left-1/2 -translate-x-1/2 p-4', 'w-[800px] h-auto max-w-full']),
  container: cva([
    'flex items-center justify-between gap-4 py-4 px-8',
    'rounded-3xl bg-basic-base-low-accent backdrop-blur-lg shadow-sm'
  ]),

  left: cva('flex gap-5 items-center'),
  right: cva('flex items-center'),

  intro: cva('hidden md:block')
}

const navItems: NavItem[] = [
  { href: '/foundry', name: 'Foundry', icon: DraftingCompass, variant: 'basic' },
  { href: '/photos', name: 'Shots', icon: Camera, variant: 'basic' }
]

type HeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Header: React.FC<HeaderProps> = (props) => {
  const { className, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
        <div className={cn(styles.left())}>
          <Avatar>
            <AvatarImage src="/images/dp/purple-thumb.jpg" alt="Tony Ko" />
            <AvatarFallback>tk</AvatarFallback>
          </Avatar>
          <Link href="/">
            <Logo />
          </Link>
          <Intro className={cn(styles.intro())} name="Tony Ko" title="Staff Software Engineer" />
        </div>
        <div className={cn(styles.right())}>
          <Nav items={navItems} />
          <Icon icon={Dot} />
          <Themer />
        </div>
      </div>
    </header>
  )
}

export { Header }
