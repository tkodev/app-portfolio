import { create } from 'zustand'

type BgmStore = {
  bgmState: 'playing' | 'paused' | 'stopped'
  bgmData: {
    buffered: Array<{
      start: number
      end: number
    }>
    time: number
    duration: number
    paused: boolean
    muted: boolean
    volume: number
    playing: boolean
  }
  setBgmState: (newBgmState: BgmStore['bgmState']) => void
  setBgmData: (newAudioData: BgmStore['bgmData']) => void
}

const useBgmStore = create<BgmStore>()((set) => ({
  bgmState: 'paused',
  bgmData: {
    buffered: [],
    time: 0,
    duration: 0,
    paused: true,
    muted: false,
    volume: 1,
    playing: false
  },
  setBgmState: (newBgmState) => set(() => ({ bgmState: newBgmState })),
  setBgmData: (newBgmData) => set(() => ({ bgmData: newBgmData }))
}))

export { useBgmStore }
export type { BgmStore }
