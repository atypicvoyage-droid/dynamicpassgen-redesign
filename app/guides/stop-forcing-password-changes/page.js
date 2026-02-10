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

export default function StopForcingPasswordChangesGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Why Mandatory Password Expiration Is Dead (And Dangerous)"
        subtitle="Still forcing users to change their password every 90 days? You are actually making your organization less secure. Here is the science (and the NIST standards) explaining why rotation is dead."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Should I force users to change passwords regularly?">
        No. NIST SP 800-63B and Microsoft both recommend against mandatory periodic password changes. Users create weaker passwords when forced to change frequently (Password1, Password2) and write them down more often. Instead, use strong static passwords with MFA and event-based rotation only when compromise is detected.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Sticky Note Epidemic</H2>
        
        <p>
          Walk into almost any corporate office, and you will see it. The yellow sticky note under the keyboard. The 
          whiteboard with <code>Summer2024!</code> written in the corner.
        </p>

        <p>
          This isn't because employees are stupid. It's because IT policies are broken.
        </p>

        <p>
          For decades, "Mandatory Password Rotation" (forcing a change every 60 or 90 days) was the gold standard. It felt 
          proactive. It felt secure.
        </p>

        <p>
          But in 2025, security experts, NIST, and even Microsoft are screaming the same message: <strong>Stop doing it.</strong>
        </p>

        <StatBox
          value="300%"
          label="increase in users writing passwords down when forced to rotate"
          source="Carnegie Mellon Study, 2016"
          trend="More rotation = Less security"
          icon="📝"
        />
      </Section>

      <Section id="90-day-myth">
        <H2>The 90-Day Myth</H2>
        
        <p>
          The logic seemed sound: <em>If a hacker steals a password, it will only work for a few weeks.</em>
        </p>

        <p>
          The reality is different. Hackers don't sit on credentials for months. When they steal a password, they use it 
          <strong>immediately</strong> (often within minutes) to install malware, steal data, or create a new backdoor.
        </p>

        <p>
          By the time your 90-day window rolls around, the damage is already done. The "rotation" didn't stop the breach; 
          it just annoyed the user.
        </p>

        <CalloutBox type="danger" title="The Compromise Timeline">
          <ol>
            <li><strong>0:00:</strong> Hacker steals password via phishing</li>
            <li><strong>0:05:</strong> Hacker logs in and downloads sensitive data</li>
            <li><strong>0:10:</strong> Hacker creates backdoor admin account</li>
            <li><strong>89 days:</strong> Your forced rotation does nothing</li>
          </ol>
        </CalloutBox>
      </Section>

      <Section id="psychology">
        <H2>The Psychology of Password Fatigue</H2>
        
        <p>
          When you force a human to change a password they rely on, they don't pick a <em>new</em> random string. They 
          look for a pattern.
        </p>

        <H3>The Evolution of a Corporate Password:</H3>
        <ol>
          <li><code>Jan2024!</code></li>
          <li><code>Feb2024!</code></li>
          <li><code>Mar2024!</code></li>
        </ol>

        <p>
          If that fails:
        </p>
        <ol>
          <li><code>Password1</code></li>
          <li><code>Password2</code></li>
          <li><code>Password3</code></li>
        </ol>

        <p>
          Attackers know this. It is called a <strong>Transformation Attack</strong>. If they crack your January password, 
          their script automatically tries "Feb", "Mar", "2025", and "!" variations.
        </p>

        <CalloutBox type="warning" title="The Sticky Note Effect">
          <p>
            Research shows that mandatory rotation increases the likelihood of users writing passwords down by <strong>300%</strong>. 
            You are trading digital security for physical vulnerability.
          </p>
        </CalloutBox>
      </Section>

      <Section id="expert-guidance">
        <H2>What NIST and Microsoft Say</H2>
        
        <p>
          The organizations that define security have officially turned against rotation.
        </p>

        <H3>NIST (Special Publication 800-63B):</H3>
        <CalloutBox type="info" title="NIST Recommendation">
          <p>
            <em>"Verifiers SHOULD NOT require memorized secrets to be changed arbitrarily (e.g., periodically)."</em>
          </p>
        </CalloutBox>

        <H3>Microsoft Security Guidance:</H3>
        <CalloutBox type="info" title="Microsoft Official Position">
          <p>
            <em>"Mandatory password changes offer no defense against credential theft... If a password is never stolen, 
            there's no need to expire it. If you have evidence that a password has been stolen, you would presumably act 
            immediately rather than wait for expiration."</em>
          </p>
        </CalloutBox>

        <CalloutBox type="success" title="The New Standard">
          <p>
            <strong>Static, Strong, and Multi-Factored.</strong> A strong 20-character passphrase that never changes is 
            infinitely safer than a weak 8-character password that changes monthly.
          </p>
        </CalloutBox>
      </Section>

      <Section id="when-to-change">
        <H2>When Should You Force a Change?</H2>
        
        <p>
          NIST doesn't say "never change passwords". It says "don't change them <em>arbitrarily</em>".
        </p>

        <H3>You MUST force a reset if:</H3>
        <ol>
          <li>
            <strong>Evidence of Compromise:</strong> You see a login from an unusual country or device
          </li>
          <li>
            <strong>Data Breach:</strong> Your user's email appears in a "Have I Been Pwned" alert
          </li>
          <li>
            <strong>Phishing Report:</strong> The user reports they might have clicked a bad link
          </li>
          <li>
            <strong>Forgot Password:</strong> Obviously
          </li>
        </ol>

        <p>
          This is <strong>Event-Based Rotation</strong>, not Time-Based Rotation.
        </p>

        <CalloutBox type="tip" title="Smart Rotation Strategy">
          <ul>
            <li>Monitor login patterns for anomalies (impossible travel, new devices)</li>
            <li>Check passwords against breach databases automatically</li>
            <li>Force reset only when actual risk is detected</li>
            <li>Never force rotation on a calendar schedule</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="modern-alternative">
        <H2>The Modern Alternative: Threat Detection</H2>
        
        <p>
          If you stop rotating passwords, how do you stay safe?
        </p>

        <H3>1. MFA (Multi-Factor Authentication)</H3>
        <p>
          This is non-negotiable. Even if a password is stolen, it's useless without the second factor.
        </p>

        <H3>2. Ban Common Passwords</H3>
        <p>
          Use a "deny list" to prevent users from picking <code>Password123</code> or your company name.
        </p>

        <H3>3. Breach Screening</H3>
        <p>
          Automate checks against known leaked databases. If a user's password appears on the dark web, force a reset 
          <em>that second</em>.
        </p>

        <H3>4. Adaptive Authentication</H3>
        <p>
          Use behavioral analytics to detect unusual login patterns (new device, new location, unusual time).
        </p>

        <H3>5. Passwordless Options</H3>
        <p>
          Consider FIDO2/WebAuthn hardware keys or biometric authentication for high-value accounts.
        </p>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Does PCI DSS still require rotation?</H3>
        <p>
          Not strictly. PCI DSS v4.0 allows you to opt out of rotation if you implement strict MFA and risk analysis 
          controls (NIST guidance).
        </p>

        <H3>But isn't changing passwords safer?</H3>
        <p>
          Mathematically, yes. Psychologically, no. Users choose weaker passwords when they know they have to change them, 
          creating a net loss in security.
        </p>

        <H3>What if an employee leaves?</H3>
        <p>
          You should revoke their access (disable the account), not just reset the password. Immediate revocation is better 
          than waiting for a rotation cycle.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion: Kill the 90-Day Policy</H2>
        
        <p>
          Mandatory expiration is "Security Theater". It looks like work, but it doesn't add value.
        </p>

        <p>
          Be the hero your users need. Kill the 90-day policy. Replace it with a strict <strong>MFA requirement</strong> and 
          a <strong>Ban List</strong> for weak passwords. Your company will be more secure, and your helpdesk tickets for 
          "password resets" will drop to zero.
        </p>

        <CalloutBox type="success" title="Action Plan">
          <ol>
            <li>Remove mandatory 90-day rotation from your password policy</li>
            <li>Implement MFA on all critical systems</li>
            <li>Enable breach screening (Have I Been Pwned API)</li>
            <li>Ban common passwords and implement length requirements</li>
            <li>Monitor for suspicious login patterns</li>
          </ol>
        </CalloutBox>

        <p>
          Need to create strong static passwords that users can remember? Use our <Link href="/tools/passphrase-generator">Passphrase Generator</Link> 
          to create memorable 4-word passphrases that never need to change.
        </p>
      </Section>
    </StandardGuide>
  )
}
