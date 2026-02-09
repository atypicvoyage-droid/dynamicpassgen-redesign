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

export default function AlternativesToSecurityQuestionsGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="The End of Security Questions: Better Alternatives for Account Recovery"
        subtitle="Your mother's maiden name isn't a secret; it's public record. Learn why Knowledge-Based Authentication (KBA) is a security vulnerability and what NIST recommends using instead."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Why are security questions considered unsafe?">
        Security questions rely on static, publicly available information that can be easily discovered through social media, public records, or data breaches. NIST explicitly recommends against using knowledge-based authentication (KBA) for account recovery because these "secrets" are no longer secret in the age of social media and OSINT tools.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Problem with "Secret" Questions</H2>
        
        <p>
          <em>"What is your mother's maiden name?"</em><br />
          <em>"What was the name of your first pet?"</em><br />
          <em>"What street did you grow up on?"</em>
        </p>

        <p>
          For 20 years, these questions were the gatekeepers to our digital lives. If you forgot your password, 
          these "secret" answers were your backup key. There's just one problem: <strong>None of this is a secret anymore</strong>.
        </p>

        <p>
          Thanks to social media, public record scrapers, and data breaches, hackers can answer these questions 
          better than you can. In 2025, relying on Security Questions (Knowledge-Based Authentication) isn't a 
          safety net—it's a backdoor left wide open.
        </p>

        <CalloutBox type="warning" title="The Sarah Palin Hack">
          <p>
            In 2008, a hacker reset Sarah Palin's Yahoo email password simply by Googling her birthday, zip code, 
            and where she met her husband. No coding required. Just Google.
          </p>
        </CalloutBox>
      </Section>

      <Section id="shared-secrets">
        <H2>The Problem with "Shared Secrets"</H2>
        
        <p>
          Security questions rely on <strong>Static Knowledge</strong>. Unlike a password (which you can change), 
          you cannot change your mother's maiden name. Once that fact is leaked in a data breach (like the Equifax 
          breach), it's burned forever.
        </p>

        <p>
          Furthermore, the answers are <strong>Finite</strong>.<br />
          Question: <em>"What is your favorite color?"</em><br />
          Attacker: Writes a script to try the top 20 colors. They'll crack it in seconds.
        </p>
      </Section>

      <Section id="osint">
        <H2>Social Engineering & OSINT</H2>
        
        <p>
          <strong>Open Source Intelligence (OSINT)</strong> is the art of finding information about people from public sources.
        </p>

        <ul>
          <li><strong>Question:</strong> "What is your high school mascot?"<br />
              <strong>Attack:</strong> Hacker finds your LinkedIn profile → Finds your High School → Googles the mascot.</li>
          <li><strong>Question:</strong> "What is your pet's name?"<br />
              <strong>Attack:</strong> Hacker scrolls your Instagram feed until they find a dog photo tagged "Happy birthday Buster!"</li>
        </ul>

        <p>
          Attackers don't need to hack your computer. They just need to follow you on Facebook.
        </p>
      </Section>

      <Section id="nist-guidance">
        <H2>NIST Says: Stop Using Them</H2>
        
        <p>
          The National Institute of Standards and Technology (NIST) explicitly advises against using KBA for account recovery.
        </p>

        <CalloutBox type="danger" title="NIST SP 800-63B">
          <p>
            "Verifiers SHOULD NOT offer a mechanism to reset a memorized secret that requires the claimant to 
            answer knowledge-based questions."
          </p>
          <p>
            Translation: <strong>Kill the security question.</strong>
          </p>
        </CalloutBox>
      </Section>

      <Section id="alternatives">
        <H2>Better Alternatives for Recovery</H2>
        
        <p>
          If users forget their password, how do they get back in?
        </p>

        <H3>1. Email Magic Link</H3>
        <p>
          Send a time-limited, one-time link to their verified email address. This is the standard for most SaaS applications.
        </p>

        <H3>2. SMS / Authenticator Code</H3>
        <p>
          Send a 6-digit code to their verified device. "Prove you have your phone."
        </p>

        <H3>3. Backup Codes</H3>
        <p>
          Generate a printable list of recovery codes at signup (like Google and Apple do). Users store these securely offline.
        </p>

        <H3>4. Identity Verification</H3>
        <p>
          For high-value accounts (Banking), require a photo of a Driver's License or a video selfie.
        </p>

        <CalloutBox type="success" title="Security Principle">
          <p>
            <strong>Recovery must be harder than Login.</strong> If resetting a password is easier than logging in, 
            attackers will always attack the reset process.
          </p>
        </CalloutBox>
      </Section>

      <Section id="legacy-systems">
        <H2>If You MUST Use Them (Best Practices)</H2>
        
        <p>
          If you're stuck with a legacy system (like a utility bill or old bank) that demands them:
        </p>

        <CalloutBox type="tip" title="Treat Them Like Passwords">
          <ul>
            <li><strong>Question:</strong> "What is your father's middle name?"</li>
            <li><strong>Your Answer:</strong> <code>X7#m9$L2</code> (generated by your password manager)</li>
          </ul>
          <p>
            Do not give real answers. Store the fake answer in the "Notes" field of your Password Manager entry 
            for that site. This turns a weak security question into a strong secondary password.
          </p>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Why do banks still use security questions?</H3>
        <p>
          Legacy systems and inertia. Many banks run on mainframe code from the 90s. It's not a sign of good security; 
          it's a sign of technical debt.
        </p>

        <H3>Is a fake answer secure?</H3>
        <p>
          Yes. If the question is "What is your pet's name?" and you answer "Purple-Spaceship-7", that's secure 
          because it acts like a secondary password.
        </p>

        <H3>What is KBA?</H3>
        <p>
          Knowledge-Based Authentication. It relies on the idea that only you know certain facts about your life. 
          In the age of social media, this premise is false.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>The Bottom Line</H2>
        
        <p>
          Your life story is not a password. It's a public record.
        </p>

        <p>
          As businesses, we need to stop asking these questions. As users, we need to stop answering them truthfully. 
          The era of Knowledge-Based Authentication is over; let it rest in peace.
        </p>

        <p>
          <strong>Need a secure password manager to store recovery codes?</strong> Use our{' '}
          <Link href="/">Dynamic Password Generator</Link> with built-in entropy analysis.
        </p>
      </Section>
    </StandardGuide>
  )
}
