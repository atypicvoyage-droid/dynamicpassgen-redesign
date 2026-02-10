import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  ComparisonTable,
  StatBox,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

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
        While convenient, browser-based password managers (Chrome, Edge, Safari) have significant architectural weaknesses compared 
        to dedicated solutions. They often lack <strong>zero-knowledge encryption</strong> (meaning the provider could theoretically 
        access keys), are vulnerable to local malware stealing browser session tokens (InfoStealers), and couple your 
        passwords to your email account—creating a single point of catastrophic failure. Dedicated managers (1Password, Bitwarden) 
        use "Secret Keys" and memory-hard encryption that remains secure even if their cloud servers are breached.
      </AnswerBlock>

      <Section id="threat-model">
        <H2>The Threat Model: What Are We Protecting Against?</H2>
        <p>
          To understand the difference, we must define the attacks:
        </p>
        <ul>
          <li><strong>Remote Cloud Breach:</strong> Hackers breach Google/LastPass servers.</li>
          <li><strong>Local Device Malware:</strong> InfoStealer malware (RedLine, Raccoon) on your PC.</li>
          <li><strong>Physical Access:</strong> Someone sits at your unlocked laptop.</li>
          <li><strong>Phishing:</strong> You enter credentials into a fake site.</li>
          <li><strong>Account Takeover:</strong> Your Google/Apple account is compromised.</li>
        </ul>
        <p>
          Browser managers protect reasonably against phishing and physical access, but fail catastrophically 
          against malware and account takeover scenarios.
        </p>
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
          <strong>How it works:</strong> Malware (often delivered via fake software updates or pirated apps) 
          grabs the <code>Local State</code> file from your Chrome data folder, uses the Windows DPAPI 
          (Data Protection API) to decrypt the master encryption key, and instantly exfiltrates ALL your 
          saved passwords.
        </p>
        <p>
          This isn't a vulnerability—it's by design. DPAPI is intended to protect data from <em>other users</em> 
          on the same PC, not from malware running as <em>you</em>.
        </p>

        <H3>The 2024 RedLine Stealer Case</H3>
        <p>
          In Q2 2024, over 440,000 Chrome password databases appeared on dark web forums in a single month. 
          Analysis showed they were harvested by RedLine Stealer, which scraped passwords from gaming PCs 
          where users downloaded "free" game mods.
        </p>
      </Section>

      <Section id="zero-knowledge">
        <H2>Zero Knowledge: The Golden Standard</H2>
        <p>
          <strong>Dedicated Manager (1Password/Bitwarden):</strong> Your vault is encrypted with a key derived 
          from your Master Password + a Secret Key (128-bit random string). The encrypted blob sent to the cloud 
          is mathematically unreadable without both components. The vendor <em>cannot</em> decrypt it. 
          If the vendor is hacked, your data is safe.
        </p>
        <p>
          <strong>Browser Manager (Google/Apple):</strong> While improved in recent years, recovery mechanisms 
          often rely on account recovery flows (SMS, email) that imply the provider has <em>some</em> mechanism 
          to restore access. This is "Convenient Security," not strict Zero Knowledge.
        </p>
        <CalloutBox type="warning" title="The Gmail Compromise Scenario">
          <p>
            If your Gmail is compromised via phishing, the attacker can:
          </p>
          <ol>
            <li>Reset your Google Account password</li>
            <li>Log into Chrome on a new device</li>
            <li>Sync ALL your saved passwords</li>
          </ol>
          <p>
            With 1Password, even if your email is compromised, the attacker still needs your Master Password 
            AND your Secret Key (which you store offline).
          </p>
        </CalloutBox>
      </Section>

      <Section id="detailed-comparison">
        <H2>Feature & Security Matrix</H2>
        <ComparisonTable
          title="Browser vs Dedicated Architecture"
          headers={['Feature', 'Browser (Chrome/Edge/Safari)', 'Dedicated (1Password/Bitwarden)']}
          data={[
            {
              old: 'Encryption Key',
              new: 'Tied to OS/Account login',
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
              new: 'Basic (domain matching)',
              extra: 'High (Auto-fill only on exact domain match)'
            },
            {
              old: 'Breach Monitoring',
              new: 'Limited',
              extra: 'Real-time alerts via Watchtower/Data Breach Report'
            },
            {
              old: 'Secure Sharing',
              new: 'Non-existent or insecure',
              extra: 'Encrypted one-time links & shared vaults'
            },
            {
              old: 'Emergency Access',
              new: 'Account recovery only',
              extra: 'Trusted contact with waiting period'
            }
          ]}
        />
      </Section>

      <Section id="governance">
        <H2>Enterprise Governance (Why Businesses Ban Browsers)</H2>
        <p>
          For a business, browser managers are a nightmare:
        </p>
        <ul>
          <li><strong>No Offboarding:</strong> When an employee leaves, they keep the passwords synced to their personal Chrome profile.</li>
          <li><strong>Shadow IT:</strong> IT has no visibility into password strength or reuse.</li>
          <li><strong>No Audit Logs:</strong> You cannot see who accessed the "Billing Admin" password.</li>
          <li><strong>Compliance Failure:</strong> SOC 2, ISO 27001, and PCI DSS all require access logging—browsers don't provide this.</li>
        </ul>
        <CalloutBox type="tip" title="Business Security Policy">
          <p>
            Block the "Save Password" prompt in Chrome/Edge via Group Policy (GPO) and deploy a managed 
            password manager extension (1Password Business, Bitwarden Organizations). This is Security 101 
            for any organization over 10 employees.
          </p>
        </CalloutBox>
      </Section>

      <Section id="when-browser-ok">
        <H2>When Browser Managers Are Acceptable</H2>
        <p>
          Browser managers aren't <em>bad</em>—they're just limited. They're fine for:
        </p>
        <ul>
          <li>Low-risk accounts (forums, news sites)</li>
          <li>Users who would otherwise write passwords on sticky notes</li>
          <li>Supplementing a dedicated manager for non-critical sites</li>
        </ul>
        <p>
          They are <strong>not</strong> acceptable for:
        </p>
        <ul>
          <li>Banking or financial accounts</li>
          <li>Email (password reset vector for everything else)</li>
          <li>Work credentials</li>
          <li>Cryptocurrency wallets</li>
          <li>Any account where 2FA isn't available</li>
        </ul>
      </Section>

      <Section id="migration">
        <H2>Migration Guide: Chrome → 1Password</H2>
        <ol>
          <li>
            <strong>Export from Chrome:</strong>
            <ul>
              <li>Settings → Autofill → Password Manager → ⋮ → Export passwords</li>
              <li>Saves as <code>passwords.csv</code></li>
            </ul>
          </li>
          <li>
            <strong>Import to 1Password:</strong>
            <ul>
              <li>File → Import → Chrome</li>
              <li>Select the CSV file</li>
              <li>Review and confirm</li>
            </ul>
          </li>
          <li>
            <strong>Clean Up:</strong>
            <ul>
              <li>Delete the CSV file (sensitive data!)</li>
              <li>Clear Chrome's saved passwords</li>
              <li>Disable Chrome password saving</li>
            </ul>
          </li>
        </ol>
      </Section>

      <Section id="verdict">
        <H2>The Verdict</H2>
        <p>
          <strong>Browser Managers</strong> are "better than nothing" but fail at the enterprise level 
          and against sophisticated threats. They're a convenience feature, not a security solution.
        </p>
        <p>
          <strong>Dedicated Managers</strong> are mandatory for anyone who values digital security. 
          The $3-5/month cost is trivial compared to the cost of a single compromised account.
        </p>
        <p>
          For most users, the answer is clear: Use a dedicated password manager for anything that matters. 
          Your future self will thank you.
        </p>
      </Section>
    </StandardGuide>
  )
}
