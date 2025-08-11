import { SEO } from '@/lib/seo'

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
          className="h-[100vh] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container py-10">
            <h1 className="max-w-4xl text-2xl font-semibold text-white md:text-5xl md:leading-[1.15]">
              “To support evidence‑based policymaking that deepens UK–India cooperation across
              economic, educational, and cultural domains.”
            </h1>
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER BAND */}
      <div className="border-b bg-white">
        <div className="container py-6 md:py-10">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <Pillar title="Economic" />
            <Pillar title="Educational" />
            <Pillar title="Cultural" />
          </div>
        </div>
      </div>

      {/* LARGE IMAGE MOSAIC (very little text) */}
      <section className="container py-10 md:py-16">

        {/* Wide banner image */}
        <figure className="relative mt-4">
          <img
            src="/images/vision-4.jpg"
            alt="Cultural exchange performance representing both nations"
            className="h-[32rem] w-full rounded-2xl border object-cover"
            loading="lazy"
          />
          <figcaption className="mt-2 text-xs text-slate-500">
            Culture as a bridge—shared stories, shared futures.
          </figcaption>
        </figure>
      </section>

      {/* MINIMAL CLOSER */}
      <section className="border-t bg-white">
        <div className="container py-12 md:py-16">
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-700 md:text-xl">
            Our vision guides what we research, who we convene, and how we communicate—so evidence
            can inform action on both sides.
          </p>
        </div>
      </section>
    </>
  )
}

function Pillar({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-3 text-sm font-medium tracking-wide text-slate-700">{title}</div>
    </div>
  )
}

