import { useState } from 'react'
import { SEO } from '@/lib/seo'
import site from '@/site.json'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Mock submit
    setTimeout(()=> setStatus('success'), 500)
  }

  return (
    <div className="container py-10">
      <SEO title="Contact — Link India" description="Get in touch" />
      <h1 className="text-2xl font-semibold">Contact</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} aria-live="polite" className="grid gap-3">
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input required className="border rounded px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input required type="email" className="border rounded px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea required rows={5} className="border rounded px-3 py-2"></textarea>
          </label>
          <button className="bg-primary text-white rounded px-4 py-2 w-fit">Send</button>
          {status==='success' && <div role="status" className="text-green-700">Thanks! We’ll get back to you.</div>}
          {status==='error' && <div role="status" className="text-red-700">Something went wrong. Try again.</div>}
        </form>
        <div>
          <div className="h-64 bg-slate-100 rounded" aria-hidden />
          <p className="mt-4 text-sm">Email: <a className="text-primary underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
          <p className="text-sm">Phone: {site.contact.phone}</p>
        </div>
      </div>
    </div>
  )
}
