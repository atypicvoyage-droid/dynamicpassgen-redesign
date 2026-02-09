'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StandardGuide({ metadata, children }) {
  const [activeSection, setActiveSection] = useState('')
  const [tocItems, setTocItems] = useState([])

  useEffect(() => {
    // Extract headings for TOC
    const headings = document.querySelectorAll('h2[id]')
    const items = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
    }))
    setTocItems(items)

    // Intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [children])

  return (
    <article className="guide-container">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/guides" itemProp="item">
              <span itemProp="name">Guides</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{metadata?.title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="guide-layout">
        {/* Sidebar TOC */}
        <aside className="guide-sidebar">
          <div className="toc-wrapper">
            <h3 className="toc-title">Table of Contents</h3>
            <nav className="toc">
              <ul>
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={activeSection === item.id ? 'active' : ''}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        })
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Guide Metadata */}
          {metadata && (
            <div className="guide-meta">
              {metadata.category && (
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <span className="badge badge-{metadata.category}">
                    {metadata.category}
                  </span>
                </div>
              )}
              {metadata.difficulty && (
                <div className="meta-item">
                  <span className="meta-label">Difficulty:</span>
                  <span className="badge badge-difficulty">{metadata.difficulty}</span>
                </div>
              )}
              {metadata.readTime && (
                <div className="meta-item">
                  <span className="meta-label">Read Time:</span>
                  <span>{metadata.readTime} min</span>
                </div>
              )}
              {metadata.updated && (
                <div className="meta-item">
                  <span className="meta-label">Updated:</span>
                  <time dateTime={metadata.updated}>
                    {new Date(metadata.updated).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
              )}
            </div>
          )}
        </aside>

        {/* Main Article Content */}
        <main className="guide-content">{children}</main>
      </div>

      <style jsx>{`
        .guide-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .breadcrumbs {
          margin-bottom: 2rem;
        }

        .breadcrumbs ol {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          font-size: 0.875rem;
          color: #64748b;
        }

        .breadcrumbs li:not(:last-child)::after {
          content: '/';
          margin-left: 0.5rem;
          color: #cbd5e1;
        }

        .breadcrumbs a {
          color: #3b82f6;
          text-decoration: none;
          transition: color 0.2s;
        }

        .breadcrumbs a:hover {
          color: #2563eb;
          text-decoration: underline;
        }

        .guide-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
          align-items: start;
        }

        .guide-sidebar {
          position: sticky;
          top: 2rem;
          max-height: calc(100vh - 4rem);
          overflow-y: auto;
        }

        .toc-wrapper {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .toc-title {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #475569;
          margin: 0 0 1rem 0;
        }

        .toc ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .toc li {
          margin-bottom: 0.5rem;
        }

        .toc a {
          display: block;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
          color: #64748b;
          text-decoration: none;
          border-radius: 0.25rem;
          transition: all 0.2s;
        }

        .toc a:hover {
          color: #3b82f6;
          background: #e0f2fe;
        }

        .toc a.active {
          color: #3b82f6;
          background: #dbeafe;
          font-weight: 500;
        }

        .guide-meta {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .meta-item:last-child {
          margin-bottom: 0;
        }

        .meta-label {
          font-weight: 500;
          color: #64748b;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .badge-compliance {
          background: #dbeafe;
          color: #1e40af;
        }

        .badge-best-practices {
          background: #d1fae5;
          color: #065f46;
        }

        .badge-technical {
          background: #e0e7ff;
          color: #3730a3;
        }

        .badge-policy {
          background: #fce7f3;
          color: #9f1239;
        }

        .badge-difficulty {
          background: #fef3c7;
          color: #92400e;
        }

        .guide-content {
          min-width: 0;
          max-width: 800px;
        }

        @media (max-width: 1024px) {
          .guide-layout {
            grid-template-columns: 1fr;
          }

          .guide-sidebar {
            position: static;
            max-height: none;
          }

          .toc-wrapper {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .guide-container {
            padding: 1rem 0.5rem;
          }
        }
      `}</style>
    </article>
  )
}
