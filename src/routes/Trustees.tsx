import { useEffect, useState, useCallback } from 'react'
import { SEO } from '@/lib/seo'
import team from '@/data/team.json'

type Member = {
  id: string
  name: string
  role: string
  bio?: string
  photo?: string // e.g. "/images/trustees/jane-doe.jpg"
}

export default function Trustees() {
  const [members, setMembers] = useState<Member[]>([])
  const [active, setActive] = useState<Member | null>(null)

  useEffect(() => setMembers(team as Member[]), [])

  // Close on Esc
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setActive(null)
  }, [])
  useEffect(() => {
    if (active) {
      document.addEventListener('keydown', onKeyDown)
      document.body.classList.add('overflow-hidden') // lock scroll
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [active, onKeyDown])

  return (
    <div className="container py-10">
      <SEO title="Trustees — Link India" description="Profiles of the trustees" />
      <h1 className="text-2xl font-semibold">Profiles of the Trustees</h1>

      {/* Grid */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <button
            key={m.id}
            onClick={() => setActive(m)}
            className="group text-left rounded-2xl border bg-white p-6 shadow-sm transition
                       hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2
                       focus:ring-primary/60 focus:ring-offset-2"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={`${m.name} portrait`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-slate-400">
                  <span className="text-sm">Photo coming soon</span>
                </div>
              )}
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">{m.name}</h2>
            <p className="text-sm text-slate-600">{m.role}</p>
            {m.bio && <p className="mt-3 text-sm text-slate-700 line-clamp-3">{m.bio}</p>}
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
              View profile
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
            </span>
          </button>
        ))}
      </div>

      {/* Fullscreen modal */}
      {active && (
        <div
          className="fixed inset-0 z-50"
          aria-labelledby="trustee-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-100"
            onClick={() => setActive(null)}
          />

          {/* Panel */}
          <div className="absolute inset-0 grid place-items-center px-4 py-8">
            <div
              className="relative w-full max-w-6xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5
                         transition-transform duration-200 animate-in fade-in zoom-in"
            >
              {/* Close button */}
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center
                           rounded-full bg-white/80 text-slate-700 shadow-sm ring-1 ring-slate-200
                           hover:bg-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Content */}
              {/* Mobile version */}
              <div className="grid gap-4 p-4 md:hidden max-h-[70vh] overflow-y-auto">
                <div className="col-span-2">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                    {active.photo ? (
                      <img
                        src={active.photo}
                        alt={`${active.name} portrait`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-400">
                        <span className="text-xs">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">{active.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{active.role}</p>
                  {active.bio && (
                    <p className="mt-3 text-xs text-slate-700 leading-snug whitespace-pre-line">
                      {active.bio}
                    </p>
                  )}
                </div>
              </div>


              {/* Desktop version */}
              <div className="hidden md:grid gap-6 p-6 md:grid-cols-5">
                <div className="md:col-span-2">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                    {active.photo ? (
                      <img
                        src={active.photo}
                        alt={`${active.name} portrait`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-400">
                        <span className="text-sm">Photo coming soon</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-3xl font-semibold text-slate-900">{active.name}</h3>
                  <p className="mt-2 text-lg text-slate-600">{active.role}</p>
                  {active.bio && (
                    <p className="mt-4 text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                      {active.bio}
                    </p>
                  )}
                </div>
              </div>


              {/* Footer actions (optional) */}
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
