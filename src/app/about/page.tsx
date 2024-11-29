import { Main } from '@/components/atoms/main'
import { SectionCompanies } from '@/components/sections/section-companies'
import { SectionIntro } from '@/components/sections/section-intro'
import { SectionJobs } from '@/components/sections/section-jobs'

const Page = () => {
  return (
    <Main>
      <SectionIntro id="intro" />
      <SectionCompanies id="companies" />
      <SectionJobs id="jobs" />
    </Main>
  )
}

export default Page
