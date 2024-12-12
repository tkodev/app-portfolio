import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionExample } from '@/components/sections/section-example'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionExample id="wip" />
    </Main>
  )
}

export default Page
