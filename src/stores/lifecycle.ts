import { create } from 'zustand'

type LifecycleState = {
  lifecycleState: 'initial' | 'intro' | 'ready' | 'loading' | 'error'
  setLifecycleState: (newLoadState: LifecycleState['lifecycleState']) => void
}

const useLifecycleState = create<LifecycleState>()((set) => ({
  lifecycleState: 'initial',
  setLifecycleState: (newLoadState) => set(() => ({ lifecycleState: newLoadState }))
}))

export { useLifecycleState }
export type { LifecycleState }
