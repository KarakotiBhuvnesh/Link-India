import { SEO } from '@/lib/seo'

export default function Purpose() {
  return (
    <>
      <SEO title="Purpose — Link India" description="Our purpose and how we deliver impact" />

      {/* TOP BAND */}
      <section className="border-b bg-white">
        <div className="container py-14 md:py-20">
          <p className="text-sm uppercase tracking-wide text-slate-500">Our Purpose</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            We are a think-and-act tank programmatically advancing UK-India cultural, economic, and values-based cooperation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            To generate evidence-based insights and policy recommendations and programmes to deepen India-UK bilateral ties
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
              'Focus: trade, investment, migration, education, cultural diplomacy ',
            ]}
            icon="📄"
          />
          <Card
            title="Dialogue & Convening"
            points={[
              'Policy roundtables with government officials and policymakers',
              'Praxis between business leaders, academics, civil society, and policymakers',
            ]}
            icon="🗣️"
          />
          <Card
            title="Networks & Ecosystem"
            points={[
              'UK–India strategic forums: tech, education, sustainability and progressive causes',
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
              <p>We provide constructive and outcome-oriented ideas to deepen bilateral ties. We do this through policy briefs, white papers, and reports on UK–India trade, investment, migration, education, and cultural diplomacy.</p>
              <p>We create a praxis between policymakers, academics, civil society, business leaders, and diaspora leaders. We do this through roundtables, conferences and projects. </p>
              <p>We also facilitate strategic linkages with state governments, institutions, and eminent stakeholders in India and the UK. We especially focus on tech, education, sustainability, and progressive causes. </p>
              <p>We aim to create a UK–India Young Policy Leaders Network to engage emerging thinkers. Finally, we will curate numerous programmes to deepen inter-diaspora and diaspora & government engagement.</p>
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
