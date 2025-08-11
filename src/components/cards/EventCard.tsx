import { Link } from 'react-router-dom'
import type { Event } from '@/types'

export default function EventCard({ event }: { event: Event }) {
  const d = new Date(event.start)
  const date = d.toLocaleDateString(undefined, { day: '2-digit', month: 'short' })
  const isPast = d.getTime() < Date.now()
  return (
    <article className="border rounded-2xl p-4 flex gap-4 items-start">
      <div className="text-center">
        <div className="text-xl font-bold">{date.split(' ')[0]}</div>
        <div className="uppercase text-xs text-slate-500">{date.split(' ')[1]}</div>
      </div>
      <div className="flex-1">
        <Link to={`/events/${event.slug}`} className="font-semibold hover:text-primary">{event.title}</Link>
        <p className="text-sm text-slate-600 mt-1">{event.excerpt}</p>
        <div className="mt-2 text-xs text-slate-500">
          {event.isMembersOnly && <span className="mr-2 inline-block bg-slate-100 px-2 py-0.5 rounded">Members-only</span>}
          {event.venue?.name}
        </div>
      </div>
      <div>
        <Link to={`/events/${event.slug}`} className="text-primary text-sm">{isPast ? 'View' : 'Register →'}</Link>
      </div>
    </article>
  )
}
