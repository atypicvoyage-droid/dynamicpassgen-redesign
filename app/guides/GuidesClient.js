// app/guides/GuidesClient.js - DARK MODE COMPATIBLE
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GuidesClient({ guides }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(guides.map(g => g.category))]

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory
      
      const title = guide.title || '' 
      const desc = guide.description || ''
      
      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            desc.toLowerCase().includes(searchQuery.toLowerCase())
                            
      return matchesCategory && matchesSearch
    })
  }, [guides, searchQuery, selectedCategory])

  return (
    <div>
      {/* Search & Filter Section */}
      <div className="flex flex-col gap-6 mb-12 items-center">
        
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all"
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl">
            🔍
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map(guide => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="h-48 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                {guide.image ? (
                  <Image 
                    src={guide.image} 
                    alt={guide.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl">
                    📚
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                  {guide.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {guide.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-500">
                  <span className="flex items-center gap-1.5">
                    ⏱️ {guide.readTime}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-semibold text-gray-700 dark:text-gray-300">
                    {guide.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <p className="text-xl mb-4">No guides found matching your search.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
