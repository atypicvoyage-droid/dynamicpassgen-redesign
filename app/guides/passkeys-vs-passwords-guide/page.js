import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  StatBox,
  ComparisonTable 
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function PasskeysGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Passwords are dying. Passkeys are the future. Learn why Apple, Google, and Microsoft are betting their security on this FIDO2 technology."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What are passkeys?">
        Passkeys are FIDO2-based passwordless credentials that replace traditional passwords. 
        Instead of a typed string, a cryptographic key pair is generated: a public key stored 
        on the server and a private key securely stored on your device. You authenticate using 
        biometrics (Face ID, Touch ID) or a PIN, making them immune to phishing and data breaches.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The End of the Password Era</H2>
        <p>
          For decades, we've relied on shared secrets (passwords) to prove our identity. 
          But with 81% of data breaches caused by stolen credentials, the password model is broken.
          Enter <strong>passkeys</strong>: the industry-standard replacement that eliminates 
          passwords entirely.
        </p>
        <StatBox
          value="36%"
          label="adoption rate on major platforms in 2026"
          source="FIDO Alliance, 2026"
          trend="+300% growth YoY"
          icon="📈"
        />
      </Section>

      <Section id="how-it-works">
        <H2>How Passkeys Actually Work</H2>
        <p>
          Unlike a password, which is a shared secret sent over the internet, a passkey relies 
          on <strong>public key cryptography</strong>.
        </p>
        <H3>The Registration Process</H3>
        <ol>
          <li>Your device generates a public/private key pair.</li>
          <li>The <strong>public key</strong> is sent to the website.</li>
          <li>The <strong>private key</strong> stays securely on your device (never sent!).</li>
        </ol>
        <H3>The Login Process</H3>
        <ol>
          <li>The website sends a mathematical challenge (nonce).</li>
          <li>You unlock your device (Face ID/Fingerprint).</li>
          <li>Your device signs the challenge with the private key.</li>
          <li>The website verifies the signature with the public key.</li>
        </ol>
      </Section>

      <Section id="comparison">
        <H2>Passkeys vs. Passwords</H2>
        <ComparisonTable
          title="Security & Usability Showdown"
          headers={['Traditional Passwords ❌', 'Passkeys ✅']}
          data={[
            {
              old: 'Vulnerable to phishing & social engineering',
              new: 'Phishing-resistant (domain bound)'
            },
            {
              old: 'Stored on servers (breach risk)',
              new: 'Private key never leaves device'
            },
            {
              old: 'Requires memory or manager',
              new: 'One-tap biometric login'
            },
            {
              old: 'Weak if chosen by user',
              new: 'Always cryptographically strong'
            }
          ]}
        />
      </Section>

      <Section id="setup">
        <H2>How to Enable Passkeys Today</H2>
        <p>
          Major platforms now support passkeys. Here is how to get started:
        </p>
        <H3>Google Accounts</H3>
        <ul>
          <li>Go to myaccount.google.com/security</li>
          <li>Select "Passkeys & Security Keys"</li>
          <li>Click "Create a passkey"</li>
        </ul>
        <H3>Apple ID</H3>
        <p>
          Apple automatically creates passkeys for iCloud Keychain users on iOS 16+ and macOS Ventura+.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Should You Switch?</H2>
        <CalloutBox type="success" title="Our Verdict">
          <p>
            <strong>Yes. Immediately.</strong> Wherever passkeys are supported, enable them. 
            They offer a vastly superior security model with zero user friction.
          </p>
        </CalloutBox>
        <p>
          While we transition, keep a strong password manager for legacy sites, but the future 
          is undeniably passwordless.
        </p>
      </Section>
    </StandardGuide>
  )
}
