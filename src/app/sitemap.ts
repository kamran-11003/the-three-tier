import { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.thethreetier.com'
  
  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: cs.seo.canonicalUrl,
    lastModified: new Date(cs.publishDate),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...caseStudyUrls,
  ]
}
