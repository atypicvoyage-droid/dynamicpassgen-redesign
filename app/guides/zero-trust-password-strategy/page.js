import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  StatBox,
  CodeBlock,
  ComparisonTable
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function ZeroTrustGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The perimeter is dead. Identity is the new firewall. A complete architectural roadmap for implementing Zero Trust in 2026."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Zero Trust Identity?">
        Zero Trust is a security model based on the principle "never trust, always verify." 
        Unlike traditional models that implicitly trust users inside the corporate network, 
        Zero Trust mandates continuous verification of every access request—authenticating 
        <strong>identity</strong>, checking <strong>device health</strong>, and validating 
        <strong>context</strong> (location, time) before granting "least privilege" access 
        to specific resources, regardless of where the request originates.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Death of the Castle-and-Moat</H2>
        <p>
          For decades, corporate security was like a castle: a strong perimeter firewall (the moat) 
          protected everything inside. Once you VPN'd in, you were trusted.
        </p>
        <p>
          Cloud computing, remote work, and mobile devices dried up the moat. Users are everywhere. 
          Apps are SaaS. Data is on 50 different servers. You cannot build a perimeter around the internet.
        </p>
        <StatBox
          value="74%"
          label="of all data breaches involve the human element (credentials)"
          source="Verizon DBIR, 2025"
          trend="Identity is the target"
          icon="🎯"
        />
      </Section>

      <Section id="pillars">
        <H2>The 5 Pillars of Zero Trust Identity</H2>
        
        <H3>1. Continuous Verification</H3>
        <p>
          Authentication isn't a one-time door. It's a hallway with sensors. Just because you logged in 
          at 9:00 AM doesn't mean you should still be trusted at 9:05 AM if your IP address suddenly 
          changes to North Korea.
        </p>

        <H3>2. Least Privilege Access</H3>
        <p>
          Users get access only to the specific apps they need, when they need them (JIT - Just In Time), 
          and not a single permission more.
        </p>

        <H3>3. Device Trust</H3>
        <p>
          Valid credentials on an infected laptop = a breach. Zero Trust checks the device: Is the OS patched? 
          Is the disk encrypted? Is EDR running? If no, access is denied <em>even with the correct password</em>.
        </p>

        <H3>4. Micro-Segmentation</H3>
        <p>
          If a user is breached, they can't move laterally. They are trapped in a tiny segment of the network.
        </p>

        <H3>5. Adaptive Policy</H3>
        <CodeBlock
          language="yaml"
          filename="conditional-access-policy.yaml"
          code={`# Example Adaptive Policy Logic
If User_Group == "Finance":
  AND Device_Status == "Compliant"
  AND Risk_Level == "Low"
  THEN Allow_Access

ElseIf User_Group == "Finance":
  AND Device_Status == "Unmanaged" (Personal Phone)
  THEN Allow_Web_Only (Block Downloads)

Else:
  Block_Access`}
        />
      </Section>

      <Section id="password-strategy">
        <H2>The Zero Trust Password Strategy</H2>
        <p>
          Passwords are the antithesis of Zero Trust (static, shared secrets). The goal is to kill them.
        </p>
        
        <H3>Phase 1: Strong Auth (Transitional)</H3>
        <ul>
          <li><strong>MFA Everywhere:</strong> No exceptions. Admins use hardware keys (YubiKey).</li>
          <li><strong>No Rotation:</strong> Stop 90-day resets. Focus on breach detection.</li>
          <li><strong>SSO:</strong> Centralize auth to one Identity Provider (IdP) like Okta or Entra ID.</li>
        </ul>

        <H3>Phase 2: Passwordless (Target)</H3>
        <ul>
          <li><strong>FIDO2 / Passkeys:</strong> Replace passwords with cryptographic proofs.</li>
          <li><strong>Certificate-Based Auth (CBA):</strong> Devices authenticate via machine certificates.</li>
          <li><strong>Biometrics:</strong> Windows Hello / Touch ID integration.</li>
        </ul>
      </Section>

      <Section id="roadmap">
        <H2>Implementation Roadmap (12 Months)</H2>
        <ComparisonTable
          title="Zero Trust Maturity Model"
          headers={['Stage', 'Focus', 'Key Technology']}
          data={[
            {
              old: 'Q1: Identity Consolidation',
              new: 'Connect all apps to SSO',
              extra: 'Okta / Azure AD'
            },
            {
              old: 'Q2: MFA Enforcement',
              new: 'Turn on MFA for 100% of users',
              extra: 'Authenticator Apps / Keys'
            },
            {
              old: 'Q3: Device Visibility',
              new: 'Enroll endpoints in MDM',
              extra: 'Intune / Jamf'
            },
            {
              old: 'Q4: Conditional Access',
              new: 'Block risky logins automatically',
              extra: 'Adaptive Policies'
            }
          ]}
        />
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        <p>
          Zero Trust isn't a product you buy; it's a strategy you execute. It starts with admitting that 
          <strong>identity is the new perimeter</strong>. Secure the user, secure the device, and the 
          network becomes irrelevant.
        </p>
      </Section>
    </StandardGuide>
  )
}
