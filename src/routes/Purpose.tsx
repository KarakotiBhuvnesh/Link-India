import { SEO } from '@/lib/seo'

export default function Purpose() {
  return (
    <>
      <SEO title="Purpose — Link India" description="Our purpose and how we deliver impact" />

      {/* TOP BAND */}
      <section className="border-b bg-white">
        <div className="container py-14 md:py-20">
          <p className="text-sm uppercase tracking-wide text-slate-500">Our Purpose</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Evidence-led ideas that advance UK–India economic cooperation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            To generate evidence-based insights and policy recommendations that advance
            economic cooperation.
          </p>
        </div>
      </section>

      {/* HOW WE DELIVER (3-panels) */}
      <section className="container py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            title="Research & Outputs"
            points={[
              'Policy briefs, white papers, and reports',
              'Focus: trade, investment, migration, education, cultural diplomacy',
            ]}
            icon="📄"
          />
          <Card
            title="Dialogue & Convening"
            points={[
              'Policy roundtables with government officials',
              'Engagement with business leaders, academics, and civil society',
            ]}
            icon="🗣️"
          />
          <Card
            title="Networks & Ecosystem"
            points={[
              'UK–India strategic forums: tech, education, sustainability',
              'Young Policy Leaders Network for emerging thinkers',
            ]}
            icon="🌐"
          />
        </div>
      </section>

      {/* COPY + IMAGE GALLERY */}
      <section className="container py-6 md:py-10">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          {/* Text */}
          <div className="md:col-span-5">
            <div className="prose max-w-none text-lg leading-relaxed text-slate-700">
              <p>
                We do this by producing policy briefs, white papers, and reports on UK–India
                trade, investment, migration, education, and cultural diplomacy. We disseminate
                this through policy roundtables with government officials, business leaders,
                academics, and civil society.
              </p>
              <p>
                We aim to organize UK–India strategic forums focused on sectors like tech,
                education and sustainability. We are keen on building a UK–India Young Policy
                Leaders Network to engage emerging thinkers. Finally, we will convene diaspora
                town halls or stakeholder consultations for policy feedback.
              </p>
            </div>
          </div>

          {/* Elegant Gallery */}
          <div className="md:col-span-7">
            <div className="grid gap-4 md:grid-cols-6">
              {/* Large lead image */}
              <figure className="relative md:col-span-4 md:row-span-2 overflow-hidden rounded-3xl shadow-sm border">
                <img
                  src="/images/purpose-1.jpg"
                  alt="Roundtable discussion between UK and India stakeholders"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
              {/* Two portrait images */}
              <figure className="relative md:col-span-2 overflow-hidden rounded-3xl shadow-sm border">
                <img
                  src="/images/purpose-2.jpg"
                  alt="Researcher reviewing trade data and policy documents"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <figure className="relative md:col-span-2 overflow-hidden rounded-3xl shadow-sm border">
                <img
                  src="/images/purpose-3.jpg"
                  alt="Young policy leaders networking at an event"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
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
              <Dot /> Young Policy Leaders Network programming and mentorship
            </li>
            <li className="flex items-start gap-2">
              <Dot /> Diaspora town halls and stakeholder consultations for feedback
            </li>
          </ul>
        </div>
      </section>
    </>
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
