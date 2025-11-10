import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/Common/SEOHead'
import PasswordGenerator from '../components/Generator/PasswordGenerator'

const HomePage = () => {
  return (
    <>
      <SEOHead 
        title="Dynamic Password Generator - Secure, NIST-Compliant Free Tool | 2025"
        description="Generate cryptographically secure passwords with advanced algorithms. Real-time strength analysis, NIST 2025 compliant, 100% client-side security. Free password generator tool."
        keywords="dynamic password generator, secure password generator, NIST compliant, cryptographic password, random password tool, strong password creator"
        canonical="https://dynamicpassgen.com"
      />
      
      <section className="hero">
        <div className="container">
          <h1>STRONG PASSWORDS, SECURE LIFE</h1>
          <p>
            Generate military-grade passwords using advanced cryptographic algorithms.
            NIST 2025 compliant with real-time entropy analysis.
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container-narrow">
          <PasswordGenerator />
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center">Why Password Security Matters</h2>
          <div className="grid-4" style={{ marginTop: '2rem' }}>
            <div className="card text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{margin: '0 auto 1rem'}}>
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#0070e0"/>
              </svg>
              <h3>Data Protection</h3>
              <p>Prevent unauthorized access to your sensitive information and accounts</p>
            </div>
            
            <div className="card text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{margin: '0 auto 1rem'}}>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" fill="#0070e0"/>
              </svg>
              <h3>Prevent Hacking</h3>
              <p>Stop brute-force and dictionary attacks with cryptographic security</p>
            </div>
            
            <div className="card text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{margin: '0 auto 1rem'}}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#00d4aa"/>
              </svg>
              <h3>Use Unique Passwords</h3>
              <p>Different passwords for each account to prevent cascade breaches</p>
            </div>
            
            <div className="card text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{margin: '0 auto 1rem'}}>
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#0070e0"/>
              </svg>
              <h3>Enable 2FA</h3>
              <p>Add extra security layer with two-factor authentication</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="text-center">How Cryptographic Password Generation Works</h2>
          <div className="grid-2" style={{ marginTop: '2rem' }}>
            <div>
              <h3>1. Entropy Pool Initialization</h3>
              <p>
                Your browser accesses the operating system's entropy pool—a collection of random data 
                gathered from unpredictable sources like mouse movements, keyboard timing, and hardware noise.
              </p>
              
              <h3>2. Cryptographic Selection Process</h3>
              <p>
                For each character position, window.crypto.getRandomValues() generates a 
                cryptographically random number. This ensures true randomness that cannot be 
                reverse-engineered by attackers.
              </p>
            </div>
            
            <div>
              <h3>3. Strength Validation</h3>
              <p>
                The generated password undergoes entropy calculation using Shannon's formula: 
                H = L × log₂(N). We check for patterns, repeated sequences, and weak combinations.
              </p>
              
              <h3>4. Zero Server Interaction</h3>
              <p>
                All password generation occurs client-side in your browser. Your passwords 
                never touch our servers, aren't logged, and can't be intercepted.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center">Complementary Security Tools</h2>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <Link to="/tools/strength-checker" className="card">
              <h3>Password Strength Checker</h3>
              <p>
                Analyze your existing passwords to identify weaknesses before hackers do. 
                Get detailed strength reports with crack time estimates.
              </p>
            </Link>
            
            <Link to="/tools/breach-checker" className="card">
              <h3>Breach Database Checker</h3>
              <p>
                Verify if your passwords have appeared in known data breaches. 
                Check against 10+ billion compromised credentials.
              </p>
            </Link>
            
            <Link to="/tools/security-score" className="card">
              <h3>Account Security Score</h3>
              <p>
                Get a comprehensive security audit of your password practices with 
                personalized recommendations.
              </p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <h2 className="text-center">Latest Security Guides</h2>
          <p className="text-center text-muted" style={{ marginBottom: '2rem' }}>
            Expert insights on password security, threats, and best practices
          </p>
          <div className="grid-3">
            <Link to="/guides/banking-passwords" className="card">
              <h3>Strong Passwords for Banking Apps</h3>
              <p>Protect your financial accounts with NIST-approved password strategies...</p>
            </Link>
            
            <Link to="/guides/password-entropy" className="card">
              <h3>Password Entropy Explained</h3>
              <p>Understanding the mathematics behind password security and strength calculations...</p>
            </Link>
            
            <Link to="/guides/nist-guidelines" className="card">
              <h3>NIST Guidelines 2025</h3>
              <p>Complete guide to NIST SP 800-63B password requirements and compliance...</p>
            </Link>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/guides" className="btn btn-large">View All Security Guides</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
