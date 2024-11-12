import { FC } from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { type VisuallyHiddenProps } from '@radix-ui/react-visually-hidden'

const Hidden: FC<VisuallyHiddenProps> = ({ children }) => (
  <VisuallyHidden.Root>{children}</VisuallyHidden.Root>
)

export { Hidden }
