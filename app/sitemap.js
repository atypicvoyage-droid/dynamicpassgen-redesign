// app/sitemap.js

import { getAllGuides } from '@/lib/mdx'
import { promises as fs } from 'fs'
import path from 'path'

const URL = "https://dynamicpassgen.com"

// Recursively find all page.js files
async function findPageFiles(dir, baseRoute = '') {
  const routes = []
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      // Skip special Next.js files and directories
      if (
        entry.name.startsWith('_') ||
        entry.name === 'api' ||
        entry.name === 'sitemap.js' ||
        entry.name === 'robots.js' ||
        entry.name === 'layout.js' ||
        entry.name === 'loading.js' ||
        entry.name === 'error.js' ||
        entry.name === 'not-found.js' ||
        entry.name === 'globals.css' ||
        entry.name === 'favicon.ico'
      ) {
        continue
      }
      
      if (entry.isDirectory()) {
        // Skip dynamic route segments like [slug], [id]
        if (entry.name.startsWith('[')) {
          continue
        }
        
        // Recursively scan subdirectories
        const subRoutes = await findPageFiles(
          fullPath,
          `${baseRoute}/${entry.name}`
        )
        routes.push(...subRoutes)
      } else if (entry.name === 'page.js' || entry.name === 'page.tsx') {
        // Found a route!
        routes.push(baseRoute || '/')
      }
    }
  } catch (error) {
    console.error('Error scanning directory:', error)
  }
  
  return routes
}

// Smart priority assignment based on route patterns
function getRoutePriority(route) {
  // Homepage gets highest priority
  if (route === '/') return 1.0
  
  // SEO landing pages (keyword-rich URLs)
  if (route.includes('-password-generator')) return 0.9
  
  // Tool pages
  if (route.startsWith('/tools/')) return 0.9
  
  // Guides landing page
  if (route === '/guides') return 0.8
  
  // Legal pages (privacy, terms)
  if (route === '/privacy' || route === '/terms') return 0.3
  
  // Info pages (about, contact)
  if (route === '/about' || route === '/contact') return 0.5
  
  // Default for any other page
  return 0.6
}

// Smart change frequency based on route patterns
function getChangeFrequency(route) {
  // Homepage changes most frequently
  if (route === '/') return 'daily'
  
  // Tool pages and SEO pages update weekly
  if (route.startsWith('/tools/') || route.includes('-password-generator')) {
    return 'weekly'
  }
  
  // Guides landing page
  if (route === '/guides') return 'weekly'
  
  // Legal pages rarely change
  if (route === '/privacy' || route === '/terms') return 'yearly'
  
  // Info pages change occasionally
  if (route === '/about' || route === '/contact') return 'monthly'
  
  // Default
  return 'monthly'
}

export default async function sitemap() {
  const currentDate = new Date().toISOString()
  
  // Get all guide pages dynamically
  const guides = getAllGuides().map(guide => ({
    url: `${URL}/guides/${guide.slug}`,
    lastModified: guide.updatedDate 
      ? new Date(guide.updatedDate).toISOString() 
      : currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Auto-discover all static routes
  const discoveredRoutes = await findPageFiles('./app')
  
  // Map routes with smart priorities and frequencies
  const staticRoutes = discoveredRoutes.map(route => ({
    url: `${URL}${route}`,
    lastModified: currentDate,
    changeFrequency: getChangeFrequency(route),
    priority: getRoutePriority(route),
  }))

  return [...staticRoutes, ...guides]
}
