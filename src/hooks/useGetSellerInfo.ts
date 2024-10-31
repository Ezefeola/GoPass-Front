import { SystemError } from "com/errors"

import useContext from "../context/UseContext"
import { getSellerInfo } from "../service/getSelleRInfo"

import { userStore } from "../store_zustand/users"

export const useGetSellerInfo = (userSellerInfoId: number) => {
  const { alert } = useContext()

  const getUserSellerInfo = async (): Promise<void> => {
    try {
      const profile = await getSellerInfo(userSellerInfoId)
      userStore.getState().setUserSellerInfo(profile)
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getUserSellerInfo }
}
