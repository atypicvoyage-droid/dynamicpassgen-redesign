import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">DynamicPassGen</h3>
            <p className="footer-description">
              Cryptographically secure password generation with NIST 2025 compliance. 
              Generate unbreakable passwords for maximum account security.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Tools</h4>
            <ul className="footer-links">
              <li><Link to="/">Password Generator</Link></li>
              <li><Link to="/tools/strength-checker">Strength Checker</Link></li>
              <li><Link to="/tools/breach-checker">Breach Checker</Link></li>
              <li><Link to="/tools/security-score">Security Score</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/guides">Security Guides</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} DynamicPassGen. All rights reserved.
          </p>
          <p className="security-note">
            All password generation happens client-side. Your passwords never touch our servers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
