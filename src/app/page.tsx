import { cva, cn } from '@/utils/theme'

const styles = {
  root: cva('')
}

const Page = () => {
  return <div className={cn(styles.root())}>test</div>
}

export default Page
