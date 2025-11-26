import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordBreachChecker from '@/components/PasswordBreachChecker'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import AdPlaceholder from '@/components/AdPlaceholder'

export const metadata = {
  title: 'Password Breach Checker - Check If Your Password Was Leaked | DynamicPassGen',
  description: 'Check if your password has been compromised in data breaches. Free breach checker scans billions of leaked credentials to protect your accounts. Instant results in 2025.',
  keywords: 'breach checker, password breach check, have i been pwned, data breach checker, password compromised, leaked password checker, password leak checker, pwned passwords',
  openGraph: {
    title: 'Free Password Breach Checker - Instant Security Scan',
    description: 'Find out if your password was exposed in data breaches. Check against billions of leaked credentials instantly. 100% private and secure.',
    type: 'website',
    url: 'https://dynamicpassgen.com/tools/breach-checker'
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/tools/breach-checker'
  }
}

export default function BreachCheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Password Breach Checker',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free password breach checker that scans billions of compromised passwords from known data breaches to help you protect your accounts.',
    featureList: [
      'Check password against breach databases',
      'Instant breach detection',
      'Privacy-focused SHA-1 hashing',
      'K-anonymity protection',
      'Actionable security recommendations',
      '100% free and secure'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '2891'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does a password breach checker work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A password breach checker compares your password against databases of known leaked passwords from data breaches. When companies are hacked, stolen passwords are often leaked online. Our tool uses SHA-1 hashing and k-anonymity to check your password securely without exposing it to our servers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe to check my password for breaches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our breach checker is completely safe. We use SHA-1 hashing with k-anonymity, which means only a partial hash of your password is sent for checking. Your actual password never leaves your browser and is never stored anywhere. The final comparison happens locally in your device.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I do if my password was breached?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your password appears in a breach: 1) Change it immediately on all accounts where you use it, 2) Use our password generator to create a new strong password, 3) Enable two-factor authentication (2FA) everywhere possible, 4) Never reuse the compromised password again, and 5) Consider using a password manager to track unique passwords for each account.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often should I check my passwords for breaches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Check your passwords for breaches at least once every 3-6 months, or immediately if you hear about a major data breach. Regular monitoring helps you stay ahead of potential security threats. Also check whenever you create a new password to ensure it hasn\'t been previously compromised.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is a password data breach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A password data breach occurs when unauthorized parties gain access to password databases stored by companies or organizations. These leaked passwords are often sold on the dark web or used for credential stuffing attacks, where hackers try the stolen passwords across multiple websites to gain unauthorized access to accounts.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />
      
      <main style={{ minHeight: '60vh', padding: '40px 20px 60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              marginBottom: '1rem',
              lineHeight: '1.2',
              color: 'var(--text-primary)',
              fontWeight: '900'
            }}>
              Password Breach Checker
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 1.5rem',
              lineHeight: '1.6'
            }}>
              Check if your password has been exposed in data breaches. Search billions of leaked passwords to verify if your credentials are compromised and at risk.
            </p>

            {/* Trust Signals */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '28px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                🔒 100% Private
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                ⚡ Instant Results
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                🌐 Billions of Records
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                🛡️ K-Anonymity Protected
              </span>
            </div>
          </div>

          {/* Ad Placement 1 - Top of Page */}
          <div style={{ marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_top" />
          </div>

          {/* Breach Checker Tool */}
          <PasswordBreachChecker />

          {/* Ad Placement 2 - After Tool */}
          <div style={{ marginTop: '40px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_after_tool" />
          </div>

          {/* How It Works */}
          <section style={{
            marginTop: '64px',
            padding: '40px',
            background: 'var(--card-bg)',
            borderRadius: '20px',
            border: '2px solid var(--border-color)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              How Our Password Breach Checker Works
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔐</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Secure K-Anonymity
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Your password is hashed using SHA-1, and only the first 5 characters of the hash are sent to check against the database. The full comparison happens in your browser, ensuring your actual password never leaves your device.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌐</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Pwned Passwords Database
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  We check against the Have I Been Pwned Passwords database containing over 10 billion compromised passwords from major data breaches worldwide, continuously updated with new breaches.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚡</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Instant Results
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Get immediate results showing if your password was found in breaches, how many times it appears, and actionable steps to secure your accounts immediately.
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginTop: '24px'
            }}>
              Our breach checker uses k-anonymity to protect your privacy. This technique, developed by security researchers, allows us to check if your password is compromised without ever knowing what your password is. Your password is hashed locally, only a small prefix is sent for lookup, and the final comparison happens in your browser.
            </p>
          </section>

          {/* Ad Placement 3 - Mid Content */}
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <AdPlaceholder placementId="global_mid_content" />
          </div>

          {/* Why Check Section */}
          <section style={{ marginTop: '64px' }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              Why You Should Check Your Passwords for Breaches
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Prevent Account Takeovers
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  If your password appears in breach databases, hackers already have it and can use it to access your accounts. Credential stuffing attacks use leaked passwords to try logging into thousands of websites. By checking and changing compromised passwords, you stay ahead of attackers.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Stop Password Reuse Risks
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Many people reuse passwords across multiple sites. If one site is breached and you reuse that password elsewhere, all accounts with that password are at risk. Regular breach checking helps you identify which passwords need immediate replacement.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Proactive Security
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Data breaches happen constantly, but companies often delay notifying users. Proactively checking your passwords lets you discover compromises before attackers exploit them, giving you time to change passwords and secure accounts before damage occurs.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{
            marginTop: '64px',
            padding: '40px',
            background: 'var(--card-bg)',
            borderRadius: '20px',
            border: '2px solid var(--border-color)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '32px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}>
                  How does a password breach checker work?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A password breach checker compares your password against databases of known leaked passwords from data breaches. When companies are hacked, stolen passwords are often leaked online. Our tool uses SHA-1 hashing and k-anonymity to check your password securely without exposing it to our servers.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}>
                  Is it safe to check my password for breaches?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Yes, our breach checker is completely safe. We use SHA-1 hashing with k-anonymity, which means only a partial hash of your password is sent for checking. Your actual password never leaves your browser and is never stored anywhere. The final comparison happens locally in your device.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}>
                  What should I do if my password was breached?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  If your password appears in a breach: 1) Change it immediately on all accounts where you use it, 2) Use our password generator to create a new strong password, 3) Enable two-factor authentication (2FA) everywhere possible, 4) Never reuse the compromised password again, and 5) Consider using a password manager to track unique passwords for each account.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}>
                  How often should I check my passwords for breaches?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Check your passwords for breaches at least once every 3-6 months, or immediately if you hear about a major data breach. Regular monitoring helps you stay ahead of potential security threats. Also check whenever you create a new password to ensure it hasn't been previously compromised.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}>
                  What is a password data breach?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A password data breach occurs when unauthorized parties gain access to password databases stored by companies or organizations. These leaked passwords are often sold on the dark web or used for credential stuffing attacks, where hackers try the stolen passwords across multiple websites to gain unauthorized access to accounts.
                </p>
              </details>

              <details style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}>
                  Can I check multiple passwords at once?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Currently, our tool checks one password at a time to maintain privacy and security. This ensures each check is performed securely with k-anonymity protection. For best practices, check all your important passwords individually, especially those used for email, banking, and social media accounts.
                </p>
              </details>
            </div>
          </section>

          {/* Common Breaches Section */}
          <section style={{ marginTop: '64px' }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              Major Password Breaches in Recent Years
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {[
                { emoji: '🏢', name: 'LinkedIn (2021)', records: '700M+ passwords', impact: 'Email addresses, password hashes, names' },
                { emoji: '🌐', name: 'Facebook (2019)', records: '540M records', impact: 'Account IDs, passwords, emails' },
                { emoji: '📧', name: 'Yahoo (2013-2014)', records: '3B passwords', impact: 'Passwords, security questions, email' },
                { emoji: '🎮', name: 'PlayStation (2011)', records: '77M passwords', impact: 'Passwords, names, addresses, emails' },
                { emoji: '🏪', name: 'Adobe (2013)', records: '153M passwords', impact: 'Encrypted passwords, emails, hints' },
                { emoji: '🎯', name: 'Collection #1 (2019)', records: '773M credentials', impact: 'Email/password pairs from multiple breaches' }
              ].map((breach, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: 'var(--card-bg)',
                  borderRadius: '12px',
                  border: '2px solid var(--border-color)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{breach.emoji}</div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {breach.name}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: '#ef4444', fontWeight: '700', marginBottom: '8px' }}>
                    {breach.records}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {breach.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Placement 4 - Before Related Tools */}
          <div style={{ marginTop: '48px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_before_cta" />
          </div>

          {/* Related Tools */}
          <RelatedToolsSection
            tools={[
              {
                label: 'Password Generator',
                href: '/',
                primary: true
              },
              {
                label: 'Strength Checker',
                href: '/tools/strength-checker',
                primary: false
              },
              {
                label: 'Security Score',
                href: '/tools/security-score',
                primary: false
              }
            ]}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
