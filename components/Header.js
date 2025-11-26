'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackClick } from '@/lib/withGAClick'

// To handle item-specific hover states cleanly, we create a small local component.
function ToolLink({ href, children }) {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const isActive = pathname === href || pathname === href + '/' || pathname + '/' === href

  const handleClick = () => {
    trackClick(`Header Tool Link - ${children}`, 'Navigation')
  }

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
      onClick={handleClick}
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
  const [isDarkMode, setIsDarkMode] = useState(false)
  const headerRef = useRef(null)
  const pathname = usePathname()

  const tools = [
    { name: 'Strength Checker', href: '/tools/strength-checker/' },
    { name: 'Breach Checker', href: '/tools/breach-checker/' },
    { name: 'Security Score', href: '/tools/security-score/' },
  ]

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768)
    }
    
    // Check for dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                     window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(isDark)
    }
    
    checkScreenSize()
    checkDarkMode()
    
    window.addEventListener('resize', checkScreenSize)
    
    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkDarkMode)
    
    return () => {
      window.removeEventListener('resize', checkScreenSize)
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkDarkMode)
    }
  }, [])

  const closeAll = () => {
    setMobileMenuOpen(false)
    setToolsOpen(false)
  }

  // Helper function to check if link is active
  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === '/' || pathname === ''
    }
    return pathname === href || pathname === href + '/' || pathname + '/' === href
  }

  // Check if we're on any tools page (including child pages)
  const isOnToolsPage = pathname.startsWith('/tools/')

  // Check if we're on guides page or any guide article
  const isOnGuidesPage = pathname === '/guides' || pathname === '/guides/' || pathname.startsWith('/guides/')

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="header-content">
          {/* Logo - switches based on dark mode */}
          <Link 
            href="/" 
            className="logo logo-desktop"
            onClick={() => trackClick('Header Logo', 'Navigation')}
          >
            <Image
              src={isDarkMode ? "/images/logo-dark.png" : "/images/logo-big.png"}
              alt="DynamicPassGen Logo" 
              width={220} 
              height={50} 
              priority
              style={{ width: 'auto', height: '50px', objectFit: 'contain' }}
            />
          </Link>
          <Link 
            href="/" 
            className="logo logo-mobile"
            onClick={() => trackClick('Header Logo Mobile', 'Navigation')}
          >
            <Image
              src={isDarkMode ? "/images/logo-dark.png" : "/images/logo-big.png"}
              alt="DynamicPassGen Logo" 
              width={200} 
              height={50} 
              priority
              style={{ width: 'auto', height: '45px', objectFit: 'contain' }}
            />
          </Link>

          <nav className="nav-links" style={{ display: isMobileView ? 'none' : 'flex' }}>
            <Link 
              href="/" 
              className="nav-link"
              onClick={() => trackClick('Header Nav - Generator', 'Navigation')}
              style={{ 
                color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                ...(isLinkActive('/') && { color: '#2563eb', fontWeight: 600 })
              }}
            >
              Generator
            </Link>
            <Link 
              href="/guides/" 
              className="nav-link"
              onClick={() => trackClick('Header Nav - Security Guides', 'Navigation')}
              style={{ 
                color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                ...(isOnGuidesPage && { color: '#2563eb', fontWeight: 600 })
              }}
            >
              Security Guides
            </Link>

            <div style={{ position: 'relative' }}>
              <button
                type="button"
                className="nav-link"
                onClick={() => {
                  setToolsOpen((v) => !v)
                  trackClick('Header Nav - Tools Dropdown', 'Navigation')
                }}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  font: 'inherit', 
                  color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                  ...(isOnToolsPage && { color: '#2563eb', fontWeight: 600 })
                }}
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
                  background: isDarkMode ? '#1f2937' : 'var(--card-bg, #fff)',
                  borderRadius: '12px',
                  border: `1px solid ${isDarkMode ? '#374151' : 'var(--border-color, #e5e7eb)'}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  padding: '6px',
                  zIndex: 1000,
                }}>
                  {tools.map((tool) => (
                    <div key={tool.href} style={{ 
                      color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)'
                    }}>
                      <ToolLink href={tool.href}>
                        {tool.name}
                      </ToolLink>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about/" 
              className="nav-link"
              onClick={() => trackClick('Header Nav - About', 'Navigation')}
              style={{ 
                color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                ...(isLinkActive('/about/') && { color: '#2563eb', fontWeight: 600 })
              }}
            >
              About
            </Link>
            <Link 
              href="/contact/" 
              className="nav-link nav-link-cta"
              onClick={() => trackClick('Header Nav - Get Started CTA', 'CTA')}
            >
              Get Started
            </Link>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => {
              setMobileMenuOpen((v) => !v)
              trackClick('Mobile Menu Toggle', 'Navigation')
            }}
            aria-label="Toggle menu"
            style={{ 
              display: isMobileView ? 'block' : 'none',
              color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)'
            }}
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
            <Link 
              href="/" 
              className="mobile-nav-link" 
              onClick={() => {
                closeAll()
                trackClick('Mobile Nav - Generator', 'Navigation')
              }}
              style={{ 
                color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                ...(isLinkActive('/') && { color: '#2563eb', fontWeight: 600 })
              }}
            >
              Generator
            </Link>
            <Link 
              href="/guides/" 
              className="mobile-nav-link" 
              onClick={() => {
                closeAll()
                trackClick('Mobile Nav - Security Guides', 'Navigation')
              }}
              style={{ 
                color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                ...(isOnGuidesPage && { color: '#2563eb', fontWeight: 600 })
              }}
            >
              Security Guides
            </Link>
            <div style={{ 
              background: isDarkMode ? '#1f2937' : 'var(--card-alt-bg)', 
              borderRadius: '12px', 
              padding: '12px', 
              margin: '8px 0' 
            }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: isDarkMode ? '#9ca3af' : 'var(--text-secondary)', 
                textTransform: 'uppercase', 
                marginBottom: '8px', 
                paddingLeft: '4px' 
              }}>
                Tools
              </div>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => {
                    closeAll()
                    trackClick(`Mobile Nav - ${tool.name}`, 'Navigation')
                  }}
                  style={{
                    display: 'block',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                    ...(isLinkActive(tool.href) && { background: 'rgba(59, 130, 246, 0.1)', color: '#2563eb', fontWeight: 600 }),
                  }}
                >
                  {tool.name}
                </Link>
              ))}
            </div>
            <Link 
              href="/about/" 
              className="mobile-nav-link" 
              onClick={() => {
                closeAll()
                trackClick('Mobile Nav - About', 'Navigation')
              }}
              style={{ 
                color: isDarkMode ? '#e5e7eb' : 'var(--text-primary)',
                ...(isLinkActive('/about/') && { color: '#2563eb', fontWeight: 600 })
              }}
            >
              About
            </Link>
            <Link 
              href="/contact/" 
              className="mobile-nav-link-cta" 
              onClick={() => {
                closeAll()
                trackClick('Mobile Nav - Get Started CTA', 'CTA')
              }}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
