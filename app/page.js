import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'
import TrustBadges from '@/components/TrustBadges'
import UniqueFeatures from '@/components/UniqueFeatures'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Script from 'next/script'

export const metadata = {
  title: 'Free Password Generator | Create Secure Passwords Online - DynamicPassGen',
  description: 'Generate cryptographically secure passwords instantly with our free online tool. NIST-compliant, 100% client-side security. Create strong passwords for banking, email, and social media.',
  keywords: 'password generator, secure password, strong password generator, random password, password creator, online password tool, NIST compliant, cryptographic password',
}

export default function Home() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DynamicPassGen - Free Password Generator",
    "url": "https://dynamicpassgen.com",
    "description": "Generate cryptographically secure passwords, passphrases, and PINs instantly. NIST-compliant, 100% client-side security with zero data collection.",
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
      "ratingCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Cryptographically secure random password generation",
      "NIST SP 800-63B compliant",
      "100% client-side - no data collection",
      "Real-time strength analysis with crack time estimation",
      "Session history (last 5 passwords)",
      "Multiple modes: Password, Passphrase, PIN",
      "Customizable length and character sets"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this password generator really secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use the Web Crypto API's window.crypto.getRandomValues() method, which is cryptographically secure and used by major browsers, banks, and security companies. All generation happens locally in your browser—passwords never leave your device."
        }
      },
      {
        "@type": "Question",
        "name": "Do you store or log the passwords I generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All password generation happens entirely in your browser using JavaScript. We have no server-side logging, tracking, or storage of generated passwords. Your privacy is guaranteed."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a password and a passphrase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A password is a random string of characters, while a passphrase is a series of random words. Passphrases are easier to remember but equally secure when generated randomly."
        }
      },
      {
        "@type": "Question",
        "name": "How long should my password be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most accounts, 12-16 characters is sufficient. For high-security accounts, use 16-20+ characters. Longer passwords exponentially increase security."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for business/commercial purposes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our tool is free for personal and commercial use. Generate passwords for business accounts, employee onboarding, or security training."
        }
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DynamicPassGen",
    "url": "https://dynamicpassgen.com",
    "logo": "https://dynamicpassgen.com/logo.png",
    "sameAs": [
      "https://twitter.com/dynamicpassgen",
      "https://github.com/dynamicpassgen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@dynamicpassgen.com"
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
        "name": "Password Generator",
        "item": "https://dynamicpassgen.com#generator"
      }
    ]
  };

  return (
    <>
      <Script id="schema-webapp" type="application/ld+json">
        {JSON.stringify(webAppSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Free Password Generator - Create Secure Passwords Instantly
            </h1>
            <p className="hero-description">
              Generate cryptographically secure passwords with advanced algorithms. NIST 2025 compliant, 100% client-side generation. Perfect for banking, email, and all your online accounts.
            </p>
            <TrustBadges />
          </div>
        </section>

        <div id="generator" style={{ padding: '32px 20px' }}>
          <PasswordGeneratorPanel />
        </div>

        <UniqueFeatures />

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-heading">
              What is a Password Generator?
            </h2>
            <div className="content-text">
              <p>
                A <strong>password generator</strong> is a specialized security tool that creates random, complex passwords designed to protect your online accounts from unauthorized access. Unlike human-created passwords that often follow predictable patterns, our generator uses cryptographically secure random number generation (CSPRNG) to produce truly unpredictable password combinations.
              </p>
              <p>
                In 2025, cyber threats are more sophisticated than ever. Weak passwords remain the #1 cause of data breaches, with over 80% of hacking incidents involving compromised credentials. Our free password generator addresses this by creating passwords that meet or exceed industry security standards, including <strong>NIST SP 800-63B</strong> guidelines.
              </p>
              <p>
                The tool works entirely in your browser using the Web Crypto API, ensuring your generated passwords never travel over the internet or touch our servers. This client-side approach guarantees maximum privacy and security for all users.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section alt-bg">
          <div className="content-container">
            <h2 className="section-heading">
              How Our Password Generator Works
            </h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Entropy Pool Initialization</h3>
                  <p className="step-description">
                    Your browser accesses the operating system&apos;s entropy pool—a collection of random data gathered from unpredictable sources like hardware noise, mouse movements, and system timing.
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Cryptographic Character Selection</h3>
                  <p className="step-description">
                    Using window.crypto.getRandomValues(), the generator selects characters from your chosen set. Each character is independently randomized, making the password impossible to predict.
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Real-Time Strength Analysis</h3>
                  <p className="step-description">
                    Instant entropy calculation validates your password strength. We display estimated crack time, helping you meet security requirements for banking or high-security applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container-wide">
            <h2 className="section-heading">Why Choose DynamicPassGen?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon blue">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Military-Grade Security</h3>
                <p className="feature-description">
                  Uses Web Crypto API (same technology used by banks) to generate cryptographically secure random passwords.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon green">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="feature-title">100% Private</h3>
                <p className="feature-description">
                  All password generation happens in your browser. Your passwords never travel over the network.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon yellow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" fill="none"/>
                  </svg>
                </div>
                <h3 className="feature-title">NIST Compliant</h3>
                <p className="feature-description">
                  Follows NIST SP 800-63B 2025 guidelines for password strength, length, and complexity.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon purple">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Instant Generation</h3>
                <p className="feature-description">
                  Generate passwords in milliseconds. No registration, no waiting, completely free.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon pink">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Multiple Formats</h3>
                <p className="feature-description">
                  Generate passwords, passphrases, or numeric PINs with customizable options.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon cyan">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Cross-Platform</h3>
                <p className="feature-description">
                  Works on desktop, mobile, and tablet without downloading any app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt-bg">
          <div className="content-container">
            <h2 className="section-heading">Password Security Best Practices</h2>
            <div className="content-text">
              <h3 className="subsection-title">1. Use Unique Passwords for Every Account</h3>
              <p>
                Never reuse passwords across multiple sites. If one account is compromised, attackers will attempt credential stuffing. Our password generator makes creating unique passwords easy.
              </p>

              <h3 className="subsection-title">2. Aim for Minimum 12-16 Characters</h3>
              <p>
                Password length is the most important security factor. A 12-character password with mixed characters has over 78 bits of entropy. For banking and email, use 16+ characters.
              </p>

              <h3 className="subsection-title">3. Enable Two-Factor Authentication (2FA)</h3>
              <p>
                Even strong passwords can be compromised through phishing. Enable 2FA wherever possible. Use authenticator apps instead of SMS when available.
              </p>

              <h3 className="subsection-title">4. Use a Password Manager</h3>
              <p>
                Remembering dozens of complex passwords is impossible. Use a reputable password manager to securely store and auto-fill your credentials.
              </p>

              <h3 className="subsection-title">5. Change Passwords After a Breach</h3>
              <p>
                If a service you use suffers a data breach, change your password immediately. Use our tool to generate a secure replacement.
              </p>
            </div>
          </div>
        </section>

        <FAQSection />

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
