import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionProject } from '@/components/sections/section-project'
import { projectEntries } from '@/constants/project'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  const projectId = 'beyondModernization'
  const projectEntry = projectEntries[projectId]

  return (
    <Main>
      <SectionProject id="works" projectEntry={projectEntry} />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
