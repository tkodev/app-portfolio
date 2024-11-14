import { forwardRef, HTMLAttributes } from 'react'
import { Badge } from '@/components/atoms/badge'
import { Bg } from '@/components/atoms/bg'
import { Card, CardDesc, CardHeader, CardTitle, CardImage } from '@/components/molecules/card'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/components/tokens/text'
import { projects, projectKeys } from '@/constants/works'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-4 overflow-x-auto'),

  row: cva('flex flex-col gap-4'),
  features: cva('columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4'),
  projects: cva('columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'),

  skills: cva('flex flex-wrap gap-2')
}

type SectionWorksRef = HTMLDivElement
type SectionWorksProps = HTMLAttributes<SectionWorksRef> & VariantProps<typeof styles.root>

const SectionWorks = forwardRef<SectionWorksRef, SectionWorksProps>((props, ref) => {
  const { className, ...rest } = props

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
        {projectKeys.map((projectKey) => {
          const project = projects[projectKey]
          if (!project?.isFeatured) return null
          const { src, title, subtitle, startDate, endDate, skills } = project
          const imageSrc = src ?? '/images/works/preview.png'
          return (
            <Card key={`featured-${projectKey}`}>
              <CardImage src={imageSrc} mode="dark">
                <CardTitle>{title}</CardTitle>
                <CardDesc>
                  <em>{formatStdDateRange(startDate, endDate)}</em>
                </CardDesc>
                <CardDesc>{subtitle}</CardDesc>
                <CardDesc className={cn(styles.skills())}>
                  {skills.slice(0, 3).map((skill) => (
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
        <h2 className={cn(textStyles.h3())}>All Projects</h2>
      </div>
      <div className={cn(styles.projects())}>
        {projectKeys.map((projectKey) => {
          const project = projects[projectKey]
          if (!project) return null
          const { src, title, subtitle, startDate, endDate, skills } = project
          return (
            <Card key={`project-${projectKey}`}>
              {src && <CardImage src={src} mode="dark" />}
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDesc>
                  <em>{formatStdDateRange(startDate, endDate)}</em>
                </CardDesc>
                <CardDesc>{subtitle}</CardDesc>
                <CardDesc className={cn(styles.skills())}>
                  {skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardDesc>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </Section>
  )
})
SectionWorks.displayName = 'SectionWorks'

export { SectionWorks }
export type { SectionWorksProps, SectionWorksRef }
