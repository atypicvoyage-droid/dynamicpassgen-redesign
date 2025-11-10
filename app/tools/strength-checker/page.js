import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Password Strength Checker | DynamicPassGen',
  description: 'Check the strength of your existing passwords with detailed analysis',
}

export default function StrengthCheckerPage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Password Strength Checker</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>Analyze your existing passwords to identify weaknesses before hackers do.</p>
          
          <div style={{background: 'var(--navy-card)', padding: '32px', borderRadius: '16px'}}>
            <p>This tool helps you assess how strong your existing passwords are. Enter a password to see:</p>
            <ul style={{marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8'}}>
              <li>Entropy calculation</li>
              <li>Estimated crack time</li>
              <li>Character diversity analysis</li>
              <li>Improvement suggestions</li>
            </ul>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)'}}>
              Note: All analysis happens in your browser - we never see or store your passwords.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
