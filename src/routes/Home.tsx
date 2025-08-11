import { useEffect, useState } from 'react'
import { SEO } from '@/lib/seo'
import Hero from '@/blocks/Hero'
import Purpose from './Purpose'
import PostCard from '@/components/cards/PostCard'
import EventCard from '@/components/cards/EventCard'
import type { Post, Event } from '@/types'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    import('@/data/posts.json').then(m => setPosts(m.default.slice(0,3)))
    import('@/data/events.json').then(m => {
      const upcoming = m.default.filter((e: Event) => new Date(e.start).getTime() >= Date.now()).slice(0,3)
      setEvents(upcoming)
    })
  }, [])

  return (
    <>
      <SEO title="Home — Link India" description="Policy, People, Progress" />
      <Hero />

      <Purpose />

      <section className="container py-12">
        <h2 className="text-xl font-semibold">Featured posts</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {posts.map(p => <PostCard key={p.id} post={p} />)}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-xl font-semibold">Upcoming events</h2>
        <div className="mt-6 grid gap-4">
          {events.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>
    </>
  )
}
