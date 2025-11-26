'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { trackClick } from '@/lib/withGAClick'

export const metadata = {
  title: 'Page Not Found | DynamicPassGen',
  description: 'The page you are looking for does not exist. Use our free password generator to create secure passwords instantly.',
}

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main style={{ 
        minHeight: '60vh', 
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '24px',
          lineHeight: '1'
        }}>
          404
        </div>

        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          marginBottom: '16px'
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          We can't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Link 
            href="/" 
            className="button-primary"
            onClick={() => trackClick('404 - Back to Generator', 'Error Page')}
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(102, 126, 234, 0.3)',
              transition: 'transform 0.2s ease'
            }}
          >
            Back to Generator
          </Link>

          <Link 
            href="/guides" 
            className="button-secondary"
            onClick={() => trackClick('404 - View Guides', 'Error Page')}
            style={{
              padding: '14px 32px',
              background: 'var(--card-bg)',
              color: 'var(--text-primary)',
              border: '2px solid var(--border-color)',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease'
            }}
          >
            View Security Guides
          </Link>
        </div>

        {/* Helpful Links Section */}
        <div style={{ 
          marginTop: '64px',
          width: '100%',
          maxWidth: '800px',
          textAlign: 'left'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            marginBottom: '24px',
            color: 'var(--text-primary)',
            textAlign: 'center'
          }}>
            Popular Tools
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            {[
              { name: 'Password Generator', href: '/', desc: 'Create strong passwords' },
              { name: 'Strength Checker', href: '/tools/strength-checker', desc: 'Test password security' },
              { name: 'Breach Checker', href: '/tools/breach-checker', desc: 'Check for leaks' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => trackClick(`404 - ${item.name}`, 'Error Page')}
                style={{
                  padding: '20px',
                  background: 'var(--card-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
