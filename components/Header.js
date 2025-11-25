'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// To handle item-specific hover states cleanly, we create a small local component.
function ToolLink({ href, children }) {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === href

  const style = {
    display: 'block',
    padding: '10px 18px',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    color: 'var(--text-primary, #1f2937)',
    transition: 'all 0.15s ease',
    whiteSpace: 'nowrap',
    borderRadius: '6px',
    fontWeight: isActive ? 600 : 500,
    ...(isActive && { 
        background: 'rgba(59, 130, 246, 0.1)', 
        color: '#2563eb' 
    }),
    ...(isHovered && !isActive && { 
        background: 'rgba(59, 130, 246, 0.08)', 
        color: '#2563eb', 
        paddingLeft: '22px' 
    }),
  }

  return (
    <Link
      href={href}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(90)
  const [isMobileView, setIsMobileView] = useState(false)
  const headerRef = useRef(null)
  const pathname = usePathname()

  const tools = [
    { name: 'Password Generator', href: '/' },
    { name: 'Strength Checker', href: '/tools/strength-checker' },
    { name: 'Breach Checker', href: '/tools/breach-checker' },
    { name: 'Security Score', href: '/tools/security-score' },
  ]

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const closeAll = () => {
    setMobileMenuOpen(false)
    setToolsOpen(false)
  }

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="header-content">
          <Link href="/" className="logo logo-desktop">
            <Image
              src="/images/logo-big.png" alt="DynamicPassGen Logo" width={220} height={50} priority
              style={{ width: 'auto', height: '50px', objectFit: 'contain' }}
            />
          </Link>
          <Link href="/" className="logo logo-mobile">
            <Image
              src="/images/logo-big.png" alt="DynamicPassGen Logo" width={200} height={50} priority
              style={{ width: 'auto', height: '45px', objectFit: 'contain' }}
            />
          </Link>

          <nav className="nav-links" style={{ display: isMobileView ? 'none' : 'flex' }}>
            <Link href="/" className="nav-link">Generator</Link>
            <Link href="/guides" className="nav-link">Security Guides</Link>

            <div style={{ position: 'relative' }}>
              <button
                type="button"
                className="nav-link"
                onClick={() => setToolsOpen((v) => !v)}
                style={{ display: 'inline-flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
              >
                Tools
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ marginLeft: 6, transform: toolsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {toolsOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  minWidth: '220px',
                  background: 'var(--card-bg, #fff)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color, #e5e7eb)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  padding: '6px',
                  zIndex: 1000,
                }}>
                  {tools.map((tool) => (
                    <ToolLink key={tool.href} href={tool.href}>
                      {tool.name}
                    </ToolLink>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link nav-link-cta">Get Started</Link>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ display: isMobileView ? 'block' : 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu" style={{ top: `${headerHeight}px` }}>
          <nav className="mobile-nav">
            <Link href="/" className="mobile-nav-link" onClick={closeAll}>Generator</Link>
            <Link href="/guides" className="mobile-nav-link" onClick={closeAll}>Security Guides</Link>
            <div style={{ background: 'var(--card-alt-bg)', borderRadius: '12px', padding: '12px', margin: '8px 0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', paddingLeft: '4px' }}>Tools</div>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={closeAll}
                  style={{
                    display: 'block',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    ...(pathname === tool.href && { background: 'rgba(59, 130, 246, 0.1)', color: '#2563eb', fontWeight: 600 }),
                  }}
                >
                  {tool.name}
                </Link>
              ))}
            </div>
            <Link href="/about" className="mobile-nav-link" onClick={closeAll}>About</Link>
            <Link href="/contact" className="mobile-nav-link-cta" onClick={closeAll}>Get Started</Link>
          </nav>
        </div>
      )}
    </>
  )
}
