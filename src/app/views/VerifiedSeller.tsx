import { useTranslation } from "react-i18next"

import RatingCheck from "../components/core/RatingCheck"
import Avatar from "../components/UI/Avatar"

import { useEffect } from "react"
import { useGetSellerInfo } from "../../hooks/useGetSellerInfo"

import { userStore } from "../../store_zustand/users"
import { Ticket } from "../../types"

export default function VerifiedSeller({ ticket }: { ticket: Ticket }) {
  const { t } = useTranslation()
  const { getUserSellerInfo } = useGetSellerInfo(ticket.vendedorId)

  const user = userStore((state) => state.userSeller)

  useEffect(() => {
    getUserSellerInfo()
  }, [])

  return (
    <>
      <div className="flex flex-col p-2">
        <p className="mb-2 font-bold">{t("verifiedSeller")}</p>
        <div className="flex flex-row">
          <Avatar size="5rem" img={user.image || ""} />

          <div>
            <span className="flex gap-3">
              <p className="mb-2 font-azonix">{user.nombre}</p>
              <RatingCheck />
            </span>
            <div className="flex flex-col">
              <p className="mb-1 font-bold">La vende por:</p>
              <p>
                <em>{ticket.resaleDetail}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
