import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Logo } from '@/components/atoms/logo'
import { Section } from '@/components/molecules/section'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'grid items-center',
    'grid-cols-1 gap-4 px-8',
    'md:grid-cols-1 sm:gap-8',
    'lg:grid-cols-2 lg:gap-24',
    'xl:grid-cols-2 xl:gap-32'
  ]),

  left: cva(['flex items-center justify-center', 'lg:items-center lg:justify-end']),
  right: cva(['flex items-center justify-center', 'lg:items-center lg:justify-start']),

  photo: cva('max-w-[480px] w-3/5 md:w-2/5 lg:w-full h-auto rounded-[64px] lg:mt-4'),
  content: cva('max-w-[480px] w-full flex flex-col gap-4 lg:gap-6 justify-center'),

  breadcrumbs: cva('justify-center lg:justify-start'),
  divider: cva('border-t border-foreground/15 my-2 md:my-4'),
  logo: cva('w-[150px]'),
  title: cva('text-h1 font-alliance-no2'),
  cta: cva('flex justify-center lg:justify-start flex-wrap gap-4')
}

type SectionIntroRef = HTMLDivElement
type SectionIntroProps = HTMLAttributes<SectionIntroRef> & VariantProps<typeof styles.root>

const SectionIntro = forwardRef<SectionIntroRef, SectionIntroProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      width="full"
      bg={<Bg variant="sand" attach="local" />}
      {...rest}
    >
      <div className={cn(styles.left())}>
        <Avatar className={cn(styles.photo())}>
          <AvatarImage src="/images/tkodev/dp-sq.jpg" alt="Tony Ko" />
          <AvatarFallback>tko</AvatarFallback>
        </Avatar>
      </div>
      <div className={cn(styles.right())}>
        <div className={cn(styles.content())}>
          <hr className={cn(styles.divider())} />
          <Logo className={cn(styles.logo())} />
          <h1>
            Works By <strong>Tony Ko</strong> —
          </h1>
          <h2 className={cn(styles.title())}>
            Staff Software <br />
            Engineer
          </h2>
          {/*<h3>*/}
          {/*  <em>Engineering / Design / Leadership</em>*/}
          {/*</h3>*/}
          <p>
            Crafting scalable solutions, championing best practices, and empowering teams to
            innovate.
          </p>
          <hr className={cn(styles.divider())} />
          <div className={cn(styles.cta())}>
            <Button size="default" asChild>
              <Link href="https://www.linkedin.com/in/tkodev/" target="_blank">
                <Icon icon={Linkedin} size="xs" /> 616+ Followers
              </Link>
            </Button>
            <Button size="default" asChild>
              <Link href="https://github.com/tkodev" target="_blank">
                <Icon icon={Github} size="xs" /> 38+ Stars
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
})
SectionIntro.displayName = 'SectionIntro'

export { SectionIntro }
export type { SectionIntroProps, SectionIntroRef }
