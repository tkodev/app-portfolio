import { Main } from '@/components/atoms/main'
import { SectionClients } from '@/components/sections/section-clients'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionJobs } from '@/components/sections/section-jobs'
import { SectionProfile } from '@/components/sections/section-profile'

const Page = () => {
  return (
    <Main>
      <SectionProfile id="intro" />
      <SectionClients id="companies" />
      <SectionJobs id="jobs" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
