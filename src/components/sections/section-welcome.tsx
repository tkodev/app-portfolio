import { LoaderCircleIcon } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Brand } from '@/components/atoms/brand'
import { Cross } from '@/components/atoms/cross'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['px-4 md:px-8']),

  container: cva(['relative h-full w-full']),

  content: cva([
    'aspect-square w-full max-w-[896px]',
    'absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2',
    'sm:top-1/2',
    'flex flex-col items-center justify-center'
  ]),

  cross: cva(['h-full w-full', 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2']),

  brand: cva([
    'relative h-auto w-[75%]',
    'animate-fade-in transition-all duration-1000 hover:scale-105'
  ]),

  backdrop: cva([
    'h-[32%] w-[32%]',
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'rounded-full bg-foreground mix-blend-exclusion transition-all duration-1000 hover:scale-105'
  ]),
  intro: cva([
    'h-auto w-[320px] text-background lg:w-[200px]',
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center',
    'flex flex-col gap-2'
  ]),

  icon: cva('mx-auto animate-spin')
}

type SectionWelcomeRef = HTMLDivElement
type SectionWelcomeProps = HTMLAttributes<SectionWelcomeRef> & VariantProps<typeof styles.root>

const SectionWelcome = forwardRef<SectionWelcomeRef, SectionWelcomeProps>((props, ref) => {
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
          <Brand className={cn(styles.brand())} variant="outline" />
          <div className={cn(styles.backdrop())} />
          <div className={cn(styles.intro())}>
            <Icon className={cn(styles.icon())} icon={LoaderCircleIcon} size="lg" />
            <h1 className={cn(textStyles.h3())}>Welcome...</h1>
            <p>Syncing inspiration... Almost Ready.</p>
          </div>
        </div>
      </div>
    </Section>
  )
})
SectionWelcome.displayName = 'SectionWelcome'

export { SectionWelcome }
export type { SectionWelcomeProps, SectionWelcomeRef }
