import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Bg } from '@/components/atoms/bg'
import { Brand } from '@/components/atoms/brand'
import { Button } from '@/components/atoms/button'
import { Cross } from '@/components/atoms/cross'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['px-4 md:px-8']),

  container: cva(['w-full h-full relative']),

  content: cva([
    'max-w-[896px] w-full aspect-square',
    'absolute top-[33%] sm:top-[40%] lg:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2',
    'flex flex-col items-center justify-center'
  ]),

  cross: cva(['w-full h-full', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2']),
  brand1: cva([
    'w-[75%] h-auto relative -left-8',
    'hover:scale-105 transition-all duration-1000 animate-slide-down'
  ]),
  brand2: cva([
    'w-[75%] h-auto relative',
    'hover:scale-105 transition-all duration-1000 animate-fade-in'
  ]),
  brand3: cva([
    'w-[75%] h-auto relative left-8',
    'hover:scale-105 transition-all duration-1000 animate-slide-up'
  ]),
  avatar: cva([
    'w-[53.5%] h-[53.5%]',
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'grayscale-[25%] hover:grayscale hover:scale-105 transition-all duration-1000'
  ]),
  intro: cva([
    'w-[320px] h-auto lg:w-[250px]',
    'absolute left-1/2 top-[100%] -translate-x-1/2 text-center',
    'sm:top-[80%]',
    'lg:left-[82%] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:text-left',
    'flex flex-col gap-2'
  ]),

  cta: cva('mt-2')
}

type SectionHomeRef = HTMLDivElement
type SectionHomeProps = HTMLAttributes<SectionHomeRef> & VariantProps<typeof styles.root>

const SectionHome = forwardRef<SectionHomeRef, SectionHomeProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="texture" attach="local" />}
      {...rest}
    >
      <div className={cn(styles.container())}>
        <div className={cn(styles.content())}>
          <Cross className={cn(styles.cross())} />
          <Brand className={cn(styles.brand1())} variant="fill" />
          <Brand className={cn(styles.brand2())} variant="outline" />
          <Avatar className={cn(styles.avatar())}>
            <AvatarImage src="/images/tkodev/dp-sq.jpg" alt="Tony Ko" />
            <AvatarFallback>-</AvatarFallback>
          </Avatar>
          <Brand className={cn(styles.brand3())} variant="outline" />
          <div className={cn(styles.intro())}>
            <h1 className={cn(textStyles.h3())}>
              Works By <strong>Tony Ko</strong>
            </h1>
            <h2>
              <strong>Staff Software Engineer</strong> & <strong>UI Designer</strong> —
            </h2>
            <h3>
              Based in <em>Toronto, Canada.</em>
            </h3>
            <div className={cn(styles.cta())}>
              <Button size="lg" asChild>
                <Link href="/profile">
                  Explore Profile <Icon icon={ArrowRightIcon} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
})
SectionHome.displayName = 'SectionHome'

export { SectionHome }
export type { SectionHomeProps, SectionHomeRef }
