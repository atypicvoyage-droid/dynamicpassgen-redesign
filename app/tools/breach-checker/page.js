import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Breach Database Checker | DynamicPassGen',
  description: 'Check if your passwords or emails have been exposed in data breaches',
}

export default function BreachCheckerPage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Breach Database Checker</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>Verify if your passwords or email have appeared in known data breaches.</p>
          
          <div style={{background: 'var(--navy-card)', padding: '32px', borderRadius: '16px'}}>
            <p>Check against 10+ billion compromised credentials from major data breaches including:</p>
            <ul style={{marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8'}}>
              <li>LinkedIn breach (2012, 2021)</li>
              <li>Yahoo breach (2013)</li>
              <li>Adobe breach (2013)</li>
              <li>MySpace breach (2013)</li>
              <li>And many more...</li>
            </ul>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)'}}>
              Integration with HaveIBeenPwned API coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
