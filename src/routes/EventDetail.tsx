import { useParams } from 'react-router-dom'
import events from '@/data/events.json'
import { SEO } from '@/lib/seo'
import { createICS } from '@/lib/ics'

export default function EventDetail() {
  const { slug } = useParams()
  const event = (events as any[]).find(e => e.slug === slug)
  if (!event) return <div className="container py-10">Event not found.</div>

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "startDate": event.start,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.venue?.name || 'Venue'
    }
  }

  return (
    <div className="container py-10 prose max-w-none">
      <SEO title={event.title} description={event.excerpt} type="event" jsonLd={jsonLd} />
      <h1>{event.title}</h1>
      <p className="text-sm text-slate-500">{new Date(event.start).toString()}</p>
      <p>{event.excerpt}</p>
      {event.venue?.name && <p><strong>Venue:</strong> {event.venue.name}</p>}
      <div className="mt-4 flex gap-2">
        <button className="border rounded px-3 py-2" onClick={()=>createICS({ title: event.title, start: event.start, location: event.venue?.name })}>
          Add to calendar (.ics)
        </button>
        <a className="border rounded px-3 py-2" href="/membership">Register</a>
      </div>
    </div>
  )
}
