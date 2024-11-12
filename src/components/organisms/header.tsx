import { HTMLAttributes, FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { Search } from '@/components/organisms/search'
import { NavEntry } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { CameraIcon, DraftingCompassIcon, DotIcon, SearchIcon, NotebookPenIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Intro } from '../atoms/intro'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva([
    'fixed top-0 left-0 bg-gradient-to-b from-background to-transparent',
    'w-full h-[96px] z-10'
  ]),
  container: cva([
    'fixed top-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[800px] w-full h-auto z-10'
  ]),
  bar: cva([
    'h-16 flex items-center justify-between gap-4 py-3 px-4',
    'rounded-full bg-background shadow-sm border-muted border'
  ]),

  left: cva('flex items-center'),
  right: cva('flex items-center'),

  thumb: cva(''),
  logo: cva('hidden sm:block mx-8'),
  intro: cva('hidden md:block')
}

const navItems: NavEntry[] = [
  { href: '/works', name: 'Works', icon: DraftingCompassIcon, variant: 'secondary' },
  { href: '/shots', name: 'Shots', icon: CameraIcon, variant: 'secondary' },
  { href: '/blog', name: 'Blog', icon: NotebookPenIcon, variant: 'secondary', isDisabled: true },
  { icon: DotIcon }
]

type HeaderProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Header: FC<HeaderProps> = (props) => {
  const { className, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar())}>
          <div className={cn(styles.left())}>
            <Link className={cn(styles.thumb())} href="/public">
              <Avatar>
                <AvatarImage src="/images/tkodev/dp-thumb.jpg" alt="Tony Ko" />
                <AvatarFallback>tk</AvatarFallback>
              </Avatar>
            </Link>
            <Link className={cn(styles.logo())} href="/public">
              <Logo />
            </Link>
            <Link className={cn(styles.intro())} href="/public">
              <Intro name="Tony Ko" title="Staff Software Engineer" />
            </Link>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems}>
              <Search>
                <Button variant="secondary" size="icon">
                  <Icon icon={SearchIcon} />
                </Button>
              </Search>
            </Nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
