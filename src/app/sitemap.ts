import { MetadataRoute } from 'next'
import { siteDetails } from '@/data/siteDetails'
import { getAllPosts } from '@/lib/blog'
import { featureDetails } from '@/data/featureDetails'
import { documentationGuides } from '@/data/documentationGuides'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteDetails.siteUrl.replace(/\/$/, '')

  const posts = getAllPosts()
  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.lastUpdated ?? post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  // Feature detail pages — generated from the single source of truth so a
  // new feature never has to be remembered here separately.
  const featureEntries: MetadataRoute.Sitemap = featureDetails.map(feature => ({
    url: `${baseUrl}/features/${feature.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Documentation pages — `documentationGuides` is the full catalogue (it
  // covers every /docs/* route, including the two bespoke pages —
  // invoicing, accounting-integration — that aren't in the `docGuides`
  // array used for in-app rendering).
  const docEntries: MetadataRoute.Sitemap = documentationGuides.map(guide => ({
    url: `${baseUrl}${guide.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Feature pages
    ...featureEntries,
    // Blog
    ...blogEntries,
    // Documentation pages
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...docEntries,
    // Vertical landing pages
    {
      url: `${baseUrl}/job-management-software-fire-safety-contractors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/job-management-software-electrical-contractors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Support and legal pages
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/eula`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
