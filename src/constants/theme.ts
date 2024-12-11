import { ThemeMode } from '@/types/theme'
import { cva } from '@/utils/theme'

const defaultTheme: ThemeMode = 'dark'

const marginVariants = {
  variants: {
    isMargin: {
      true: 'mb-4'
    }
  }
}

const textStyles = {
  h1: cva('text-h1 font-alliance-no2', marginVariants),
  h2: cva('text-h2 font-alliance-no2', marginVariants),
  h3: cva('text-h3 font-alliance-no2', marginVariants),
  p: cva('text-base font-geist-sans', marginVariants),
  ul: cva('list-disc pl-4', marginVariants),
  ol: cva('list-decimal pl-4', marginVariants),
  li: cva('*:mb-0', marginVariants),
  none: cva('', marginVariants)
}

export { defaultTheme, textStyles }
