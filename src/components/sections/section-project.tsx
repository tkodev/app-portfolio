'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Media } from '@/components/atoms/media'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/molecules/table'
import { Section } from '@/components/organisms/section'
import { textStyles } from '@/components/templates/text'
import { clientEntries } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { profileEntries } from '@/constants/profile'
import { ProjectEntry } from '@/types/project'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),

  text: cva('lg:w-[65%] lg:order-first flex flex-col gap-4'),

  tableHead: cva('w-[20%]'),
  tableRoles: cva('capitalize')
}

type SectionProjectRef = HTMLDivElement
type SectionProjectProps = HTMLAttributes<SectionProjectRef> &
  VariantProps<typeof styles.root> & {
    projectEntry: ProjectEntry
  }

const SectionProject = forwardRef<SectionProjectRef, SectionProjectProps>((props, ref) => {
  const { projectEntry, className, ...rest } = props
  const { title, src, desc, roles, clientId, profileIds, startDate, endDate } = projectEntry
  const client = clientEntries[clientId]

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      height="auto"
      bg={<Bg variant="texture" size="repeat" attach="local" position="top" />}
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={cn(styles.tableHead())}>Roles</TableHead>
            <TableHead className={cn(styles.tableHead())}>Client</TableHead>
            <TableHead className={cn(styles.tableHead())}>Credits</TableHead>
            <TableHead className={cn(styles.tableHead())}>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className={cn(styles.tableRoles())}>{roles.join(', ')}</TableCell>
            <TableCell>{client.name}</TableCell>
            <TableCell>
              {profileIds.map((profileId) => (
                <p key={`profile-${profileId}`}>{profileEntries[profileId].name}</p>
              ))}
            </TableCell>
            <TableCell>{formatStdDateRange(startDate, endDate, appTimeZone)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {src[0] && <Media mediaEntry={src[0]} />}
    </Section>
  )
})
SectionProject.displayName = 'SectionProject'

export { SectionProject }
export type { SectionProjectProps, SectionProjectRef }
