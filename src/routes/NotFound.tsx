import { Link } from 'react-router-dom'
import { SEO } from '@/lib/seo'
export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <SEO title="404 — Not found" />
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-block bg-primary text-white rounded px-4 py-2">Go home</Link>
    </div>
  )
}
