import { SEO } from '@/lib/seo'
import Purpose from './Purpose'
export default function Vision() {
  return (
    <>
      <SEO
        title="Vision — Link India"
        description="To support evidence-based policymaking that deepens UK–India cooperation across economic, educational, and cultural domains."
      />

      {/* FULL-BLEED HERO */}
      <section className="relative isolate">
        <img
          src="/images/vision-hero.jpg"
          alt="A quiet moment during a UK–India policy dialogue"
          className="
            w-full object-cover
            h-[100vh]                      /* DESKTOP/TABLET: full viewport height */
            max-[767px]:h-[45vh]           /* MOBILE: shorter for better width view */
            max-[767px]:overflow-hidden
            max-[767px]:transform max-[767px]:transform-gpu
            max-[767px]:origin-center max-[767px]:scale-[1] 
          "
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/35" aria-hidden />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container py-10">
              <h1
                className="
                  max-w-4xl 
                  text-lg font-semibold text-white        /* MOBILE: smaller text */
                  md:text-5xl md:leading-[1.15]           /* DESKTOP/TABLET: original size */
                "
              >
                “To support evidence-based policymaking that deepens UK–India cooperation across
                economic, educational, and cultural domains.”
              </h1>
            </div>
          </div>

      </section>

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
        {/* Who we are */}
        <div className="grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-5 flex items-center gap-3">
            <img
              src="/images/wwr.png"
              alt=""
              className="h-20 w-20 shrink-0"
            />
            <h2 className="text-xl font-semibold">Who we are</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-slate-700">
              Link India is a London-based policy think tank dedicated to strengthening
              economic and cultural relations between the United Kingdom and India.
              We work to shape a shared policy consensus on key areas of bilateral
              cooperation, particularly in trade, investment, and people-to-people
              engagement.
            </p>
          </div>
        </div>
        {/* How we work */}
    <div className="mt-10 grid gap-8 md:grid-cols-12 items-start">
      <div className="md:col-span-5 flex items-center gap-3">
        <img
          src="/images/hww.png"
          alt=""
          className="h-20 w-20 shrink-0"
        />
        <h2 className="text-xl font-semibold">How we work</h2>
      </div>
      <div className="md:col-span-7">
        <p className="text-slate-700">
          Through structured dialogues, research-driven analysis, and stakeholder
          consultations, Link India provides actionable policy insights and
          strategic recommendations to both governments and the private sector.
          Our mission is to deepen mutual understanding and foster long-term
          partnerships that reflect the evolving priorities of both nations.
        </p>
      </div>
    </div>
      </div>
     </section>

      {/* LARGE IMAGE MOSAIC (very little text) */}
      <section className="container py-10 md:py-16">
  {/* Wide banner image */}
  <figure className="relative mt-4 overflow-hidden rounded-2xl"> 
    <img
      src="/images/vision-4.jpg"
      alt="Cultural exchange performance representing both nations"
      className="
        w-full border rounded-2xl
        md:h-[32rem] md:object-cover                 /* DESKTOP/TABLET: as-is */
        max-[767px]:h-[140px] max-[767px]:object-cover /* MOBILE: no letterbox, crop */
        max-[767px]:transform max-[767px]:transform-gpu
        max-[767px]:origin-center max-[767px]:scale-[1] /* MOBILE: ~10% zoom */
      "
      loading="lazy"
    />
    <figcaption className="mt-2 text-xs text-slate-500">
      Culture as a bridge—shared stories, shared futures.
    </figcaption>
  </figure>
</section>


      
    
      <Purpose /> 

    <section className="container py-14 md:py-20">
        <div className="rounded-3xl border p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-semibold md:text-3xl">
            What this looks like in practice
          </h2>
          <ul className="mt-6 grid gap-4 text-base text-slate-700 md:grid-cols-2">
            <li className="flex items-start gap-2">
              <Dot /> Quarterly policy briefs with clear, actionable recommendations
            </li>
            <li className="flex items-start gap-2">
              <Dot /> Closed-door roundtables with ministries, industry, and academia
            </li>
            <li className="flex items-start gap-2">
              <Dot /> UK–India strategic forums (tech, education, sustainability)
            </li>
            <li className="flex items-start gap-2">
              <Dot /> Diaspora town halls and stakeholder consultations for feedback
            </li>
          </ul>
        </div>
      </section>

      {/* Independence callout */}
          <div className="mt-12 rounded-2xl border p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="flex items-start gap-4">
              
              <div>
                <h3 className="text-base font-semibold">Independence</h3>
                <p className="mt-1 text-slate-700">
                  As a non-partisan institution, Link India maintains complete intellectual and
                  analytical independence in all its work.
                </p>
              </div>
            </div>
          </div>

      
    </>
  )
}






// HELPERS

function Pillar({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-3 text-sm font-medium tracking-wide text-slate-700">{title}</div>
    </div>
  )
}

/* ---------- Helpers ---------- */
function Card({
  title,
  points,
  icon,
}: {
  title: string
  points: string[]
  icon: string
}) {
  return (
    <div className="rounded-3xl border p-8 transition hover:shadow-md">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border bg-white text-xl">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-5 grid gap-2 text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm md:text-base">
            <Dot /> {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Dot() {
  return <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
}

