import Link from 'next/link'
import { MoveRightIcon } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Client } from '@/components/atoms/client'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/components/templates/text'
import { clientEntries, clientIds } from '@/constants/client'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  cta: cva('flex justify-center'),

  text: cva('lg:max-w-[55%] flex flex-col gap-4'),
  clients: cva(
    'lg:max-w-[480px] flex flex-wrap gap-2 md:gap-4 items-center justify-center lg:order-first'
  ),

  client: cva('w-[140px] lg:w-[125px]')
}

type SectionClientsRef = HTMLDivElement
type SectionClientsProps = HTMLAttributes<SectionClientsRef> & VariantProps<typeof styles.root>

const SectionClients = forwardRef<SectionClientsRef, SectionClientsProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      height="auto"
      bg={<Bg variant="gradient" />}
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.text())}>
          <h2 className={cn(textStyles.h2())}>
            Trusted by Industry Leaders Across Canada and Beyond.
          </h2>
          <p>
            I’ve partnered with over 15 esteemed Canadian and global companies to deliver reliable,
            high-impact software solutions. My hands-on approach combines technical expertise with
            strategic vision, ensuring every collaboration exceeds expectations. From startups to
            established brands, I’ve built systems that support millions of users while advancing
            client goals.
          </p>
        </div>
        <div className={cn(styles.clients())}>
          {clientIds.map((clientId) => {
            const clientEntry = clientEntries[clientId]
            if (!clientEntry || !clientEntry.baseSrc) return null
            return (
              <Link
                className={cn(styles.client())}
                href={clientEntry.href}
                key={`company-${clientId}`}
                target="_blank"
              >
                <Client
                  darkSrc={clientEntry.darkSrc}
                  lightSrc={clientEntry.lightSrc}
                  alt={`Logo of ${clientEntry.name}`}
                  width={200}
                  height={50}
                />
              </Link>
            )
          })}
        </div>
      </div>
      <div className={cn(styles.cta())}>
        <Button size="lg" asChild>
          <Link href="/works">
            Explore Featured Works <Icon icon={MoveRightIcon} size="xs" />
          </Link>
        </Button>
      </div>
    </Section>
  )
})
SectionClients.displayName = 'SectionClients'

export { SectionClients }
export type { SectionClientsProps, SectionClientsRef }
