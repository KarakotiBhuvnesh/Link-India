/** import { useEffect, useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import postsData from '@/data/posts.json'
import authors from '@/data/authors.json'
import PostCard from '@/components/cards/PostCard'
import type { Post } from '@/types'
import { SEO } from '@/lib/seo'

const categories = ['All','Trade','Education','Tech']

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  useEffect(()=> setPosts(postsData as Post[]), [])

  const fuse = useMemo(() => new Fuse(posts, { keys: ['title','excerpt','tags'], threshold: 0.4 }), [posts])
  const filtered = useMemo(() => {
    let arr = posts
    if (cat !== 'All') arr = arr.filter(p => p.category === cat)
    if (!q) return arr
    return fuse.search(q).map(r => r.item)
  }, [posts, q, cat, fuse])

  return (
    <div className="container py-10">
      <SEO title="Research & Blog — Link India" description="Insights, briefs, and analysis" />
      <h1 className="text-2xl font-semibold">Research & Blog</h1>
      <div className="mt-4 flex gap-3 items-center">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search posts" className="border rounded px-3 py-2 w-full md:w-80" />
        <select value={cat} onChange={e=>setCat(e.target.value)} className="border rounded px-3 py-2">
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {filtered.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </div>
  )
}

**/