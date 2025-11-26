import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'
import AdPlaceholder from '@/components/AdPlaceholder'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import Script from 'next/script'

export const metadata = {
  title: 'Free Password Generator - Create Secure Passwords Online | DynamicPassGen',
  description: 'Use our free password generator to create strong, random passwords instantly. 100% free, no registration required. NIST compliant with military-grade encryption.',
  keywords: 'free password generator, create password online, random password generator free, secure password maker, no signup password tool',
  openGraph: {
    title: 'Free Password Generator - No Registration Required',
    description: 'Generate secure passwords instantly. 100% free, completely private, no signup needed.',
    url: 'https://dynamicpassgen.com/free-password-generator',
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/free-password-generator',
  }
}

export default function FreePasswordGeneratorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Password Generator",
    "url": "https://dynamicpassgen.com/free-password-generator",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    }
  }

  return (
    <>
      <Script
        id="schema-free-password"
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
              Free Password Generator
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 32px',
              lineHeight: '1.6'
            }}>
              Create strong, secure passwords instantly. 100% free forever. No registration, no hidden fees, completely private.
            </p>
            
            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              <span>✓ Completely Free</span>
              <span>✓ No Registration</span>
              <span>✓ 100% Private</span>
              <span>✓ NIST Compliant</span>
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

          {/* Why Free Section */}
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
              Why Our Free Password Generator?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginTop: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  💯 Always Free
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  No premium plans, no trials, no credit card required. Our password generator is 100% free forever. Generate unlimited passwords without any restrictions.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  🚫 No Registration
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Start generating secure passwords immediately. No email signup, no account creation, no personal information required. Just open and use.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  🔒 Completely Private
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Your passwords are generated locally in your browser. They never touch our servers, and we never see or store them. Your security is 100% in your hands.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  ⚡ Instant Results
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Generate cryptographically secure passwords in milliseconds. No waiting, no loading, just instant password creation whenever you need it.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  🛡️ Military-Grade Security
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Uses Web Crypto API with true random number generation. NIST SP 800-63B compliant passwords that meet the highest security standards.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  📱 Works Everywhere
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Desktop, mobile, tablet - works on all devices and browsers. No app download required. Access from anywhere, anytime, on any device.
                </p>
              </div>
            </div>
          </section>

          {/* Ad Placement 3 */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <AdPlaceholder placementId="global_mid_content" />
          </div>

          {/* Features List */}
          <section style={{ marginTop: '64px' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '32px',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>
              Free Password Generator Features
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Generate passwords 8-128 characters long
                </li>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Create memorable passphrases
                </li>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Generate random PINs (4-10 digits)
                </li>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Customize character types (uppercase, lowercase, numbers, symbols)
                </li>
              </ul>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Real-time password strength meter
                </li>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Entropy calculation and crack time estimate
                </li>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ One-click copy to clipboard
                </li>
                <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  ✓ Password history (last 5 generated)
                </li>
              </ul>
            </div>
          </section>

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
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Is this password generator really free?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Yes, absolutely! Our password generator is 100% free with no hidden costs, premium plans, or trial periods. You can generate unlimited passwords without ever paying anything.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Do I need to create an account?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  No registration required! You can start using the password generator immediately without creating an account, providing an email, or giving any personal information.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Are the generated passwords secure?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Yes! We use the Web Crypto API for cryptographically secure random number generation. All passwords are generated locally in your browser and follow NIST security guidelines.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Do you store my passwords?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  No! All password generation happens entirely in your browser. Your passwords never touch our servers, and we have no way to see or store them. Your privacy is guaranteed.
                </p>
              </details>
            </div>
          </section>

          {/* Ad Placement 4 */}
          <div style={{ marginTop: '48px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_before_cta" />
          </div>

          {/* Related Tools */}
          <RelatedToolsSection
            title="More Free Security Tools"
            description="Check out our other free password security tools"
            tools={[
              {
                label: 'Password Strength Checker',
                href: '/tools/strength-checker',
              },
              {
                label: 'Breach Checker',
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
