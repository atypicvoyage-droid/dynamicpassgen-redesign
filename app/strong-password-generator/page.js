import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'
import AdPlaceholder from '@/components/AdPlaceholder'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import Script from 'next/script'

export const metadata = {
  title: 'Strong Password Generator - Create Unbreakable Passwords | DynamicPassGen',
  description: 'Generate strong, complex passwords that are impossible to crack. Customizable length, high entropy, and mixed character sets for maximum protection.',
  keywords: 'strong password generator, create strong password, unbreakable password generator, complex password maker, high entropy password',
  openGraph: {
    title: 'Strong Password Generator - Create Unbreakable Passwords',
    description: 'Generate strong, high-entropy passwords instantly. Customizable length and complexity for maximum security.',
    url: 'https://dynamicpassgen.com/strong-password-generator',
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/strong-password-generator',
  }
}

export default function StrongPasswordGeneratorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Strong Password Generator",
    "url": "https://dynamicpassgen.com/strong-password-generator",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "High Entropy Generation",
      "Customizable Complexity",
      "128-character Support",
      "Mixed Character Sets"
    ]
  }

  return (
    <>
      <Script
        id="schema-strong-password"
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
              Strong Password Generator
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 32px',
              lineHeight: '1.6'
            }}>
              Create unbreakable passwords with high entropy. Mix characters, symbols, and numbers to generate passwords that take trillions of years to crack.
            </p>
            
            {/* Strength Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              <span>💪 High Entropy</span>
              <span>🔣 Mixed Characters</span>
              <span>📏 Up to 128 Characters</span>
              <span>🚫 No Patterns</span>
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

          {/* What Makes a Strong Password */}
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
              What Makes a Password "Strong"?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginTop: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  1. Length is Key
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Length is the most critical factor. A 16-character password is exponentially stronger than an 8-character one. Every extra character makes it thousands of times harder to crack.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  2. Character Diversity
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Strong passwords use a mix of uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special symbols (!@#$). This maximizes the possible combinations.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  3. True Randomness
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Humans are terrible at being random. We use patterns like keyboard rows (qwerty) or birthdays. A machine-generated password has zero patterns, making it impossible to guess.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  4. High Entropy
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Entropy measures unpredictability. A strong password should have at least 60 bits of entropy. Our generator can create passwords with over 100 bits of entropy.
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
              Strong Password FAQ
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  How long should a strong password be?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  We recommend at least 16 characters for important accounts like banking and email. For maximum security, aim for 20+ characters. Our generator supports up to 128 characters.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Are special characters necessary?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  While length is most important, adding special characters significantly increases password strength by expanding the character set. We highly recommend including symbols.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  How can I remember a strong random password?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  You shouldn't try to memorize complex random passwords. Instead, use a secure password manager to store them. This allows you to use unique, strong passwords for every account while only remembering one master password.
                </p>
              </details>
            </div>
          </section>

          {/* Ad Placement 4 */}
          <div style={{ marginTop: '48px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_before_cta" />
          </div>

          <RelatedToolsSection
            title="Test Your Password Strength"
            description="See exactly how strong your current passwords are"
            tools={[
              {
                label: 'Password Strength Test',
                href: '/tools/strength-checker',
              },
              {
                label: 'Email Breach Check',
                href: '/tools/breach-checker',
              },
              {
                label: 'Security Assessment',
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
