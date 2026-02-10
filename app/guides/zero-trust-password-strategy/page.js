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
import Link from 'next/link'

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
          For decades, corporate security was like a medieval castle: a strong perimeter firewall (the moat) 
          protected everything inside. Once you VPN'd in, you were trusted. You could access the file server, 
          the database, the billing system—everything.
        </p>
        <p>
          Then the moat dried up. Cloud computing moved apps outside the firewall. Remote work scattered 
          employees across coffee shops and home offices. Mobile devices blurred the line between personal 
          and corporate. SaaS apps bypassed the VPN entirely.
        </p>
        <p>
          You cannot build a perimeter around the internet. You need a new model.
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
          Authentication isn't a door you walk through once. It's a hallway lined with sensors that constantly 
          check: Are you still you? Just because you logged in at 9:00 AM from New York doesn't mean we trust 
          you at 9:05 AM from Moscow.
        </p>
        <p>
          <strong>Implementation:</strong> User and Entity Behavior Analytics (UEBA) monitor for impossible travel, 
          unusual access patterns, and anomalous data downloads.
        </p>

        <H3>2. Least Privilege Access (JIT Provisioning)</H3>
        <p>
          Users get access to the <em>specific app</em> they need, <em>when</em> they need it, for <em>exactly</em> 
          the duration required. No permanent admin rights. No "just in case" access.
        </p>
        <p>
          <strong>Example:</strong> A developer requests production database access for 2 hours to debug an issue. 
          After approval, access is granted automatically and revoked at the end of the window.
        </p>

        <H3>3. Device Trust (Endpoint Verification)</H3>
        <p>
          Valid credentials on a compromised laptop = breach. Zero Trust checks the device before granting access:
        </p>
        <ul>
          <li>Is the OS patched to the latest version?</li>
          <li>Is the disk encrypted?</li>
          <li>Is EDR (Endpoint Detection & Response) running?</li>
          <li>Is the device managed by MDM?</li>
        </ul>
        <p>
          If the answer to any of these is "no," access is denied—even with the correct password and MFA.
        </p>

        <H3>4. Micro-Segmentation</H3>
        <p>
          If an attacker compromises one user, they shouldn't be able to move laterally across the network. 
          Micro-segmentation isolates workloads so that HR can't access Finance, and Finance can't access Engineering.
        </p>

        <H3>5. Adaptive Policy Engine</H3>
        <p>
          Access decisions are made dynamically based on real-time context:
        </p>
        <CodeBlock
          language="yaml"
          filename="conditional-access-policy.yaml"
          code={`# Example: Adaptive Policy for Finance Team
Policy:
  Name: "Finance_Access_Control"
  Conditions:
    - User.Group == "Finance"
    - Device.Compliance == "Compliant"
    - RiskLevel == "Low"
    - Location.Country IN ["US", "UK", "CA"]
  Actions:
    Allow:
      - Applications: ["SAP", "Salesforce", "Office365"]
      - DataExfiltration: Blocked

Policy:
  Name: "Finance_Risky_Scenario"
  Conditions:
    - User.Group == "Finance"
    - Device.Compliance == "Non-Compliant" OR
    - Location.Country NOT_IN ["US", "UK", "CA"]
  Actions:
    StepUpAuth: "Hardware_Key_Required"
    Allow:
      - Applications: ["Office365_WebOnly"]
    Block:
      - Applications: ["SAP", "Database_Access"]`}
        />
      </Section>

      <Section id="password-strategy">
        <H2>The Zero Trust Password Strategy</H2>
        <p>
          Passwords are the antithesis of Zero Trust. They are static, shared secrets that cannot verify 
          context or device health. The ultimate goal is to eliminate them.
        </p>
        
        <H3>Phase 1: Strong Auth (Transitional State)</H3>
        <p>
          While migrating to passwordless:
        </p>
        <ul>
          <li><strong>MFA Everywhere:</strong> No exceptions. Admins use hardware keys (YubiKey, Titan).</li>
          <li><strong>No Rotation:</strong> Stop 90-day password resets. Focus on breach detection instead.</li>
          <li><strong>SSO Consolidation:</strong> Centralize all authentication through one IdP (Okta, Entra ID).</li>
          <li><strong>Conditional Access:</strong> Block logins from impossible travel or anonymous proxies.</li>
        </ul>

        <H3>Phase 2: Passwordless (Target State)</H3>
        <ul>
          <li><strong>FIDO2 / Passkeys:</strong> Replace passwords with public-key cryptography.</li>
          <li><strong>Certificate-Based Auth (CBA):</strong> Devices authenticate via machine certificates.</li>
          <li><strong>Biometrics + TPM:</strong> Windows Hello, Touch ID bound to hardware.</li>
          <li><strong>Magic Links:</strong> Time-limited, single-use email links for low-risk apps.</li>
        </ul>
      </Section>

      <Section id="roadmap">
        <H2>Implementation Roadmap (12 Months)</H2>
        <ComparisonTable
          title="Zero Trust Maturity Model"
          headers={['Quarter', 'Milestone', 'Key Technologies']}
          data={[
            {
              old: 'Q1: Identity Consolidation',
              new: 'Connect 100% of apps to SSO',
              extra: 'Okta Universal Directory / Azure AD Connect'
            },
            {
              old: 'Q2: MFA Enforcement',
              new: 'Turn on MFA for all users + adaptive policies',
              extra: 'Authenticator Apps / Hardware Keys / Risk Scoring'
            },
            {
              old: 'Q3: Device Visibility',
              new: 'Enroll all endpoints in MDM + compliance checks',
              extra: 'Intune / Jamf / CrowdStrike'
            },
            {
              old: 'Q4: Conditional Access + Monitoring',
              new: 'Block risky logins + implement UEBA',
              extra: 'Conditional Access Policies / Splunk / Sentinel'
            }
          ]}
        />

        <H3>Budget Considerations</H3>
        <p>
          For a 500-employee company:
        </p>
        <ul>
          <li><strong>IdP License:</strong> $5-8/user/month (Okta, Azure AD P2)</li>
          <li><strong>MDM:</strong> $3-6/device/month (Intune, Jamf)</li>
          <li><strong>SIEM/UEBA:</strong> $50K-150K/year (Sentinel, Splunk)</li>
          <li><strong>Hardware Keys:</strong> $25-50/key (buy 2 per admin)</li>
        </ul>
        <p>
          <strong>Total:</strong> ~$80K-120K/year for full Zero Trust implementation.
        </p>
      </Section>

      <Section id="real-world">
        <H2>Real-World Case Study: Financial Services Firm</H2>
        <p>
          A mid-sized investment firm (300 employees) implemented Zero Trust after a near-breach in 2024. 
          An employee's laptop was infected with info-stealer malware while traveling.
        </p>
        <p>
          <strong>Before Zero Trust:</strong> The malware would have had access to the VPN and could move 
          laterally to customer databases.
        </p>
        <p>
          <strong>After Zero Trust:</strong> The infected laptop failed the device compliance check (EDR not reporting). 
          Access was automatically blocked. The security team was alerted. Incident contained within 15 minutes.
        </p>
        <p>
          <strong>Cost of breach avoided:</strong> Estimated $2.4M (regulatory fines + customer notification).
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion: Identity IS the Perimeter</H2>
        <p>
          Zero Trust isn't a product you buy; it's a strategy you execute over 12-24 months. It requires 
          cultural change ("trust but verify" → "never trust, always verify") and technical investment.
        </p>
        <p>
          But the payoff is clear: Reduce breach impact by 70-90%, enable secure remote work, and build 
          a foundation for cloud-native security.
        </p>
        <p>
          Start with identity. Lock down devices. Monitor everything. The network becomes irrelevant when 
          you secure the user.
        </p>
      </Section>
    </StandardGuide>
  )
}
