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
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function ISO27001Guide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The definitive technical guide to meeting ISO 27001:2022 Controls 5.15-5.18. Stop guessing what the auditor wants—here's exactly what they're looking for."
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
          simplified the structure from 14 domains to 4 themes but increased the rigor of requirements.
        </p>
        <p>
          The "User Access Management" domain is gone, replaced by streamlined controls in the 
          "People" and "Technological" themes. This guide focuses on the "Big 4" controls that 
          cause the most non-conformities during audits.
        </p>
      </Section>

      <Section id="control-5-15">
        <H2>Control 5.15: Access Control</H2>
        <p>
          <strong>The Requirement:</strong> Rules to control physical and logical access to information and 
          information processing facilities shall be defined, implemented, and reviewed based on business and security requirements.
        </p>
        <H3>What Auditors Check</H3>
        <ul>
          <li><strong>Access Control Policy:</strong> A documented policy stating "Who can access what, and under what conditions?"</li>
          <li><strong>Asset Ownership:</strong> Every system/database must have a designated owner who approves access.</li>
          <li><strong>Segregation of Duties (SoD):</strong> Ensure one person cannot request AND approve their own access.</li>
          <li><strong>Network Segmentation:</strong> Critical systems must be isolated from general networks.</li>
        </ul>

        <H3>Common Non-Conformities</H3>
        <CalloutBox type="error" title="Actual Audit Finding (2025)">
          <p>
            "The Access Control Policy was last updated in 2019 and does not reflect the current cloud 
            infrastructure. No evidence of annual policy review." — <strong>Minor Non-Conformity</strong>
          </p>
        </CalloutBox>
        <p>
          <strong>Fix:</strong> Review and update your Access Control Policy annually. Include cloud resources, 
          SaaS apps, and remote access in the scope.
        </p>
      </Section>

      <Section id="control-5-16">
        <H2>Control 5.16: Identity Management</H2>
        <p>
          <strong>The Requirement:</strong> The full lifecycle of identities shall be managed.
        </p>
        <H3>The JML Process (Joiners, Movers, Leavers)</H3>
        <p>
          This is the most scrutinized control. You need a documented, enforceable workflow:
        </p>
        
        <H3>Joiners</H3>
        <ul>
          <li>Accounts created <strong>only after</strong> background checks and contract signing</li>
          <li>Access granted based on role templates (no ad-hoc exceptions)</li>
          <li>Manager approval required before provisioning</li>
        </ul>

        <H3>Movers</H3>
        <ul>
          <li>When someone changes roles, old access is revoked within 24 hours</li>
          <li>New access follows the same approval process as Joiners</li>
          <li>Privilege escalation requires VP-level approval</li>
        </ul>

        <H3>Leavers</H3>
        <ul>
          <li>Access revoked immediately upon termination (or by end of business day)</li>
          <li>VPN, email, and SSO disabled first</li>
          <li>Physical access (badges, keys) returned and logged</li>
        </ul>

        <CalloutBox type="error" title="Critical Failure Example">
          <p>
            "We discovered that a contractor who left 6 months ago still had active VPN access. 
            No process existed to automatically disable accounts." — <strong>Major Non-Conformity</strong>
          </p>
        </CalloutBox>

        <H3>Automation is Mandatory</H3>
        <p>
          Manual processes fail. Use SCIM (System for Cross-domain Identity Management) with your IdP 
          (Okta, Azure AD) to auto-provision and de-provision accounts.
        </p>
      </Section>

      <Section id="control-5-17">
        <H2>Control 5.17: Authentication Information</H2>
        <p>
          <strong>The Requirement:</strong> Allocation and management of secret authentication information 
          shall be controlled through a management process.
        </p>
        <H3>Your Password Policy Must Include:</H3>
        <ol>
          <li>
            <strong>Minimum Strength:</strong> Align with NIST SP 800-63B (8+ chars, screened against breaches)
          </li>
          <li>
            <strong>Secure Transmission:</strong> Passwords never sent via clear text (email/Slack/SMS)
          </li>
          <li>
            <strong>Initial Passwords:</strong> Temporary passwords must be changed on first login
          </li>
          <li>
            <strong>Storage:</strong> Hashed with salt (bcrypt, Argon2). Never plain text or reversible encryption
          </li>
          <li>
            <strong>MFA:</strong> Multi-factor authentication for all privileged accounts (implied by control 5.15)
          </li>
        </ol>

        <H3>The MFA Debate</H3>
        <p>
          While 5.17 doesn't explicitly mandate MFA, auditors in 2026 universally interpret "adequate protection" 
          to require MFA for:
        </p>
        <ul>
          <li>Administrative/root accounts</li>
          <li>Remote access (VPN, RDP)</li>
          <li>Access to customer data</li>
          <li>Financial systems</li>
        </ul>
        <CalloutBox type="tip" title="Auditor Language">
          <p>
            When asked "Do we need MFA?", respond: "Control 5.15 requires access controls commensurate 
            with risk. For high-value systems, our risk assessment concluded that single-factor 
            authentication is insufficient." This is the language auditors want to hear.
          </p>
        </CalloutBox>
      </Section>

      <Section id="control-5-18">
        <H2>Control 5.18: Access Rights</H2>
        <p>
          <strong>The Requirement:</strong> Access rights to assets and associated facilities shall be 
          provisioned, reviewed, modified, and removed in accordance with the organization's access control policy.
        </p>
        
        <H3>The Access Review (Recertification)</H3>
        <p>
          This is the most tedious but critical part of compliance. Quarterly or semi-annually, 
          asset owners must review everyone who has access to their systems and certify that access is still appropriate.
        </p>

        <ComparisonTable
          title="Access Review Maturity Levels"
          headers={['Level 1 (Manual) ❌', 'Level 3 (Automated) ✅']}
          data={[
            {
              old: 'Spreadsheets sent via email',
              new: 'Automated IGA tool (SailPoint, Saviynt) triggers workflow'
            },
            {
              old: 'Managers rubber-stamp "Approve All"',
              new: 'Granular entitlement review with justification required'
            },
            {
              old: 'No evidence trail',
              new: 'Timestamped approval logs with digital signatures'
            },
            {
              old: 'Completed 2-3 months late',
              new: 'Auto-escalation if not completed within 2 weeks'
            }
          ]}
        />

        <H3>Evidence the Auditor Wants</H3>
        <ul>
          <li>Signed access review reports for the past 12 months</li>
          <li>Evidence of access revocations based on review findings</li>
          <li>Escalation records for overdue reviews</li>
          <li>Statistics: % of reviews completed on time</li>
        </ul>
      </Section>

      <Section id="audit-evidence">
        <H2>The Evidence Checklist</H2>
        <p>
          When the auditor arrives, have these folders ready:
        </p>
        <CodeBlock
          language="text"
          filename="audit-folder-structure.txt"
          code={`/ISO27001-Evidence/
  /5.15-Access-Control-Policy/
    - Access_Control_Policy_v2.4_Approved.pdf
    - Annual_Policy_Review_2025.pdf
    - Network_Segmentation_Diagram.pdf
  
  /5.16-Identity-Lifecycle/
    - JML_Procedure_v3.1.pdf
    - New_Hire_Ticket_Sample_John_Doe.pdf
    - Termination_Ticket_Sample_Bob_Smith.pdf
    - SCIM_Configuration_Screenshot.png
  
  /5.17-Authentication/
    - Password_Policy_v2.0.pdf
    - Okta_MFA_Enforcement_Report.csv
    - Password_Hashing_Code_Review.pdf
  
  /5.18-Access-Reviews/
    - Q1_2026_Access_Review_Completed.pdf
    - Q2_2026_Access_Review_In_Progress.xlsx
    - Revoked_Access_Log_Q1_2026.csv`}
        />
      </Section>

      <Section id="implementation">
        <H2>12-Week Implementation Roadmap</H2>
        <p>
          If you're starting from zero, here's the fastest path to compliance:
        </p>

        <H3>Weeks 1-2: Documentation</H3>
        <ul>
          <li>Draft Access Control Policy</li>
          <li>Document JML procedures</li>
          <li>Define asset owners</li>
        </ul>

        <H3>Weeks 3-6: Technical Implementation</H3>
        <ul>
          <li>Deploy SSO (Okta, Azure AD)</li>
          <li>Enable MFA for all users</li>
          <li>Implement SCIM for auto-provisioning</li>
          <li>Configure password policies (min length, breach screening)</li>
        </ul>

        <H3>Weeks 7-10: Access Review Process</H3>
        <ul>
          <li>Conduct first access review (manually if needed)</li>
          <li>Revoke identified unnecessary access</li>
          <li>Document the review process</li>
        </ul>

        <H3>Weeks 11-12: Audit Readiness</H3>
        <ul>
          <li>Collect all evidence into organized folders</li>
          <li>Run internal audit / gap assessment</li>
          <li>Fix any findings</li>
        </ul>
      </Section>

      <Section id="common-questions">
        <H2>Auditor FAQ</H2>
        
        <H3>Q: Do we need MFA for ALL users or just admins?</H3>
        <p>
          <strong>A:</strong> The standard doesn't specify. However, best practice (and most auditors' expectations) 
          is MFA for all remote access and privileged accounts. For office-based access to low-risk systems, 
          single-factor may be acceptable if your risk assessment documents it.
        </p>

        <H3>Q: How often must we conduct access reviews?</H3>
        <p>
          <strong>A:</strong> The standard says "at regular intervals." Industry norm is quarterly for high-risk 
          systems, semi-annually for standard systems, and annually for low-risk. Document your schedule in 
          the Access Control Policy.
        </p>

        <H3>Q: Can contractors share credentials?</H3>
        <p>
          <strong>A:</strong> No. Control 5.16 requires individual accounts for all users. Shared accounts are 
          only permitted for service accounts, and even those require justification and logging.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        <p>
          ISO 27001 compliance isn't about checking boxes—it's about building a sustainable security program. 
          The 2022 standard places heavy emphasis on access control because identity is the new perimeter.
        </p>
        <p>
          Get the fundamentals right (SSO, MFA, access reviews), document everything, and audit readiness 
          becomes a non-event.
        </p>
      </Section>
    </StandardGuide>
  )
}
