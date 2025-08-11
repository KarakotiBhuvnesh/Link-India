export function createICS(event: { title: string; start: string; end?: string; description?: string; location?: string }) {
  const dtStart = new Date(event.start).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const dtEnd = event.end ? new Date(event.end).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z' : dtStart
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Link India//EN',
    'BEGIN:VEVENT',
    `UID:${cryptoRandom(12)}@linkindia`,
    `DTSTAMP:${dtStart}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeICS(event.title)}`,
    event.location ? `LOCATION:${escapeICS(event.location)}` : '',
    event.description ? `DESCRIPTION:${escapeICS(event.description)}` : '',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(Boolean).join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${slugify(event.title)}.ics`
  a.click()
  URL.revokeObjectURL(url)
}

function cryptoRandom(n: number) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let out = ''
  for (let i = 0; i < n; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)]
  return out
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}

function escapeICS(s: string) {
  return s.replace(/\n/g, '\\n').replace(/,/, '\\,')
}
