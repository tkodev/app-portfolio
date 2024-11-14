import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Imager } from '@/components/atoms/imager'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/components/tokens/text'
import { companyEntries, companyKeys } from '@/constants/works'
import { cn, cva, VariantProps } from '@/utils/theme'
import { DraftingCompass, Linkedin } from 'lucide-react'
import Link from 'next/link'

const styles = {
  root: cva('flex flex-col justify-center px-8 sm:px-16 gap-8 text-center'),

  col: cva('flex flex-col gap-4 justify-center'),

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
  ctaButton: cva('w-[180px]'),

  companies: cva('flex flex-wrap gap-4 items-center justify-center'),
  company: cva('m-2')
}

type SectionCompaniesRef = HTMLDivElement
type SectionCompaniesProps = HTMLAttributes<SectionCompaniesRef> & VariantProps<typeof styles.root>

const SectionCompanies = forwardRef<SectionCompaniesRef, SectionCompaniesProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      width="narrow"
      bg={<Bg variant="noise" />}
      {...rest}
    >
      <div className={cn(styles.col())}>
        <h2 className={cn(textStyles.h3())}>
          Trusted by{' '}
          <strong>
            <u>more than {companyKeys.length}</u>
          </strong>{' '}
          Canadian and global companies
        </h2>
        <p>
          Trusted to deliver high-impact and scalable software solutions. Known for a hands-on
          approach that balances <strong>technical excellence</strong> with{' '}
          <strong>genuine mentorship</strong> and <strong>team development</strong>, I&apos;ve led
          successful projects that align closely with business goals and user needs.{' '}
          <strong>From world-renowned brands to emerging businesses</strong>, these{' '}
          <strong>partnerships</strong> have relied on my unique blend of engineering expertise,
          strategic vision, and client-centered communication to drive innovation and build
          resilient, user-centered platforms across North America and beyond.
        </p>
      </div>
      <div className={cn(styles.companies())}>
        {companyKeys.map((companyKey) => {
          const company = companyEntries[companyKey]
          if (!company) return null
          return (
            <Link
              className={cn(styles.company())}
              href={company.href}
              key={`company-${companyKey}`}
            >
              <Imager
                darkSrc={company.darkSrc}
                lightSrc={company.lightSrc}
                alt={`Logo of ${company.name}`}
                width={200}
                height={50}
              />
            </Link>
          )
        })}
      </div>
      <div className={cn(styles.col())}>
        <div className={cn(styles.cta())}>
          <Button className={cn(styles.ctaButton())} size="lg" asChild>
            <Link href="/works">
              <Icon icon={DraftingCompass} size="xs" /> View Works
            </Link>
          </Button>
          <Button className={cn(styles.ctaButton())} size="lg" asChild>
            <Link href="https://www.linkedin.com/in/tkodev/" target="_blank">
              <Icon icon={Linkedin} size="xs" /> Visit LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
})
SectionCompanies.displayName = 'SectionCompanies'

export { SectionCompanies }
export type { SectionCompaniesProps, SectionCompaniesRef }
