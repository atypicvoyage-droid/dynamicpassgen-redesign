'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <Link href="/" className="logo">
            <Image 
              src="/images/logo-big.png" 
              alt="DynamicPassGen Logo" 
              width={180} 
              height={40}
              priority
              loading="eager"
              fetchpriority="high"
              style={{
                width: 'auto',
                height: '40px',
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
            <span>{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
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
