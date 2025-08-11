import { useEffect, useMemo, useState } from 'react'
import eventsData from '@/data/events.json'
import EventCard from '@/components/cards/EventCard'
import type { Event } from '@/types'
import { SEO } from '@/lib/seo'

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [tab, setTab] = useState<'upcoming'|'past'>('upcoming')

  useEffect(()=> setEvents(eventsData as Event[]), [])

  const upcoming = useMemo(() => events.filter(e => new Date(e.start).getTime() >= Date.now()), [events])
  const past = useMemo(() => events.filter(e => new Date(e.start).getTime() < Date.now()), [events])

  const list = tab === 'upcoming' ? upcoming : past

  return (
    <div className="container py-10">
      <SEO title="Events — Link India" description="Upcoming and past events" />
      <h1 className="text-2xl font-semibold">Events</h1>
      <div className="mt-4 flex gap-2">
        <button onClick={()=>setTab('upcoming')} className={"px-3 py-2 rounded border " + (tab==='upcoming'?'bg-slate-100':'')}>Upcoming</button>
        <button onClick={()=>setTab('past')} className={"px-3 py-2 rounded border " + (tab==='past'?'bg-slate-100':'')}>Past</button>
      </div>
      <div className="mt-6 grid gap-4">
        {list.map(e => <EventCard key={e.id} event={e} />)}
      </div>
    </div>
  )
}
