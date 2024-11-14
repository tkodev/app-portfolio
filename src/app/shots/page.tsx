import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionWip } from '@/components/sections/section-wip'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionWip id="wip" />
    </Main>
  )
}

export default Page
