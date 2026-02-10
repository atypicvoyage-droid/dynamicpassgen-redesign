import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  ComparisonTable
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function CloudVsLocalPasswordManagersGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Cloud vs. Local Password Managers: Which is Safer?"
        subtitle="Should you trust the cloud (1Password, Bitwarden) or keep it offline (KeePass)? We break down the security trade-offs, the LastPass incident, and which method is right for your threat model."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Is cloud or local password manager safer?">
        For most users, reputable cloud password managers (Bitwarden, 1Password) are safer because they use zero-knowledge encryption, enable MFA, and ensure backups. Local managers (KeePass) offer more control but require technical expertise for proper backup management and sync configuration.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Great Debate: Where to Store Your Digital Keys</H2>
        
        <p>
          It is the biggest question in personal security: <strong>Where should you put the keys to your digital life?</strong>
        </p>

        <p>
          Should you store them in the <strong>Cloud</strong>, where they sync instantly to your phone but live on someone else's server?
          Or should you store them <strong>Locally</strong>, where you have total control but risk losing everything if your hard drive fails?
        </p>

        <p>
          There is no perfect answer, only trade-offs. In this guide, we analyze the security models of both approaches to help you decide.
        </p>

        <CalloutBox type="info" title="The Security Balance">
          <p>
            Security is always a balance. Cloud prioritizes <strong>Availability</strong> (you need your passwords everywhere, instantly). 
            Local prioritizes <strong>Confidentiality</strong> (you don't trust anyone else with your data).
          </p>
        </CalloutBox>
      </Section>

      <Section id="cloud-managers">
        <H2>Cloud Managers (1Password, Bitwarden, Dashlane)</H2>
        
        <p>
          These services store your encrypted vault on their servers.
        </p>

        <H3>Advantages</H3>
        <ul>
          <li><strong>Sync is Magic:</strong> Passwords you save on your PC appear on your iPhone instantly</li>
          <li><strong>Sharing:</strong> Easy to share the Netflix password with your spouse or WiFi code with guests</li>
          <li><strong>Backups:</strong> If you drop your phone in a lake, your passwords are safe in the cloud</li>
          <li><strong>User Experience:</strong> Polished apps with browser extensions and mobile autofill</li>
        </ul>

        <H3>Disadvantages</H3>
        <ul>
          <li><strong>The Giant Target:</strong> Cloud providers hold secrets of millions of users—they are the #1 target for hackers</li>
          <li><strong>Web Interface Risks:</strong> Logging in via a web browser opens you up to phishing attacks</li>
          <li><strong>Subscription Costs:</strong> Premium features typically require monthly or annual payment</li>
          <li><strong>Trust Required:</strong> You must trust the provider's security implementation</li>
        </ul>

        <CalloutBox type="success" title="Zero Knowledge Encryption">
          <p>
            The key to cloud security is <strong>Zero Knowledge</strong>. The encryption happens on <em>your</em> device. 
            The cloud provider only receives a blob of gibberish. They technically cannot read your passwords, 
            even if the government served them a warrant.
          </p>
        </CalloutBox>
      </Section>

      <Section id="local-managers">
        <H2>Local Managers (KeePass, Strongbox, MacPass)</H2>
        
        <p>
          These apps create an encrypted file (<code>.kdbx</code>) that lives on your hard drive. 
          It never touches the internet unless you move it yourself.
        </p>

        <H3>Advantages</H3>
        <ul>
          <li><strong>Total Control:</strong> You own the keys. You own the file. No subscription fees</li>
          <li><strong>Smaller Attack Surface:</strong> A hacker has to hack <em>you specifically</em>, not a central server</li>
          <li><strong>Privacy:</strong> No email address required to sign up. Total anonymity</li>
          <li><strong>Offline Operation:</strong> Works completely disconnected from the internet</li>
        </ul>

        <H3>Disadvantages</H3>
        <ul>
          <li><strong>Sync is Hard:</strong> You have to manually copy the file to your phone (or use Dropbox/Google Drive, which re-introduces cloud risk)</li>
          <li><strong>No Recovery:</strong> If you forget your password or your hard drive dies without a backup, your data is gone. Forever</li>
          <li><strong>UX Friction:</strong> The interfaces often look like Windows 95 apps</li>
          <li><strong>Technical Expertise:</strong> Requires understanding of file systems, backups, and encryption</li>
        </ul>
      </Section>

      <Section id="lastpass-incident">
        <H2>The LastPass Incident: Lessons Learned</H2>
        
        <p>
          In 2022, LastPass suffered a massive breach. Hackers stole encrypted user vaults.
        </p>

        <CalloutBox type="warning" title="The Critical Lesson">
          <p>
            The breach was devastating because LastPass <strong>did not encrypt everything</strong>. 
            Fields like "URL" were unencrypted, letting hackers see exactly where users had accounts 
            (e.g., "This user has a Bank of America account").
          </p>
        </CalloutBox>

        <p>
          Competitors like <strong>1Password</strong> and <strong>Bitwarden</strong> encrypt <em>metadata</em> too. 
          If their blob is stolen, the hacker sees nothing—not even which websites you visit.
        </p>

        <p>
          The LastPass breach demonstrated three critical security principles:
        </p>

        <ul>
          <li><strong>Full Encryption:</strong> Encrypt URLs, usernames, and all metadata—not just passwords</li>
          <li><strong>Master Password Strength:</strong> Weak master passwords led to successful offline cracking attacks</li>
          <li><strong>Incident Response:</strong> Delayed disclosure damaged trust more than the breach itself</li>
        </ul>
      </Section>

      <Section id="comparison">
        <H2>Security Model Comparison</H2>

        <ComparisonTable
          title="Cloud vs Local: Feature Comparison"
          headers={['Feature', 'Cloud', 'Local']}
          data={[
            {
              old: 'Cross-device sync',
              new: 'Automatic (✅)::Manual file transfer (⚠️)'
            },
            {
              old: 'Backup safety',
              new: 'Automatic (✅)::User responsibility (⚠️)'
            },
            {
              old: 'Attack surface',
              new: 'Large (millions of users)::Small (individual)'
            },
            {
              old: 'Privacy',
              new: 'Trust required::Complete control'
            },
            {
              old: 'Password recovery',
              new: 'Limited options::Impossible'
            },
            {
              old: 'Cost',
              new: 'Subscription ($2-5/month)::Free'
            },
            {
              old: 'Technical expertise',
              new: 'Minimal::Moderate to high'
            }
          ]}
        />
      </Section>

      <Section id="verdict">
        <H2>The Verdict: Which Should You Choose?</H2>
        
        <H3>Choose Cloud (Bitwarden/1Password) If:</H3>
        <ul>
          <li>You use multiple devices (Phone + Laptop + Tablet)</li>
          <li>You want to share passwords with family or coworkers</li>
          <li>You are worried about losing your database backup</li>
          <li>You value convenience and user experience</li>
          <li>You are not a high-profile target</li>
        </ul>

        <CalloutBox type="success" title="Recommendation for Most Users">
          <p>
            The risk of a cloud breach is lower than the risk of you managing your own security poorly. 
            Cloud managers ensure you actually <em>use</em> complex passwords everywhere.
          </p>
        </CalloutBox>

        <H3>Choose Local (KeePass) If:</H3>
        <ul>
          <li>You are a high-value target (Journalist, Activist, Crypto Whale, Political Dissident)</li>
          <li>You are technical enough to manage your own rigorous backup strategy</li>
          <li>You strictly do not trust third-party servers</li>
          <li>You work in an environment with air-gapped systems</li>
          <li>Your threat model includes state-level adversaries</li>
        </ul>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Can cloud employees see my passwords?</H3>
        <p>
          No. Reputable managers use <strong>Zero Knowledge Architecture</strong>. Your data is encrypted 
          <em>on your device</em> before it is sent to the cloud. They host the blob, but they don't have the key.
        </p>

        <H3>What happens if I lose my Master Password?</H3>
        <p>
          For local managers, your data is gone forever. For cloud managers, it depends—some have recovery kits, 
          but generally, there is no "Password Reset" button because they don't know your password.
        </p>

        <H3>Is syncing my database via Dropbox safe?</H3>
        <p>
          Yes, provided your database file has a strong Master Password. Even if Dropbox is hacked, the attacker 
          only gets an encrypted blob they can't read.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Final Recommendations</H2>
        
        <p>
          The "best" password manager is the one you actually use. Whether you go Cloud or Local, 
          moving away from reusing <code>Password123</code> is the victory.
        </p>

        <CalloutBox type="tip" title="Hybrid Approach">
          <p>
            Some users adopt a hybrid model: cloud manager for everyday accounts, local encrypted database 
            for highest-value credentials (banking, cryptocurrency wallets). This balances convenience with 
            maximum security for critical accounts.
          </p>
        </CalloutBox>

        <p>
          Need strong passwords for your chosen manager? Use our <Link href="/">Password Generator</Link> to 
          create cryptographically secure credentials that work with any system.
        </p>
      </Section>
    </StandardGuide>
  )
}
