'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(90)
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="header-content">
          {/* Desktop Logo - Left Aligned */}
          <Link href="/" className="logo logo-desktop">
            <Image 
              src="/images/logo-big.png" 
              alt="DynamicPassGen Logo" 
              width={220} 
              height={50}
              priority
              loading="eager"
              fetchpriority="high"
              style={{
                width: 'auto',
                height: '50px',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Mobile Logo - Center Aligned */}
          <Link href="/" className="logo logo-mobile">
            <Image 
              src="/images/logo-big.png" 
              alt="DynamicPassGen Logo" 
              width={200} 
              height={50}
              priority
              loading="eager"
              fetchpriority="high"
              style={{
                width: 'auto',
                height: '45px',
                objectFit: 'contain'
              }}
            />
          </Link>
          
          <nav className="nav-links">
            <Link href="/" className="nav-link">Generator</Link>
            <Link href="/guides" className="nav-link">Security Guides</Link>
            <Link href="/tools/strength-checker" className="nav-link">Tools</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link 
              href="/contact" 
              className="nav-link nav-link-cta"
            >
              Get Started
            </Link>
          </nav>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu with Dynamic Top Position */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{ top: `${headerHeight}px` }}>
          <nav className="mobile-nav">
            <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Generator
            </Link>
            <Link href="/guides" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Security Guides
            </Link>
            <Link href="/tools/strength-checker" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Tools
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="mobile-nav-link-cta" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
