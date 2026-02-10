import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  ComparisonTable,
  StatBox
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function BrowserVsDedicatedGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Convenience is the enemy of security. We dissect the architecture of Chrome Password Manager vs. 1Password to show you exactly where the vulnerabilities hide."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Is Chrome Password Manager safe?">
        While convenient, browser-based password managers (Chrome, Edge) have significant architectural weaknesses compared 
        to dedicated solutions. They often lack <strong>zero-knowledge encryption</strong> (meaning the provider could theoretically 
        access keys), are vulnerable to local malware stealing browser session tokens (InfoStealers), and couple your 
        passwords to your email account—creating a single point of catastrophic failure. Dedicated managers (1Password, Bitwarden) 
        use "Secret Keys" and memory-hard encryption that remains secure even if their cloud servers are breached.
      </AnswerBlock>

      <Section id="threat-model">
        <H2>The Threat Model: What Are We Protecting Against?</H2>
        <p>
          To understand the difference, we must define the attacks.
        </p>
        <ul>
          <li><strong>Remote Cloud Breach:</strong> Hackers breach Google/LastPass servers.</li>
          <li><strong>Local Device Malware:</strong> InfoStealer malware (RedLine, Raccoon) on your PC.</li>
          <li><strong>Physical Access:</strong> Someone sits at your unlocked laptop.</li>
          <li><strong>Phishing:</strong> You enter credentials into a fake site.</li>
        </ul>
      </Section>

      <Section id="browser-weakness">
        <H2>The "InfoStealer" Vulnerability in Browsers</H2>
        <p>
          In 2024 and 2025, the rise of "InfoStealer" malware exposed a critical flaw in browser password managers. 
          Browsers store encrypted passwords locally in a way that is easily decryptable by any process running 
          as the user.
        </p>
        <StatBox
          value="400%"
          label="increase in InfoStealer logs for sale on dark web"
          source="Recorded Future, 2025"
          trend="Targeting Chrome Local State"
          icon="🦠"
        />
        <p>
          <strong>How it works:</strong> Malware grabs the `Local State` file from your Chrome data folder, 
          uses the Windows DPAPI (Data Protection API) to decrypt the encryption key, and instantly exfiltrates 
          ALL your saved passwords. Dedicated managers typically lock memory more aggressively and require a 
          Master Password input for decryption after inactivity, mitigating this risk.
        </p>
      </Section>

      <Section id="zero-knowledge">
        <H2>Zero Knowledge: The Golden Standard</H2>
        <p>
          <strong>Dedicated Manager (1Password/Bitwarden):</strong>
          Your vault is encrypted with a key derived from your Master Password + a Secret Key. 
          The blob sent to the cloud is black noise. The vendor <em>cannot</em> unlock it. 
          If the vendor is hacked, your data is safe.
        </p>
        <p>
          <strong>Browser Manager (Google/Apple):</strong>
          While improved, recovery mechanisms often rely on account recovery flows (SMS, email) that 
          imply the provider has a mechanism to reset/restore access. This is "Convenient Security," 
          not strict Zero Knowledge. If your Gmail is compromised, your passwords are gone.
        </p>
      </Section>

      <Section id="detailed-comparison">
        <H2>Feature & Security Matrix</H2>
        <ComparisonTable
          title="Browser vs Dedicated Architecture"
          headers={['Feature', 'Browser (Chrome/Edge)', 'Dedicated (1P/Bitwarden)']}
          data={[
            {
              old: 'Encryption Key',
              new: 'Often tied to OS/Account login',
              extra: 'Derived from Master Password (PBKDF2/Argon2)'
            },
            {
              old: 'Secret Key / Pepper',
              new: 'Rarely used',
              extra: 'Standard (128-bit secret key)'
            },
            {
              old: 'Cross-Platform',
              new: 'Locked to Ecosystem (Apple/Google)',
              extra: 'Universal (Linux, iOS, Windows, Android)'
            },
            {
              old: 'Phishing Protection',
              new: 'Basic',
              extra: 'High (Auto-fill only on exact domain match)'
            },
            {
              old: 'Secure Sharing',
              new: 'Non-existent or insecure',
              extra: 'Encrypted one-time links & shared vaults'
            }
          ]}
        />
      </Section>

      <Section id="governance">
        <H2>Enterprise Governance (Why Businesses Ban Browsers)</H2>
        <p>
          For a business, browser managers are a nightmare.
        </p>
        <ul>
          <li><strong>No Offboarding:</strong> When an employee leaves, they keep the passwords synced to their personal Chrome profile.</li>
          <li><strong>Shadow IT:</strong> IT has no visibility into password strength or reuse.</li>
          <li><strong>No Audit Logs:</strong> You cannot see who accessed the "Billing Admin" password.</li>
        </ul>
        <CalloutBox type="tip" title="Business Rule">
          <p>
            Block the "Save Password" prompt in Chrome/Edge via Group Policy (GPO) and deploy a managed 
            password manager extension. This is Security 101.
          </p>
        </CalloutBox>
      </Section>

      <Section id="verdict">
        <H2>The Verdict</H2>
        <p>
          <strong>Browser Managers</strong> are fine for: Netflix, low-risk forums, and users who would otherwise 
          write passwords on sticky notes. They are "better than nothing."
        </p>
        <p>
          <strong>Dedicated Managers</strong> are mandatory for: Banking, crypto, email, enterprise work, and 
          anyone who values sovereignty over their digital identity.
        </p>
      </Section>
    </StandardGuide>
  )
}
