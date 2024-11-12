import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Company } from '@/components/atoms/company'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/atoms/section'
import { Main } from '@/components/organisms/main'
import { companyEntries, companyEntryKeys, jobEntries } from '@/constants/content'
import { cva, cn } from '@/utils/theme'
import { differenceInCalendarYears, format } from 'date-fns'
import { Linkedin, Github, DraftingCompass } from 'lucide-react'
import Link from 'next/link'

const styles = {
  root: cva(''),
  intro: cva([
    'grid items-center',
    'grid-cols-[auto] gap-6 text-center px-8',
    'sm:grid-cols sm:gap-6 sm:px-16',
    'md:grid-cols md:gap-8',
    'lg:grid-cols-[2fr_1fr] lg:text-left',
    'xl:grid-cols-[2fr_1fr] '
  ]),
  clients: cva('flex flex-col justify-center px-8 sm:px-16 gap-8 text-center'),
  experience: cva('flex flex-col justify-center px-8 sm:px-16 gap-8 text-center'),

  col: cva('flex flex-col gap-4 justify-center'),

  title: cva('text-5xl lg:text-6xl font-alliance-no2'),
  subtitle: cva('text-4xl lg:text-5xl font-alliance-no2'),
  tagline: cva('text-lg sm:text-xl lg:text-2xl font-alliance-no2'),
  desc: cva('text-base text-basic-base-high-accent'),
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
  dp: cva('w-4/5 lg:w-full h-auto mx-auto mb-4'),
  signature: cva('mx-auto opacity-50 max-w-[100px] xl:max-w-[150px] light:invert'),

  companies: cva('flex flex-wrap gap-4 items-center justify-center'),
  company: cva('m-2'),

  jobs: cva('flex flex-col text-left'),
  job: cva(
    'grid grid-cols-[1fr_auto] gap-4 items-center justify-center py-6 pl-8 border-b border-basic-base-high border-opacity-30'
  ),
  jobCompany: cva('hidden md:block')
}

const Page = () => {
  const yearsSince = Math.abs(differenceInCalendarYears(new Date(), new Date('2017-04-01')))
  const jobDateFormat = 'MMM yyyy'

  return (
    <Main className={cn(styles.root())}>
      <Section id="intro" className={cn(styles.intro())} bg={<Bg variant="sand" attach="fixed" />}>
        <div className={cn(styles.col())}>
          <h1 className={cn(styles.title())}>Tony Ko —</h1>
          <h2 className={cn(styles.subtitle())}>Staff Software Engineer</h2>
          <p className={cn(styles.tagline())}>
            Crafting scalable solutions, championing best practices, and empowering teams to
            innovate.
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
          <Avatar className={cn(styles.dp())}>
            <AvatarImage src="/images/tkodev/dp-sq.jpg" alt="Tony Ko" />
            <AvatarFallback>tk</AvatarFallback>
          </Avatar>
        </div>
      </Section>
      <Section id="clients" className={cn(styles.clients())} bg={<Bg variant="noise" />}>
        <div className={cn(styles.col())}>
          <h2 className={cn(styles.tagline())}>
            Trusted by{' '}
            <strong>
              <u>more than 15</u>
            </strong>{' '}
            Canadian and global companies
          </h2>
          <p className={cn(styles.desc())}>
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
          {companyEntryKeys.map((companyKey) => {
            const company = companyEntries[companyKey]
            if (!company) return null
            return (
              <Company
                className={cn(styles.company())}
                key={`company-${companyKey}`}
                company={company}
              />
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
      <Section
        id="experience"
        className={cn(styles.experience())}
        bg={<Bg variant="sand" attach="fixed" />}
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
            I have built a career on delivering reliable, high-quality software for top North
            American brands and beyond. My journey has been one of constant growth and learning,
            advancing from foundational roles to strategic positions as a Senior and Staff Software
            Engineer. I bring an expert understanding of scalable architecture, cross-platform
            compatibility, and accessible design, while guiding teams and projects with a steady
            hand and a passion for mentorship.
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
                    <Company
                      className={cn(styles.jobCompany())}
                      key={`company-${companyKey}`}
                      company={company}
                    />
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
    </Main>
  )
}

export default Page
