// app/guides/page.js - SEO OPTIMIZED
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script' // Import Script for JSON-LD
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

  // 1. Breadcrumb Schema
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

  // 2. CollectionPage Schema (Best for blog/guide indexes)
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
      {/* SEO Schemas */}
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
      
      <main style={{ minHeight: '100vh', background: '#ffffff' }}>
        {/* Hero Section */}
        <div style={{
          background: '#1a1f36',
          padding: '80px 20px 60px',
          textAlign: 'center',
          borderBottom: '1px solid #2d3548'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            marginBottom: '20px', 
            color: 'white', 
            fontWeight: '800',
            letterSpacing: '-0.02em'
          }}>
            Security Guides
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e1', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Expert insights, tutorials, and best practices to help you secure your digital life.
          </p>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          {/* Pass data to the interactive client component */}
          <GuidesClient guides={guides} />
        </div>
      </main>
      
      <Footer />
    </>
  )
}
