export interface User {
  image: string | null
  email: string | null
  nombre: string | null
  dni: string | null
  numeroTelefono: string | null
  city: string | null
  country: string | null
  verificado: boolean
  id: number | null
  verificadoSms?: boolean
}

export interface Ticket {
  image: string
  gameName: string
  compradorId: number
  description: string
  address: string
  eventDate: string
  codigoQR: string
  verificada: boolean
  entradaId: number
  entrada: Entrada
  fechaReventa: string
  precio: string
  resaleDetail: string
  vendedorId: number
  usuarioId: number
}
