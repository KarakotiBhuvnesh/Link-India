import Button from '@/components/ui/Button'
import site from '@/site.json'

export default function Hero() {
  return (
    <section className="bg-slate-50 border-b">
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {site.name}: Bridging Ideas, Informing Action
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            A London-based policy initiative strengthening UK–India ties through research, events, and dialogue.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/membership"><Button>Become a member</Button></a>
            <a href="/events"><Button variant="secondary">See events</Button></a>
          </div>
        </div>
        <div className="rounded-2xl border p-6 bg-white">
          <div className="text-sm text-slate-600">Try our newsletter</div>
          <form className="mt-2 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" aria-label="Email" className="border rounded px-3 py-2 w-full" placeholder="you@example.com" />
            <button className="bg-primary text-white rounded px-3 py-2">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
