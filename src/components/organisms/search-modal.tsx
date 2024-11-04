'use client'

import { Hidden } from '@/components/atoms/hidden'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/molecules/command'
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
  dialogContent: cva('overflow-hidden p-0'),
  dialogCommand: cva()
  // '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'
}

type SearchModalRef = HTMLDivElement
type SearchModalProps = React.HTMLAttributes<SearchModalRef> &
  VariantProps<typeof styles.root> &
  DialogProps & {
    //
  }

const SearchModal: React.FC<SearchModalProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn(styles.dialogContent({ className }))}>
        <Hidden>
          <DialogTitle>SearchModal</DialogTitle>
        </Hidden>
        <Command>
          <CommandInput placeholder="Type a command or SearchModal..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>SearchModal Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
SearchModal.displayName = 'SearchModal'

export { SearchModal }
export type { SearchModalProps, SearchModalRef }
