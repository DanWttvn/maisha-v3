import { FIELD_HELPERS, Yup } from 'helpers/yup'

export type FormValues = {
  name: string
  lastName: string
  dni: string
  email: string
  zipCode: string
  IBAN: string
  termsAccepted: boolean
}

export const schema = Yup.object({
  name: Yup.string().required(FIELD_HELPERS.REQUIRED),
  lastName: Yup.string().required(FIELD_HELPERS.REQUIRED),
  dni: Yup.string().required(FIELD_HELPERS.REQUIRED),
  email: Yup.string()
    .email(FIELD_HELPERS.EMAIL)
    .required(FIELD_HELPERS.REQUIRED),
  zipCode: Yup.string().required(FIELD_HELPERS.REQUIRED),
  IBAN: Yup.string()
    .matches(/^[A-Za-z]{2}[0-9 ]+$/, FIELD_HELPERS.IBAN)
    .required(FIELD_HELPERS.REQUIRED),
  termsAccepted: Yup.boolean().required(FIELD_HELPERS.REQUIRED),
})
