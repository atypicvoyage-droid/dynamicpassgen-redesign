import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | DynamicPassGen',
  description: 'Our privacy policy and data handling practices',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Privacy Policy</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}><em>Last Updated: November 2025</em></p>
          
          <div style={{lineHeight: '1.8'}}>
            <h2 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Your Privacy Matters</h2>
            <p>Your privacy is our highest priority. DynamicPassGen is 100% client-side for all password generation – nothing you enter or generate is ever stored or sent to our servers.</p>
            
            <h2 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>What We Collect</h2>
            <ul style={{marginLeft: '1.5rem'}}>
              <li>No passwords or sensitive user input are ever logged</li>
              <li>Data processed for analytics is anonymized (Google Analytics)</li>
              <li>Cookies are used only for essential functionality and analytics</li>
            </ul>
            
            <h2 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Your Rights</h2>
            <p>GDPR compliant: you may request data deletion or information at any time via our contact form.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
