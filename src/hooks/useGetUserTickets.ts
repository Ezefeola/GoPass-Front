import { SystemError } from "com/errors"

import useContext from "../context/UseContext"
import { getUserTickets } from "../service/getUserTickets"

import { ticketStore } from "../store_zustand/tickets"

export const useGetUserTickets = () => {
  const { alert } = useContext()

  const getUserTicketsData = async (): Promise<void> => {
    try {
      const data = await getUserTickets()
      ticketStore.setState({ purchasedTickets: data })
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getUserTicketsData }
}
