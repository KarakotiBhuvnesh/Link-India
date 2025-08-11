import Button from '@/components/ui/Button'
import site from '@/site.json'

export default function Hero() {
return (
  <section className="relative bg-slate-50 border-b h-[500px] md:h-[700px] lg:h-[1000px]">
    {/* Background image layer */}
    <picture aria-hidden="true" className="pointer-events-none">
      {/* Large screens */}
      <source media="(min-width: 1024px)" srcSet= "/images/hero-lg.jpg" />
      {/* Tablets */}
      <source media="(min-width: 640px)" srcSet="/images/hero-md.jpg" />
      {/* Mobile default */}
      <img
        src="/images/hero-sm.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </picture>

    {/* Contrast overlay for readability */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Content */}
    <div className="relative z-10 h-screen"> {/* Full viewport height */}
    <div className="container h-full grid md:grid-cols-2 gap-10">
      <div
        className="
          flex
          items-start
          pt-[50vh] md:pt-[50vh] /* pushes text down to ~3/5 height */
        "
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            {site.name}: Bridging Ideas, Informing Action
          </h1>
          <p className="mt-4 text-lg text-slate-100">
            A London-based policy initiative strengthening UK–India ties through research, events, and dialogue.
          </p>
          
        </div>
      </div>
    </div>
  </div>
  </section>
)
}
  