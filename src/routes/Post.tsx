import { useParams } from 'react-router-dom'
import posts from '@/data/posts.json'
import authors from '@/data/authors.json'
import { SEO } from '@/lib/seo'
import { readingTime } from '@/lib/date'

type Socials = Record<string, string> // or import your Socials type if you have it

export default function Post() {
  const { slug } = useParams()
  const post = (posts as any[]).find(p => p.slug === slug)
  if (!post) return <div className="container py-10">Post not found.</div>

  const author = (authors as any[]).find(a => a.id === post.authorId)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.publishedAt,
    "author": { "@type": "Person", "name": author?.name || 'Author' }
  }

  return (
    <div className="container py-10">
      <SEO title={post.title} description={post.excerpt} type="article" jsonLd={jsonLd} />

      {/* Grid: Content + Sidebar */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Main content */}
        <article className="prose max-w-none lg:col-span-8">
          <header className="not-prose">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{post.title}</h1>
            <p className="mt-2 text-sm text-slate-500">
              {new Date(post.publishedAt).toDateString()} • {readingTime(post.content)}
            </p>

            {post.coverImage && (
              <div className="mt-6 overflow-hidden rounded-xl border bg-slate-50">
                {/* Smaller, consistent cover frame */}
                <img
                  src={post.coverImage}
                  alt=""
                  className="h-800 w-full object-cover md:h-800" /* ~smaller cover */
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            )}
          </header>

          {/* Body */}
          <div className="mt-8 lg:px-10 " dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Sidebar: Author card */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <AuthorCard
              name={author?.name}
              role={author?.role}
              avatar={author?.avatar}
              bio={author?.bio}
              socials={author?.socials}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}

function AuthorCard({
  name,
  role,
  avatar,
  bio,
  socials
}: {
  name?: string
  role?: string
  avatar?: string
  bio?: string
  socials?: Socials
}) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">Author</h2>

      <div className="mt-4 flex items-center gap-4">
        
        <div>
          <div className="font-medium text-slate-900">{name || 'Author'}</div>
          {role && <div className="text-sm text-slate-600">{role}</div>}
        </div>
      </div>

      {bio && <p className="mt-4 text-sm leading-6 text-slate-700">{bio}</p>}

      {socials && Object.keys(socials).length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-900">Connect</h3>
          <ul className="mt-2 space-y-2">
            {Object.entries(socials).map(([key, url]) => (
              <li key={key}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline break-all"
                >
                  {formatSocialLabel(key)} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

function formatSocialLabel(key: string) {
  // prettify keys like "twitter_handle" -> "Twitter"
  const normalized = key.replace(/[_-]/g, ' ').trim()
  const first = normalized.split(' ')[0]
  return first.charAt(0).toUpperCase() + first.slice(1)
}

