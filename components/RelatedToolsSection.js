'use client'

import Link from 'next/link'
import { trackClick } from '@/lib/withGAClick'

export default function RelatedToolsSection({ tools, title, description }) {
  // Default values
  const defaultTitle = "Explore More Security Tools"
  const defaultDescription = "Strengthen your digital security with our complete suite of password tools, all free and designed with your privacy in mind."

  return (
    <section style={{
      marginTop: '64px',
      padding: '40px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
      borderRadius: '20px',
      border: '2px solid var(--accent)',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '16px', 
        color: 'var(--text-primary)', 
        fontWeight: '800' 
      }}>
        {title || defaultTitle}
      </h2>
      <p style={{
        fontSize: '1.125rem',
        color: 'var(--text-secondary)',
        marginBottom: '32px',
        maxWidth: '700px',
        margin: '0 auto 32px',
        lineHeight: '1.6'
      }}>
        {description || defaultDescription}
      </p>
      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
            onClick={() => trackClick(`Related Tools - ${tool.label}`, 'Tool Navigation')}
            style={{
              padding: '14px 28px',
              background: 'var(--card-bg)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1rem',
              display: 'inline-block',
              border: '2px solid var(--accent)',
              transition: 'transform 0.2s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {tool.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
