import { Link, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import clsx from 'clsx'
import site from '@/site.json'

// NAVBAR

const nav = [
  { to: '/vision', label: 'About Us' },
  // { to: '/about', label: 'About Us' },
  // { to: '/purpose', label: 'Purpose' },
  { to: '/blog', label: 'Publications' },
  { to: '/events', label: 'Events' },
  { to: '/trustees', label: 'Trustees' },
  // { to: '/legal', label: 'Legal' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <html lang="en" />
        <title>{site.name} — {site.tagline}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={`${site.name} — ${site.tagline}`} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:p-2 bg-white border rounded">
        Skip to content
      </a>



      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link to="/" className="font-bold text-lg">{site.name}</Link>

          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => clsx('text-sm hover:text-primary', isActive && 'text-primary font-semibold')}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center rounded border px-2 py-1"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>

        <div id="mobile-menu" className={clsx('md:hidden border-t', open ? 'block' : 'hidden')}>
          <div className="container py-2 grid gap-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="border-t">
        <div className="container py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-semibold">{site.name}</div>
            <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <p className="mt-2 text-sm">
              Email: <a className="text-primary underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
            <p className="text-sm">Phone: {site.contact.phone}</p>
            <p className="text-sm">Address: {site.contact.address.split(',').map((line, idx) => (
                <div key={idx}>{line.trim()}</div>
              ))}</p>
          </div>
          

          <div>
            <div className="font-semibold">Sitemap</div>

            <nav aria-label="Sitemap" className="mt-3">
              <ul className=" text-sm text-slate-700">
                {/* Core */}
                <li><a className="hover:text-slate-900" href="/">Home</a></li>
                <li><a className="hover:text-slate-900" href="/about">About Us</a></li>
                <li><a className="hover:text-slate-900" href="/blog">Publications</a></li>
                <li><a className="hover:text-slate-900" href="/events">Events</a></li>
                <li><a className="hover:text-slate-900" href="/trustees">Trustees</a></li>

              </ul>
            </nav>
          </div>



        </div>
        <div className="border-t">
          <div className="container py-4 text-xs text-slate-500 flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <span> Link India is a Charitable Incorporated Organisation (CIO) and a registered charity (1183696).</span>
            {/* 
            <span>
              <a className="hover:text-primary" href="/privacy">Privacy</a> · <a className="hover:text-primary" href="/terms">Terms</a>
            </span>
              */}
          </div>
        </div>
      </footer>
    </div>
  )
}
