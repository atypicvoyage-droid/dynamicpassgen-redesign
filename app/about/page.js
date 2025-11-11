import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - DynamicPassGen | Free Password Generator Tool',
  description: 'Learn about DynamicPassGen, a free password generator built with security and privacy in mind. 100% client-side generation, NIST compliant, and trusted by thousands of users worldwide.',
  keywords: 'about dynamicpassgen, password generator team, security tool, privacy-focused, open source password tool',
  openGraph: {
    title: 'About DynamicPassGen - Free Password Generator',
    description: 'Learn about our mission to provide secure, private password generation for everyone.',
    url: 'https://dynamicpassgen.com/about',
    siteName: 'DynamicPassGen',
    type: 'website',
  },
}

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DynamicPassGen",
    "url": "https://dynamicpassgen.com",
    "logo": "https://dynamicpassgen.com/images/logo-big.png",
    "description": "Free, secure password generator using cryptographic algorithms. NIST-compliant, 100% client-side generation with zero data collection.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/dynamicpassgen",
      "https://github.com/dynamicpassgen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@dynamicpassgen.com",
      "availableLanguage": ["English"]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dynamicpassgen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://dynamicpassgen.com/about"
      }
    ]
  };

  return (
    <>
      <Script id="schema-org-about" type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </Script>
      <Script id="schema-breadcrumb-about" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              About DynamicPassGen
            </h1>
            <p className="hero-description">
              Building a more secure internet, one password at a time. Free, private, and trusted by thousands worldwide.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="content-section">
          <div className="content-container">
            <h2 className="section-heading">Our Mission</h2>
            <div className="content-text">
              <p>
                In an era where data breaches and cyber attacks are commonplace, <strong>DynamicPassGen</strong> was created with a simple yet powerful mission: to provide everyone with access to cryptographically secure password generation tools—completely free and without compromising privacy.
              </p>
              <p>
                We believe that online security should be accessible to all, not just those who can afford expensive password managers or enterprise security tools. That's why we built a password generator that runs entirely in your browser, ensuring your passwords never touch our servers or travel over the internet.
              </p>
              <p>
                Our tool uses the same cryptographic algorithms trusted by banks, governments, and security professionals worldwide. We follow <strong>NIST SP 800-63B</strong> guidelines and leverage the Web Crypto API to ensure every password generated is truly random and unbreakable.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Built This */}
        <section className="content-section alt-bg">
          <div className="content-container">
            <h2 className="section-heading">Why We Built DynamicPassGen</h2>
            <div className="content-text">
              <p>
                After witnessing countless high-profile data breaches—many caused by weak or reused passwords—our team recognized a critical need: a free, trustworthy tool that anyone could use to generate secure passwords instantly.
              </p>
              <p>
                Most existing password generators had one or more of these issues:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>Required registration:</strong> Many tools force users to create accounts, adding friction and privacy concerns.</li>
                <li><strong>Stored passwords server-side:</strong> Defeating the purpose of security by introducing a single point of failure.</li>
                <li><strong>Lacked transparency:</strong> Closed-source algorithms with no way to verify security claims.</li>
                <li><strong>Aggressive monetization:</strong> Intrusive ads, paywalls, or upselling premium features.</li>
              </ul>
              <p>
                We set out to solve all of these problems. DynamicPassGen is free, requires no registration, never stores your data, and uses transparent, industry-standard cryptographic methods.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="content-section">
          <div className="content-container-wide">
            <h2 className="section-heading">Our Core Values</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon blue">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Privacy First</h3>
                <p className="feature-description">
                  100% client-side generation means your passwords never leave your device. No servers, no logging, no tracking.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon green">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Transparency</h3>
                <p className="feature-description">
                  Our code and algorithms are transparent. We use industry-standard Web Crypto API—no hidden backdoors.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon yellow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" fill="none"/>
                  </svg>
                </div>
                <h3 className="feature-title">Always Free</h3>
                <p className="feature-description">
                  Security shouldn't have a price tag. DynamicPassGen will always be 100% free with no premium tiers or paywalls.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon purple">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <h3 className="feature-title">User-Centric</h3>
                <p className="feature-description">
                  Built with real users in mind. Simple interface, instant results, and features that actually matter.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon pink">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Security Standards</h3>
                <p className="feature-description">
                  NIST SP 800-63B compliant. Using cryptographically secure random number generation (CSPRNG).
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon cyan">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Community Driven</h3>
                <p className="feature-description">
                  We listen to feedback and continuously improve based on real user needs and security best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="content-section alt-bg">
          <div className="content-container">
            <h2 className="section-heading">Our Technology</h2>
            <div className="content-text">
              <p>
                DynamicPassGen is built on modern web technologies designed for security, performance, and reliability:
              </p>
              <h3 className="subsection-title">Web Crypto API</h3>
              <p>
                We use <code style={{ background: 'var(--card-alt-bg)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>window.crypto.getRandomValues()</code>, the browser's native cryptographic random number generator. This is the same technology used by banks and security-critical applications.
              </p>

              <h3 className="subsection-title">Client-Side Processing</h3>
              <p>
                All password generation happens in your browser using JavaScript. No data is sent to our servers, meaning we physically cannot see, log, or store your passwords. This architecture ensures complete privacy.
              </p>

              <h3 className="subsection-title">NIST Compliance</h3>
              <p>
                Our tool follows the National Institute of Standards and Technology (NIST) Special Publication 800-63B guidelines for password strength, entropy calculation, and generation methods.
              </p>

              <h3 className="subsection-title">Open Standards</h3>
              <p>
                We don't reinvent the wheel. By using established cryptographic standards and browser APIs, we ensure our tool is auditable, verifiable, and trustworthy.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="content-section">
          <div className="content-container">
            <h2 className="section-heading">Our Team</h2>
            <div className="content-text">
              <p>
                DynamicPassGen is maintained by a team of security enthusiasts, developers, and privacy advocates who believe in making the internet safer for everyone. While we operate as a small, focused team, our commitment to security and user privacy is unwavering.
              </p>
              <p>
                We welcome contributions, feedback, and suggestions from the community. If you're interested in helping improve DynamicPassGen or have ideas for new features, we'd love to hear from you.
              </p>
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link 
                  href="/contact"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'About Page - Contact Team'
                      });
                    }
                  }}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '14px 32px',
                    borderRadius: '12px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    transition: 'transform 0.2s',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="content-section alt-bg">
          <div className="content-container-wide">
            <h2 className="section-heading">By the Numbers</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '32px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#3b82f6', marginBottom: '8px' }}>
                  100%
                </div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Client-Side Generation
                </div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#10b981', marginBottom: '8px' }}>
                  0
                </div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Passwords Stored
                </div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#8b5cf6', marginBottom: '8px' }}>
                  256-bit
                </div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Encryption Standard
                </div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#f59e0b', marginBottom: '8px' }}>
                  Free
                </div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Forever & Always
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Create Secure Passwords?"
          description="Join thousands of users who trust DynamicPassGen for their password security needs."
          buttonText="Generate Password Now →"
          buttonLink="/#generator"
        />
      </main>
      <Footer />
    </>
  )
}
