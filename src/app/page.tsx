import { Background } from '@/components/atoms/background'
import { Button } from '@/components/atoms/button'
import { Main } from '@/components/atoms/main'
import { Section } from '@/components/atoms/section'
import { cva, cn } from '@/utils/theme'
import Image from 'next/image'
import Link from 'next/link'

const styles = {
  root: cva(''),
  intro: cva([
    'px-16 grid gap-8 items-center',
    'grid-cols-[auto]',
    'md:grid-cols-[3fr_1fr]',
    'lg:grid-cols-[2fr_1fr]',
    'xl:grid-cols-[1fr_1fr]'
  ]),
  title: cva('text-6xl leading-[4rem] mb-4 font-alliance-no2'),
  subtitle: cva('text-5xl leading-[3rem] mb-6 font-alliance-no2'),
  tagline: cva('text-2xl leading-[2rem] mb-6 font-alliance-no2'),
  desc: cva('text-base mb-8  text-basic-base-high-accent'),
  signature: cva('mx-auto opacity-50 max-w-[200px] xl:max-w-[300px]')
}

const Page = () => {
  return (
    <Main className={cn(styles.root())}>
      <Section className={cn(styles.intro())} bg={<Background variant="sand" />}>
        <div>
          <h1 className={cn(styles.title())}>Tony Ko —</h1>
          <h2 className={cn(styles.subtitle())}>Staff Software Engineer</h2>
          <p className={cn(styles.tagline())}>
            With Experience Building North America&apos;s Biggest Brands.
          </p>
          <p className={cn(styles.desc())}>
            Focused on creating <strong>strong user experiences</strong> - experimenting with
            interaction patterns and data visualizations. Bridging the gap between design and
            engineering, endlessly pursuing design perfection.
          </p>
          <Button variant="basic" size="lg" asChild>
            <Link href="#about">About Me</Link>
          </Button>
        </div>
        <div>
          <Image
            className={cn(styles.signature())}
            src="/images/tko/signature-dark@2x.png"
            width={376}
            height={176}
            alt="Tony's signature"
          />
        </div>
      </Section>
    </Main>
  )
}

export default Page
