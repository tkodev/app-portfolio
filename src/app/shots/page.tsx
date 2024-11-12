import { ReactNode, FC } from 'react'
import { Main } from '@/components/organisms/main'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva()
}

type PageProps = {
  children: ReactNode
}

const Page: FC<PageProps> = () => {
  return <Main className={cn(styles.root())}>Page Content</Main>
}

export default Page
