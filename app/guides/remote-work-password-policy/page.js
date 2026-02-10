import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  CodeBlock,
  ComparisonTable
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function RemoteWorkGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The office is everywhere. Your security perimeter must be too. A blueprint for securing the hybrid workforce in 2026."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is a Remote Work Password Policy?">
        A modern Remote Work Password Policy moves beyond simple complexity rules to focus on 
        <strong>Identity Assurance</strong>. It mandates Multi-Factor Authentication (MFA) for 
        all remote access, enforces device health checks (Managed vs. BYOD) before login, 
        implements strict session timeouts, and prohibits the storage of corporate credentials 
        in personal browsers. It treats every remote connection as hostile until verified.
      </AnswerBlock>

      <Section id="new-reality">
        <H2>The "Starbucks" Threat Model</H2>
        <p>
          When your employee works from a coffee shop, they are on a hostile network. When they work 
          from home, they are on a network shared with their teenager's gaming PC (which is downloading mods).
        </p>
        <p>
          You cannot secure their network. You can only secure their <strong>Identity</strong> and their <strong>Endpoint</strong>.
        </p>
      </Section>

      <Section id="core-policies">
        <H2>Core Policy Requirements</H2>
        
        <H3>1. MFA is Non-Negotiable</H3>
        <p>
          Password alone = Breach. Remote access without MFA is negligence.
        </p>
        <ul>
          <li><strong>Best:</strong> FIDO2 Hardware Key (YubiKey) or Passkey.</li>
          <li><strong>Good:</strong> App push with "Number Matching" (prevents fatigue).</li>
          <li><strong>Banned:</strong> SMS / Voice OTP (SIM Swappable).</li>
        </ul>

        <H3>2. Split Tunneling vs ZTNA</H3>
        <p>
          Legacy VPNs backhaul all traffic. Modern ZTNA (Zero Trust Network Access) connects the user 
          <em>only</em> to the specific app they need, not the whole network.
        </p>

        <H3>3. The "Browser Separation" Rule</H3>
        <CalloutBox type="warning" title="Critical Risk">
          <p>
            Do not allow employees to save Work passwords in their Personal Chrome profile. 
            If their kid downloads malware on the home PC, your corporate credentials are exfiltrated.
          </p>
        </CalloutBox>
        <p>
          <strong>Policy:</strong> Use Enterprise Browser profiles (Managed Chrome) or enforce a dedicated 
          password manager extension that locks automatically.
        </p>
      </Section>

      <Section id="device-management">
        <H2>BYOD vs Corporate Owned (COPE)</H2>
        <ComparisonTable
          title="Access Levels by Device Type"
          headers={['Device Type', 'Security Control', 'Access Allowed']}
          data={[
            {
              old: 'Corporate Managed (MDM)',
              new: 'Full Encryption, EDR, Patching',
              extra: '✅ Full Network Access'
            },
            {
              old: 'Personal Mobile (BYOD)',
              new: 'App Container (Intune MAM)',
              extra: '⚠️ Email/Teams Only (No files)'
            },
            {
              old: 'Personal Laptop (Unmanaged)',
              new: 'No visibility',
              extra: '❌ Web Access Only (VDI) or Block'
            }
          ]}
        />
      </Section>

      <Section id="policy-template">
        <H2>Policy Template Snippet</H2>
        <CodeBlock
          language="text"
          filename="remote-access-policy.txt"
          code={`SECTION 4: AUTHENTICATION STANDARDS

4.1. All remote access requires MFA. No exceptions.
4.2. "Remember Me" sessions shall not exceed 12 hours.
4.3. Users must connect via company-approved ZTNA/VPN agents.
4.4. Corporate credentials must NOT be used for non-work sites.
4.5. Users must report lost/stolen devices within 1 hour.`}
        />
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        <p>
          Remote work is not a perk; it's an operating model. Your password policy must reflect that 
          the perimeter is gone. Secure the user, not the building.
        </p>
      </Section>
    </StandardGuide>
  )
}
