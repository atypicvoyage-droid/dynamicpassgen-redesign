import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function ISO27001Guide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Navigate the 2022 updates to ISO 27002. Focus on controls 5.15 through 5.18 for robust access control and authentication."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What are the new ISO 27001 access control requirements?">
        The ISO 27002:2022 update consolidated access controls into four key controls: 
        5.15 (Access Control), 5.16 (Identity Management), 5.17 (Authentication Information), 
        and 5.18 (Access Rights). The focus has shifted towards "least privilege," 
        stronger authentication (MFA), and dynamic access management.
      </AnswerBlock>

      <Section id="updates">
        <H2>Understanding the 2022 Updates</H2>
        <p>
          The 2013 version had 14 domains; 2022 simplified this to 4 themes. Access control 
          sits primarily within the <strong>People</strong> and <strong>Technological</strong> themes.
        </p>
        <H3>Control 5.17: Authentication Information</H3>
        <p>
          This control governs passwords. It explicitly requires the allocation and management 
          of secret authentication information.
        </p>
        <CalloutBox type="tip" title="Compliance Tip">
          <p>
            ISO 27001 doesn't specify password length (unlike PCI DSS), but it requires 
            you to define a policy based on risk. Aligning with NIST SP 800-63B is the 
            best way to satisfy this control.
          </p>
        </CalloutBox>
      </Section>

      <Section id="implementation">
        <H2>Implementation Checklist</H2>
        <ul>
          <li><strong>Document Access Policy (5.15):</strong> Define who can access what based on business requirements.</li>
          <li><strong>Lifecycle Management (5.16):</strong> Formal process for joiners, movers, and leavers (JML).</li>
          <li><strong>Review Rights (5.18):</strong> Conduct quarterly access reviews (recertification).</li>
        </ul>
      </Section>

      <Section id="audit-prep">
        <H2>Preparing for the Audit</H2>
        <p>Auditors will look for evidence. Use automated logs.</p>
        <CodeBlock
          language="json"
          filename="audit-log-sample.json"
          code={`{
  "event": "access_review",
  "reviewer": "manager@example.com",
  "target_user": "employee@example.com",
  "decision": "revoke",
  "reason": "Role change",
  "timestamp": "2026-02-10T10:00:00Z"
}`}
        />
      </Section>
    </StandardGuide>
  )
}
