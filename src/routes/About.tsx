import { SEO } from '@/lib/seo'

export default function About() {
  return (
    <>
      <SEO title="About — Link India" description="About Link India" />

      {/* HERO: soft gradient, split layout */}
      <section
        className="relative isolate border-b bg-gradient-to-br from-slate-50 to-white"
        aria-label="About Link India"
      >
        <div className="container py-16 md:py-24">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-wider text-slate-500">About</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Link India
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
                A London-based policy think tank dedicated to strengthening UK–India relations.
              </p>
            </div>

            {/* Side card for quick context */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border bg-white/60 p-5 backdrop-blur">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  At a glance
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Strengthening economic & cultural ties between the UK and India
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Research, dialogues, and stakeholder consultations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Non‑partisan & analytically independent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* subtle decorative blob */}
        <div
          className="pointer-events-none absolute -top-20 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
          aria-hidden
        />
      </section>

      {/* MAIN CONTENT: editorial two-column */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-xl font-semibold">Who we are</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-slate-700">
                Link India is a London-based policy think tank dedicated to strengthening economic
                and cultural relations between the United Kingdom and India. We work to shape a
                shared policy consensus on key areas of bilateral cooperation, particularly in
                trade, investment, and people-to-people engagement.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-xl font-semibold">How we work</h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-slate-700">
                Through structured dialogues, research-driven analysis, and stakeholder
                consultations, Link India provides actionable policy insights and strategic
                recommendations to both governments and the private sector. Our mission is to deepen
                mutual understanding and foster long-term partnerships that reflect the evolving
                priorities of both nations.
              </p>
            </div>
          </div>

          {/* Mission pull-quote */}
          <figure className="mt-12 rounded-2xl border bg-slate-50 p-6">
            <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
              “Our mission is to deepen mutual understanding and foster long‑term partnerships that
              reflect the evolving priorities of both nations.”
            </blockquote>
          </figure>

          {/* Independence callout */}
          <div className="mt-12 rounded-2xl border p-6">
            <div className="flex items-start gap-4">
              <div
                className="mt-1 h-8 w-8 shrink-0 rounded-full border bg-white"
                aria-hidden
              />
              <div>
                <h3 className="text-base font-semibold">Independence</h3>
                <p className="mt-1 text-slate-700">
                  As a non-partisan institution, Link India maintains complete intellectual and
                  analytical independence in all its work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

</>
  )}



      {/* OPTIONAL MEDIA STRIP: placeholder boxes to swap later */}
{/* 
      <section className="border-t bg-white">
        <div className="container py-10">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="h-40 rounded-2xl border bg-slate-50" aria-hidden />
            <div className="h-40 rounded-2xl border bg-slate-50" aria-hidden />
            <div className="h-40 rounded-2xl border bg-slate-50" aria-hidden />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Replace these placeholders with team/event photos or illustrations.
          </p>
        </div>
      </section>
    </>
  )
} */}

