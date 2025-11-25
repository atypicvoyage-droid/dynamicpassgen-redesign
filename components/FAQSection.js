// components/FAQSection.js
'use client'
import Script from 'next/script'

export default function FAQSection({ faqs }) {
  const defaultFaqs = [
    {
      question: "Is this password generator really secure?",
      answer: "Yes, absolutely. DynamicPassGen uses the Web Crypto API's window.crypto.getRandomValues() method, which is the same cryptographically secure random number generator (CSPRNG) used by major financial institutions, government agencies, and security companies worldwide. All password generation happens entirely within your browser using your device's hardware entropy sources. Your generated passwords never leave your device, are never transmitted over the internet, and are never stored on our servers. This zero-knowledge architecture ensures maximum security and privacy."
    },
    {
      question: "Do you store or log the passwords I generate?",
      answer: "No, we never store, log, transmit, or have any access to your generated passwords. All password generation occurs entirely client-side in your web browser using JavaScript. We have deliberately designed our system with zero server-side processing or logging capabilities for password data. Your browser's session history feature (showing your last 5 passwords) is stored only in your browser's local memory and is cleared when you close the tab. We cannot see, access, or recover any passwords you generate."
    },
    {
      question: "How does a password generator work?",
      answer: "Password generators use cryptographically secure pseudorandom number generators (CSPRNGs) to create truly random passwords. When you click generate, the tool accesses your operating system's entropy pool—random data from unpredictable sources like hardware timing, mouse movements, and thermal noise. Using the Web Crypto API, each character is independently selected from your chosen character set with mathematical randomness that cannot be predicted or reproduced. The generator then calculates the password's entropy (bits of randomness) and displays an estimated crack time to help you understand its strength."
    },
    {
      question: "What's the difference between a password and a passphrase?",
      answer: "A password is typically a random string of mixed characters including uppercase, lowercase, numbers, and symbols (example: X9#mK2$pL@4q). A passphrase is a sequence of random words separated by spaces or delimiters (example: correct-horse-battery-staple-purple). Passphrases are generally easier for humans to remember while maintaining high entropy and security when generated randomly with sufficient length. NIST guidelines now recommend passphrases as they provide better usability without sacrificing security. Our passphrase generator uses a curated wordlist to create memorable yet cryptographically secure passphrases."
    },
    {
      question: "How long should my password be?",
      answer: "For standard online accounts (social media, shopping, entertainment), a minimum of 12-14 characters is recommended. For high-security accounts including banking, email, cloud storage, and work systems, use 16-20+ characters. For password managers and encryption keys, 24-32+ characters provides maximum security. According to NIST SP 800-63B guidelines, password length is the single most important factor in password strength. Each additional character exponentially increases security—a 16-character password is over 6,000 times harder to crack than a 12-character password."
    },
    {
      question: "Can I use this for business or commercial purposes?",
      answer: "Absolutely! DynamicPassGen is completely free for both personal and commercial use without any restrictions. Generate passwords for business accounts, employee onboarding, security training, client systems, or any professional application. Many IT departments, security consultants, and managed service providers use our tool for creating initial passwords, system credentials, and secure tokens. There are no usage limits, no registration requirements, and no hidden costs."
    },
    {
      question: "Should I include special characters in my password?",
      answer: "Yes, including special characters (symbols like !@#$%^&*) significantly increases password entropy and makes brute-force attacks exponentially harder. A password using all four character types (uppercase, lowercase, numbers, symbols) from a 94-character set is much stronger than one using only letters and numbers (62-character set). However, some websites restrict certain special characters, so our generator lets you customize which character types to include. If a site rejects your password, simply regenerate without symbols."
    },
    {
      question: "Are password generators better than creating my own password?",
      answer: "Yes, significantly better. Human-created passwords tend to follow predictable patterns—common words, substitutions (@ for a), keyboard patterns (qwerty), or personal information. Even when trying to be random, humans are poor at generating true randomness. Attackers use sophisticated tools that test millions of passwords per second, starting with dictionary words and common patterns. Cryptographically generated passwords eliminate all predictable patterns, providing true mathematical randomness that cannot be guessed through dictionary or pattern-based attacks."
    },
    {
      question: "What browsers are supported?",
      answer: "DynamicPassGen works on all modern web browsers that support the Web Crypto API, including Chrome 60+, Firefox 55+, Safari 11+, Edge 79+, Opera 47+, and all mobile browsers on iOS 11+ and Android 5+. The tool is fully responsive and optimized for mobile devices, tablets, and desktop computers. No browser extensions, plugins, or downloads are required—simply visit our website and start generating secure passwords immediately."
    },
    {
      question: "Can a password generator be hacked?",
      answer: "No, our client-side password generator cannot be hacked to reveal your passwords because generation happens entirely in your browser's isolated environment. The generator itself never stores passwords and uses your device's secure entropy sources. However, passwords can be compromised through other means: phishing attacks, keyloggers, data breaches of services where you use the password, or weak security practices. That's why we recommend using unique passwords for every account and enabling two-factor authentication wherever possible."
    },
    {
      question: "What is password entropy and why does it matter?",
      answer: "Entropy measures password randomness in bits—higher entropy means exponentially more possible combinations and longer crack times. Entropy is calculated as log₂(R^L) where R is the character set size and L is length. For example, a 12-character password with all character types (94 possibilities per character) has 78 bits of entropy, requiring billions of years to crack. An 8-character password with only lowercase letters (26 possibilities) has just 37 bits—crackable in seconds. Security experts recommend 80+ bits of entropy for strong protection."
    },
    {
      question: "How often should I change my passwords?",
      answer: "Modern security guidelines from NIST no longer recommend routine password changes unless there's evidence of compromise. Forced periodic changes encourage weak passwords and reuse patterns (Password1, Password2, etc.). Instead, focus on creating strong unique passwords initially and only change them if: 1) The service suffers a data breach, 2) You suspect your account was compromised, 3) You shared the password with someone, or 4) The password doesn't meet current security standards. Always change passwords immediately after any security incident."
    }
  ]

  const faqList = faqs || defaultFaqs

  // Generate schema for the FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* Inject FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <section style={{
        marginTop: '64px',
        padding: '40px 20px',
        background: 'var(--card-bg)',
        borderRadius: '20px',
        border: '2px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '16px',
            textAlign: 'center',
            color: 'var(--text-primary)',
            fontWeight: '800'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            textAlign: 'center',
            marginBottom: '32px',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            Everything you need to know about password security and our free generator tool
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqList.map((faq, index) => (
              <details
                key={index}
                style={{
                  padding: '24px',
                  background: 'var(--card-alt-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <span>{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      color: 'var(--accent)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  marginTop: '16px',
                  fontSize: '1rem'
                }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        details[open] summary svg {
          transform: rotate(180deg);
        }
        
        details:hover {
          border-color: var(--accent);
        }
        
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </>
  )
}
