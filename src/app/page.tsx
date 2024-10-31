import { cva, cn } from '@/utils/theme'

const styles = {
  root: cva('')
}

const Page = () => {
  return <div className={cn(styles.root())}></div>
}

export default Page
