import { FC } from 'react'
import { Main } from '@/components/organisms/main'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionShots } from '@/components/sections/section-shots'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionShots id="shots" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
