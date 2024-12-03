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
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['px-4 md:px-8']),

  container: cva(['w-full h-full relative']),

  content: cva([
    'max-w-[896px] w-full aspect-square',
    'absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2',
    'sm:top-1/2',
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
    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'grayscale-[25%] hover:grayscale hover:scale-105 transition-all duration-1000'
  ]),
  intro: cva([
    'w-[320px] h-auto lg:w-[200px]',
    'absolute top-[100%] left-1/2 -translate-x-1/2 text-center',
    'sm:top-[80%]',
    'lg:top-1/2 lg:left-[82%] lg:-translate-y-1/2 lg:translate-x-0 lg:text-left'
  ]),

  h1: cva(['text-h3 font-alliance-no2 mb-2']),
  h2: cva(['text-base font-alliance-no2 mb-2']),
  h3: cva(['text-base font-alliance-no2 mb-4']),
  cta: cva('')
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
            <h1 className={cn(styles.h1())}>
              Works By <strong>Tony Ko</strong>
            </h1>
            <h2 className={cn(styles.h2())}>
              <strong>Staff Software Engineer</strong> & <strong>UI Designer</strong> —
            </h2>
            <h3 className={cn(styles.h3())}>
              Based in <em>Toronto, Canada.</em>
            </h3>
            <div className={cn(styles.cta())}>
              <Button size="default" asChild>
                <Link href="/profile">
                  Explore Profile <Icon icon={ArrowRightIcon} size="xs" />
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
