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
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function SOC2AccessControlGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="SOC 2 Type II: The Definitive Guide to Access Control & Auth"
        subtitle="Preparing for a SOC 2 audit? Learn exactly what auditors look for in Access Control (CC6) and Logical Access (CC6.1), from onboarding checklists to quarterly access reviews."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What are SOC 2 access control requirements?">
        SOC 2 requires documented access control policies, quarterly access reviews, immediate offboarding (within 24 hours), MFA for production systems, password policies (8-12 char minimum), encrypted data at rest and in transit, and separation of duties. Evidence through screenshots, logs, and tickets is critical.
      </AnswerBlock>

      <Section id="introduction">
        <H2>SOC 2: The Enterprise Requirement</H2>
        
        <p>
          If you are a B2B SaaS company selling to enterprise customers, <strong>SOC 2 Type II</strong> is not optional—it 
          is the table stakes for doing business. It is the badge of honor that proves you aren't just "moving fast and 
          breaking things" with their sensitive data.
        </p>

        <p>
          But staring at the AICPA Trust Services Criteria (TSC) can feel like reading hieroglyphics.
        </p>

        <p>
          Specifically, <strong>Common Criteria 6 (CC6): Logical and Physical Access Controls</strong> is where most 
          engineering teams stumble. It requires you to prove—with evidence—that only the right people have access to your 
          systems, and that you can kick them out instantly when they leave.
        </p>

        <CalloutBox type="info" title="SOC 2 vs. HIPAA/PCI">
          <p>
            Unlike HIPAA (federal law) or PCI (industry mandate), SOC 2 is a voluntary audit report. However, for SaaS 
            vendors, it is effectively mandatory to close deals with large clients.
          </p>
        </CalloutBox>
      </Section>

      <Section id="tsc-auth">
        <H2>The Trust Services Criteria for Auth</H2>
        
        <p>
          SOC 2 covers five "Trust Principles," but <strong>Security</strong> is the only mandatory one. Within Security, 
          <strong>CC6</strong> deals with how you lock the front door.
        </p>

        <p>
          Your auditor will ask for screenshots, logs, and tickets proving you follow your own rules. "Trust, but verify" 
          is the name of the game.
        </p>

        <H3>Key Components of CC6:</H3>
        <ul>
          <li><strong>CC6.1:</strong> Logical access security measures</li>
          <li><strong>CC6.2:</strong> New user provisioning and authorization</li>
          <li><strong>CC6.3:</strong> User access modification and termination</li>
          <li><strong>CC6.6:</strong> Logical access policies and procedures</li>
          <li><strong>CC6.7:</strong> Restriction of access to data and system resources</li>
        </ul>
      </Section>

      <Section id="cc61">
        <H2>Logical Access (CC6.1): The Big Requirement</H2>
        
        <p>
          <strong>Criterion CC6.1:</strong> <em>"The entity implements logical access security software, infrastructure, 
          and architectures over protected information assets to protect them from security events to the extent commensurate 
          with the entity's objectives."</em>
        </p>

        <p>
          Translation: <strong>Do you have a password policy, and does it actually work?</strong>
        </p>

        <H3>The Password Policy Checklist for SOC 2</H3>
        <p>
          To satisfy CC6.1, your policy usually needs:
        </p>

        <ol>
          <li><strong>Minimum Length:</strong> 8 chars is the floor; 12+ is preferred</li>
          <li><strong>Complexity:</strong> Complexity rules are fading (thanks to NIST), but you need to justify your choice</li>
          <li><strong>MFA:</strong> Mandatory for accessing the production environment (AWS/GCP/Azure) and source code (GitHub/GitLab)</li>
          <li><strong>Encryption:</strong> Data at rest (databases) and in transit (TLS 1.2+) must be encrypted</li>
        </ol>

        <CalloutBox type="success" title="Evidence is Everything">
          <p>
            For SOC 2, <strong>evidence is everything</strong>. Configuring a password policy isn't enough; you need a 
            screenshot of the AWS IAM configuration page showing the policy is active.
          </p>
        </CalloutBox>
      </Section>

      <Section id="quarterly-review">
        <H2>The Quarterly Access Review Ritual</H2>
        
        <p>
          This is the most tedious part of SOC 2 compliance, but it's critical.
        </p>

        <p>
          <strong>Requirement:</strong> You must periodically review who has access to what.<br/>
          <strong>Frequency:</strong> Typically <strong>Quarterly</strong>.
        </p>

        <H3>How to do it:</H3>
        <ol>
          <li><strong>Export a list</strong> of all users from your critical systems (Cloud Provider, Database, GitHub, Admin Panel)</li>
          <li><strong>The Meeting:</strong> The CTO or Security Lead reviews the list line-by-line</li>
          <li><strong>Action:</strong> Remove anyone who changed roles or doesn't need access anymore</li>
          <li><strong>Evidence:</strong> Save the spreadsheet, the meeting notes, and the Jira tickets for any removals. 
          The auditor <em>will</em> ask for "Q3 2024 Access Review evidence"</li>
        </ol>

        <CalloutBox type="warning" title="Don't Skip Quarters">
          <p>
            If you miss a quarter, auditors may issue a finding. Set recurring calendar reminders and treat this like a 
            board meeting—non-negotiable.
          </p>
        </CalloutBox>
      </Section>

      <Section id="offboarding">
        <H2>Offboarding: The Auditor's Favorite Trap</H2>
        
        <p>
          The easiest way to get a "finding" (a black mark) on your report is messy offboarding.
        </p>

        <p>
          <strong>Scenario:</strong> An employee leaves on Friday. HR knows. But their AWS access isn't revoked until Tuesday.
        </p>

        <p>
          <strong>The Result:</strong> Exception noted in your report.
        </p>

        <H3>The 24-Hour Rule</H3>
        <p>
          Most auditors expect access to be revoked within <strong>24 hours</strong> (or 1 business day) of termination.
        </p>

        <CalloutBox type="tip" title="Best Practice: Automate Offboarding">
          <p>
            Automate this via an Identity Provider (IdP) like Okta or Rippling. When HR terminates a user in the directory, 
            they instantly lose access to AWS, Slack, GitHub, and Jira simultaneously.
          </p>
        </CalloutBox>

        <H3>Quick Tips:</H3>
        <ul>
          <li>Implement <strong>Single Sign-On (SSO)</strong>. It reduces your attack surface to one set of credentials per 
          user and makes offboarding instant</li>
          <li>Use "Role-Based Access Control" (RBAC). Give permissions to the "Senior Engineer" role, not to "Dave". When 
          Dave leaves, the role stays secure</li>
          <li>Document "Exceptions". If someone needs temporary admin access, log the approval and the revocation</li>
        </ul>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>What is the difference between Type I and Type II?</H3>
        <p>
          Type I is a snapshot in time (design of controls). Type II tests effectiveness over a period (usually 6-12 months). 
          Type II is what enterprise customers want.
        </p>

        <H3>Do we need SSO for SOC 2?</H3>
        <p>
          Not strictly required, but highly recommended. SSO makes provisioning and deprovisioning much easier to evidence.
        </p>

        <H3>How often should we review access?</H3>
        <p>
          Quarterly is the standard best practice. You must document who reviewed it, when, and what changes were made.
        </p>

        <H3>Can developers have access to Production data?</H3>
        <p>
          Ideally, <strong>no</strong>. SOC 2 pushes for "Separation of Duties." Developers write code; CI/CD pipelines 
          deploy it. If a dev needs to debug Prod, they should use temporary, audited access credentials.
        </p>

        <H3>Do we need to background check employees?</H3>
        <p>
          Yes (CC1.1). Part of access control is knowing <em>who</em> you are giving keys to. Background checks are a 
          standard control auditors look for before access is granted.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          SOC 2 Type II is a marathon, not a sprint. It forces you to mature your processes.
        </p>

        <p>
          By implementing <strong>MFA everywhere</strong>, automating <strong>offboarding</strong>, and rigorously performing 
          your <strong>Quarterly Access Reviews</strong>, you turn access control from a chaotic mess into a well-oiled 
          machine. And that doesn't just get you a compliance badge—it builds a company that large enterprises can trust.
        </p>

        <CalloutBox type="success" title="Get Audit-Ready">
          <p>
            Need SOC 2-compliant passwords? Use our <Link href="/">Password Generator</Link> to create credentials that 
            meet enterprise security requirements.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
