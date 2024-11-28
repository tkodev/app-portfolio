import { FC, HTMLAttributes } from 'react'
import AnimatedCursor from 'react-animated-cursor'

type CursorRef = HTMLDivElement
type CursorProps = HTMLAttributes<CursorRef>

const Cursor: FC<CursorProps> = (props) => {
  const { ...rest } = props

  return (
    <AnimatedCursor
      color="#fff"
      innerSize={0}
      innerScale={0}
      innerStyle={{
        backgroundColor: 'hsl(var(--foreground) / .30)'
      }}
      outerSize={48}
      outerScale={1.5}
      outerAlpha={0}
      outerStyle={{
        border: '1px solid hsl(var(--foreground) / .30)'
      }}
      showSystemCursor
      {...rest}
    />
  )
}

export { Cursor }
export type { CursorProps, CursorRef }
