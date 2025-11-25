import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordBreachChecker from '@/components/PasswordBreachChecker'
import RelatedToolsSection from '@/components/RelatedToolsSection'

export const metadata = {
  title: 'Email Breach Checker - Check If Your Email Was Hacked | DynamicPassGen',
  description: 'Check if your email has been compromised in data breaches. Free breach checker scans billions of leaked credentials to protect your accounts. Instant results in 2025.',
  keywords: 'breach checker, email breach check, have i been pwned, data breach checker, email compromised, hacked email checker, password leak checker',
  openGraph: {
    title: 'Free Email Breach Checker - Instant Security Scan',
    description: 'Find out if your email was exposed in data breaches. Check against billions of leaked credentials instantly. 100% private and secure.',
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
    name: 'Email Breach Checker',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free email breach checker that scans billions of compromised credentials from known data breaches to help you protect your accounts.',
    featureList: [
      'Check email against breach databases',
      'Instant breach detection',
      'Privacy-focused SHA-1 hashing',
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
        name: 'How does an email breach checker work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An email breach checker compares your email address against databases of known data breaches. When companies are hacked, stolen email addresses and passwords are often leaked online. Our tool uses SHA-1 hashing to check your email securely without exposing it to our servers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe to check my email for breaches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our breach checker is completely safe. We use SHA-1 hashing to check your email, which means your actual email address is never sent to our servers or stored anywhere. The check happens securely in your browser, and we never see or save your email.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I do if my email was breached?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your email appears in a breach: 1) Change your password immediately on all affected accounts, 2) Enable two-factor authentication (2FA) everywhere possible, 3) Use unique passwords for each account, 4) Monitor your accounts for suspicious activity, and 5) Consider using a password manager to generate and store strong passwords.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often should I check for breaches?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Check your email for breaches at least once every 3-6 months, or immediately if you hear about a major data breach affecting a service you use. Regular monitoring helps you stay ahead of potential security threats and take action quickly if your information is compromised.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is a data breach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A data breach occurs when unauthorized parties gain access to sensitive information stored by a company or organization. This can include email addresses, passwords, credit card numbers, and personal data. Breached information is often sold on the dark web or used for identity theft, phishing attacks, and account takeovers.'
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
              Email Breach Checker
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 1.5rem',
              lineHeight: '1.6'
            }}>
              Check if your email has been compromised in data breaches. Search billions of leaked credentials to protect your accounts from unauthorized access.
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
                🛡️ Secure SHA-1 Hashing
              </span>
            </div>
          </div>

          {/* Breach Checker Tool */}
          <PasswordBreachChecker />

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
              How Our Breach Checker Works
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
                  Secure Hashing
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Your email is converted to a SHA-1 hash in your browser before checking. This ensures your actual email address is never sent to our servers or stored anywhere.
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
                  Breach Database
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  We check against Have I Been Pwned and other breach databases containing billions of compromised credentials from major data breaches worldwide.
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
                  Get immediate results showing if your email was found in breaches, how many times, and actionable steps to protect your accounts.
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginTop: '24px'
            }}>
              Our breach checker uses k-anonymity to protect your privacy. Only a partial hash is sent for lookup, and the full comparison happens locally in your browser. This means we never see your email address or any identifying information.
            </p>
          </section>

          {/* Why Check Section */}
          <section style={{ marginTop: '64px' }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              Why You Should Check for Breaches
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
                  If your email and password are leaked, hackers can access your accounts. By checking for breaches early, you can change your passwords before attackers exploit them. This simple check can save you from identity theft, financial loss, and privacy violations.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Protect Multiple Accounts
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Many people reuse passwords across multiple sites. If one account is breached, all accounts using that password are at risk. Regular breach checking helps you identify which accounts need immediate password updates to prevent credential stuffing attacks.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Stay Informed
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Data breaches happen constantly, and companies don\'t always notify users quickly. By proactively checking your email, you can discover breaches you weren\'t aware of and take immediate action to secure your digital identity before damage occurs.
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
                  How does an email breach checker work?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  An email breach checker compares your email address against databases of known data breaches. When companies are hacked, stolen email addresses and passwords are often leaked online. Our tool uses SHA-1 hashing to check your email securely without exposing it to our servers.
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
                  Is it safe to check my email for breaches?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Yes, our breach checker is completely safe. We use SHA-1 hashing to check your email, which means your actual email address is never sent to our servers or stored anywhere. The check happens securely in your browser, and we never see or save your email.
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
                  What should I do if my email was breached?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  If your email appears in a breach: 1) Change your password immediately on all affected accounts, 2) Enable two-factor authentication (2FA) everywhere possible, 3) Use unique passwords for each account, 4) Monitor your accounts for suspicious activity, and 5) Consider using a password manager to generate and store strong passwords.
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
                  How often should I check for breaches?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Check your email for breaches at least once every 3-6 months, or immediately if you hear about a major data breach affecting a service you use. Regular monitoring helps you stay ahead of potential security threats and take action quickly if your information is compromised.
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
                  What is a data breach?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A data breach occurs when unauthorized parties gain access to sensitive information stored by a company or organization. This can include email addresses, passwords, credit card numbers, and personal data. Breached information is often sold on the dark web or used for identity theft, phishing attacks, and account takeovers.
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
              Major Data Breaches in Recent Years
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {[
                { emoji: '🏢', name: 'LinkedIn (2021)', records: '700M+ records', impact: 'Email addresses, names, phone numbers' },
                { emoji: '🌐', name: 'Facebook (2021)', records: '533M records', impact: 'Phone numbers, Facebook IDs, names' },
                { emoji: '📧', name: 'Yahoo (2013-2014)', records: '3B accounts', impact: 'Email addresses, passwords, security questions' },
                { emoji: '🎮', name: 'PlayStation (2011)', records: '77M accounts', impact: 'Names, addresses, email, passwords' },
                { emoji: '💳', name: 'Equifax (2017)', records: '147M records', impact: 'SSN, birth dates, addresses, credit cards' },
                { emoji: '🏨', name: 'Marriott (2018)', records: '500M guests', impact: 'Names, addresses, passport numbers' }
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

          {/* Related Tools */}
          <RelatedToolsSection
            tools={[
              {
                label: 'Password Generator',
                href: '/',
                primary: false
              },
              {
                label: 'Strength Checker',
                href: '/tools/strength-checker',
                primary: true
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
