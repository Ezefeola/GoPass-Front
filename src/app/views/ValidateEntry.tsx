import { useTranslation } from "react-i18next"

import { useValidateEntry } from "../../hooks/useValidateEntry"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"

interface ValidateFormElements extends HTMLFormControlsCollection {
  codigoQR: HTMLInputElement
}

interface ValidateFormElement extends HTMLFormElement {
  elements: ValidateFormElements
}

function ValidateEntry({ onValidate }: { onValidate: (isValid: boolean) => void }) {
  const { t } = useTranslation()
  const { verified } = useValidateEntry()

  const handleSubmit = async (event: React.FormEvent<ValidateFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const target = form.elements

    const codigoQR = target.codigoQR.value

    // Asume que `verified` retorna un booleano que indica si es válido o no
    const isValid = await verified(codigoQR)
    onValidate(isValid)
  }

  return (
    <>
      <section className="flex w-full flex-col items-center p-4">
        <div className="m-4 flex justify-center text-center">
          <h2 className="mt-20 pt-7 text-xl font-semibold">{t("verifyAuthenticityEntry")}</h2>
        </div>
      </section>
      <form className="flex flex-col items-center text-center" onSubmit={handleSubmit}>
        <InputField
          type="text"
          className="w-[22rem] rounded-md border-2 border-solid p-2"
          placeholder={t("alphanumericCodeQR")}
          id="codigoQR"
        />
        <Button className="mb-6 mt-12 bg-customGreen text-2xl font-semibold text-white" type="submit">
          {t("verify")}
        </Button>
      </form>
    </>
  )
}

export default ValidateEntry
