import { Main } from '@/components/atoms/main'
import { SectionClients } from '@/components/sections/section-clients'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionIntro } from '@/components/sections/section-intro'
import { SectionJobs } from '@/components/sections/section-jobs'

const Page = () => {
  return (
    <Main>
      <SectionIntro id="intro" />
      <SectionClients id="companies" />
      <SectionJobs id="jobs" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
