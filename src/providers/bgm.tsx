'use client'

import { FC, Fragment, ReactNode, useEffect } from 'react'
import { useAudio } from 'react-use'
import { useBgmStore } from '@/stores/bgm'

type BgmProviderProps = {
  children: ReactNode
}

const BgmProvider: FC<BgmProviderProps> = (props) => {
  const { children } = props

  const { bgmState, setBgmData, setBgmState } = useBgmStore()

  const [audio, audioData, controls] = useAudio({
    src: '/audio/an-empty-bus-justin-marshall-elias-main-version-36442-03-56.mp3',
    loop: true
  })

  // trigger audio based on store data
  useEffect(() => {
    if (!audioData.playing && bgmState === 'playing') controls.play()
    if (!audioData.paused && bgmState === 'paused') controls.pause()
    if (!audioData.paused && bgmState === 'stopped') {
      controls.pause()
      controls.seek(0)
    }
  }, [bgmState, audioData, controls])

  // update store data based on audio
  useEffect(() => {
    setBgmData(audioData)
  }, [bgmState, audioData, setBgmState, setBgmData])

  return (
    <Fragment>
      {children}
      {audio}
    </Fragment>
  )
}

export { BgmProvider }
