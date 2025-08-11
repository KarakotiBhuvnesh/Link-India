import { useEffect, useState } from 'react'
import { SEO } from '@/lib/seo'
import team from '@/data/team.json'

type Member = { id: string; name: string; role: string }

export default function Trustees() {
  const [members, setMembers] = useState<Member[]>([])
  useEffect(() => setMembers(team as Member[]), [])

  return (
    <div className="container py-10">
      <SEO title="Trustees — Link India" description="Profiles of the trustees" />
      <h1 className="text-2xl font-semibold">Profiles of the Trustees</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {members.map(m => (
          <div key={m.id} className="border rounded-2xl p-4">
            <div className="h-40 bg-slate-100 rounded mb-3" aria-hidden />
            <div className="font-medium">{m.name}</div>
            <div className="text-sm text-slate-600">{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
