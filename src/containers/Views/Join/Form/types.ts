import { FIELD_HELPERS, getRequiredObjectSchema } from 'helpers/yup'

export type FormValues = {
  name: string
  lastName: string
  // dni: string
  email: string
  // zipCode: string
  IBAN: string
  termsAccepted: boolean
}

export const schema = getRequiredObjectSchema<FormValues>(yup => ({
  name: yup.string().required(FIELD_HELPERS.REQUIRED),
  lastName: yup.string().required(FIELD_HELPERS.REQUIRED),
  // dni: yup.string().required(FIELD_HELPERS.REQUIRED),
  email: yup
    .string()
    .email(FIELD_HELPERS.EMAIL)
    .required(FIELD_HELPERS.REQUIRED),
  // zipCode: yup.string().required(FIELD_HELPERS.REQUIRED),
  IBAN: yup
    .string()
    .matches(/^[A-Za-z]{2}[0-9 ]+$/, FIELD_HELPERS.IBAN)
    .required(FIELD_HELPERS.REQUIRED),
  termsAccepted: yup.boolean().required(FIELD_HELPERS.REQUIRED),
}))
