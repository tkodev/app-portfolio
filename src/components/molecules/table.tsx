import { forwardRef, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  tableWrapper: cva('relative min-w-full h-auto overflow-x-auto'),
  table: cva('w-full caption-bottom text-sm'),
  tableHeader: cva('[&_tr]:border-b'),
  tableBody: cva('[&_tr:last-child]:border-0'),
  tableFooter: cva('border-t bg-muted/50 [&>tr]:last:border-b-0'),
  tableRow: cva('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'),
  tableHead: cva(
    'min-h-24 px-4 py-8 text-base text-left align-middle font-light text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] whitespace-nowrap'
  ),
  tableCell: cva(
    'min-h-32 px-4 py-8 text-base text-left align-top [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] whitespace-nowrap'
  ),
  tableCaption: cva('mt-4 text-sm text-muted-foreground')
}

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn(styles.tableWrapper())}>
      <table ref={ref} className={cn(styles.table({ className }))} {...props} />
    </div>
  )
)
Table.displayName = 'Table'

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(styles.tableHeader(), className)} {...props} />
  )
)
TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(styles.tableBody(), className)} {...props} />
  )
)
TableBody.displayName = 'TableBody'

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn(styles.tableFooter(), className)} {...props} />
  )
)
TableFooter.displayName = 'TableFooter'

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn(styles.tableRow(), className)} {...props} />
  )
)
TableRow.displayName = 'TableRow'

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={cn(styles.tableHead(), className)} {...props} />
  )
)
TableHead.displayName = 'TableHead'

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn(styles.tableCell(), className)} {...props} />
  )
)
TableCell.displayName = 'TableCell'

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn(styles.tableCaption(), className)} {...props} />
  )
)
TableCaption.displayName = 'TableCaption'

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
