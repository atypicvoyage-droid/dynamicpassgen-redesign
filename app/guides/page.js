import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Security Guides - Password Protection Best Practices | DynamicPassGen',
  description: 'Expert guides on password security, encryption, and digital protection',
}

const guides = [
  { slug: 'banking-passwords', title: 'Strong Passwords for Banking Apps', excerpt: 'Protect your financial accounts with NIST-approved strategies...' },
  { slug: 'nist-guidelines', title: 'NIST Password Guidelines 2025', excerpt: 'Complete guide to NIST SP 800-63B requirements...' },
  { slug: 'password-entropy', title: 'Password Entropy Explained', excerpt: 'Understanding the mathematics of password security...' },
  { slug: 'two-factor-authentication', title: 'Complete 2FA Guide', excerpt: 'Everything you need to know about two-factor authentication...' },
]

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Security Guides</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '3rem'}}>Expert guides on password security and digital protection</p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
            {guides.map(guide => (
              <Link 
                key={guide.slug} 
                href={`/guides/${guide.slug}`}
                style={{
                  background: 'var(--navy-card)',
                  padding: '32px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{fontSize: '1.25rem', marginBottom: '12px'}}>{guide.title}</h3>
                <p style={{color: 'var(--text-light)', fontSize: '0.95rem'}}>{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
