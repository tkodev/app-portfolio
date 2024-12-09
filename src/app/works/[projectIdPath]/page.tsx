import { notFound } from 'next/navigation'
import { FC } from 'react'
import { Main } from '@/components/atoms/main'
import { SectionContact } from '@/components/sections/section-contact'
import { SectionFrames } from '@/components/sections/section-frames'
import { SectionMedia } from '@/components/sections/section-media'
import { SectionProject } from '@/components/sections/section-project'
import { projectEntries, projectIds } from '@/constants/project'
import { ProjectId } from '@/types/project'
import { camelCase, kebabCase } from 'change-case'

type PageProps = {
  params: Promise<{ projectIdPath: string }>
}

const generateStaticParams = async () => {
  return projectIds.map((projectId) => ({ projectIdPath: kebabCase(projectId) }))
}

const Page: FC<PageProps> = async (props) => {
  const { params } = props
  const { projectIdPath } = await params
  const projectId = camelCase(projectIdPath) as ProjectId

  const projectEntry = projectEntries[projectId]
  if (!projectEntry) notFound()

  const desktopEntries = projectEntry.frames.filter(
    (frameEntry) => frameEntry.frameId === 'desktop'
  )
  const mobileEntries = projectEntry.frames.filter((frameEntry) => frameEntry.frameId === 'mobile')
  const mediaEntries = projectEntry.src.slice(1)

  return (
    <Main>
      <SectionProject id="works" projectEntry={projectEntry} />
      <SectionFrames id="frames-desktop" frameEntries={desktopEntries} />
      <SectionMedia id="media" mediaEntries={mediaEntries} />
      <SectionFrames id="frames-mobile" frameEntries={mobileEntries} isParallax />
      <SectionContact id="contact" />
    </Main>
  )
}

export { generateStaticParams }
export default Page
