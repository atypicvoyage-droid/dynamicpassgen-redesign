import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox 
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function SharingGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Sharing isn't always caring. How to share credentials without compromising your entire organization."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Is it safe to share passwords?">
        Never share passwords via text, Slack, or email, as these create permanent, unencrypted 
        records. If sharing is necessary (e.g., team accounts), use a password manager's 
        "Secure Share" feature or a shared vault, which encrypts the credential and allows 
        access revocation.
      </AnswerBlock>

      <Section id="risks">
        <H2>The Hidden Dangers</H2>
        <ul>
          <li><strong>No Audit Trail:</strong> If 5 people share `marketing@company.com`, who tweeted that bad joke?</li>
          <li><strong>Offboarding Gaps:</strong> When Bob leaves, does he still know the Netflix password? (Yes).</li>
        </ul>
      </Section>

      <Section id="solutions">
        <H2>How to Share Properly</H2>
        <H3>1. Use Shared Vaults</H3>
        <p>
          Enterprise password managers (1Password, Keeper) allow "Collections" or "Vaults." 
          Users get access to the vault, not the raw password.
        </p>
        <H3>2. One-Time Links</H3>
        <p>
          Services like 1Password Psst or Bitwarden Send allow you to create a link that 
          burns after one view.
        </p>
        <CalloutBox type="success" title="Best Practice">
          <p>
            The best way to share a password is NOT to. Use SSO (Single Sign-On) or 
            delegate access via API keys whenever possible.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
