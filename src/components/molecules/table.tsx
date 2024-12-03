import * as React from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  tableWrapper: cva('relative w-full overflow-auto'),
  table: cva('w-full caption-bottom text-sm'),
  tableHeader: cva('[&_tr]:border-b'),
  tableBody: cva('[&_tr:last-child]:border-0'),
  tableFooter: cva('border-t bg-muted/50 [&>tr]:last:border-b-0'),
  tableRow: cva('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'),
  tableHead: cva(
    'h-24 px-4 text-base text-left font-light align-middle text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
  ),
  tableCell: cva(
    'h-32 px-4 text-base text-left [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]'
  ),
  tableCaption: cva('mt-4 text-sm text-muted-foreground')
}

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn(styles.tableWrapper())}>
      <table ref={ref} className={cn(styles.table({ className }))} {...props} />
    </div>
  )
)
Table.displayName = 'Table'

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(styles.tableHeader(), className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn(styles.tableBody(), className)} {...props} />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={cn(styles.tableFooter(), className)} {...props} />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn(styles.tableRow(), className)} {...props} />
  )
)
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={cn(styles.tableHead(), className)} {...props} />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn(styles.tableCell(), className)} {...props} />
))
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn(styles.tableCaption(), className)} {...props} />
))
TableCaption.displayName = 'TableCaption'

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
