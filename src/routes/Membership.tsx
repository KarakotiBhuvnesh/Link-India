// import tiers from '@/data/tiers.json'
// import { SEO } from '@/lib/seo'

// type Tier = { id:string; name:string; priceMonthly?:number; priceAnnual?:number; benefits:string[] }

// export default function Membership() {
//   return (
//     <div className="container py-10">
//       <SEO title="Membership — Link India" description="Support our work and join the community" />
//       <h1 className="text-2xl font-semibold">Membership</h1>
//       <div className="mt-6 grid gap-6 md:grid-cols-3">
//         {(tiers as Tier[]).map(t => (
//           <div key={t.id} className="border rounded-2xl p-6">
//             <div className="font-medium text-lg">{t.name}</div>
//             <div className="mt-2 text-3xl font-bold">£{t.priceMonthly}/mo</div>
//             <ul className="mt-3 text-sm list-disc ml-5">
//               {t.benefits.map(b => <li key={b}>{b}</li>)}
//             </ul>
//             <div className="mt-4">
//               {/* DonateEmbed placeholder */}
//               <a className="bg-primary text-white rounded px-4 py-2 inline-block" href="https://donorbox.org/" target="_blank" rel="noreferrer">Join via Donorbox</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
