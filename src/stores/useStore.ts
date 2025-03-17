import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  fish: number
  addBear: () => void
  removeBear: () => void
  addFish: (quantity: number) => void
  eatFish: () => void
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        fish: 0,
        addBear: () => set((state) => ({ bears: state.bears + 1 })),
        removeBear: () => set((state) => ({ bears: state.bears - 1 })),
        addFish: (quantity: number) => set((state) => ({ fish: state.fish + quantity })),
        eatFish: () => 
          set((state) => ({ 
            fish: state.fish > 0 ? state.fish - 1 : 0 
          })),
      }),
      {
        name: 'bear-storage', // 持久化存储的名称
      }
    )
  )
) 