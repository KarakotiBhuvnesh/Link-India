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



// ---- helpers (place above `return`) ----
const tz = event.timezone || "Asia/Kolkata";

// robust: treat event as past if its end (if any) or start is before now
const startDate = new Date(event.start);
const endDate = event.end ? new Date(event.end) : null;
const now = new Date();
const isPast = endDate ? endDate.getTime() < now.getTime() : startDate.getTime() < now.getTime();

const startLocal = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: tz,
}).format(startDate);

const shareHref = typeof window !== "undefined" ? window.location.href : "";
const onShare = async () => {
  const text = `${event.title} — ${event.excerpt}`;
  if (typeof navigator !== "undefined" && navigator.share) {
    try { await navigator.share({ title: event.title, text, url: shareHref }); } catch {}
  } else {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareHref)}`;
    window.open(url, "_blank");
  }
};



return (
  <div className="min-h-screen bg-white">
    <SEO title={event.title} description={event.excerpt} type="event" jsonLd={jsonLd} />

    {/* Hero / Headline — reduced height */}
    <section className="relative border-b">
      <div className="container">
        <div className="relative aspect-[21/9] md:aspect-[24/9] overflow-hidden rounded-b-2xl">
        {event.cover ? (
          <img
            src={event.cover}
            alt={event.title}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        ) : null}

        
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {event.tags?.slice(0, 3).map((t: string) => (
                <span key={t} className="rounded bg-white/90 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-700">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="max-w-4xl text-2xl font-extrabold leading-tight text-white md:text-4xl">
              {event.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xl text-white/90">
              {event.excerpt}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/90">
              <span>{startLocal}</span>
              <span className="opacity-70">•</span>
              {event.venue?.name && (
                <span className="rounded bg-white/10 px-2 py-0.5">
                  {event.venue.name}{event.venue?.address ? ` — ${event.venue.address}` : ""}
                </span>
              )}
              <span className="opacity-70">•</span>
              <span>Timezone: {tz}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Body */}
    <div className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main article */}
        <article className="prose max-w-3xl lg:col-span-2 lg:pl-20" >
          {/* Intro / Excerpt */}
          <p className="text-lg text-slate-700 leading-relaxed">{event.subtitle}</p>

          <hr className="my-6 border-slate-200" />

          {/* Key Details */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Key Details</h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong className="text-slate-900">Speaker:</strong> {event.speakers}
              </li>
              <li>
                <strong className="text-slate-900">Topic:</strong> {event.excerpt}
              </li>
              {event.venue?.name && (
                <li>
                  <strong className="text-slate-900">Venue:</strong> {event.venue.name}
                  {event.venue?.address ? (
                    <span className="block md:inline">, {event.venue.address}</span>
                  ) : null}
                </li>
              )}
              <li>
                <strong className="text-slate-900">When:</strong> {startLocal} ({tz})
              </li>
            </ul>
          </section>

          {/* Body */}
          {event.body && (
            <section className="mt-8">
              <p style={{ whiteSpace: 'pre-line' }} className="text-slate-700 leading-relaxed">{event.body}</p>
            </section>
          )}
        </article>


        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 flex flex-col gap-6">
            {/* Event details */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">Event Details</div>
              <dl className="mt-3 space-y-2 text-sm text-slate-700">
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Start</dt>
                  <dd className="text-right">{startLocal}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Timezone</dt>
                  <dd className="text-right">{tz}</dd>
                </div>
                {event.venue?.name && (
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-500">Venue</dt>
                    <dd className="text-right">{event.venue.name}</dd>
                  </div>
                )}
                {event.tags?.length ? (
                  <div className="flex items-start justify-between gap-3">
                    <dt className="text-slate-500">Tags</dt>
                    <dd className="flex max-w-[65%] flex-wrap justify-end gap-1">
                      {event.tags.map((t: string) => (
                        <span key={t} className="rounded-full border px-2 py-0.5 text-[11px]">{t}</span>
                      ))}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>

            {/* Add to calendar — only when upcoming */}
            {!isPast && (
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold">Attend / Reminder</div>
                <p className="mt-1 text-sm text-slate-600">Add this event to your calendar.</p>
                <button
                  className="mt-3 w-full rounded-lg border bg-black px-3 py-2 text-sm font-medium text-white hover:bg-slate-900"
                  onClick={() =>
                    createICS({ title: event.title, start: event.start, location: event.venue?.name })
                  }
                >
                  Add to calendar (.ics)
                </button>
              </div>
            )}

            {/* Share */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">Share</div>
              <p className="mt-1 text-sm text-slate-600">Let others read this update.</p>
              <div className="mt-3 flex gap-2">
                <a
                  className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `${event.title} — ${event.excerpt}`
                  )}&url=${encodeURIComponent(shareHref)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tweet
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
);










  // return (
  //   <div className="container py-10 prose max-w-none">
  //     <SEO title={event.title} description={event.excerpt} type="event" jsonLd={jsonLd} />
  //     <h1>{event.title}</h1>
  //     <p className="text-sm text-slate-500">{new Date(event.start).toString()}</p>
  //     <p>{event.excerpt}</p>
  //     {event.venue?.name && <p><strong>Venue:</strong> {event.venue.name}</p>}
  //     <div className="mt-4 flex gap-2">
  //       <button className="border rounded px-3 py-2" onClick={()=>createICS({ title: event.title, start: event.start, location: event.venue?.name })}>
  //         Add to calendar (.ics)
  //       </button>
  //     </div>
  //     <img
  //       src={event.cover}
  //       alt={`${event.cover} portrait`}
  //       className="h-full w-full object-cover"
  //       />
  //   </div>
  // )
}
