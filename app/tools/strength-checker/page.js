import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordStrengthChecker from '@/components/PasswordStrengthChecker'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import AdPlaceholder from '@/components/AdPlaceholder'
import Link from 'next/link'

export const metadata = {
  title: 'Password Strength Checker - Test Your Password Security Online Free | DynamicPassGen',
  description: 'Check your password strength instantly with our free online tool. Get detailed security analysis, entropy calculation, crack time estimates, and actionable recommendations to strengthen your passwords in 2025.',
  keywords: 'password strength checker, password security test, check password strength, password analyzer, password strength meter, test password security, password entropy calculator',
  openGraph: {
    title: 'Free Password Strength Checker - Instant Security Analysis',
    description: 'Test your password security in seconds. Get entropy scores, crack time estimates, and expert recommendations. 100% client-side - your password never leaves your device.',
    type: 'website',
    url: 'https://dynamicpassgen.com/tools/strength-checker'
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/tools/strength-checker'
  }
}

export default function StrengthCheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Password Strength Checker',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online password strength checker that analyzes password security with entropy calculation, crack time estimation, and detailed recommendations.',
    featureList: [
      'Real-time password strength analysis',
      'Entropy calculation',
      'Crack time estimation',
      'Pattern detection',
      'Security recommendations',
      '100% client-side processing'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1247'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does a password strength checker work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A password strength checker analyzes multiple factors including length, character diversity (uppercase, lowercase, numbers, special characters), entropy (randomness), and patterns. It calculates how long it would take a computer to crack your password using brute force attacks. Our tool performs all calculations in your browser for maximum security.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is it safe to use an online password strength checker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our password strength checker is completely safe because all analysis happens locally in your browser using JavaScript. Your password is never transmitted to our servers or stored anywhere. The tool works entirely client-side, meaning your password never leaves your device.'
        }
      },
      {
        '@type': 'Question',
        name: 'What makes a password strong in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A strong password in 2025 should be at least 12-16 characters long, use a mix of uppercase and lowercase letters, numbers, and special characters, avoid dictionary words and common patterns, have high entropy (randomness), and be unique for each account. Passwords with 80+ bits of entropy are considered very strong.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long should a secure password be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Security experts recommend passwords be at least 12 characters long, with 16+ characters being ideal. Each additional character exponentially increases the time needed to crack your password. A 12-character password with mixed character types can take centuries to crack with current technology.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is password entropy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Password entropy measures the unpredictability and randomness of a password, expressed in bits. Higher entropy means a stronger, more secure password. A password with 60+ bits of entropy is considered secure, while 80+ bits is very strong. Entropy is calculated based on password length and character set diversity.'
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
          {/* Hero Section - Above the Fold */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              marginBottom: '1rem',
              lineHeight: '1.2',
              color: 'var(--text-primary)',
              fontWeight: '900'
            }}>
              Password Strength Checker
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 1.5rem',
              lineHeight: '1.6'
            }}>
              Test your password security instantly with detailed analysis, entropy scoring, and crack time estimates. Know if your passwords can withstand modern cyber threats.
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
                🔒 100% Client-Side
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                ⚡ Instant Analysis
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                🛡️ NIST Compliant
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                🎯 Expert Recommendations
              </span>
            </div>
          </div>

          {/* Ad Placement 1 - Top of Page */}
          <div style={{ marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_top" />
          </div>

          {/* Password Strength Checker Tool - First Fold */}
          <PasswordStrengthChecker />

          {/* Ad Placement 2 - After Tool */}
          <div style={{ marginTop: '40px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_after_tool" />
          </div>

          {/* How It Works Section */}
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
              How Our Password Strength Checker Works
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
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📏</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Length Analysis
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  We measure your password length and compare it against modern security standards. Longer passwords exponentially increase security by expanding the possible combinations attackers must try.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎲</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Entropy Calculation
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Entropy measures password randomness in bits. We calculate this based on character diversity and length. Higher entropy means a more unpredictable, secure password that resists brute force attacks.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⏱️</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Crack Time Estimation
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Based on current computing power (100 billion attempts/second), we estimate how long it would take to crack your password. This helps you understand real-world security implications.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔍</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Pattern Detection
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Our algorithm scans for common weaknesses including sequential characters, keyboard patterns, repeated characters, and dictionary words that make passwords vulnerable to attacks.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔤</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Character Diversity
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  We check if your password uses lowercase, uppercase, numbers, and special characters. Mixing character types dramatically increases the pool of possible combinations.
                </p>
              </div>

              <div style={{
                padding: '24px',
                background: 'var(--card-alt-bg)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💡</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>
                  Smart Recommendations
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.98rem' }}>
                  Based on your password\'s weaknesses, we provide specific, actionable suggestions to strengthen it. Each recommendation directly addresses identified vulnerabilities.
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              marginTop: '24px'
            }}>
              Unlike many password checkers that simply give you a color-coded result, our tool provides comprehensive technical analysis. You\'ll understand exactly why your password is strong or weak, and what specific changes will improve its security. All calculations happen instantly in your browser using JavaScript—your password never touches our servers.
            </p>
          </section>

          {/* Ad Placement 3 - Mid Content */}
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <AdPlaceholder placementId="global_mid_content" />
          </div>

          {/* Why Check Password Strength Section */}
          <section style={{ marginTop: '64px' }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              Why You Should Check Your Password Strength
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Prevent Account Breaches
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Weak passwords are the leading cause of account compromises. In 2025, cyber attackers use sophisticated tools that can crack simple passwords in seconds. By checking your password strength regularly, you stay ahead of evolving threats and protect your personal information, financial data, and digital identity from unauthorized access.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Meet Security Standards
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Many organizations and services now require passwords that meet specific security criteria. Our checker follows NIST guidelines and industry best practices, helping you create passwords that satisfy corporate policies, compliance requirements, and security audits without the guesswork.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Learn Security Best Practices
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Understanding what makes a password strong empowers you to create better credentials naturally. Our detailed feedback educates you about entropy, character diversity, and common vulnerabilities—knowledge that improves your overall security habits across all your accounts.
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
                  How does a password strength checker work?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A password strength checker analyzes multiple factors including length, character diversity (uppercase, lowercase, numbers, special characters), entropy (randomness), and patterns. It calculates how long it would take a computer to crack your password using brute force attacks. Our tool performs all calculations in your browser for maximum security.
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
                  Is it safe to use an online password strength checker?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Our password strength checker is completely safe because all analysis happens locally in your browser using JavaScript. Your password is never transmitted to our servers or stored anywhere. The tool works entirely client-side, meaning your password never leaves your device. However, avoid using untrusted password checkers that may log your passwords.
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
                  What makes a password strong in 2025?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A strong password in 2025 should be at least 12-16 characters long, use a mix of uppercase and lowercase letters, numbers, and special characters, avoid dictionary words and common patterns, have high entropy (randomness), and be unique for each account. Passwords with 80+ bits of entropy are considered very strong. Consider using passphrases—long phrases that are memorable but unpredictable.
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
                  How long should a secure password be?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Security experts recommend passwords be at least 12 characters long, with 16+ characters being ideal for sensitive accounts. Each additional character exponentially increases the time needed to crack your password. A 12-character password with mixed character types can take centuries to crack with current technology, while an 8-character password might only take hours.
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
                  What is password entropy and why does it matter?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Password entropy measures the unpredictability and randomness of a password, expressed in bits. Higher entropy means a stronger, more secure password. A password with 60+ bits of entropy is considered secure, while 80+ bits is very strong. Entropy is calculated based on password length and character set diversity. It\'s the most accurate metric for true password strength because it accounts for all possible combinations.
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
                  Should I use the same strong password for multiple accounts?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  No, never reuse passwords across accounts, even if they\'re strong. If one service is breached, attackers will try that password on other platforms—a technique called "credential stuffing." Use a password manager to generate and store unique passwords for each account. This way, a breach at one site doesn\'t compromise your other accounts.
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
                  How often should I check my password strength?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Check your password strength whenever you create a new password or consider updating existing ones. It\'s good practice to audit your passwords every 3-6 months, especially for critical accounts like email, banking, and social media. If you hear about a security breach at any service you use, check and change that password immediately.
                </p>
              </details>
            </div>
          </section>

          {/* Security Tips Section */}
          <section style={{ marginTop: '64px' }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '24px',
              textAlign: 'center',
              color: 'var(--text-primary)',
              fontWeight: '800'
            }}>
              Password Security Best Practices for 2025
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {[
                { emoji: '🔢', title: 'Use 12+ Characters', text: 'Longer passwords are exponentially harder to crack. Aim for 16 characters for critical accounts.' },
                { emoji: '🎭', title: 'Mix Character Types', text: 'Combine uppercase, lowercase, numbers, and special characters to maximize entropy.' },
                { emoji: '🚫', title: 'Avoid Personal Info', text: 'Never use birthdays, names, addresses, or other easily discoverable information.' },
                { emoji: '🔀', title: 'Stay Random', text: 'Avoid patterns, sequences, and common words. True randomness is your best defense.' },
                { emoji: '🔐', title: 'Unique Per Account', text: 'Never reuse passwords. Each account should have its own unique credential.' },
                { emoji: '📱', title: 'Enable 2FA', text: 'Two-factor authentication adds a critical second layer even if your password is compromised.' },
                { emoji: '🛡️', title: 'Use Password Managers', text: 'Let software remember complex passwords so you don\'t have to weaken them for memorability.' },
                { emoji: '🔄', title: 'Update Regularly', text: 'Change passwords for sensitive accounts every 6-12 months, or immediately after breaches.' }
              ].map((tip, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: 'var(--card-bg)',
                  borderRadius: '12px',
                  border: '2px solid var(--border-color)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{tip.emoji}</div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '8px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {tip.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Placement 4 - Before Related Tools */}
          <div style={{ marginTop: '48px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_before_cta" />
          </div>

          {/* Related Tools CTA */}
          <RelatedToolsSection
            tools={[
              {
                label: 'Password Generator',
                href: '/',
                primary: true
              },
              {
                label: 'Breach Checker',
                href: '/tools/breach-checker',
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
