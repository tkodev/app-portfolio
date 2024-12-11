'use client'

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

  container: cva(['w-full h-full relative']),

  content: cva([
    'max-w-[896px] w-full aspect-square',
    'absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2',
    'sm:top-1/2',
    'flex flex-col items-center justify-center'
  ]),

  cross: cva(['w-full h-full', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2']),

  brand: cva([
    'w-[75%] h-auto relative',
    'hover:scale-105 transition-all duration-1000 animate-fade-in'
  ]),

  backdrop: cva([
    'w-[32%] h-[32%]',
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'mix-blend-exclusion bg-foreground hover:scale-105 transition-all duration-1000 rounded-full'
  ]),
  intro: cva([
    'w-[320px] h-auto lg:w-[200px] text-background',
    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center',
    'flex flex-col gap-2'
  ]),

  icon: cva('animate-spin mx-auto')
}

type SectionLoadingRef = HTMLDivElement
type SectionLoadingProps = HTMLAttributes<SectionLoadingRef> & VariantProps<typeof styles.root>

const SectionLoading = forwardRef<SectionLoadingRef, SectionLoadingProps>((props, ref) => {
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
            <h1 className={cn(textStyles.h3())}>Loading...</h1>
            <p>Syncing inspiration... Almost Ready.</p>
          </div>
        </div>
      </div>
    </Section>
  )
})
SectionLoading.displayName = 'SectionLoading'

export { SectionLoading }
export type { SectionLoadingProps, SectionLoadingRef }
