import { Main } from '@/components/organisms/main'
import { SectionCompanies } from '@/components/sections/section-companies'
import { SectionIntro } from '@/components/sections/section-intro'
import { SectionJobs } from '@/components/sections/section-jobs'
import { cva, cn } from '@/utils/theme'

const styles = {
  root: cva('')
}

const Page = () => {
  return (
    <Main className={cn(styles.root())}>
      <SectionIntro id="intro" />
      <SectionCompanies id="companies" />
      <SectionJobs id="jobs" />
    </Main>
  )
}

export default Page
