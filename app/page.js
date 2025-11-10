import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGenerator from '@/components/PasswordGenerator'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <section className="hero">
          <div style={{marginBottom: '16px', display: 'inline-block', padding: '8px 20px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--blue-primary)', letterSpacing: '0.05em'}}>
            ✓ NIST 2025 CERTIFIED • 100% CLIENT-SIDE
          </div>
          <h1>
            STRONG PASSWORDS,<br/>
            <span style={{background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>SECURE LIFE</span>
          </h1>
          <p>
            Generate military-grade passwords using advanced cryptographic algorithms.
            Real-time strength analysis with enterprise-level security standards.
          </p>
        </section>
        
        <section style={{padding: '0 24px 60px'}}>
          <PasswordGenerator />
          
          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#10b981"/>
              </svg>
              <span>256-bit Encryption</span>
            </div>
            <div className="trust-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#3b82f6"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
              <span>NIST SP 800-63B</span>
            </div>
            <div className="trust-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" fill="#8b5cf6"/>
              </svg>
              <span>Zero Server Logs</span>
            </div>
            <div className="trust-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" fill="#10b981"/>
              </svg>
              <span>Real-Time Analysis</span>
            </div>
          </div>
        </section>
        
        <section className="features-section">
          <h2 className="features-heading">WHY PASSWORD SECURITY MATTERS</h2>
          <div className="features-grid">
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#3b82f6" opacity="0.1"/>
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#3b82f6"/>
              </svg>
              <h3 className="feature-title">Data Protection</h3>
              <p className="feature-description">Prevent unauthorized access to your sensitive information with cryptographically secure passwords</p>
            </div>
            
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#ef4444" opacity="0.1"/>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" fill="#ef4444"/>
              </svg>
              <h3 className="feature-title">Prevent Hacking</h3>
              <p className="feature-description">Stop brute-force and dictionary attacks with passwords that meet enterprise security standards</p>
            </div>
            
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#10b981" opacity="0.1"/>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#10b981"/>
              </svg>
              <h3 className="feature-title">Use Unique Passwords</h3>
              <p className="feature-description">Different passwords for each account to prevent cascade breaches and credential stuffing</p>
            </div>
            
            <div className="feature-card">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#8b5cf6" opacity="0.1"/>
                <circle cx="12" cy="12" r="9" fill="#8b5cf6"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="feature-title">Enable 2FA</h3>
              <p className="feature-description">Add two-factor authentication for an additional security layer beyond passwords alone</p>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section style={{padding: '80px 24px', maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', letterSpacing: '-0.02em'}}>How Cryptographic Generation Works</h2>
          <div style={{display: 'grid', gap: '32px'}}>
            <div style={{background: 'rgba(30, 41, 59, 0.4)', padding: '32px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '800'}}>1</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', margin: 0}}>Entropy Pool Initialization</h3>
              </div>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7', margin: 0}}>Your browser accesses the operating system's entropy pool—a collection of random data gathered from unpredictable sources like hardware noise, mouse movements, and keyboard timing.</p>
            </div>
            
            <div style={{background: 'rgba(30, 41, 59, 0.4)', padding: '32px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '800'}}>2</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', margin: 0}}>Cryptographic Selection</h3>
              </div>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7', margin: 0}}>window.crypto.getRandomValues() generates truly random numbers for each character position, ensuring unpredictability that cannot be reverse-engineered by attackers.</p>
            </div>
            
            <div style={{background: 'rgba(30, 41, 59, 0.4)', padding: '32px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
                <div style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '800'}}>3</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', margin: 0}}>Strength Validation</h3>
              </div>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7', margin: 0}}>Real-time entropy calculation using Shannon's formula (H = L × log₂(N)) ensures your password meets NIST SP 800-63B requirements for high-security applications.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
