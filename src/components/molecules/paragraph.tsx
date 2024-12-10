import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  paragraph: cva('', {
    variants: {
      break: {
        true: 'mb-4'
      }
    }
  })
}

type ParagraphRef = HTMLDivElement
type ParagraphProps = HTMLAttributes<ParagraphRef> &
  VariantProps<typeof styles.paragraph> & {
    id: string
    text?: string
  }

const Paragraph = forwardRef<ParagraphRef, ParagraphProps>((props, ref) => {
  const { id, text, className, ...rest } = props

  const paragraphs = text?.split('\n').map((string) => string.trim()) || []

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {paragraphs.map((paragraph, index) => {
        if (!paragraph) return null
        const isNextEmpty = !paragraphs[index + 1]
        return (
          <p
            key={`paragraph-${id}-${index}`}
            className={cn(styles.paragraph({ break: isNextEmpty }))}
          >
            {paragraph}
          </p>
        )
      })}
    </div>
  )
})
Paragraph.displayName = 'Paragraph'

export { Paragraph }
export type { ParagraphProps, ParagraphRef }
