import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  StatBox
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function PCIDSSPasswordRequirementsGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="PCI DSS Password Requirements: The 2025 Compliance Checklist"
        subtitle="Stop guessing with auditors. Here is the plain-English checklist for PCI DSS v4.0 password requirements, including the new rules on 12-character minimums and the death of mandatory rotation."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What are the PCI DSS v4.0 password requirements for 2025?">
        PCI DSS v4.0 requires 12-character minimum passwords with numeric and alphabetic characters. Multi-factor authentication is mandatory for all CDE access. Account lockout after 10 failed attempts, 15-minute session timeout, and 90-day password changes are required unless using risk-based authentication and MFA.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The 2025 PCI DSS Revolution</H2>
        
        <p>
          Let's be honest: nobody wakes up in the morning excited to read compliance documentation. If you handle credit 
          card data, the phrase "PCI Audit" probably spikes your heart rate just a little bit.
        </p>

        <p>
          But here is the reality: The <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong> isn't just 
          red tape designed to annoy you. It is the only thing standing between your customers' bank accounts and the dark web.
        </p>

        <p>
          With the full enforcement of <strong>PCI DSS v4.0</strong> hitting in March 2025, the rules have shifted 
          significantly. The old "7-character password changed every 90 days" rulebook is out. A smarter, tougher, and 
          frankly <em>better</em> set of standards is in.
        </p>

        <CalloutBox type="danger" title="Deadline Alert">
          <p>
            PCI DSS v4.0 became fully effective as of <strong>March 31, 2025</strong>. If your systems are still running 
            on the old v3.2.1 playbook, you are officially out of compliance.
          </p>
        </CalloutBox>

        <StatBox
          value="$100K"
          label="maximum monthly fine for PCI non-compliance"
          source="Payment card brands (Visa, Mastercard)"
          trend="Plus loss of card processing privileges"
          icon="⚠️"
        />
      </Section>

      <Section id="why-v4-matters">
        <H2>Why PCI DSS v4.0 Changes Everything</H2>
        
        <p>
          For years, PCI standards felt a bit stuck in 2010. They mandated short passwords and forced rotations—practices 
          that modern security experts (and NIST) have long argued actually <em>weaken</em> security by causing user fatigue.
        </p>

        <p>
          Version 4.0 is a massive modernization update. It shifts the focus from "ticking boxes" to "continuous security."
        </p>

        <H3>The Big Wins for IT Teams:</H3>
        <ul>
          <li><strong>Flexibility:</strong> You finally have options to stop forcing 90-day password resets (if you do it right)</li>
          <li><strong>Realism:</strong> The requirements acknowledge that length beats complexity</li>
          <li><strong>Zero Trust:</strong> It assumes bad actors are already trying to get in, hence the heavier focus on Multi-Factor Authentication (MFA)</li>
        </ul>
      </Section>

      <Section id="checklist">
        <H2>The 2025 Password Checklist</H2>
        
        <p>
          If you are building an authentication system or configuring your Active Directory, here are the hard numbers you 
          need to hit for any account that can access the Cardholder Data Environment (CDE).
        </p>

        <H3>1. Length is King (Requirement 8.3.6)</H3>
        <p>
          The old 7-character minimum is gone.
        </p>
        <ul>
          <li><strong>New Rule:</strong> Passwords must be a minimum of <strong>12 characters</strong></li>
          <li><strong>Exceptions:</strong> If your legacy hardware physically cannot support 12 characters, you must have 
          documented mitigating controls (like aggressive lockout policies)</li>
        </ul>

        <H3>2. Composition (Requirement 8.3.6)</H3>
        <p>
          You cannot just use "passwordpassword".
        </p>
        <ul>
          <li><strong>Rule:</strong> Passwords must contain both <strong>numeric</strong> and <strong>alphabetic</strong> characters</li>
          <li><strong>Note:</strong> Unlike some older standards, PCI doesn't strictly mandate special symbols (<code>$#@</code>), 
          but they are encouraged to increase entropy</li>
        </ul>

        <H3>3. Failed Login Lockouts (Requirement 8.3.4)</H3>
        <p>
          You must stop brute-force attacks at the door.
        </p>
        <ul>
          <li><strong>Rule:</strong> The account must lock out after <strong>not more than 10 invalid attempts</strong></li>
          <li><strong>Duration:</strong> The lockout must last for at least <strong>30 minutes</strong> or until an admin 
          manually unlocks it</li>
        </ul>

        <H3>4. Idle Session Timeouts (Requirement 8.2.8)</H3>
        <ul>
          <li><strong>Rule:</strong> If a user walks away, the session must terminate after <strong>15 minutes</strong> of 
          inactivity. Users must re-authenticate to get back in</li>
        </ul>

        <CalloutBox type="tip" title="Quick Tips">
          <ul>
            <li>Don't rely on client-side validation alone. Enforce length and complexity on your backend API</li>
            <li>Use a passphrase policy (e.g., "correct horse battery staple") to make 12+ characters easy to remember</li>
            <li>Check your service accounts! They often slip under the radar but must comply with these rules too</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="password-rotation">
        <H2>The Death of 90-Day Rotation</H2>
        
        <p>
          This is the part everyone asks about. <strong>"Do I still have to force my employees to change their passwords 
          every 3 months?"</strong>
        </p>

        <p>
          Under PCI DSS v4.0, the answer is: <strong>It depends.</strong>
        </p>

        <H3>The Old Way (Requirement 8.3.9)</H3>
        <p>
          If strictly following the traditional approach, yes:
        </p>
        <ul>
          <li>Passwords/passphrases must be changed at least once every <strong>90 days</strong></li>
          <li>You cannot reuse the last <strong>4 passwords</strong></li>
        </ul>

        <H3>The New Way (Targeted Risk Analysis)</H3>
        <p>
          PCI v4.0 introduces a "Customized Approach." If you can prove you are following NIST guidelines (specifically 
          SP 800-63B), you can ditch the 90-day rotation.
        </p>

        <p>
          <strong>To qualify for this, you typically need:</strong>
        </p>
        <ol>
          <li><strong>Strong MFA</strong> on all access points</li>
          <li><strong>Breach Screening:</strong> Automated checks against known compromised password lists (like <em>Have I Been Pwned</em>)</li>
          <li><strong>Threat Detection:</strong> Real-time monitoring for anomalous login behavior</li>
        </ol>

        <CalloutBox type="success" title="Key Takeaway">
          <p>
            If you implement robust MFA and breach screening, you can likely retire the hated 90-day password reset policy. 
            Consult your QSA (Qualified Security Assessor) before making this change.
          </p>
        </CalloutBox>
      </Section>

      <Section id="mfa">
        <H2>Multi-Factor Authentication is Non-Negotiable</H2>
        
        <p>
          If there is one headline feature of PCI DSS v4.0, it is the aggressive expansion of Multi-Factor Authentication 
          (Requirement 8.4).
        </p>

        <p>
          In the past, you could sometimes get away with single-factor auth for internal network access. 
          <strong>Those days are over.</strong>
        </p>

        <H3>The New Rules:</H3>
        <ol>
          <li>
            <strong>Everyone, Everywhere:</strong> MFA is required for <strong>all access</strong> into the CDE 
            (Cardholder Data Environment). It doesn't matter if you are in the office, on a VPN, or an administrator
          </li>
          <li>
            <strong>No Bypass:</strong> You cannot have a "break glass" account that bypasses MFA unless it is a specific, 
            documented emergency procedure
          </li>
          <li>
            <strong>Re-Authentication:</strong> If an admin accesses the CDE, they must re-authenticate with MFA, even if 
            they already logged into the corporate network
          </li>
        </ol>

        <StatBox
          value="99.9%"
          label="of automated attacks blocked by MFA"
          source="Microsoft Security Report, 2024"
          trend="MFA is the most effective control"
          icon="🔒"
        />
      </Section>

      <Section id="service-accounts">
        <H2>Service Accounts and Application Keys</H2>
        
        <p>
          Auditors love to catch companies on "hard-coded credentials." Requirement 8.6 specifically targets accounts used 
          by applications (not humans).
        </p>

        <ul>
          <li><strong>No Hard Coding:</strong> Never store passwords in source code or plain text config files. Use a 
          secrets manager (like AWS Secrets Manager, HashiCorp Vault, or Azure Key Vault)</li>
          <li><strong>Rotation:</strong> While human passwords might not rotate, application keys <em>should</em>. Automate 
          the rotation of these keys periodically</li>
          <li><strong>Complexity:</strong> Service account passwords should be 25+ characters long and random, as humans 
          don't need to type them</li>
        </ul>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>What is the minimum password length for PCI DSS v4.0?</H3>
        <p>
          The new standard requires a minimum of 12 characters (up from 7) and must contain both numeric and alphabetic 
          characters.
        </p>

        <H3>Do we still have to force users to change passwords every 90 days?</H3>
        <p>
          Not necessarily. Under v4.0, if you implement strong MFA and real-time threat detection (NIST guidance), you can 
          opt out of mandatory rotation.
        </p>

        <H3>Does this apply to small businesses?</H3>
        <p>
          Yes. If you accept, process, store, or transmit credit card data, regardless of size, these password requirements 
          apply to your environment.
        </p>

        <H3>Can we use SMS for MFA?</H3>
        <p>
          Technically, yes, PCI DSS allows SMS (text message) MFA. However, security experts strongly advise against it due 
          to SIM swapping attacks. Authenticator apps (TOTP) or hardware keys (YubiKey) are significantly safer and preferred 
          by auditors.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          Compliance can feel like a chore, but PCI DSS v4.0 is actually pushing the industry in the right direction. By 
          moving to <strong>12-character minimums</strong>, adopting <strong>MFA everywhere</strong>, and moving away from 
          <strong>arbitrary rotation</strong>, we aren't just checking boxes—we are making our systems genuinely harder to hack.
        </p>

        <CalloutBox type="warning" title="Action Required">
          <p>
            Start your audit today. Check your Active Directory settings, update your password validation logic, and turn 
            on MFA. The March 2025 deadline has passed—you need to be compliant now.
          </p>
        </CalloutBox>

        <p>
          Need PCI-compliant passwords? Use our <Link href="/">Password Generator</Link> to create 12+ character credentials 
          that meet all regulatory requirements.
        </p>
      </Section>
    </StandardGuide>
  )
}
