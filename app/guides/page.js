import { getAllGuides, getCategories, getTotalReadingTime } from '@/lib/guides'
import GuidesHero from '@/components/guides/GuidesHero'
import GuidesGrid from '@/components/guides/GuidesGrid'
import { generateMetadata } from './metadata'

export { generateMetadata }

export default async function GuidesPage() {
  // Server-side: Fetch all guides at build time
  const guides = await getAllGuides()
  const categories = getCategories(guides)
  const totalReadTime = getTotalReadingTime(guides)
  
  // Get featured guide (most recent or manually selected)
  const featuredGuide = guides.find(g => g.slug === 'nist-password-guidelines-2025') || guides[0]
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <GuidesHero 
        guideCount={guides.length}
        categoryCount={categories.length}
        totalReadTime={totalReadTime}
      />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Guide */}
        {featuredGuide && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">⭐</span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Featured Guide
              </h2>
            </div>
            
            <a 
              href={featuredGuide.url}
              className="block bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {featuredGuide.category}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {featuredGuide.difficulty}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">
                  {featuredGuide.title}
                </h3>
                
                <p className="text-lg text-white/90 mb-6 max-w-3xl">
                  {featuredGuide.description}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-white/80">
                  <span>📚 {featuredGuide.readTime} min read</span>
                  <span>📅 Updated {new Date(featuredGuide.updated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </a>
          </section>
        )}
        
        {/* Guides Grid with Filters (Client Component) */}
        <GuidesGrid 
          guides={guides} 
          categories={categories}
        />
      </div>
      
      {/* Bottom CTA */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            🔐 Ready to Secure Your Passwords?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Generate cryptographically secure passwords or check your password strength
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Generate Password
            </a>
            <a 
              href="/tools/password-strength-checker"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white/20"
            >
              Check Password Strength
            </a>
          </div>
        </div>
      </section>
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Security Guides & Best Practices',
            description: 'Complete library of password security, compliance, and authentication guides',
            numberOfItems: guides.length,
            about: {
              '@type': 'Thing',
              name: 'Password Security'
            },
            mainEntity: guides.map(guide => ({
              '@type': 'Article',
              headline: guide.title,
              description: guide.description,
              author: {
                '@type': 'Organization',
                name: guide.author
              },
              datePublished: guide.published,
              dateModified: guide.updated,
              articleSection: guide.category
            }))
          })
        }}
      />
    </main>
  )
}
