import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { SearchModal } from '@/components/organisms/search-modal'
import { NavItem } from '@/types/layout'
import { cva, cn, type VariantProps } from '@/utils/theme'
import { Camera, DraftingCompass, Dot, Search, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Intro } from '../atoms/intro'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva([
    'fixed top-0 left-0 bg-gradient-to-b from-basic-base-low-accent to-transparent',
    'w-full h-[96px] z-10'
  ]),
  container: cva([
    'fixed top-4 left-1/2 -translate-x-1/2 mx-auto px-4',
    'max-w-[800px] w-full h-auto z-10'
  ]),
  bar: cva([
    'h-16 flex items-center justify-between gap-4 py-3 px-4',
    'rounded-3xl bg-basic-base-low shadow-sm border-basic-base-low-accent border'
  ]),

  left: cva('flex items-center gap-8'),
  right: cva('flex items-center'),

  intro: cva('hidden md:block')
}

const navItems: NavItem[] = [
  { href: '/works', name: 'Works', icon: DraftingCompass, variant: 'basic' },
  { href: '/shots', name: 'Shots', icon: Camera, variant: 'basic' },
  { href: '/blog', name: 'Blog', icon: NotebookPen, variant: 'basic', isDisabled: true }
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
        <div className={cn(styles.bar())}>
          <div className={cn(styles.left())}>
            <Avatar>
              <AvatarImage src="/images/tkodev/dp-thumb.jpg" alt="Tony Ko" />
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
            <SearchModal>
              <Button variant="basic" size="icon">
                <Icon icon={Search} />
              </Button>
            </SearchModal>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
