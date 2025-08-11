import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article' | 'event'
  jsonLd?: object
}

export function SEO({ title, description, image, type='website', jsonLd }: SEOProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
