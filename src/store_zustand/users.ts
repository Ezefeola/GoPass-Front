import { create } from "zustand"
import { User } from "../types"

interface State {
  user: User
  userSeller: User

  setUserProfile: (user: User) => void

  setUserSellerInfo: (user: User) => void

  setUser: (user: User) => void
}

export const userStore = create<State>((set) => ({
  user: {} as User,
  userSeller: {} as User,

  setUser: (user: User) => set({ user }),

  setUserProfile: (user: User) => set({ user }),

  setUserSellerInfo: (user: User) => set({ userSeller: user }),
}))
