import dayjs from 'dayjs'

export function fmtDateTimeISOToIST(iso: string) {
  // Returns "11 Aug 2025, 5:30 PM IST"
  const d = dayjs(iso)
  return d.utc().local().format('DD MMM YYYY, h:mm A') + ' IST'
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length
  const min = Math.max(1, Math.round(words / 225))
  return `${min} min read`
}
