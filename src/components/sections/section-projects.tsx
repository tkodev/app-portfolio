'use client'

import Link from 'next/link'
import {
  BracesIcon,
  DraftingCompassIcon,
  MousePointerIcon,
  LayoutGridIcon,
  LayoutListIcon,
  MoveRightIcon,
  TargetIcon
} from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Media } from '@/components/atoms/media'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/molecules/table'
import { Filter } from '@/components/organisms/filter'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/components/templates/text'
import { clientEntries } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { projectEntries, projectIds } from '@/constants/project'
import { useFilter } from '@/hooks/filter'
import { SelectEntry } from '@/types/layout'
import { ProjectRole } from '@/types/project'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'
import { kebabCase } from 'change-case'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  cta: cva('flex justify-center'),

  icon: cva('w-auto'),
  text: cva('lg:w-[65%] lg:order-first flex flex-col gap-4'),

  grid: cva('grid md:grid-cols-2 gap-16 md:gap-8 lg:gap-16'),
  project: cva('flex flex-col gap-4 lg:gap-8'),
  projectDetail: cva('flex justify-between gap-4'),
  projectDivider: cva('border-t border-foreground/15'),

  tableTitleHead: cva('w-[40%]'),
  tableHead: cva('w-[20%]'),
  tableRoles: cva('capitalize')
}

type SectionProjectsRef = HTMLDivElement
type SectionProjectsProps = HTMLAttributes<SectionProjectsRef> & VariantProps<typeof styles.root>

const filterEntries: SelectEntry[] = [
  { icon: TargetIcon, name: 'All', value: 'all' },
  { icon: BracesIcon, name: 'Development', value: 'development' },
  { icon: MousePointerIcon, name: 'Design', value: 'design' }
]

const layoutEntries: SelectEntry[] = [
  { icon: LayoutGridIcon, name: 'Grid', value: 'grid' },
  { icon: LayoutListIcon, name: 'List', value: 'list' }
]

const SectionProjects = forwardRef<SectionProjectsRef, SectionProjectsProps>((props, ref) => {
  const { className, ...rest } = props

  const {
    activeFilterValue,
    activeLayoutValue,
    isDefaultFilter,
    handleFilterClick,
    handleLayoutClick
  } = useFilter({
    filterEntries,
    layoutEntries
  })

  const orderedProjects = projectIds.map((key) => projectEntries[key])
  const featuredProjects = orderedProjects.filter((project) => project.isFeatured)
  const filteredProjects = featuredProjects.filter((project) =>
    !isDefaultFilter ? project.roles.includes(activeFilterValue as ProjectRole) : true
  )

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      height="auto"
      bg={<Bg variant="texture" size="repeat" attach="local" position="top" />}
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.icon())}>
          <Icon icon={DraftingCompassIcon} size="3xl" />
        </div>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>Works.</h1>
          <h2 className={cn(textStyles.h2())}>Innovative Solutions, Real-World Impact.</h2>
          <p>
            From modernizing oil rig systems to building Aeroplan’s first browser extension, my
            portfolio showcases innovative solutions that solve complex challenges. Each project
            reflects my commitment to high-performing, secure, and accessible software solutions,
            and my ability to lead teams toward measurable outcomes.
          </p>
        </div>
      </div>
      <Filter
        filterEntries={filterEntries}
        activeFilterValue={activeFilterValue}
        onFilterClick={handleFilterClick}
        layoutEntries={layoutEntries}
        activeLayoutValue={activeLayoutValue}
        onLayoutClick={handleLayoutClick}
      />
      {activeLayoutValue === 'grid' ? (
        <div className={cn(styles.grid())}>
          {filteredProjects.map((projectEntry) => {
            const { id, roles, src, title, clientId, startDate, endDate } = projectEntry
            const key = `project-${id}`
            const client = clientEntries[clientId]
            return (
              <Link key={key} className={cn(styles.project())} href={`/works/${kebabCase(id)}`}>
                <Media mediaEntry={src[0]} aspect="video" />
                <h2 className={cn(textStyles.h3())}>{title}</h2>
                <hr className={cn(styles.projectDivider())} />
                <div className={cn(styles.projectDetail())}>
                  <p className={cn(styles.tableRoles())}>{roles.join(', ')}</p>
                  <p>{formatStdDateRange(startDate, endDate, appTimeZone)}</p>
                </div>
                <p>{client.name}</p>
              </Link>
            )
          })}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={cn(styles.tableTitleHead())}>Name</TableHead>
              <TableHead className={cn(styles.tableHead())}>Type</TableHead>
              <TableHead className={cn(styles.tableHead())}>Client</TableHead>
              <TableHead className={cn(styles.tableHead())}>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((projectEntry) => {
              const { id, title, roles, clientId, startDate, endDate } = projectEntry
              const key = `project-${id}`
              const client = clientEntries[clientId]
              return (
                <TableRow key={key}>
                  <TableCell>
                    <Link href={`/works/${kebabCase(id)}`}>{title}</Link>
                  </TableCell>
                  <TableCell className={cn(styles.tableRoles())}>{roles.join(', ')}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{formatStdDateRange(startDate, endDate, appTimeZone)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
      <div className={cn(styles.cta())}>
        <Button size="lg" asChild>
          <Link href="/archive">
            Archived Works <Icon icon={MoveRightIcon} size="xs" />
          </Link>
        </Button>
      </div>
    </Section>
  )
})
SectionProjects.displayName = 'SectionProjects'

export { SectionProjects }
export type { SectionProjectsProps, SectionProjectsRef }
