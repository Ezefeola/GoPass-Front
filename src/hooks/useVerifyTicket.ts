import { SystemError } from "com/errors"

import useContext from "../context/UseContext"
import { verifyTicket } from "../service/verifyTicket"

import { ticketStore } from "../store_zustand/tickets"

export const userVerifyTicket = () => {
  const { alert } = useContext()

  const verifiedTicket = async (codigoQR: string): Promise<void> => {
    try {
      const ticketData = await verifyTicket(codigoQR)
      ticketStore.getState().setTicketToResell(ticketData)
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { verifiedTicket }
}
