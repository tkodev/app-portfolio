import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionShots } from '@/components/sections/section-shots'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionShots id="shots" />
    </Main>
  )
}

export default Page
