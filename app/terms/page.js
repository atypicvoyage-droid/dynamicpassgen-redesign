import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | DynamicPassGen',
  description: 'Terms and conditions for using DynamicPassGen',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Terms of Service</h1>
          
          <div style={{lineHeight: '1.8'}}>
            <p style={{marginBottom: '1rem'}}>Use of DynamicPassGen is subject to these terms:</p>
            
            <h2 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Usage Terms</h2>
            <p>Passwords generated are for private, personal, or business use only. No warranty is given on the suitability or strength, though all best practices are followed.</p>
            
            <h2 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>User Responsibility</h2>
            <p>Users are responsible for storing passwords securely. We disclaim liability for any security breach due to improper password management or usage outside recommended guidelines.</p>
            
            <h2 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>Service Availability</h2>
            <p>We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access to the service.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
