// app/guides/[slug]/page.js - COMPLETE WORKING VERSION

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { getGuideContent, getAllGuideSlugs, getAllGuides } from '@/lib/mdx'
import AuthorBio from '@/components/AuthorBio'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MDXComponents from '@/components/MDXComponents'

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
  const allGuides = getAllGuides()
  const relatedGuides = allGuides
    .filter(g => g.slug !== params.slug && g.category === frontmatter.category)
    .slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "description": frontmatter.description,
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
    "wordCount": frontmatter.wordCount || 1500,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dynamicpassgen.com/guides/${params.slug}`
    }
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

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      
      <main style={{ background: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section with Gradient Background */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          padding: '80px 20px 60px',
          color: 'white'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Breadcrumbs */}
            <nav style={{ fontSize: '0.9rem', marginBottom: '24px', opacity: 0.8 }}>
              <Link href="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>Home</Link>
              {' / '}
              <Link href="/guides" style={{ color: '#93c5fd', textDecoration: 'none' }}>Guides</Link>
              {' / '}
              <span style={{ color: '#cbd5e1' }}>{frontmatter.category}</span>
            </nav>

            {/* Article Title */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '24px',
              fontWeight: '900',
              lineHeight: '1.15',
              letterSpacing: '-0.02em'
            }}>
              {frontmatter.title}
            </h1>

            {/* Meta Information */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              fontSize: '0.95rem',
              opacity: 0.9,
              marginBottom: '20px'
            }}>
              <span>✍️ {frontmatter.author || "DynamicPassGen Security Team"}</span>
              <span>📅 Updated {new Date(frontmatter.updatedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span>⏱️ {frontmatter.readTime}</span>
              <span style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontWeight: '600'
              }}>
                {frontmatter.difficulty}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              opacity: 0.95,
              maxWidth: '800px',
              fontWeight: '400'
            }}>
              {frontmatter.description}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '60px 20px'
        }}>
          {/* Table of Contents */}
          {frontmatter.tableOfContents && frontmatter.tableOfContents.length > 0 && (
            <nav style={{
              background: '#f8fafc',
              border: '2px solid #e2e8f0',
              borderRadius: '16px',
              padding: '28px 32px',
              marginBottom: '48px'
            }}>
              <h2 style={{
                fontSize: '1.4rem',
                marginBottom: '20px',
                fontWeight: '700',
                color: '#1e293b',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                margin: '0 0 20px 0'
              }}>
                <span>📋</span> Table of Contents
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {frontmatter.tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontSize: '1.05rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <span style={{ color: '#94a3b8', fontWeight: '600' }}>{index + 1}.</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Markdown Content with Professional Components */}
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={MDXComponents}
            >
              {content}
            </ReactMarkdown>
          </div>

          {/* Author Bio */}
          <AuthorBio />
        </article>

        {/* Related Articles */}
        {relatedGuides.length > 0 && (
          <section style={{
            background: '#f8fafc',
            padding: '80px 20px',
            borderTop: '1px solid #e2e8f0'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '40px',
                fontWeight: '800',
                color: '#0f172a',
                textAlign: 'center'
              }}>
                Continue Learning
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px'
              }}>
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/guides/${related.slug}`}
                    style={{
                      background: 'white',
                      padding: '32px',
                      borderRadius: '16px',
                      textDecoration: 'none',
                      border: '2px solid #e2e8f0',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      background: '#eff6ff',
                      color: '#3b82f6',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      marginBottom: '16px',
                      alignSelf: 'flex-start'
                    }}>
                      {related.category}
                    </span>
                    <h3 style={{
                      fontSize: '1.4rem',
                      marginBottom: '12px',
                      fontWeight: '700',
                      color: '#1e293b',
                      lineHeight: '1.4'
                    }}>
                      {related.title}
                    </h3>
                    <p style={{
                      color: '#64748b',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      flex: 1
                    }}>
                      {related.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      paddingTop: '16px',
                      borderTop: '1px solid #f1f5f9'
                    }}>
                      <span>{related.readTime}</span>
                      <span style={{ color: '#3b82f6', fontWeight: '600' }}>Read →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
