import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

type ObjectShapeValues = Yup.ObjectShape extends Record<string, infer V>
  ? V
  : never

type Schema<T> = Record<keyof T, ObjectShapeValues>

// export const getRequiredObjectSchema = <T>(
//   callback: (yup: typeof Yup) => Record<keyof T, Yup.AnySchema>,
// ): Yup.AnyObjectSchema => {
//   return Yup.object(callback(Yup)).required() as Yup.AnyObjectSchema
// }

export const FIELD_HELPERS = {
  REQUIRED: 'Este campo es obligatorio',
  EMAIL: 'Por favor, introduce un email válido',
  IBAN: 'Añade un IBAN válido',
}

export { yupResolver, Yup }
export type { Schema }
