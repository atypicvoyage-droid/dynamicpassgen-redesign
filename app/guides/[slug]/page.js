// app/guides/[slug]/page.js - SERVER COMPONENT
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { getGuideContent, getAllGuideSlugs } from '@/lib/mdx'
import GuideContent from './GuideContent' // Import the client component

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const guide = await getGuideContent(params.slug)
  if (!guide) return { title: 'Guide Not Found' }

  const { frontmatter } = guide
  return {
    title: `${frontmatter.title} | DynamicPassGen`,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.publishedDate,
      modifiedTime: frontmatter.updatedDate,
      images: frontmatter.image ? [{ url: frontmatter.image }] : [],
    },
    alternates: {
      canonical: `https://dynamicpassgen.com/guides/${params.slug}`,
    }
  }
}

export default async function GuidePage({ params }) {
  const guide = await getGuideContent(params.slug)
  if (!guide) notFound()

  const { frontmatter, content } = guide

  // Date formatter
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return 'N/A'
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    } catch {
      return 'N/A'
    }
  }

  // Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "description": frontmatter.description,
    "image": frontmatter.image ? `https://dynamicpassgen.com${frontmatter.image}` : undefined,
    "author": {
      "@type": "Organization",
      "name": frontmatter.author || "DynamicPassGen Security Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DynamicPassGen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dynamicpassgen.com/logo.png"
      }
    },
    "datePublished": frontmatter.publishedDate,
    "dateModified": frontmatter.updatedDate,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dynamicpassgen.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://dynamicpassgen.com/guides" },
      { "@type": "ListItem", "position": 3, "name": frontmatter.title }
    ]
  }

  const faqSchema = frontmatter.faq && frontmatter.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": frontmatter.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Header />
      
      <main style={{ background: '#ffffff', minHeight: '100vh' }}>
        
        {/* Pass data to Client Component including image */}
        <GuideContent 
          content={content} 
          frontmatter={frontmatter}
          featuredImage={frontmatter.image} 
          formattedDate={formatDate(frontmatter.updatedDate)}
        />

      </main>

      <Footer />
    </>
  )
}
