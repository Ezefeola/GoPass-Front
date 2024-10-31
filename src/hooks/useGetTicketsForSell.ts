import { getTicketsForSell } from "../service/getTicketsForSell"

import { SystemError } from "com/errors"
import useContext from "../context/UseContext"

import { ticketStore } from "../store_zustand/tickets"

export const useGetTicketsForSell = () => {
  const { alert } = useContext()

  const getTicketsForSellData = async (pageNumber: number, pageSize: number): Promise<void> => {
    try {
      const data = await getTicketsForSell(pageNumber, pageSize)
      ticketStore.getState().setTickets(data)
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getTicketsForSellData }
}
