import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionWorks } from '@/components/sections/section-works'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async (props) => {
  const { query } = await props.searchParams

  return (
    <Main>
      <SectionWorks id="works" query={query} />
    </Main>
  )
}

export default Page
