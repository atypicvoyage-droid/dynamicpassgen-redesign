import fs from 'fs'
import path from 'path'

/**
 * Scans the /app/guides directory and collects metadata from all guide subdirectories
 * @returns {Array} Array of guide metadata objects with slug
 */
export async function getAllGuides() {
  const guidesDirectory = path.join(process.cwd(), 'app/guides')
  
  try {
    // Get all subdirectories in /app/guides
    const entries = fs.readdirSync(guidesDirectory, { withFileTypes: true })
    const guideDirs = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
    
    // Import metadata from each guide
    const guides = await Promise.all(
      guideDirs.map(async (dir) => {
        try {
          const metadataPath = path.join(guidesDirectory, dir, 'metadata.js')
          
          // Check if metadata.js exists
          if (fs.existsSync(metadataPath)) {
            // Dynamic import of metadata
            const { metadata } = await import(`@/app/guides/${dir}/metadata.js`)
            
            return {
              ...metadata,
              slug: dir,
              url: `/guides/${dir}`
            }
          }
          return null
        } catch (error) {
          console.warn(`Failed to load metadata for guide: ${dir}`, error.message)
          return null
        }
      })
    )
    
    // Filter out nulls and sort by updated date (newest first)
    return guides
      .filter(Boolean)
      .sort((a, b) => new Date(b.updated) - new Date(a.updated))
  } catch (error) {
    console.error('Error scanning guides directory:', error)
    return []
  }
}

/**
 * Groups guides by category
 * @param {Array} guides - Array of guide metadata
 * @returns {Object} Guides grouped by category
 */
export function groupByCategory(guides) {
  return guides.reduce((acc, guide) => {
    const category = guide.category || 'uncategorized'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(guide)
    return acc
  }, {})
}

/**
 * Gets unique categories from guides
 * @param {Array} guides - Array of guide metadata
 * @returns {Array} Array of unique category names
 */
export function getCategories(guides) {
  const categories = guides.map(g => g.category).filter(Boolean)
  return [...new Set(categories)]
}

/**
 * Gets unique difficulty levels from guides
 * @param {Array} guides - Array of guide metadata
 * @returns {Array} Array of unique difficulty levels
 */
export function getDifficulties(guides) {
  const difficulties = guides.map(g => g.difficulty).filter(Boolean)
  return [...new Set(difficulties)]
}

/**
 * Calculates total reading time for all guides
 * @param {Array} guides - Array of guide metadata
 * @returns {number} Total reading time in minutes
 */
export function getTotalReadingTime(guides) {
  return guides.reduce((total, guide) => {
    const readTime = parseInt(guide.readTime) || 0
    return total + readTime
  }, 0)
}
