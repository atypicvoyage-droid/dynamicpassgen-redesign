import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Account Security Score | DynamicPassGen',
  description: 'Get a comprehensive security audit of your password practices',
}

export default function SecurityScorePage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Account Security Score</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>Get a comprehensive security audit with personalized recommendations.</p>
          
          <div style={{background: 'var(--navy-card)', padding: '32px', borderRadius: '16px'}}>
            <p>Answer a few questions about your password practices to receive:</p>
            <ul style={{marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8'}}>
              <li>Overall security score (0-100)</li>
              <li>Identified vulnerabilities</li>
              <li>Personalized improvement recommendations</li>
              <li>Priority actions to take</li>
              <li>Comparison to security best practices</li>
            </ul>
            <p style={{marginTop: '1.5rem'}}>This tool evaluates:</p>
            <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.8'}}>
              <li>Password length and complexity</li>
              <li>Password reuse across accounts</li>
              <li>Two-factor authentication usage</li>
              <li>Password manager adoption</li>
              <li>Regular password rotation habits</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
