// eslint-disable-next-line import/prefer-default-export
export function getUrlWithTimeStamp(url?: string) {
  if (!url) return ''
  const tmpUrl = new URL(url)
  tmpUrl.searchParams.append('ts', new Date().getTime().toString())
  return tmpUrl.href
}
