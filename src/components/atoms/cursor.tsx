import { FC, HTMLAttributes } from 'react'
import AnimatedCursor from 'react-animated-cursor'

type CursorRef = HTMLDivElement
type CursorProps = HTMLAttributes<CursorRef>

const Cursor: FC<CursorProps> = (props) => {
  const { ...rest } = props

  return (
    <AnimatedCursor
      color="#fff"
      innerScale={0}
      innerSize={0}
      outerAlpha={0}
      outerScale={1.5}
      outerSize={48}
      innerStyle={{
        backgroundColor: 'hsl(var(--foreground) / .30)'
      }}
      outerStyle={{
        border: '1px solid hsl(var(--foreground) / .30)',
        mixBlendMode: 'exclusion'
      }}
      showSystemCursor
      {...rest}
    />
  )
}

export { Cursor }
export type { CursorProps, CursorRef }
