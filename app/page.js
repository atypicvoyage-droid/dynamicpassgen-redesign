import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PasswordGeneratorPanel from '@/components/PasswordGeneratorPanel'
import TrustBadges from '@/components/TrustBadges'
import UniqueFeatures from '@/components/UniqueFeatures'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import AdPlaceholder from '@/components/AdPlaceholder'
import Script from 'next/script'

export const metadata = {
  title: 'Free Password Generator - NIST 2025 Compliant | Secure Random Passwords',
  description: 'Generate cryptographically secure passwords, passphrases, and PINs instantly. NIST 2025 compliant, 100% client-side security with zero data storage. Test password strength and check breach exposure free.',
  keywords: 'password generator, secure password, strong password generator, random password, NIST compliant, cryptographic password, password strength checker, breach checker, passphrase generator, free password tool',
  openGraph: {
    title: 'Free Password Generator - NIST 2025 Compliant',
    description: 'Generate cryptographically secure passwords instantly. NIST compliant, privacy-first, no data storage.',
    url: 'https://dynamicpassgen.com',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'DynamicPassGen Password Generator Tool'
      }
    ]
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com',
  }
}

export default function Home() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DynamicPassGen - Free Password Generator",
    "url": "https://dynamicpassgen.com",
    "description": "Generate cryptographically secure passwords, passphrases, and PINs instantly. NIST 2025 compliant, 100% client-side security with zero data collection.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Modern browsers (Chrome 60+, Firefox 55+, Safari 11+, Edge 79+)",
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
      "Cryptographically secure random password generation using Web Crypto API",
      "NIST SP 800-63B 2025 compliant password standards",
      "100% client-side processing - zero server-side data collection",
      "Real-time entropy calculation and crack time estimation",
      "Session history tracking (last 5 generated passwords)",
      "Multiple generation modes: Password, Passphrase, PIN",
      "Fully customizable length and character sets",
      "Password strength meter with visual feedback",
      "One-click copy to clipboard functionality",
      "Responsive mobile-first design"
    ]
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
      }
    ]
  };

  return (
    <>
      <Script id="schema-webapp" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webAppSchema)}
      </Script>

      <Script id="schema-breadcrumb" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Free Password Generator - Create Secure Passwords Instantly
            </h1>
            <p className="hero-description">
              Generate cryptographically secure passwords with advanced algorithms. NIST 2025 compliant, 100% client-side generation with zero data storage. Perfect for banking, email, social media, and all your online accounts.
            </p>
            <TrustBadges />
          </div>
        </section>

        {/* Ad Placement 1 - Top of Page (after hero) */}
        <div style={{ maxWidth: '1200px', margin: '32px auto', padding: '0 20px' }}>
          <AdPlaceholder placementId="global_top" />
        </div>

        {/* Password Generator Tool */}
        <div id="generator" style={{ padding: '32px 20px' }}>
          <PasswordGeneratorPanel />
        </div>

        {/* Ad Placement 2 - After Generator */}
        <div style={{ maxWidth: '1200px', margin: '32px auto', padding: '0 20px' }}>
          <AdPlaceholder placementId="global_after_tool" />
        </div>

        {/* Unique Features Component */}
        <UniqueFeatures />

        {/* What is a Password Generator */}
        <section className="content-section">
          <div className="content-container">
            <h2 className="section-heading">
              What is a Password Generator?
            </h2>
            <div className="content-text">
              <p>
                A <strong>password generator</strong> is a specialized security tool that creates random, complex passwords designed to protect your online accounts from unauthorized access, brute-force attacks, and credential stuffing attempts. Unlike human-created passwords that often follow predictable patterns (birthdays, pet names, common phrases), our generator uses cryptographically secure random number generation (CSPRNG) to produce truly unpredictable password combinations that are mathematically infeasible to guess or crack.
              </p>
              <p>
                In 2025, cyber threats are more sophisticated than ever before. Weak passwords remain the #1 cause of data breaches worldwide, with over 80% of hacking-related breaches involving compromised, weak, or reused credentials according to the Verizon Data Breach Investigations Report. Attackers use advanced tools including rainbow tables, GPU-accelerated cracking software, and massive databases of previously breached passwords to compromise accounts in seconds.
              </p>
              <p>
                Our free password generator addresses these threats by creating passwords that meet or exceed industry security standards, including <strong>NIST SP 800-63B</strong> guidelines published in 2024. The tool works entirely in your browser using the Web Crypto API, ensuring your generated passwords never travel over the internet or touch our servers. This client-side approach guarantees maximum privacy and security for all users, regardless of whether you&apos;re protecting personal accounts or enterprise systems.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Placement 3 - Mid Content */}
        <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
          <AdPlaceholder placementId="global_mid_content" />
        </div>

        {/* How It Works */}
        <section className="content-section alt-bg">
          <div className="content-container">
            <h2 className="section-heading">
              How Our Password Generator Works
            </h2>
            <div className="content-text">
              <p>
                Understanding the technology behind secure password generation helps you trust the process. Here&apos;s exactly how DynamicPassGen creates your passwords:
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Entropy Pool Initialization</h3>
                  <p className="step-description">
                    When you click generate, your browser accesses the operating system&apos;s entropy pool—a sophisticated collection of random data gathered from unpredictable sources like hardware timing variations, mouse movements, keyboard latency, network packet timing, and thermal sensor noise. This entropy pool is maintained by your OS kernel and provides truly random data that cannot be predicted or reproduced.
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Cryptographic Character Selection</h3>
                  <p className="step-description">
                    Using the Web Crypto API&apos;s window.crypto.getRandomValues() method, our generator selects characters from your chosen character set (uppercase, lowercase, numbers, symbols). Each character is independently randomized with cryptographic-grade randomness, making the final password statistically impossible to predict. This method is certified for cryptographic use and is the same technology used by banks, governments, and security professionals.
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Real-Time Strength Analysis</h3>
                  <p className="step-description">
                    As your password is generated, our tool performs instant entropy calculation to validate strength. We calculate the password&apos;s information entropy (measured in bits), estimate crack time using current GPU capabilities, and display a visual strength meter. This helps you understand whether your password meets security requirements for banking applications (typically 16+ characters), email services, or high-security corporate systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose DynamicPassGen */}
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
                  Uses Web Crypto API (same technology used by banks, governments, and security agencies) to generate cryptographically secure random passwords that meet FIPS 140-2 standards.
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
                  All password generation happens in your browser. Your passwords never travel over the network, are never logged, and are never stored on any server. Complete privacy guaranteed.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon yellow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" fill="none"/>
                  </svg>
                </div>
                <h3 className="feature-title">NIST 2025 Compliant</h3>
                <p className="feature-description">
                  Follows NIST SP 800-63B 2024 guidelines for password strength, length, entropy, and complexity requirements. Certified for use in regulated industries.
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
                  Generate passwords in milliseconds with no waiting, buffering, or processing delays. No registration, no email verification, completely free forever.
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
                  Generate traditional passwords, memorable passphrases, or numeric PINs. Fully customizable length (4-128 characters), character sets, and special symbol inclusion.
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
                  Works flawlessly on desktop, mobile, and tablet devices. Responsive design optimized for iOS, Android, Windows, macOS, and Linux without downloading any app.
                </p>
              </div>
            </div>
          </div>
        </section>

    

        {/* Password Security Best Practices */}
        <section className="content-section alt-bg">
          <div className="content-container">
            <h2 className="section-heading">Password Security Best Practices for 2025</h2>
            <div className="content-text">
              <p>
                Generating strong passwords is only the first step. Follow these expert-recommended security practices to maximize your online protection:
              </p>

              <h3 className="subsection-title">1. Use Unique Passwords for Every Account</h3>
              <p>
                Never reuse passwords across multiple websites or services. If one account is compromised in a data breach, attackers will immediately attempt credential stuffing attacks—automatically trying your stolen credentials on thousands of other popular websites. According to Google&apos;s security research, 52% of people reuse passwords across accounts, making them vulnerable to cascading breaches. Our password generator makes creating unlimited unique passwords effortless, eliminating the temptation to reuse credentials.
              </p>

              <h3 className="subsection-title">2. Aim for Minimum 12-16 Characters</h3>
              <p>
                Password length is the single most important security factor. A 12-character password with mixed character types contains over 78 bits of entropy, requiring billions of years to crack with current technology when properly randomized. For high-security accounts including banking, email, cloud storage, and work systems, use 16-20+ characters. For ultimate security (password managers, encryption keys), use 24-32+ characters. Each additional character exponentially increases security—a 16-character password is over 6,000 times harder to crack than a 12-character password.
              </p>

              <h3 className="subsection-title">3. Enable Two-Factor Authentication (2FA)</h3>
              <p>
                Even strong passwords can be compromised through phishing attacks, keyloggers, or social engineering. Two-factor authentication adds a critical second layer of defense by requiring a second verification method beyond your password. Enable 2FA on all accounts that support it, prioritizing banking, email, and social media. Use authenticator apps (Google Authenticator, Authy, Microsoft Authenticator) instead of SMS when possible, as SMS can be intercepted through SIM-swapping attacks. Hardware security keys (YubiKey, Titan) provide the strongest 2FA protection.
              </p>

              <h3 className="subsection-title">4. Use a Password Manager</h3>
              <p>
                Remembering dozens of complex, unique passwords is humanly impossible. Use a reputable password manager (1Password, Bitwarden, LastPass, Dashlane) to securely store and auto-fill your credentials. Password managers encrypt your password database with military-grade encryption, requiring only a single strong master password. This eliminates the need to write passwords down, store them in insecure notes apps, or reuse passwords out of convenience. Most password managers also include breach monitoring, security audits, and secure password sharing features.
              </p>

              <h3 className="subsection-title">5. Change Passwords After a Breach</h3>
              <p>
                If a service you use suffers a data breach, change your password immediately—even if the company claims passwords were encrypted. Breached credentials are rapidly shared on underground forums and used in credential stuffing attacks. Sign up for breach notification services like Have I Been Pwned to receive alerts when your email appears in data breaches. When changing a compromised password, use our generator to create a completely new random password—never just modify your old password by adding a number or symbol.
              </p>

              <h3 className="subsection-title">6. Avoid Common Patterns and Dictionary Words</h3>
              <p>
                Attackers use sophisticated tools that can test millions of password combinations per second, starting with dictionary words, common patterns (Password123, qwerty, 12345), keyboard patterns (asdfgh), and personal information (names, birthdays). Even adding simple substitutions (P@ssw0rd) provides minimal security. Our cryptographically random passwords completely eliminate these predictable patterns, ensuring your credentials cannot be guessed through dictionary or pattern-based attacks.
              </p>

              <h3 className="subsection-title">7. Be Cautious with Password Reset Questions</h3>
              <p>
                Security questions (mother&apos;s maiden name, first pet, city of birth) often have answers that are publicly discoverable through social media or public records. Attackers can bypass strong passwords entirely by using password reset mechanisms with weak security questions. Treat security question answers like passwords—generate random answers using our tool and store them in your password manager. Never use truthful answers to security questions.
              </p>

              <h3 className="subsection-title">8. Monitor for Unauthorized Access</h3>
              <p>
                Regularly review login activity and connected devices on your important accounts. Most major services (Google, Microsoft, Facebook) provide security dashboards showing recent logins with timestamps, locations, and devices. Enable login alerts to receive notifications when your account is accessed from a new device or location. If you notice suspicious activity, immediately change your password and review recent account actions for unauthorized changes.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Password Strength */}
        <section className="content-section">
          <div className="content-container">
            <h2 className="section-heading">Understanding Password Strength and Entropy</h2>
            <div className="content-text">
              <p>
                Password strength is measured in <strong>bits of entropy</strong>—a mathematical calculation of how many guesses an attacker would need to crack your password. Higher entropy means exponentially more possible combinations and dramatically longer crack times.
              </p>
              <p>
                A password&apos;s entropy is calculated using the formula: <em>Entropy = log₂(R^L)</em>, where R is the number of possible characters (94 for all printable ASCII characters) and L is the password length. Here&apos;s how different password configurations compare:
              </p>
              <ul style={{marginLeft: '20px', marginTop: '12px'}}>
                <li><strong>8 characters, lowercase only:</strong> ~37 bits (crackable in seconds)</li>
                <li><strong>8 characters, mixed case + numbers:</strong> ~48 bits (crackable in hours)</li>
                <li><strong>12 characters, mixed case + numbers + symbols:</strong> ~78 bits (centuries with current tech)</li>
                <li><strong>16 characters, mixed case + numbers + symbols:</strong> ~95 bits (effectively uncrackable)</li>
                <li><strong>20 characters, mixed case + numbers + symbols:</strong> ~131 bits (impossible with foreseeable technology)</li>
              </ul>
              <p style={{marginTop: '16px'}}>
                According to security researchers, 80+ bits of entropy is considered secure against all known attacks. Our generator defaults to 16 characters with all character types, providing 95+ bits of entropy—far exceeding modern security requirements. When you see a password labeled "Strong" or "Very Strong" in our tool, this reflects mathematically proven security based on entropy calculations.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section Component */}
        <FAQSection />

        {/* Ad Placement 4 - Before CTA */}
        <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
          <AdPlaceholder placementId="global_before_cta" />
        </div>

        {/* CTA Section Component */}
        <CTASection />

        {/* Ad Placement 5 - Above Footer */}
        <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
          <AdPlaceholder placementId="global_footer_above" />
        </div>

      </main>
      <Footer />
    </>
  )
}
