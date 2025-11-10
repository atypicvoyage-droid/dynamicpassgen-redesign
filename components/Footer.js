import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/guides" className="footer-link">Guides</Link>
          <Link href="/tools/strength-checker" className="footer-link">Tools</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        <p style={{marginTop: '20px', fontSize: '0.875rem'}}>© {currentYear} DynamicPassGen. All rights reserved.</p>
        <p style={{marginTop: '8px', fontSize: '0.8rem', opacity: 0.7}}>All password generation happens client-side. Your passwords never touch our servers.</p>
      </div>
    </footer>
  )
}
