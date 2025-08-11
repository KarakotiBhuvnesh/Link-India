import { useParams } from 'react-router-dom'
import posts from '@/data/posts.json'
import authors from '@/data/authors.json'
import { SEO } from '@/lib/seo'
import { readingTime } from '@/lib/date'

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
    <article className="container py-10 prose max-w-none">
      <SEO title={post.title} description={post.excerpt} type="article" jsonLd={jsonLd} />
      <h1>{post.title}</h1>
      <p className="text-sm text-slate-500">{new Date(post.publishedAt).toDateString()} • {readingTime(post.content)}</p>
      {post.coverImage && <img src={post.coverImage} alt="" className="rounded" />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
