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

export default function ZeroTrustGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Never trust, always verify. Moving beyond the perimeter to identity-centric security."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Zero Trust Identity?">
        Zero Trust assumes no user or device is trustworthy by default, even if inside the network. 
        It requires continuous verification of identity, device health, and context 
        (location, time) for every access request, implementing "least privilege" access 
        dynamic policies rather than static passwords.
      </AnswerBlock>

      <Section id="pillars">
        <H2>The Pillars of Zero Trust Identity</H2>
        <ol>
          <li><strong>Continuous Verification:</strong> Auth doesn't stop at login.</li>
          <li><strong>Least Privilege:</strong> JIT (Just-in-Time) access.</li>
          <li><strong>Adaptive MFA:</strong> Step-up auth for risky actions.</li>
        </ol>
      </Section>

      <Section id="password-strategy">
        <H2>The Role of Passwords in Zero Trust</H2>
        <p>
          Ideally? None. Zero Trust pushes for <strong>passwordless</strong> (certs, FIDO2). 
          However, until fully migrated:
        </p>
        <CalloutBox type="info" title="Transitional Strategy">
          <ul>
            <li>Enforce MFA for ALL apps (no exceptions).</li>
            <li>Use Conditional Access (block login from unknown countries).</li>
            <li>Rotate credentials automatically using PAM (Privileged Access Management).</li>
          </ul>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
