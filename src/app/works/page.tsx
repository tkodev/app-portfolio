import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionWorks } from '@/components/sections/section-works'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionWorks id="works" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
