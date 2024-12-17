import { FC } from 'react'
import { Main } from '@/components/organisms/main'
import { SectionArchive } from '@/components/sections/section-archive'
import { SectionContact } from '@/components/sections/section-contact'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionArchive id="archive" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
