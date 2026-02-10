'use client'

import { useState, useMemo } from 'react'
import GuideCard from './GuideCard'
import GuideFilters from './GuideFilters'

export default function GuidesGrid({ guides, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter guides based on selections
  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      // Category filter
      if (selectedCategory !== 'all' && guide.category !== selectedCategory) {
        return false
      }
      
      // Difficulty filter
      if (selectedDifficulty !== 'all' && guide.difficulty !== selectedDifficulty) {
        return false
      }
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.keywords.toLowerCase().includes(query)
        )
      }
      
      return true
    })
  }, [guides, selectedCategory, selectedDifficulty, searchQuery])
  
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          All Guides ({filteredGuides.length})
        </h2>
        
        {/* Filters */}
        <GuideFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>
      
      {/* Results */}
      {filteredGuides.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No guides found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters or search query
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map(guide => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      )}
    </section>
  )
}
