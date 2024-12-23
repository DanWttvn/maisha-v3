export const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`)
  }

  const data = (await response.json()) as T

  return data
}
