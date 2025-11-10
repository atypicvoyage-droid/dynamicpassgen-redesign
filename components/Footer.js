import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px', textAlign: 'left', maxWidth: '1000px', margin: '0 auto 48px'}}>
          <div>
            <h4 style={{color: 'white', fontWeight: '700', marginBottom: '16px', fontSize: '1rem'}}>Product</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <Link href="/" className="footer-link">Password Generator</Link>
              <Link href="/tools/strength-checker" className="footer-link">Strength Checker</Link>
              <Link href="/tools/breach-checker" className="footer-link">Breach Checker</Link>
              <Link href="/tools/security-score" className="footer-link">Security Score</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{color: 'white', fontWeight: '700', marginBottom: '16px', fontSize: '1rem'}}>Resources</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <Link href="/guides" className="footer-link">Security Guides</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{color: 'white', fontWeight: '700', marginBottom: '16px', fontSize: '1rem'}}>Legal</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-link">Terms of Service</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{color: 'white', fontWeight: '700', marginBottom: '16px', fontSize: '1rem'}}>Company</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <a href="https://github.com" target="_blank" rel="noopener" className="footer-link">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="footer-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '32px'}}>
          <p style={{marginBottom: '12px', fontSize: '0.95rem', color: 'var(--text-lighter)'}}>
            © {currentYear} DynamicPassGen. All rights reserved.
          </p>
          <p style={{fontSize: '0.85rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto'}}>
            All password generation happens client-side using Web Crypto API. Your passwords never touch our servers.
          </p>
        </div>
        
        {/* Trust Badges */}
        <div style={{display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap', fontSize: '0.8rem', opacity: 0.6}}>
          <span>✓ NIST Compliant</span>
          <span>•</span>
          <span>✓ 256-bit Encryption</span>
          <span>•</span>
          <span>✓ Zero Logs</span>
          <span>•</span>
          <span>✓ Open Source</span>
        </div>
      </div>
    </footer>
  )
}
