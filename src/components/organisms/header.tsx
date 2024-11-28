import Link from 'next/link'
import {
  DraftingCompassIcon,
  DotIcon,
  SearchIcon,
  NotebookPenIcon,
  PaletteIcon
} from 'lucide-react'
import { HTMLAttributes, FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { Search } from '@/components/organisms/search'
import { NavEntry } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Intro } from '../molecules/intro'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva([
    'fixed top-0 left-0 bg-gradient-to-b from-background/75 via-background/50 to-transparent',
    'w-full h-[96px] z-10'
  ]),
  container: cva([
    'fixed top-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[1280px] w-full h-auto z-10'
  ]),
  bar: cva([
    'h-16 flex items-center justify-between px-2',
    'rounded-full bg-background/30 shadow-md border border-foreground/15',
    'backdrop-filter backdrop-blur-lg'
  ]),

  left: cva('h-full flex items-center px-2'),
  right: cva('h-full flex items-center px-2 overflow-x-auto no-scrollbar'),

  thumb: cva('hidden md:block'),
  logo: cva('mx-2 sm:mx-4 md:mx-8'),
  intro: cva('hidden md:block')
}

const navItems: NavEntry[] = [
  { href: '/works', name: 'Works', icon: DraftingCompassIcon, variant: 'secondary' },
  { href: '/crafts', name: 'Crafts', icon: PaletteIcon, variant: 'secondary' },
  { href: '/blog', name: 'Blog', icon: NotebookPenIcon, variant: 'secondary', isHidden: true },
  { icon: DotIcon, isHidden: true }
]

type HeaderProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.root>

const Header: FC<HeaderProps> = (props) => {
  const { className, ...rest } = props

  const isSearchEnabled = false

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar())}>
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
            <Link className={cn(styles.intro())} href="/">
              <Intro name="Tony Ko" title="Staff Software Engineer" />
            </Link>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems}>
              {isSearchEnabled && (
                <Search>
                  <Button variant="secondary" size="icon">
                    <Icon icon={SearchIcon} />
                  </Button>
                </Search>
              )}
            </Nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
