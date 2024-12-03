import { forwardRef, HTMLAttributes, useCallback } from 'react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { SelectEntry } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex justify-between gap-8 pb-8 border-b border-foreground/15 overflow-x-auto'),
  filters: cva('flex gap-2'),
  layouts: cva('flex gap-2')
}

type FilterRef = HTMLDivElement
type FilterProps = HTMLAttributes<FilterRef> &
  VariantProps<typeof styles.root> & {
    filterEntries: SelectEntry[]
    activeFilterValue: string
    onFilterClick: (newFilterEntry: SelectEntry) => void
    layoutEntries?: SelectEntry[]
    activeLayoutValue?: string
    onLayoutClick?: (newFilterEntry: SelectEntry) => void
  }

const Filter = forwardRef<FilterRef, FilterProps>((props, ref) => {
  const {
    filterEntries,
    activeFilterValue,
    layoutEntries,
    activeLayoutValue,
    onFilterClick,
    onLayoutClick,
    className,
    ...rest
  } = props

  const handleFilterClick = useCallback(
    (newFilterEntry: SelectEntry) => () => {
      onFilterClick(newFilterEntry)
    },
    [onFilterClick]
  )

  const handleLayoutClick = useCallback(
    (newLayoutEntry: SelectEntry) => () => {
      onLayoutClick?.(newLayoutEntry)
    },
    [onLayoutClick]
  )

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.filters())}>
        {filterEntries.map((filterEntry) => {
          const isActive = activeFilterValue === filterEntry.value
          return (
            <Button
              key={`filter-${filterEntry.value}`}
              variant={isActive ? 'default' : 'secondary'}
              onClick={handleFilterClick(filterEntry)}
            >
              <Icon icon={filterEntry.icon} size="xs" /> {filterEntry.name}
            </Button>
          )
        })}
      </div>
      <div className={cn(styles.layouts())}>
        {layoutEntries?.map((layoutEntry) => {
          const isActive = activeLayoutValue === layoutEntry.value
          return (
            <Button
              key={`filter-${layoutEntry.value}`}
              variant={isActive ? 'default' : 'secondary'}
              onClick={handleLayoutClick(layoutEntry)}
            >
              <Icon icon={layoutEntry.icon} size="xs" /> {layoutEntry.name}
            </Button>
          )
        })}
      </div>
    </div>
  )
})
Filter.displayName = 'Filter'

export { Filter }
export type { FilterProps, FilterRef }
