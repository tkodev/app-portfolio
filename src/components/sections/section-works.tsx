import { forwardRef, HTMLAttributes } from 'react'
import { Badge } from '@/components/atoms/badge'
import { Bg } from '@/components/atoms/bg'
import { Card, CardDesc, CardHeader, CardTitle, CardImage } from '@/components/molecules/card'
import { Section } from '@/components/molecules/section'
import { SearchProjects } from '@/components/organisms/search-projects'
import { textStyles } from '@/components/tokens/text'
import { projectEntries, projectIds } from '@/constants/works'
import { ProjectId, ProjectEntry } from '@/types/works'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'
import MiniSearch from 'minisearch'

const styles = {
  root: cva('flex flex-col gap-4 overflow-y-visible'),

  row: cva('flex flex-col gap-4'),
  features: cva('columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4 py-4'),
  projects: cva('columns-1 md:columns-3 lg:columns-3 gap-4 space-y-4 py-4'),

  project: cva('break-inside-avoid'),

  skills: cva('flex flex-wrap gap-2')
}

type SectionWorksRef = HTMLDivElement
type SectionWorksProps = HTMLAttributes<SectionWorksRef> &
  VariantProps<typeof styles.root> & {
    query?: string | string[]
  }

const SectionWorks = forwardRef<SectionWorksRef, SectionWorksProps>((props, ref) => {
  const { query, className, ...rest } = props

  const maxSkills = 7
  const searchFields = ['title', 'subtitle', 'tagline', 'desc', 'companyKey', 'skills']

  const orderedProjects = projectIds.map((key) => projectEntries[key])

  const queries = [query ?? ''].flat()
  const miniSearch = new MiniSearch<ProjectEntry>({
    fields: searchFields,
    storeFields: searchFields
  })
  miniSearch.addAll(orderedProjects)

  const featuredProjects = orderedProjects.filter((project) => project.isFeatured)
  const searchProjects = query
    ? miniSearch
        .search({ queries })
        .map((result) => projectEntries[result.id as ProjectId])
        .filter((project) => !!project)
    : orderedProjects

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="sand" attach="fixed" />}
      {...rest}
    >
      <div className={cn(styles.row())}>
        <h2 className={cn(textStyles.h3())}>Featured Projects</h2>
      </div>
      <div className={cn(styles.features())}>
        {featuredProjects.map((project) => {
          const { id, src, title, subtitle, startDate, endDate, skills } = project
          const imageSrc = src ?? '/images/works/preview.png'
          return (
            <Card key={`featured-${id}`} className={cn(styles.project())}>
              <CardImage src={imageSrc} mode="dark">
                <CardTitle>{title}</CardTitle>
                <CardDesc>
                  <em>{formatStdDateRange(startDate, endDate)}</em>
                </CardDesc>
                <CardDesc>{subtitle}</CardDesc>
                <CardDesc className={cn(styles.skills())}>
                  {skills.slice(0, maxSkills).map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </CardDesc>
              </CardImage>
            </Card>
          )
        })}
      </div>
      <div className={cn(styles.row())}>
        <h2 className={cn(textStyles.h3())}>Projects</h2>
      </div>
      <div className={cn(styles.row())}>
        <SearchProjects queries={queries} />
      </div>
      <div className={cn(styles.projects())}>
        {!!searchProjects.length
          ? searchProjects.map((project) => {
              const { id, src, title, subtitle, startDate, endDate, skills } = project
              return (
                <Card key={`project-${id}`} className={cn(styles.project())}>
                  {src && <CardImage src={src} mode="dark" />}
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDesc>
                      <em>{formatStdDateRange(startDate, endDate)}</em>
                    </CardDesc>
                    <CardDesc>{subtitle}</CardDesc>
                    <CardDesc className={cn(styles.skills())}>
                      {skills.slice(0, maxSkills).map((skill: string) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </CardDesc>
                  </CardHeader>
                </Card>
              )
            })
          : 'No results found.'}
      </div>
    </Section>
  )
})
SectionWorks.displayName = 'SectionWorks'

export { SectionWorks }
export type { SectionWorksProps, SectionWorksRef }
