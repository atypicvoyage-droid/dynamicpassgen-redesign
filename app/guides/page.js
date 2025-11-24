// app/guides/page.js
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllGuides } from '@/lib/mdx'

export const metadata = {
  title: 'Password Security Guides & Best Practices 2025 | DynamicPassGen',
  description: 'Expert guides on password security, NIST compliance, 2FA, and digital protection.',
}

export default function GuidesPage() {
  const guides = getAllGuides()
  
  // Group by category
  const categorized = guides.reduce((acc, guide) => {
    const cat = guide.category || 'general'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(guide)
    return acc
  }, {})

  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Security Guides
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem' }}>
            Expert guides on password security and digital protection
          </p>

          {Object.entries(categorized).map(([category, categoryGuides]) => (
            <div key={category} style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '24px', textTransform: 'capitalize' }}>
                {category}
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                gap: '24px' 
              }}>
                {categoryGuides.map(guide => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    style={{
                      background: 'var(--navy-card)',
                      padding: '32px',
                      borderRadius: '16px',
                      textDecoration: 'none',
                      color: 'white',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
                      {guide.title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '16px' }}>
                      {guide.description}
                    </p>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                      {guide.readTime} • {guide.difficulty}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
