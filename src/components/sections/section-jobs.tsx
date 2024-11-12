import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/atoms/section'
import { Imager } from '@/components/molecules/imager'
import { companyEntries, jobEntries } from '@/constants/content'
import { cn, cva, VariantProps } from '@/utils/theme'
import { differenceInCalendarYears, format } from 'date-fns'
import { DraftingCompass, Linkedin } from 'lucide-react'
import Link from 'next/link'

const styles = {
  root: cva('flex flex-col justify-center px-8 sm:px-16 gap-8 text-center'),

  col: cva('flex flex-col gap-4 justify-center'),

  tagline: cva('text-lg sm:text-xl lg:text-2xl font-alliance-no2'),
  desc: cva('text-base'),
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

  jobs: cva('flex flex-col text-left'),
  job: cva(
    'grid grid-cols-[1fr_auto] gap-4 items-center justify-center py-6 pl-8 border-b border-foreground/30'
  ),
  company: cva('hidden md:block')
}

type SectionJobsRef = HTMLDivElement
type SectionJobsProps = HTMLAttributes<SectionJobsRef> & VariantProps<typeof styles.root>

const SectionJobs = forwardRef<SectionJobsRef, SectionJobsProps>((props, ref) => {
  const { className, ...rest } = props

  const yearsSince = Math.abs(differenceInCalendarYears(new Date(), new Date('2017-04-01')))
  const jobDateFormat = 'MMM yyyy'

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="sand" attach="fixed" />}
      {...rest}
    >
      <div className={cn(styles.col())}>
        <h2 className={cn(styles.tagline())}>
          With{' '}
          <strong>
            <u>over {yearsSince} years</u>
          </strong>{' '}
          of dedicated experience.
        </h2>
        <p className={cn(styles.desc())}>
          I have built a career on delivering reliable, high-quality software for top North American
          brands and beyond. My journey has been one of constant growth and learning, advancing from
          foundational roles to strategic positions as a Senior and Staff Software Engineer. I bring
          an expert understanding of scalable architecture, cross-platform compatibility, and
          accessible design, while guiding teams and projects with a steady hand and a passion for
          mentorship.
        </p>
      </div>
      <div className={cn(styles.jobs())}>
        {jobEntries.map(({ companyKey, companyName, title, dateFrom, dateTo }, index) => {
          const company = companyEntries[companyKey]
          return (
            <div key={`job-${index}`} className={cn(styles.job())}>
              <div>
                <p>
                  <strong>
                    {title} @ {companyName}
                  </strong>
                </p>
                <p>
                  <em>
                    {format(dateFrom, jobDateFormat)} to{' '}
                    {dateTo ? format(dateTo, jobDateFormat) : 'Present'}
                  </em>
                </p>
              </div>
              <div>
                {!!company && (
                  <Link
                    className={cn(styles.company())}
                    href={company.href}
                    key={`company-${companyKey}`}
                  >
                    <Imager
                      darkSrc={company.darkSrc}
                      lightSrc={company.lightSrc}
                      alt={`Logo of ${company.name}`}
                      width={250}
                      height={63}
                    />
                  </Link>
                )}
              </div>
            </div>
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
            <Link href="https://github.com/tkodev" target="_blank">
              <Icon icon={Linkedin} size="xs" /> Visit LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
})
SectionJobs.displayName = 'SectionJobs'

export { SectionJobs }
export type { SectionJobsProps, SectionJobsRef }
