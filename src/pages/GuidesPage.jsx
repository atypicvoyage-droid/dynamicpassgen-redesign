import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/Common/SEOHead'

const guides = [
  { slug: 'banking-passwords', title: 'Strong Passwords for Banking Apps', excerpt: 'Protect your financial accounts...' },
  { slug: 'nist-guidelines', title: 'NIST Password Guidelines 2025', excerpt: 'Complete NIST compliance guide...' },
  { slug: 'password-entropy', title: 'Password Entropy Explained', excerpt: 'Mathematics of security...' },
  // Add 25+ more guide entries in real content
]

const GuidesPage = () => (
  <>
    <SEOHead title="Security Guides - Password Protection Best Practices" />
    <section className="section">
      <div className="container">
        <h1>Security Guides</h1>
        <p className="text-muted">Expert guides on password security and digital protection</p>
        <div className="grid-2" style={{marginTop: '2rem'}}>
          {guides.map(guide => (
            <Link key={guide.slug} to={`/guides/${guide.slug}`} className="card">
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default GuidesPage
