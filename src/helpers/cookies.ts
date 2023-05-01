import { Cookies } from 'models'

export const checkCookie = (name: Cookies): string | undefined => {
  const decodedCookies = decodeURIComponent(document.cookie).split(';')
  const cookie = decodedCookies.find(x => x.includes(name))
  const value = cookie?.trim().replace(name + '=', '')

  return value
}

export const setCookie = (
  name: string,
  value: string,
  exdays: number,
): void => {
  const date = new Date()
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}
