'use client'

import { TransitionRouter } from 'next-transition-router'
import { FC, ReactNode } from 'react'
import { useBgmStore } from '@/stores/bgm'
import { useLifecycleState } from '@/stores/lifecycle'

type TransitionProviderProps = {
  children: ReactNode
}

const TransitionProvider: FC<TransitionProviderProps> = (props) => {
  const { children } = props

  const { setLifecycleState } = useLifecycleState()
  const { bgmState, setBgmState } = useBgmStore()

  return (
    <TransitionRouter
      leave={(next) => {
        if (bgmState === 'paused') setBgmState('playing')
        setLifecycleState('loading')
        next()
      }}
      enter={(next) => {
        setLifecycleState('ready')
        next()
      }}
      auto
    >
      {children}
    </TransitionRouter>
  )
}

export { TransitionProvider }
