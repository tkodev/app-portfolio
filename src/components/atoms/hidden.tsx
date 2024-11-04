import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { type VisuallyHiddenProps } from '@radix-ui/react-visually-hidden'

const Hidden: React.FC<VisuallyHiddenProps> = ({ children }) => (
  <VisuallyHidden.Root>{children}</VisuallyHidden.Root>
)

export { Hidden }
