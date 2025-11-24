// app/guides/GuidesClient.js
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GuidesClient({ guides }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(guides.map(g => g.category))]

  // Filter logic
  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory
      
      // SAFE CHECK: Ensure title/description exist before calling toLowerCase()
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginBottom: '48px',
        alignItems: 'center'
      }}>
        
        {/* Search Bar */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: '50px',
              border: '1px solid #e2e8f0',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              outline: 'none'
            }}
          />
          <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>
            🔍
          </span>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '24px',
                border: 'none',
                background: selectedCategory === cat ? '#1e293b' : '#f1f5f9',
                color: selectedCategory === cat ? 'white' : '#64748b',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                textTransform: 'capitalize'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
          gap: '32px' 
        }}>
          {filteredGuides.map(guide => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              style={{
                textDecoration: 'none',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              className="guide-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Card Image */}
              <div style={{ height: '200px', background: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
                {guide.image ? (
                  <Image 
                    src={guide.image} 
                    alt={guide.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '3rem'
                  }}>
                    📚
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: '#3b82f6', 
                  fontWeight: '700', 
                  textTransform: 'uppercase', 
                  marginBottom: '12px',
                  letterSpacing: '0.05em'
                }}>
                  {guide.category}
                </span>
                
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '12px', 
                  color: '#1e293b',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}>
                  {guide.title}
                </h3>
                
                <p style={{ 
                  color: '#64748b', 
                  fontSize: '0.95rem', 
                  marginBottom: '20px', 
                  lineHeight: '1.6',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  flex: 1
                }}>
                  {guide.description}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '16px',
                  fontSize: '0.85rem',
                  color: '#94a3b8'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ⏱️ {guide.readTime}
                  </span>
                  <span style={{ 
                    background: '#f1f5f9', 
                    padding: '4px 10px', 
                    borderRadius: '12px',
                    fontWeight: '600',
                    color: '#475569'
                  }}>
                    {guide.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
          <p style={{ fontSize: '1.2rem' }}>No guides found matching your search.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            style={{
              marginTop: '16px',
              color: '#3b82f6',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
