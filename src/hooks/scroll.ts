import { useCallback, useEffect, useMemo, useState, RefObject } from 'react'
import { throttle } from 'lodash'
import { useEventListener } from 'usehooks-ts'

type UseScrollProps = {
  scrollElementRef: RefObject<HTMLDivElement>
  isEnabled?: boolean
  initialScrollPosition?: 'top' | 'bottom'
  throttleMs?: number
  onScrollTop?: () => void
  onScrollBetween?: () => void
  onScrollBottom?: () => void
}

type UseScrollRes = {
  handleScrollTo: (to: 'top' | 'bottom') => void
}

const useScroll = (props: UseScrollProps): UseScrollRes => {
  const {
    scrollElementRef,
    isEnabled = false,
    initialScrollPosition,
    throttleMs = 200,
    onScrollTop: handleScrollTop,
    onScrollBetween: handleScrollCenter,
    onScrollBottom: handleScrollBottom
  } = props

  // state
  const [isInternalScroll, setIsInternalScroll] = useState(true)

  // handlers
  const handleScrollEvent = useMemo(
    () =>
      throttle(
        (e: Event) => {
          const target = e.target as HTMLDivElement
          if (!isEnabled || !target || isInternalScroll) return

          const { scrollTop, scrollHeight, clientHeight } = target

          const isScrolledToTop = scrollTop === 0
          const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight

          // If scrolled to top
          if (isScrolledToTop) return handleScrollTop?.()

          // If scrolled to bottom
          if (isScrolledToBottom) return handleScrollBottom?.()

          return handleScrollCenter?.()
        },
        throttleMs,
        {
          leading: true,
          trailing: false
        }
      ),
    [
      isEnabled,
      isInternalScroll,
      throttleMs,
      handleScrollBottom,
      handleScrollCenter,
      handleScrollTop
    ]
  )

  const handleScrollTo = useCallback(
    (to?: 'top' | 'bottom') => {
      if (!to) return
      if (!scrollElementRef.current) return
      setIsInternalScroll(true)
      // The page needs to be scrolled at least a little for this CSS class here to work.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
      const topPos = 1
      const bottomPos = scrollElementRef.current.scrollHeight
      scrollElementRef.current.scrollTo({ top: to === 'top' ? topPos : bottomPos })
      setIsInternalScroll(false)
    },
    [scrollElementRef]
  )

  // effects
  useEventListener('scroll', handleScrollEvent, scrollElementRef)
  useEffect(() => {
    handleScrollTo(initialScrollPosition)
  }, [scrollElementRef, initialScrollPosition, handleScrollTo])

  return {
    handleScrollTo
  }
}

export { useScroll }
