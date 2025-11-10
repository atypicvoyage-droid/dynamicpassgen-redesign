import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | DynamicPassGen',
  description: 'Learn about DynamicPassGen and our mission to provide secure password generation',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>About DynamicPassGen</h1>
          <div style={{lineHeight: '1.8'}}>
            <p style={{marginBottom: '1rem'}}>DynamicPassGen is built by a team passionate about cybersecurity and user safety. We are committed to providing best-in-class password generation, security learning resources, and digital trust signals for every user.</p>
            
            <h2 style={{fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem'}}>Our Mission</h2>
            <ul style={{marginLeft: '1.5rem', marginBottom: '1rem'}}>
              <li>Empower users to create unbreakable passwords easily</li>
              <li>Educate the public about advanced cyber hygiene</li>
              <li>Continuously improve based on user feedback</li>
              <li>Maintain 100% client-side security - your passwords never touch our servers</li>
            </ul>
            
            <h2 style={{fontSize: '1.75rem', marginTop: '2rem', marginBottom: '1rem'}}>Why Trust Us</h2>
            <p>All password processing is done client-side using Web Crypto API for maximum privacy and security. We follow NIST 2025 guidelines and implement cryptographically secure random number generation.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
