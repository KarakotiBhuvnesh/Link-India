export type Socials = { x?: string; linkedin?: string; website?: string }

export type Author = {
  id: string
  name: string
  role?: string
  avatar?: string
  bio?: string
  socials?: Socials
}

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // markdown
  coverImage?: string
  category?: string
  tags?: string[]
  authorId: string
  publishedAt: string
}

export type Venue = { name: string; address?: string; mapLink?: string }

export type Event = {
  id: string
  slug: string
  title: string
  subtitle?: string
  body?: string
  excerpt: string
  start: string
  end?: string
  timezone: string
  venue?: Venue
  onlineLink?: string
  speakers?: string 
  tags?: string[]
  isMembersOnly?: boolean
  cover?: string
}

export type Tier = {
  id: string
  name: string
  priceMonthly?: number
  priceAnnual?: number
  benefits: string[]
}

export type SiteSettings = {
  name: string
  tagline: string
  logo?: string
  socials?: Socials
  newsletterProvider?: 'mailchimp' | 'substack' | 'formspree' | 'none'
}
