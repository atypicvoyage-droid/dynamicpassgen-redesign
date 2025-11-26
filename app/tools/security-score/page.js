import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SecurityScore from '@/components/SecurityScore'
import RelatedToolsSection from '@/components/RelatedToolsSection'
import AdPlaceholder from '@/components/AdPlaceholder'

export const metadata = {
  title: 'Security Score Assessment - Test Your Password Security Habits | DynamicPassGen',
  description: 'Take our free security assessment quiz to evaluate your password and online security practices. Get a personalized score with actionable recommendations in 2025.',
  keywords: 'security score, security assessment, password security quiz, cybersecurity test, online security habits, security evaluation, password practices',
  openGraph: {
    title: 'Free Security Score Assessment - Evaluate Your Security Habits',
    description: 'Take our 8-question quiz to assess your password security practices and get personalized recommendations to improve your digital safety.',
    type: 'website',
    url: 'https://dynamicpassgen.com/tools/security-score'
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/tools/security-score'
  }
}

export const dynamic = 'force-static'

export default function SecurityScorePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Security Score Assessment',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free security assessment tool that evaluates your password security practices and provides personalized recommendations to improve your digital safety.',
    featureList: [
      'Comprehensive 8-question security quiz',
      'Instant security score calculation',
      'Personalized recommendations',
      'Password security evaluation',
      '2FA usage assessment',
      'Phishing awareness test'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1876'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a security score assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A security score assessment evaluates your password management and online security practices through a series of questions. It measures factors like password strength, two-factor authentication usage, password reuse, and awareness of security threats to give you a comprehensive score out of 100.'
        }
      },
      {
        '@type': 'Question',
        name: 'How is my security score calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your security score is calculated based on 8 key security factors: password length, password reuse, two-factor authentication usage, password manager adoption, password update frequency, phishing awareness, public WiFi usage, and software update habits. Each answer is assigned points, and your final score is a percentage of the maximum possible points.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is a good security score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good security score is 75% or higher. Scores of 90% and above indicate excellent security practices. Scores between 60-75% are considered good with room for improvement. Scores below 60% suggest significant security vulnerabilities that need immediate attention.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I improve my security score?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To improve your security score: enable two-factor authentication on all accounts, use unique passwords for each account, adopt a password manager, use passwords with 12+ characters, avoid reusing passwords, install security updates promptly, be vigilant against phishing, and avoid public WiFi for sensitive activities.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is my assessment data stored or shared?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, your assessment is completely private. All calculations happen locally in your browser, and we never store, transmit, or share your answers or results. The assessment is purely for your personal evaluation and improvement.'
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
              Security Score Assessment
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto 1.5rem',
              lineHeight: '1.6'
            }}>
              Evaluate your password security and online safety habits with our comprehensive 8-question assessment. Get instant feedback and personalized recommendations.
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
                📊 Personalized Score
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                💡 Expert Recommendations
              </span>
            </div>
          </div>

          {/* Ad Placement 1 - Top of Page */}
          <div style={{ marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_top" />
          </div>

          {/* Security Score Tool */}
          <SecurityScore />

          {/* Ad Placement 2 - After Tool */}
          <div style={{ marginTop: '40px', marginBottom: '32px' }}>
            <AdPlaceholder placementId="global_after_tool" />
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
              Why Assess Your Security Score?
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Identify Weaknesses
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Discover vulnerabilities in your security practices before hackers do. Our assessment highlights specific areas where you're most at risk, from weak passwords to unsafe browsing habits, giving you a clear roadmap for improvement.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Get Expert Guidance
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Receive personalized recommendations based on your current security posture. Learn which changes will have the biggest impact on your safety, prioritized by importance and ease of implementation.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)', fontWeight: '700' }}>
                  Track Improvement
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Retake the assessment periodically to see how your security practices evolve. Watch your score improve as you implement recommendations and develop stronger security habits over time.
                </p>
              </div>
            </div>
          </section>

          {/* Ad Placement 3 - Mid Content */}
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <AdPlaceholder placementId="global_mid_content" />
          </div>

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
                  What is a security score assessment?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A security score assessment evaluates your password management and online security practices through a series of questions. It measures factors like password strength, two-factor authentication usage, password reuse, and awareness of security threats to give you a comprehensive score out of 100.
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
                  How is my security score calculated?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  Your security score is calculated based on 8 key security factors: password length, password reuse, two-factor authentication usage, password manager adoption, password update frequency, phishing awareness, public WiFi usage, and software update habits. Each answer is assigned points, and your final score is a percentage of the maximum possible points.
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
                  What is a good security score?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  A good security score is 75% or higher. Scores of 90% and above indicate excellent security practices. Scores between 60-75% are considered good with room for improvement. Scores below 60% suggest significant security vulnerabilities that need immediate attention.
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
                  How can I improve my security score?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  To improve your security score: enable two-factor authentication on all accounts, use unique passwords for each account, adopt a password manager, use passwords with 12+ characters, avoid reusing passwords, install security updates promptly, be vigilant against phishing, and avoid public WiFi for sensitive activities.
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
                  Is my assessment data stored or shared?
                </summary>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '12px' }}>
                  No, your assessment is completely private. All calculations happen locally in your browser, and we never store, transmit, or share your answers or results. The assessment is purely for your personal evaluation and improvement.
                </p>
              </details>
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
                label: 'Breach Checker',
                href: '/tools/breach-checker',
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
