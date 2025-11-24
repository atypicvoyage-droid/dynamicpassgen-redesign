// lib/mdx.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const guidesDirectory = path.join(process.cwd(), 'content/guides')

export function getAllGuideSlugs() {
  if (!fs.existsSync(guidesDirectory)) {
    console.warn('Guides directory does not exist yet. Creating...')
    fs.mkdirSync(guidesDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(guidesDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.(md|mdx)$/, ''))
}

export function getGuideBySlug(slug) {
  let fullPath = path.join(guidesDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(guidesDirectory, `${slug}.mdx`)
  }
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const stats = readingTime(content)
  
  return {
    slug,
    frontmatter: {
      ...data,
      readTime: data.readTime || stats.text,
      // FAQ will automatically be included from data if present
      faq: data.faq || [] // Default to empty array if no FAQ
    },
    content
  }
}

export async function getGuideContent(slug) {
  const guide = getGuideBySlug(slug)
  
  if (!guide) {
    return null
  }
  
  return guide
}

export function getAllGuides() {
  const slugs = getAllGuideSlugs()
  const guides = slugs
    .map(slug => {
      const guide = getGuideBySlug(slug)
      if (!guide) return null
      return {
        slug,
        ...guide.frontmatter
      }
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (!a.updatedDate || !b.updatedDate) return 0
      return new Date(b.updatedDate) - new Date(a.updatedDate)
    })
  
  return guides
}

export function getGuidesByCategory(category) {
  const allGuides = getAllGuides()
  return allGuides.filter(guide => guide.category === category)
}
