import { create } from "zustand"

import { Ticket } from "../types"

interface State {
  ticket?: Ticket

  tickets: Ticket[]
  setTickets: (tickets: Ticket[]) => void

  selectedTicket: Ticket | null
  setSelectedTicket: (ticket: Ticket) => void

  purchasedTickets: Ticket[]
  setPurchasedTickets: (tickets: Ticket[]) => void

  ticketsSold: Ticket[]
  setTicketsSold: (tickets: Ticket[]) => void

  validateTicket?: Ticket
  setValidateTicket: (ticket: Ticket) => void

  ticketToResell?: Ticket
  setTicketToResell: (ticket: Ticket) => void
}

const initialState: State = {
  tickets: [],
  selectedTicket: null,
  purchasedTickets: [],
  ticketsSold: [],

  setTickets: () => {},
  setSelectedTicket: () => {},
  setPurchasedTickets: () => {},
  setTicketsSold: () => {},
  setValidateTicket: () => {},
  setTicketToResell: () => {},
}

export const ticketStore = create<State>((set) => ({
  ...initialState,

  setTickets: (tickets: Ticket[]) => set({ tickets }),

  setSelectedTicket: (ticket: Ticket) => set({ selectedTicket: ticket }),

  setPurchasedTickets: (tickets: Ticket[]) => set({ purchasedTickets: tickets }),

  setTicketsSold: (tickets: Ticket[]) => set({ ticketsSold: tickets }),

  setValidateTicket: (ticket: Ticket) => set({ validateTicket: ticket }),

  setTicketToResell: (ticket: Ticket) => set({ ticketToResell: ticket }),
}))
