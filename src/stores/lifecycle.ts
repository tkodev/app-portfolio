import { create } from 'zustand'

type LifecycleState = {
  transitionState: 'initial' | 'intro' | 'ready' | 'loading' | 'error'
  setLifecycleState: (newLoadState: LifecycleState['transitionState']) => void
}

const useLifecycleState = create<LifecycleState>()((set) => ({
  transitionState: 'initial',
  setLifecycleState: (newLoadState) => set(() => ({ transitionState: newLoadState }))
}))

export { useLifecycleState }
export type { LifecycleState }
