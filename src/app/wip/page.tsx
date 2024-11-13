import { FC } from 'react'
import { Main } from '@/components/molecules/main'
import { SectionWorks } from '@/components/sections/section-works'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionWorks id="works" />
    </Main>
  )
}

export default Page
