import { request } from 'helpers/http'

const BREVO_API_KEY = process.env['BREVO_API_KEY'] || ''
const CONTACTS_ENDPOINT = 'https://api.brevo.com/v3/contacts'

type Member = {
  name: string
  lastName: string
  email: string
  dni?: string
  zipCode?: string
  iban: string
  monthlyPayment: number
}

export const postMember = async ({ email, ...attributes }: Member) => {
  const MEMBERS_LIST_ID = 8

  const res = await request<unknown>(CONTACTS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      email: email,
      attributes: {
        NOMBRE: attributes.name,
        APELLIDOS: attributes.lastName,
        // ID: attributes.dni,
        // CODIGO_POSTAL: attributes.zipCode,
        CUENTA_BANCARIA: attributes.iban,
        APORTACION_MENSUAL: String(attributes.monthlyPayment),
      },
      listIds: [MEMBERS_LIST_ID],
    }),
  })

  return res
}
