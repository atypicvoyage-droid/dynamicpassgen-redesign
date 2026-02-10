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

export { generateMetadata } from './metadata'

export default function BrowserVsDedicatedGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Convenience vs. Control. Why your browser's built-in password manager might be the weak link in your security chain."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Is Chrome Password Manager safe?">
        Dedicated password managers (like 1Password or Bitwarden) use stronger encryption 
        (AES-256 with zero-knowledge architecture), offer cross-platform sync, and 
        provide advanced features like phishing protection and breach monitoring. 
        Browser managers are convenient but often lack robust auditing and can be compromised 
        if your device or Google account is breached.
      </AnswerBlock>

      <Section id="browser-risks">
        <H2>The Risks of Browser-Based Managers</H2>
        <p>
          Browsers are designed for browsing, not primarily for secret storage.
        </p>
        <H3>1. The "Logged In" Vulnerability</H3>
        <p>
          If someone gains access to your unlocked computer and opens Chrome, they can often 
          view all your passwords simply by entering your device PIN.
        </p>
        <H3>2. Lack of Zero-Knowledge</H3>
        <p>
          Many browser sync features essentially store keys in the cloud associated with your account. 
          Dedicated managers encrypt locally before sending anything.
        </p>
      </Section>

      <Section id="dedicated-benefits">
        <H2>Why Dedicated Managers Win</H2>
        <ComparisonTable
          title="Feature Comparison"
          headers={['Chrome/Safari ⚠️', '1Password/Bitwarden ✅']}
          data={[
            {
              old: 'Encryption tied to OS/Account',
              new: 'AES-256-GCM + Secret Key'
            },
            {
              old: 'No "Secret Key" protection',
              new: 'Zero-knowledge architecture'
            },
            {
              old: 'Limited platform support',
              new: 'Works on everything (Linux, iOS, Windows)'
            },
            {
              old: 'Basic sharing features',
              new: 'Secure shared vaults & travel mode'
            }
          ]}
        />
      </Section>

      <Section id="recommendation">
        <H2>Our Recommendation</H2>
        <CalloutBox type="info" title="Who should use what?">
          <ul>
            <li><strong>Casual Users:</strong> iCloud Keychain/Chrome are better than reusing passwords.</li>
            <li><strong>Privacy Conscious / Business:</strong> Must use a dedicated manager (Bitwarden, 1Password).</li>
          </ul>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
