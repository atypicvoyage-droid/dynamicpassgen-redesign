'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <Link href="/" className="logo">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#logoGradient)"/>
              <path d="M16 8C13.2386 8 11 10.2386 11 13V15H10C9.44772 15 9 15.4477 9 16V23C9 23.5523 9.44772 24 10 24H22C22.5523 24 23 23.5523 23 23V16C23 15.4477 22.5523 15 22 15H21V13C21 10.2386 18.7614 8 16 8ZM19 15H13V13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13V15Z" fill="white"/>
            </svg>
            <span>DynamicPassGen</span>
          </Link>
          
          <nav className="nav-links">
            <Link href="/" className="nav-link">Generator</Link>
            <Link href="/guides" className="nav-link">Security Guides</Link>
            <Link href="/tools/strength-checker" className="nav-link">Tools</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link 
              href="/contact" 
              className="nav-link"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                padding: '8px 20px',
                borderRadius: '8px',
                color: 'white'
              }}
            >
              Get Started
            </Link>
          </nav>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            <span>{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '73px',
          left: 0,
          right: 0,
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(12px)',
          padding: '24px',
          zIndex: 999,
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <nav style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <Link href="/" style={{color: 'white', padding: '12px', textDecoration: 'none', fontWeight: '500'}}>Generator</Link>
            <Link href="/guides" style={{color: 'white', padding: '12px', textDecoration: 'none', fontWeight: '500'}}>Security Guides</Link>
            <Link href="/tools/strength-checker" style={{color: 'white', padding: '12px', textDecoration: 'none', fontWeight: '500'}}>Tools</Link>
            <Link href="/about" style={{color: 'white', padding: '12px', textDecoration: 'none', fontWeight: '500'}}>About</Link>
            <Link href="/contact" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '12px', textDecoration: 'none', fontWeight: '600', borderRadius: '8px', textAlign: 'center'}}>Get Started</Link>
          </nav>
        </div>
      )}
      
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
