import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setToolsDropdownOpen(false)
  }
  
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#0070e0"/>
              <path d="M16 8C13.2386 8 11 10.2386 11 13V15H10C9.44772 15 9 15.4477 9 16V23C9 23.5523 9.44772 24 10 24H22C22.5523 24 23 23.5523 23 23V16C23 15.4477 22.5523 15 22 15H21V13C21 10.2386 18.7614 8 16 8ZM19 15H13V13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13V15Z" fill="white"/>
            </svg>
            <span className="logo-text">DynamicPassGen</span>
          </Link>
          
          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Password Generator
            </Link>
            
            <Link 
              to="/guides" 
              className={`nav-link ${isActive('/guides') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Security Guides
            </Link>
            
            <div className={`nav-item dropdown ${toolsDropdownOpen ? 'open' : ''}`}>
              <span 
                className={`nav-link dropdown-toggle ${isActive('/tools') ? 'active' : ''}`}
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              >
                Tools
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{marginLeft: '4px'}}>
                  <path d="M6 8L2 4h8z"/>
                </svg>
              </span>
              <div className="dropdown-menu">
                <Link 
                  to="/tools/strength-checker" 
                  className={`dropdown-item ${isActive('/tools/strength-checker') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Strength Checker
                </Link>
                <Link 
                  to="/tools/breach-checker" 
                  className={`dropdown-item ${isActive('/tools/breach-checker') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Breach Checker
                </Link>
                <Link 
                  to="/tools/security-score" 
                  className={`dropdown-item ${isActive('/tools/security-score') ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  Security Score
                </Link>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
