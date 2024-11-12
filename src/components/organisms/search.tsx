'use client'

import { HTMLAttributes, FC } from 'react'
import { Hidden } from '@/components/atoms/hidden'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  type DialogProps
} from '@/components/molecules/dialog'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  dialogContent: cva('overflow-hidden p-0')
}

type SearchModalRef = HTMLDivElement
type SearchModalProps = HTMLAttributes<SearchModalRef> &
  VariantProps<typeof styles.root> &
  DialogProps & {
    //
  }

const Search: FC<SearchModalProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn(styles.dialogContent({ className }))}>
        <Hidden>
          <DialogTitle>Search</DialogTitle>
        </Hidden>
      </DialogContent>
    </Dialog>
  )
}
Search.displayName = 'Search'

export { Search }
export type { SearchModalProps, SearchModalRef }
