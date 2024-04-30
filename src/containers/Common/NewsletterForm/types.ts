import { FIELD_HELPERS, getRequiredObjectSchema } from 'helpers/yup'

export type FormValues = {
  email: string
}

export const schema = getRequiredObjectSchema<FormValues>(yup => ({
  email: yup
    .string()
    .email(FIELD_HELPERS.EMAIL)
    .required(FIELD_HELPERS.REQUIRED),
}))
