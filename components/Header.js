'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#2563eb"/>
            <path d="M16 8C13.2386 8 11 10.2386 11 13V15H10C9.44772 15 9 15.4477 9 16V23C9 23.5523 9.44772 24 10 24H22C22.5523 24 23 23.5523 23 23V16C23 15.4477 22.5523 15 22 15H21V13C21 10.2386 18.7614 8 16 8ZM19 15H13V13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13V15Z" fill="white"/>
          </svg>
          <span>DynamicPassGen</span>
        </Link>
        
        <nav className="nav-links">
          <Link href="/" className="nav-link">Password Generator</Link>
          <Link href="/guides" className="nav-link">Security Guides</Link>
          <Link href="/tools/strength-checker" className="nav-link">Tools</Link>
          <Link href="/about" className="nav-link">About Us</Link>
        </nav>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span>☰</span>
        </button>
      </div>
    </header>
  )
}
