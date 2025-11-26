import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'
import AdPlaceholder from '@/components/AdPlaceholder'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import Script from 'next/script'

export const metadata = {
  title: 'Secure Password Generator - Military-Grade Encryption | DynamicPassGen',
  description: 'Generate cryptographically secure passwords using military-grade algorithms. 100% client-side generation guarantees your passwords never touch our servers. NIST compliant security.',
  keywords: 'secure password generator, military grade password, encrypted password generator, safest password generator, NIST compliant passwords',
  openGraph: {
    title: 'Secure Password Generator - Military-Grade Encryption',
    description: 'Generate cryptographically secure passwords instantly. 100% private, military-grade security.',
    url: 'https://dynamicpassgen.com/secure-password-generator',
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/secure-password-generator',
  }
}

export default function SecurePasswordGeneratorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Secure Password Generator",
    "url": "https://dynamicpassgen.com/secure-password-generator",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Web Crypto API Implementation",
      "Client-side Generation",
      "Zero Data Storage",
      "Military-grade Entropy"
    ]
  }

  return (
    <>
      <Script
        id="schema-secure-password"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Header />
      
      <main style={{ minHeight: '100vh', padding: '40px 20px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '24px',
              color: 'var(--text-primary)',
              lineHeight: '1.1'
            }}>
              Secure Password Generator
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 32px',
              lineHeight: '1.6'
            }}>
              Create military-grade passwords using advanced cryptographic algorithms. Your passwords are generated locally and never leave your browser.
            </p>
            
            {/* Security Trust Badges */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              <span>🔒 256-bit Encryption</span>
              <span>🛡️ Zero-Knowledge</span>
              <span>⚡ Web Crypto API</span>
              <span>👁️ No Tracking</span>
            </div>
          </section>

          {/* Ad Placement 1 */}
          <div style={{ marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_top" />
          </div>

          {/* Password Generator Tool */}
          <PasswordGeneratorPanel />

          {/* Ad Placement 2 */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <AdPlaceholder placementId="global_after_tool" />
          </div>

          {/* Security Features Section */}
          <section style={{
            marginTop: '64px',
            padding: '48px',
            background: 'var(--card-bg)',
            borderRadius: '20px',
            border: '2px solid var(--border-color)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>
              How We Guarantee Your Security
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginTop: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  🔒 Cryptographically Secure
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  We use the browser's native <code>window.crypto</code> API instead of standard random functions. This provides true randomness suitable for cryptographic security applications.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  🛡️ Zero-Knowledge Architecture
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Everything happens on your device. We never see, store, or transmit your generated passwords. Even if our servers were compromised, your passwords would remain safe.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  ⚡ Client-Side Only
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Unlike server-based generators, our tool runs 100% in your browser. You can even disconnect from the internet and generate passwords offline for maximum security.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  📏 NIST Compliant
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Our defaults follow NIST SP 800-63B guidelines for digital identity security, ensuring your passwords meet modern security standards.
                </p>
              </div>
            </div>
          </section>

          {/* Ad Placement 3 */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <AdPlaceholder placementId="global_mid_content" />
          </div>

          {/* FAQ Section */}
          <section style={{
            marginTop: '64px',
            padding: '48px',
            background: 'var(--card-bg)',
            borderRadius: '20px',
            border: '2px solid var(--border-color)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '32px',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>
              Security FAQ
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Is it safe to use an online password generator?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Yes, provided it uses client-side generation like ours. Because the passwords are created in your browser and never sent over the internet, it's as secure as generating them on your own computer offline.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  What makes a password cryptographically secure?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Cryptographic security means the numbers generated are truly random and impossible to predict. Standard random functions (like Math.random) are predictable. We use CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) to ensure true randomness.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Can I generate passwords offline?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Yes! Once the page is loaded, you can disconnect your internet connection and continue generating passwords. This proves that no data is being sent to any server.
                </p>
              </details>
            </div>
          </section>

          {/* Ad Placement 4 */}
          <div style={{ marginTop: '48px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_before_cta" />
          </div>

          <RelatedToolsSection
            title="Verify Your Security"
            description="Use our other tools to audit your password security"
            tools={[
              {
                label: 'Check Password Strength',
                href: '/tools/strength-checker',
              },
              {
                label: 'Check for Leaks',
                href: '/tools/breach-checker',
              },
              {
                label: 'Security Score',
                href: '/tools/security-score',
              }
            ]}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
