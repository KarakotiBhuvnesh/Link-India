import { Link } from 'react-router-dom'
import type { Post } from '@/types'
import { readingTime } from '@/lib/date'

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="border rounded-2xl overflow-hidden flex flex-col">
      {post.coverImage && <img src={post.coverImage} alt="" loading="lazy" className="aspect-[16/9] object-cover" />}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-slate-500">{new Date(post.publishedAt).toDateString()} • {readingTime(post.content)}</div>
        <Link to={`/blog/${post.slug}`} className="mt-1 font-semibold text-lg hover:text-primary">{post.title}</Link>
        <p className="mt-2 text-sm text-slate-600 flex-1">{post.excerpt}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {post.tags?.map(t => <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>)}
        </div>
      </div>
    </article>
  )
}
