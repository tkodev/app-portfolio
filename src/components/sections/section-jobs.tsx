import Link from 'next/link'
import { DraftingCompass, Linkedin } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Imager } from '@/components/atoms/imager'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/components/tokens/text'
import { appTimeZone } from '@/constants/date'
import { companyEntries, jobEntries } from '@/constants/works'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'
import { differenceInCalendarYears } from 'date-fns'
import { fromZonedTime } from 'date-fns-tz'

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

  jobs: cva('flex flex-col text-left divide-y divide-border'),
  job: cva('grid grid-cols-[1fr_auto] gap-4 items-center justify-center py-8'),
  company: cva('hidden md:block')
}

type SectionJobsRef = HTMLDivElement
type SectionJobsProps = HTMLAttributes<SectionJobsRef> & VariantProps<typeof styles.root>

const SectionJobs = forwardRef<SectionJobsRef, SectionJobsProps>((props, ref) => {
  const { className, ...rest } = props

  const yearsSince = Math.abs(
    differenceInCalendarYears(new Date(), fromZonedTime('2017-04-01', appTimeZone))
  )

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      width="narrow"
      bg={<Bg variant="sand" attach="local" />}
      {...rest}
    >
      <div className={cn(styles.col())}>
        <h2 className={cn(textStyles.h3())}>
          With{' '}
          <strong>
            <u>over {yearsSince} years</u>
          </strong>{' '}
          of dedicated experience.
        </h2>
        <p>
          I have built a career on delivering reliable, high-quality software for top North American
          brands and beyond. My journey has been one of constant growth and learning, advancing from
          foundational roles to strategic positions as a Senior and Staff Software Engineer. I bring
          an expert understanding of scalable architecture, cross-platform compatibility, and
          accessible design, while guiding teams and projects with a steady hand and a passion for
          mentorship.
        </p>
      </div>
      <div className={cn(styles.jobs())}>
        {jobEntries.map(
          ({ companyId, companyName, title, startDate, endDate, location }, index) => {
            const company = companyEntries[companyId]
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
                      {formatStdDateRange(startDate, endDate, appTimeZone)}, {location}
                    </em>
                  </p>
                </div>
                <div>
                  {!!company && (
                    <Link
                      className={cn(styles.company())}
                      href={company.href}
                      key={`company-${companyId}`}
                      target="_blank"
                    >
                      <Imager
                        darkSrc={company.darkSrc}
                        lightSrc={company.lightSrc}
                        alt={`Logo of ${company.name}`}
                        width={200}
                        height={50}
                      />
                    </Link>
                  )}
                </div>
              </div>
            )
          }
        )}
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
SectionJobs.displayName = 'SectionJobs'

export { SectionJobs }
export type { SectionJobsProps, SectionJobsRef }
