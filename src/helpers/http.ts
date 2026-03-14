export const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, options)

  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const error = await response.json()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (url.includes('brevo')) {
      const brevoError = error as {
        code: string
        message: string
        metadata: { duplicate_identifiers: string[] }
      }
      if (brevoError?.code === 'duplicate_parameter') {
        if (brevoError.metadata?.duplicate_identifiers?.includes('email')) {
          throw new Error('El email ya está asociado a otro contacto')
        } else {
          throw new Error('El contacto ya existe')
        }
      }
    }

    if (options?.method === 'POST') {
      throw new Error(
        `Ha ocurrido un error, por favor, vuelve a intentarlo más tarde o envía un email a info@maisharoots.org. ${response.statusText}`,
      )
    } else {
      throw new Error(`Error! status: ${response.statusText}`)
    }
  }

  const data = (await response.json()) as T

  return data
}
