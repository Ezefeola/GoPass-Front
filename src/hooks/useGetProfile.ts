import { SystemError } from "com/errors"

import useContext from "../context/UseContext"
import { getProfile } from "../service/getProfile"

import { userStore } from "../store_zustand/users"

export const useGetProfile = () => {
  const { alert } = useContext()

  const getProfileData = async (): Promise<void> => {
    try {
      const profileData = await getProfile()
      userStore.getState().setUserProfile(profileData)
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getProfileData }
}
