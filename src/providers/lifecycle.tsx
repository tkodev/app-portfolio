'use client'

import { TransitionRouter } from 'next-transition-router'
import { FC, ReactNode } from 'react'
import { useBgmStore } from '@/stores/bgm'
import { useLifecycleState } from '@/stores/lifecycle'

type LifecycleProps = {
  children: ReactNode
}

const LifecycleProvider: FC<LifecycleProps> = (props) => {
  const { children } = props

  const { setLifecycleState } = useLifecycleState()
  const { bgmState, setBgmState } = useBgmStore()

  return (
    <TransitionRouter
      enter={(next) => {
        setLifecycleState('ready')
        next()
      }}
      leave={(next) => {
        if (bgmState === 'paused') setBgmState('playing')
        setLifecycleState('loading')
        next()
      }}
      auto
    >
      {children}
    </TransitionRouter>
  )
}

export { LifecycleProvider }
