export const getUrlParam = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search)
  const urlParam = urlParams.get(param)

  return !urlParam ? '' : decodeURIComponent(urlParam)
}

export const deleteUrlParam = (param: string): string => {
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.delete(param)

  return urlParams.toString()
}

export const assertParam = (key: string, value?: string): string => {
  if (!value) return ''

  return `${key}=${encodeURIComponent(value)}`
}
