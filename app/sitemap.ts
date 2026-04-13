import { MetadataRoute } from 'next'
import { projects } from '@/content/projectsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mherron.com'
  
  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }
  
  // Generate work pages from projectsData
  const workPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [homepage, ...workPages]
}
