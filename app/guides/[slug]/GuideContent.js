// app/guides/[slug]/GuideContent.js - IMAGE BELOW TOC
'use client'

import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'   
import MDXComponents from '@/components/MDXComponents'
import AuthorBio from '@/components/AuthorBio'
import Image from 'next/image'
import Link from 'next/link'

export default function GuideContent({ content, frontmatter, featuredImage, formattedDate }) {
  
  // Smooth scrolling logic
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      // Find the closest anchor tag (in case user clicks a span inside the a tag)
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      
      // Only intercept internal hash links
      if (href && href.startsWith('#')) {
        e.preventDefault(); // STOP the instant jump
        
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // 1. Update URL without jumping
          window.history.pushState(null, '', href);

          // 2. Calculate offset for fixed header
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          // 3. Scroll smoothly
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Attach event listener to the TOC container instead of individual links
    // This is more robust (event delegation)
    const tocNav = document.querySelector('nav[aria-label="Table of Contents"]'); // Or select by class if you have one
    
    // Fallback: select all links if container not found easily
    const links = document.querySelectorAll('.toc-link');
    
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [content]);

  return (
    <>
      {/* Hero Section - Clean without image overlap */}
      <div style={{
        background: '#1a1f36',
        padding: '48px 20px 48px',
        borderBottom: '1px solid #2d3548'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <nav style={{ fontSize: '0.875rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/" style={{ color: '#8b92a7', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#4a5568' }}>/</span>
            <Link href="/guides" style={{ color: '#8b92a7', textDecoration: 'none' }}>Guides</Link>
            <span style={{ color: '#4a5568' }}>/</span>
            <span style={{ color: '#60a5fa', textTransform: 'capitalize' }}>{frontmatter.category}</span>
          </nav>

          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            marginBottom: '20px',
            fontWeight: '800',
            lineHeight: '1.25',
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#cbd5e1',
              marginBottom: '0',
              fontWeight: '400'
            }}>
              {frontmatter.description}
            </p>
          )}
        </div>
      </div>

      {/* Meta Bar */}
      <div style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '20px'
      }}>
        <div style={{ 
          maxWidth: '820px', 
          margin: '0 auto', 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '24px', 
          alignItems: 'center', 
          fontSize: '0.875rem', 
          color: '#64748b' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              background: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              👤
            </div>
            <span style={{ fontWeight: 600, color: '#334155' }}>
              {frontmatter.author || "DynamicPassGen Team"}
            </span>
          </div>

          {formattedDate !== 'N/A' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>📅</span>
              <span>Updated {formattedDate}</span>
            </div>
          )}

          {frontmatter.readTime && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>⏱️</span>
              <span>{frontmatter.readTime}</span>
            </div>
          )}

          {frontmatter.difficulty && (
            <span style={{
              padding: '4px 12px',
              background: '#eff6ff',
              color: '#2563eb',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {frontmatter.difficulty}
            </span>
          )}
        </div>
      </div>

      <article style={{
        maxWidth: '820px',
        margin: '0 auto',
        padding: '48px 20px'
      }}>
        {/* Table of Contents */}
        {frontmatter.tableOfContents && frontmatter.tableOfContents.length > 0 && (
          <nav style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '32px',
            marginBottom: '48px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
          }}>
            <h2 style={{
              fontSize: '1.125rem',
              marginBottom: '20px',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📋</span> Table of Contents
            </h2>
            <ol style={{
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
                    className="toc-link"
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      lineHeight: '1.5'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#f1f5f9';
                      e.target.style.color = '#0f172a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#475569';
                    }}
                  >
                    <span style={{ 
                      color: '#94a3b8', 
                      fontWeight: '600', 
                      minWidth: '20px',
                      fontSize: '0.85rem',
                      marginTop: '1px'
                    }}>
                      {index + 1}.
                    </span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* FEATURED IMAGE - Moved here, below TOC */}
        {featuredImage && (
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            marginBottom: '56px' // Space before content starts
          }}>
            <Image
              src={featuredImage}
              alt={frontmatter.title}
              width={1200}
              height={630}
              priority
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        )}

        {/* Markdown Content */}
        <div className="prose-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              ...MDXComponents,
              h1: () => null,
              // map lower-case HTML tags to your React components
              callout: MDXComponents.Callout,
              quicktips: MDXComponents.QuickTips,
              keytakeaway: MDXComponents.KeyTakeaway,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <AuthorBio />
      </article>
    </>
  )
}
