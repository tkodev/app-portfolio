import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionProjects } from '@/components/sections/section-projects'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionProjects id="works" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
