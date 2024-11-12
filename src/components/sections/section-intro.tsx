import { forwardRef, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/atoms/section'
import { cn, cva, VariantProps } from '@/utils/theme'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const styles = {
  root: cva([
    'grid items-center',
    'grid-cols-[auto] gap-6 text-center px-8',
    'sm:grid-cols sm:gap-6 sm:px-16',
    'md:grid-cols md:gap-8',
    'lg:grid-cols-[2fr_1fr] lg:text-left',
    'xl:grid-cols-[2fr_1fr] '
  ]),

  col: cva('flex flex-col gap-4 justify-center'),

  title: cva('text-5xl lg:text-6xl font-alliance-no2'),
  subtitle: cva('text-4xl lg:text-5xl font-alliance-no2'),
  tagline: cva('text-lg sm:text-xl lg:text-2xl font-alliance-no2'),
  cta: cva('flex items-center flex-wrap gap-4 justify-center', {
    variants: {
      align: {
        left: 'lg:justify-start',
        center: 'lg:justify-center'
      }
    },
    defaultVariants: {
      align: 'center'
    }
  }),

  photo: cva('w-4/5 lg:w-full h-auto mx-auto mb-4')
}

type SectionIntroRef = HTMLDivElement
type SectionIntroProps = HTMLAttributes<SectionIntroRef> & VariantProps<typeof styles.root>

const SectionIntro = forwardRef<SectionIntroRef, SectionIntroProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="sand" attach="fixed" />}
      {...rest}
    >
      <div className={cn(styles.col())}>
        <h1 className={cn(styles.title())}>Tony Ko —</h1>
        <h2 className={cn(styles.subtitle())}>Staff Software Engineer</h2>
        <p className={cn(styles.tagline())}>
          Crafting scalable solutions, championing best practices, and empowering teams to innovate.
        </p>
        <div className={cn(styles.cta({ align: 'left' }))}>
          <Button size="lg" asChild>
            <Link href="https://www.linkedin.com/in/tkodev/" target="_blank">
              <Icon icon={Linkedin} size="xs" /> 616+ Followers
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="https://github.com/tkodev" target="_blank">
              <Icon icon={Github} size="xs" /> 38+ Stars
            </Link>
          </Button>
        </div>
      </div>
      <div className={cn(styles.col())}>
        <Avatar className={cn(styles.photo())}>
          <AvatarImage src="/images/tkodev/dp-sq.jpg" alt="Tony Ko" />
          <AvatarFallback>tk</AvatarFallback>
        </Avatar>
      </div>
    </Section>
  )
})
SectionIntro.displayName = 'SectionIntro'

export { SectionIntro }
export type { SectionIntroProps, SectionIntroRef }
