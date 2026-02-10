import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  H4,
  AnswerBlock, 
  CalloutBox, 
  StatBox,
  ComparisonTable,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function PasskeysGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The password is dead. Long live the Passkey. A comprehensive deep dive into the FIDO2 standard that is finally killing the shared secret."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What are passkeys?">
        Passkeys are unphishable, FIDO2-compliant digital credentials that replace passwords entirely. 
        Technically, they are cryptographic key pairs (WebAuthn): a <strong>public key</strong> stored on the server 
        and a <strong>private key</strong> securely stored in your device's hardware enclave (TPM) or keychain. 
        Authentication occurs via a challenge-response protocol unlocked by biometrics, ensuring the private key 
        never leaves your device and is never transmitted over the internet.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The End of the Shared Secret Era</H2>
        <p>
          For 60 years, digital security has relied on "shared secrets"—strings of characters that both you 
          and the server know (passwords). This model is fundamentally flawed. If a server is breached, 
          your secret is stolen. If you type your secret into a fake website (phishing), it's stolen.
        </p>
        <p>
          Passkeys change the physics of authentication. There is no shared secret to steal. Even if a 
          hacker breaches Google's servers, they only find useless public keys. They cannot reverse-engineer 
          your private key from it.
        </p>
        <StatBox
          value="0"
          label="successful phishing attacks against FIDO2 passkeys"
          source="Google Security Blog, 2025"
          trend="Since implementation"
          icon="🛡️"
        />
      </Section>

      <Section id="technical-deep-dive">
        <H2>Under the Hood: How WebAuthn Works</H2>
        <p>
          Understanding the mechanism is crucial for trusting the technology. Here is the technical flow 
          that happens in milliseconds when you log in:
        </p>
        
        <H3>1. The Challenge (Server Side)</H3>
        <p>
          When you click "Sign in with Passkey," the website (Relying Party) generates a random string 
          of data called a <strong>nonce</strong> (number used once) and sends it to your browser.
        </p>

        <H3>2. The Signature (Client Side)</H3>
        <p>
          Your browser forwards this challenge to your authenticator (iOS Keychain, Android Keystore, 
          Windows Hello, or YubiKey). The authenticator checks:
        </p>
        <ul>
          <li><strong>Domain Binding:</strong> Is this challenge actually from google.com? (Stops phishing cold).</li>
          <li><strong>User Verification:</strong> Is the human present? (FaceID/Fingerprint check).</li>
        </ul>
        <p>
          If both pass, the authenticator uses your <strong>Private Key</strong> to mathematically "sign" 
          the challenge.
        </p>

        <H3>3. The Verification</H3>
        <p>
          The signed challenge is sent back. The server uses your stored <strong>Public Key</strong> to verify 
          the signature. If the math works, you are logged in.
        </p>

        <CodeBlock
          language="json"
          filename="webauthn-credential.json"
          code={`// What the browser actually sends to the server
{
  "id": "AERx...", // Credential ID
  "rawId": "...", 
  "type": "public-key",
  "response": {
    "authenticatorData": "...", // Metadata about the authenticator
    "clientDataJSON": "...", // Contains the challenge and origin
    "signature": "..." // The mathematical proof signed by private key
  }
}`}
        />
      </Section>

      <Section id="passkeys-vs-passwords">
        <H2>Why Passkeys Win: The Security Comparison</H2>
        <p>
          This isn't just an incremental improvement; it's a paradigm shift.
        </p>
        <ComparisonTable
          title="Legacy Auth vs FIDO2 Passkeys"
          headers={['Password Authentication ⚠️', 'Passkey Authentication ✅']}
          data={[
            {
              old: 'Phishable (User can type it on fake site)',
              new: 'Unphishable (Browser verifies domain origin)'
            },
            {
              old: 'Server Breach = Compromised Account',
              new: 'Server Breach = Public Keys only (useless)'
            },
            {
              old: 'Weak entropy (User chooses "Password123")',
              new: 'Maximum entropy (P-256 elliptic curve)'
            },
            {
              old: 'Credential Stuffing risk (reuse)',
              new: 'Unique key pair per website'
            }
          ]}
        />
      </Section>

      <Section id="ecosystem-reality">
        <H2>The Ecosystem Reality: Apple vs Google vs Microsoft</H2>
        <p>
          In 2026, passkeys are "synced" across your cloud account ecosystem. This solves the "lost device" 
          problem but creates ecosystem lock-in.
        </p>

        <H3>Apple iCloud Keychain</H3>
        <p>
          Passkeys sync end-to-end encrypted across all Apple devices signed into your Apple ID. 
          Recoverable via iCloud Recovery (which is robust).
        </p>

        <H3>Google Password Manager</H3>
        <p>
          Syncs across Android devices and Chrome browsers. On desktop, you can scan a QR code 
          to auth with your phone ("Cross-Device Authentication").
        </p>

        <CalloutBox type="warning" title="The Cross-Platform Friction">
          <p>
            If you create a passkey on your iPhone, it doesn't automatically sync to your Windows PC 
            (yet). You typically need to scan a QR code on the PC screen using your iPhone camera 
            to bridge the gap, or use a third-party manager like 1Password or Bitwarden which syncs 
            passkeys across ALL platforms.
          </p>
        </CalloutBox>
      </Section>

      <Section id="recovery">
        <H2>What If I Lose My Phone?</H2>
        <p>
          This is the #1 fear users have. The answer depends on your implementation:
        </p>
        <ul>
          <li><strong>Synced Passkeys:</strong> If you lose your phone, you restore your cloud backup to a new phone. The passkeys restore automatically.</li>
          <li><strong>Hardware Keys (YubiKey):</strong> These are "device-bound." If you lose the key, it's gone. You MUST register a backup key or alternative method.</li>
        </ul>
        <p>
          <strong>Best Practice:</strong> Always register at least two methods. E.g., FaceID (primary) and a YubiKey (backup), or FaceID and a Recovery Code.
        </p>
      </Section>

      <Section id="implementation">
        <H2>Implementation Strategy for 2026</H2>
        <p>
          For users: Enable passkeys on Google, Apple, Amazon, PayPal, and Adobe immediately. 
          Use a dedicated password manager (1Password/Bitwarden) to store them if you switch 
          between iOS and Windows frequently.
        </p>
        <p>
          For developers: Stop building password fields. Use WebAuthn APIs. The friction of 
          passwords costs you more in reset tickets and churn than the effort to implement passkeys.
        </p>

        <H3>Platform Support Status (2026)</H3>
        <ul>
          <li><strong>✅ Full Support:</strong> Google, Apple, Microsoft, Amazon, PayPal, GitHub</li>
          <li><strong>⚠️ Partial:</strong> Many banking sites (backup method only)</li>
          <li><strong>❌ Not Yet:</strong> Most legacy enterprise apps</li>
        </ul>
      </Section>

      <Section id="conclusion">
        <H2>The Future is Passwordless</H2>
        <p>
          We are witnessing the end of the password era. By 2028, NIST predicts that 60% of consumer 
          logins will use passkeys or equivalent passwordless methods. The question isn't "if" your 
          organization should adopt passkeys—it's "when."
        </p>
        <p>
          Start today. Enable passkeys wherever available. Your future self (and your security team) 
          will thank you.
        </p>
      </Section>
    </StandardGuide>
  )
}
