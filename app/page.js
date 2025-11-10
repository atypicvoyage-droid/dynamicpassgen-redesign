import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGenerator from '@/components/PasswordGenerator'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <section className="hero">
          <h1>STRONG PASSWORDS,<br/>SECURE LIFE</h1>
          <p>
            Generate military-grade passwords using advanced cryptographic algorithms.
            NIST 2025 compliant with real-time entropy analysis.
          </p>
        </section>
        
        <section style={{padding: '0 20px 40px'}}>
          <PasswordGenerator />
        </section>
        
        <section className="features-section">
          <h2 className="features-heading">WHY PASSWORD SECURITY MATTERS</h2>
          <div className="features-grid">
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#2563eb"/>
              </svg>
              <h3 className="feature-title">Data Protection</h3>
              <p className="feature-description">Prevent unauthorized access to your sensitive information</p>
            </div>
            
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" fill="#2563eb"/>
              </svg>
              <h3 className="feature-title">Prevent Hacking</h3>
              <p className="feature-description">Stop brute-force and dictionary attacks</p>
            </div>
            
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#22d6a7"/>
              </svg>
              <h3 className="feature-title">Use Unique Passwords</h3>
              <p className="feature-description">Different passwords for each account</p>
            </div>
            
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#2563eb"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="feature-title">Enable 2FA</h3>
              <p className="feature-description">Add two-factor authentication for extra security</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
