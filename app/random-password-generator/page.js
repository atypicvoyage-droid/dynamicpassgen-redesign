import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'
import AdPlaceholder from '@/components/AdPlaceholder'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import Script from 'next/script'

export const metadata = {
  title: 'Random Password Generator - True Randomness | DynamicPassGen',
  description: 'Generate truly random passwords using CSPRNG technology. Eliminate human patterns and bias for maximum unpredictability and security.',
  keywords: 'random password generator, random string generator, true random password, unpredictable password, entropy generator',
  openGraph: {
    title: 'Random Password Generator - True Randomness',
    description: 'Generate truly random passwords using CSPRNG. Eliminate patterns for maximum security.',
    url: 'https://dynamicpassgen.com/random-password-generator',
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/random-password-generator',
  }
}

export default function RandomPasswordGeneratorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Random Password Generator",
    "url": "https://dynamicpassgen.com/random-password-generator",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "True Random Number Generation",
      "No Human Patterns",
      "CSPRNG Technology",
      "Unbiased Character Selection"
    ]
  }

  return (
    <>
      <Script
        id="schema-random-password"
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
              Random Password Generator
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 32px',
              lineHeight: '1.6'
            }}>
              Generate truly random passwords free from human bias. We use advanced CSPRNG technology to ensure every character is mathematically unpredictable.
            </p>
            
            {/* Randomness Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              <span>🎲 True Randomness</span>
              <span>🚫 No Bias</span>
              <span>🔒 CSPRNG Tech</span>
              <span>⚡ Instant Generation</span>
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

          {/* Why Randomness Matters */}
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
              Why True Randomness Matters
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginTop: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Human Bias is Dangerous
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  When humans create passwords, they unconsciously use patterns like "123", repeated characters, or keyboard rows. Hackers know these patterns and exploit them. True randomness eliminates this weakness.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Math.random() isn't Enough
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Standard random functions in programming are predictable. We use <code>window.crypto.getRandomValues()</code>, which taps into your device's entropy pool for cryptographic-quality randomness.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Unpredictable Sequences
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  A truly random password has no recognizable sequence. Each character is independent of the previous one, making it mathematically impossible to predict the next character.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Uniform Distribution
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Our algorithm ensures every character in your selected set has an exactly equal chance of appearing, preventing statistical attacks based on character frequency analysis.
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
              Randomness FAQ
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  What is CSPRNG?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  CSPRNG stands for Cryptographically Secure Pseudo-Random Number Generator. It's a method of generating random numbers that are suitable for security applications because they cannot be predicted or reproduced.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Why do random passwords look weird?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  True randomness doesn't follow language rules or patterns. A random password like "x7#kL9$m" looks chaotic because it is. That chaos is exactly what makes it secure against cracking attempts.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: '1.125rem', fontWeight: '700', cursor: 'pointer' }}>
                  Are random passwords better than passphrases?
                </summary>
                <p style={{ marginTop: '12px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  Random passwords offer higher entropy per character, making them stronger for the same length. However, passphrases (like "correct-horse-battery-staple") are easier to remember. For maximum security, a long random password is best.
                </p>
              </details>
            </div>
          </section>

          {/* Ad Placement 4 */}
          <div style={{ marginTop: '48px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_before_cta" />
          </div>

          <RelatedToolsSection
            title="Other Random Tools"
            description="Explore more random generation tools"
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
