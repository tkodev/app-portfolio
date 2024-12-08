import { ThemeMode } from '@/types/theme'
import { cva } from '@/utils/theme'

const defaultTheme: ThemeMode = 'dark'

const textStyles = {
  h1: cva('text-h1 font-alliance-no2'),
  h2: cva('text-h2 font-alliance-no2'),
  h3: cva('text-h3 font-alliance-no2')
}

export { defaultTheme, textStyles }
