import { SystemError } from "com/errors"
// import { useDispatch } from "react-redux"
import useContext from "../context/UseContext"
import { updateProfile } from "../service/updateProfile"
// import { updateUser } from "../store/user/userSlice"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

import { userStore } from "../store_zustand/users"

export const useUpdateProfile = () => {
  const { alert } = useContext()
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const updatedProfile = async (
    nombre: string,
    dni: string,
    numeroTelefono: string,
    image: string,
    city: string,
    country: string
  ) => {
    try {
      const userData = await updateProfile(nombre, dni, numeroTelefono, image, city, country)
      userStore.getState().setUserProfile(userData)

      Swal.fire({
        title: "Perfil actualizado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/")
        }
      })
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      } else {
        alert(error.message)
      }
    }
  }

  return { updatedProfile }
}
