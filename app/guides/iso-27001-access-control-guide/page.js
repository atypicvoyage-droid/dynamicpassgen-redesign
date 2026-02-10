import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  ComparisonTable,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function ISO27001Guide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The definitive technical guide to meeting ISO 27001:2022 Controls 5.15-5.18. Stop guessing what the auditor wants."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What are the ISO 27001 access control requirements?">
        The ISO 27001:2022 standard (Annex A) consolidates access control into four primary controls: 
        <strong>5.15 (Access Control)</strong> for establishing rules based on business requirements, 
        <strong>5.16 (Identity Management)</strong> for the full lifecycle of user identities, 
        <strong>5.17 (Authentication Information)</strong> for managing passwords/secrets, and 
        <strong>5.18 (Access Rights)</strong> for the provisioning and regular review of privileges. 
        Compliance requires documented policies, "least privilege" enforcement, and auditable logs of all access changes.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Shift to "Information Security Controls"</H2>
        <p>
          If you are still working off the 2013 standard (A.9), you are out of date. The 2022 update 
          simplified the structure but increased the rigor. The "User Access Management" domain is gone, 
          replaced by streamlined controls in the "People" and "Technological" themes.
        </p>
        <p>
          This guide focuses on the "Big 4" controls that cause the most non-conformities during audits.
        </p>
      </Section>

      <Section id="control-5-15">
        <H2>Control 5.15: Access Control</H2>
        <p>
          <strong>The Requirement:</strong> Rules to control physical and logical access to information and 
          information processing facilities shall be defined, implemented, and reviewed.
        </p>
        <H3>What Auditors Check</H3>
        <ul>
          <li><strong>Access Control Policy:</strong> A document stating "Who gets access to what?" based on business need.</li>
          <li><strong>Asset Ownership:</strong> Do you know who owns the "HR Database"? That owner must approve access.</li>
          <li><strong>Segregation of Duties:</strong> Ensure one person cannot request <em>and</em> approve access.</li>
        </ul>
      </Section>

      <Section id="control-5-16">
        <H2>Control 5.16: Identity Management</H2>
        <p>
          <strong>The Requirement:</strong> The full lifecycle of identities must be managed.
        </p>
        <H3>The JML Process (Joiners, Movers, Leavers)</H3>
        <p>
          You need a documented workflow for each stage.
        </p>
        <ul>
          <li><strong>Joiners:</strong> Accounts created only <em>after</em> background checks (if applicable) and contract signing.</li>
          <li><strong>Movers:</strong> When someone moves from Sales to IT, do they lose their Sales access? (They should).</li>
          <li><strong>Leavers:</strong> Access revoked <em>immediately</em> (often interpreted as within 24 hours or by end of business day).</li>
        </ul>
        <CalloutBox type="error" title="Common Non-Conformity">
          <p>
            "We forgot to disable the contractor's VPN access for 2 weeks after they left." 
            This is an automatic minor (or major) non-conformity. Automate this via SSO/SCIM.
          </p>
        </CalloutBox>
      </Section>

      <Section id="control-5-17">
        <H2>Control 5.17: Authentication Information</H2>
        <p>
          <strong>The Requirement:</strong> Allocation and management of secret authentication information (passwords, keys).
        </p>
        <H3>Your Password Policy Must Include:</H3>
        <ol>
          <li><strong>Minimum Strength:</strong> Align with NIST (8+ chars, screened against breaches).</li>
          <li><strong>Transmission:</strong> Passwords never sent in clear text (email/slack).</li>
          <li><strong>Initial Passwords:</strong> Must be forced to change on first login.</li>
          <li><strong>Storage:</strong> Hashed and salted (no plain text databases).</li>
        </ol>
        <CalloutBox type="tip" title="MFA is Implicitly Mandatory">
          <p>
            While 5.17 doesn't explicitly say "MFA," control <strong>5.15</strong> requires access rules based on risk. 
            In 2026, accessing cloud admin panels without MFA is considered an "unacceptable risk" by almost all auditors.
          </p>
        </CalloutBox>
      </Section>

      <Section id="control-5-18">
        <H2>Control 5.18: Access Rights</H2>
        <p>
          <strong>The Requirement:</strong> Access rights shall be provisioned, reviewed, modified, and removed.
        </p>
        <H3>The Access Review (Recertification)</H3>
        <p>
          This is the most tedious part of compliance. Quarterly or semi-annually, asset owners must review 
          everyone who has access to their system and sign off.
        </p>
        <ComparisonTable
          title="Access Review Maturity"
          headers={['Level 1 (Manual) ❌', 'Level 3 (Automated) ✅']}
          data={[
            {
              old: 'Spreadsheets sent via email',
              new: 'Automated IGA tool triggers'
            },
            {
              old: 'Rubber stamp "Approve All"',
              new: 'Granular entitlement review'
            },
            {
              old: 'No evidence trail',
              new: 'Timestamped approval logs'
            }
          ]}
        />
      </Section>

      <Section id="audit-evidence">
        <H2>The Evidence Checklist</H2>
        <p>
          When the auditor walks in, have these folders ready:
        </p>
        <CodeBlock
          language="text"
          filename="audit-folder-structure.txt"
          code={`/ISO-Evidence
  /5.15-Policy
    - Access_Control_Policy_v2.4.pdf
  /5.16-Lifecycle
    - Ticket_New_Hire_J_Doe.pdf (Showing approval & provisioning)
    - Ticket_Term_B_Smith.pdf (Showing revocation timestamp)
  /5.17-Auth
    - Password_Config_Screenshot_Okta.png
    - MFA_Enforcement_Report.csv
  /5.18-Reviews
    - Q1_2026_Access_Review_Completed.pdf
    - List_of_Revoked_Access_Q1.csv`}
        />
      </Section>
    </StandardGuide>
  )
}
