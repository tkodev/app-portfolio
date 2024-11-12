import { FC } from 'react'
import { Main } from '@/components/organisms/main'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva()
}

const Page: FC = () => {
  return <Main className={cn(styles.root())}>Page Content</Main>
}

export default Page
