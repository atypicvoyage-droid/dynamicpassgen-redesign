// app/guides/page.js - SEO OPTIMIZED WITH DARK MODE & ADS
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdPlaceholder from '@/components/AdPlaceholder'
import Script from 'next/script'
import { getAllGuides } from '@/lib/mdx'
import GuidesClient from './GuidesClient'

export const metadata = {
  title: 'Password Security Guides & Best Practices | DynamicPassGen',
  description: 'Browse our comprehensive library of expert guides on password security, NIST compliance, 2FA, and digital protection strategies.',
  keywords: 'password security guides, NIST compliance, 2FA guides, cybersecurity tutorials, password management best practices',
  openGraph: {
    title: 'Password Security Guides & Best Practices',
    description: 'Expert guides on password security, NIST compliance, and digital protection.',
    type: 'website',
    url: 'https://dynamicpassgen.com/guides',
    siteName: 'DynamicPassGen',
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/guides',
  }
}

export default function GuidesPage() {
  const guides = getAllGuides()

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dynamicpassgen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://dynamicpassgen.com/guides"
      }
    ]
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Password Security Guides",
    "description": "Expert guides on password security, NIST compliance, 2FA, and digital protection strategies.",
    "url": "https://dynamicpassgen.com/guides",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": guides.map((guide, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://dynamicpassgen.com/guides/${guide.slug}`,
        "name": guide.title,
        "description": guide.description
      }))
    }
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Header />
      
      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero Section - Dark Mode Compatible */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-gray-950 dark:to-gray-900 border-b border-slate-700/50 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
              Security Guides
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Expert insights, tutorials, and best practices to help you secure your digital life.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Ad Placement 1 - Top of Guides List */}
          <div style={{ marginBottom: '32px' }}>
            <AdPlaceholder placementId="guides_top" />
          </div>

          <GuidesClient guides={guides} />

          {/* Ad Placement 2 - Bottom of Guides List */}
          <div style={{ marginTop: '48px' }}>
            <AdPlaceholder placementId="guides_bottom" />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
