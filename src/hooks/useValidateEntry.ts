import { validateEntry } from "../service/validateEntry"

import { ticketStore } from "../store_zustand/tickets"

export const useValidateEntry = () => {
  const verified = async (codigoQR: string): Promise<boolean> => {
    try {
      const ticketData = await validateEntry(codigoQR)
      ticketStore.setState({ validateTicket: ticketData })
      return true
    } catch {
      return false
    }
  }

  return { verified }
}
