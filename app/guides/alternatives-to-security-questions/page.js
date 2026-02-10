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

export default function SecurityQuestionsAlternativesGuide() {
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

      <AnswerBlock question="Why are security questions insecure?">
        Security questions rely on static knowledge (maiden names, birthplaces) that is often publicly available through social media, data breaches, or public records. NIST explicitly advises against KBA for account recovery. Better alternatives include email magic links, SMS codes, backup recovery codes, and identity verification.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Illusion of Secret Questions</H2>
        
        <p>
          <em>"What is your mother's maiden name?"</em><br/>
          <em>"What was the name of your first pet?"</em><br/>
          <em>"What street did you grow up on?"</em>
        </p>

        <p>
          For 20 years, these questions were the gatekeepers to our digital lives. If you forgot your password, these 
          "secret" answers were your backup key.
        </p>

        <p>
          There is just one problem: <strong>None of this is a secret anymore.</strong>
        </p>

        <p>
          Thanks to social media, public record scrapers, and data breaches, hackers can answer these questions better 
          than you can. In 2025, relying on Security Questions (Knowledge-Based Authentication) is not a safety net—it 
          is a backdoor left wide open.
        </p>

        <CalloutBox type="danger" title="The Sarah Palin Hack">
          <p>
            In 2008, a hacker reset Sarah Palin's Yahoo email password simply by Googling her birthday, zip code, and 
            where she met her husband. No coding required. Just Google.
          </p>
        </CalloutBox>
      </Section>

      <Section id="shared-secrets-problem">
        <H2>The Problem with 'Shared Secrets'</H2>
        
        <p>
          Security questions rely on <strong>Static Knowledge</strong>. Unlike a password (which you can change), you 
          cannot change your mother's maiden name. Once that fact is leaked in a data breach (like the Equifax breach), 
          it is burned forever.
        </p>

        <p>
          Furthermore, the answers are <strong>Finite</strong>.
        </p>

        <p>
          <strong>Question:</strong> <em>"What is your favorite color?"</em><br/>
          <strong>Attack:</strong> Hacker writes a script to try the top 20 colors. They will crack it in seconds.
        </p>

        <CalloutBox type="warning" title="The Math Problem">
          <p>
            Most security questions have fewer than 100 possible answers. A computer can try all of them in under a minute. 
            Compare this to a random password which has trillions of combinations.
          </p>
        </CalloutBox>
      </Section>

      <Section id="osint-threat">
        <H2>Social Engineering & OSINT</H2>
        
        <p>
          <strong>Open Source Intelligence (OSINT)</strong> is the art of finding information about people from public sources.
        </p>

        <H3>Example Attack Vectors:</H3>
        
        <ul>
          <li>
            <strong>Question:</strong> "What is your high school mascot?"<br/>
            <strong>Attack:</strong> Hacker finds your LinkedIn profile → Finds your High School → Googles the mascot
          </li>
          <li>
            <strong>Question:</strong> "What is your pet's name?"<br/>
            <strong>Attack:</strong> Hacker scrolls your Instagram feed until they find a dog photo tagged "Happy birthday Buster!"
          </li>
          <li>
            <strong>Question:</strong> "Where were you born?"<br/>
            <strong>Attack:</strong> Public record databases (voter registrations, property records) list your birthplace
          </li>
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

        <CalloutBox type="info" title="NIST SP 800-63B">
          <p>
            <em>"Verifiers SHOULD NOT offer a mechanism to reset a memorized secret that requires the claimant to answer 
            knowledge-based questions."</em>
          </p>
        </CalloutBox>

        <p>
          Translation: <strong>Kill the security question.</strong>
        </p>

        <p>
          NIST isn't alone. The UK's National Cyber Security Centre (NCSC), Microsoft, and Google have all published 
          guidance recommending against KBA.
        </p>
      </Section>

      <Section id="better-alternatives">
        <H2>Better Alternatives for Recovery</H2>
        
        <p>
          If users forget their password, how do they get back in?
        </p>

        <H3>1. Email Magic Link</H3>
        <p>
          Send a time-limited, one-time link to their verified email address. Standard for most SaaS applications.
        </p>
        <ul>
          <li><strong>Pros:</strong> Simple, secure, works everywhere</li>
          <li><strong>Cons:</strong> Requires email access (protect your email!)</li>
        </ul>

        <H3>2. SMS / Authenticator Code</H3>
        <p>
          Send a 6-digit code to their verified device. "Prove you have your phone."
        </p>
        <ul>
          <li><strong>Pros:</strong> Fast, familiar to users</li>
          <li><strong>Cons:</strong> SMS vulnerable to SIM swapping</li>
        </ul>

        <H3>3. Backup Codes</H3>
        <p>
          Generate a printable list of recovery codes at signup (like Google and Apple do).
        </p>
        <ul>
          <li><strong>Pros:</strong> Works offline, phishing-proof</li>
          <li><strong>Cons:</strong> Users lose the paper</li>
        </ul>

        <H3>4. Identity Verification</H3>
        <p>
          For high-value accounts (Banking), require a photo of a Driver's License or a video selfie.
        </p>
        <ul>
          <li><strong>Pros:</strong> Extremely secure</li>
          <li><strong>Cons:</strong> Friction, privacy concerns</li>
        </ul>

        <CalloutBox type="success" title="Key Principle">
          <p>
            <strong>Recovery must be harder than Login.</strong> If resetting a password is easier than logging in, 
            attackers will always attack the reset process.
          </p>
        </CalloutBox>
      </Section>

      <Section id="legacy-workaround">
        <H2>If You MUST Use Them (Best Practices)</H2>
        
        <p>
          If you are stuck with a legacy system (like a utility bill or old bank) that demands security questions:
        </p>

        <H3>Treat them like passwords</H3>
        
        <ul>
          <li><strong>Question:</strong> "What is your father's middle name?"</li>
          <li><strong>Your Answer:</strong> <code>X7#m9$L2</code> (generated by your password manager)</li>
        </ul>

        <p>
          Do not give real answers. Store the fake answer in the "Notes" field of your Password Manager entry for that 
          site. This turns a weak security question into a strong secondary password.
        </p>

        <CalloutBox type="tip" title="The Fake Answer Strategy">
          <ul>
            <li>Generate a random 12-character string for each question</li>
            <li>Store it in your password manager alongside the password</li>
            <li>Never use real biographical information</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Why do banks still use security questions?</H3>
        <p>
          Legacy systems and inertia. Many banks run on mainframes code from the 90s. It is not a sign of good security; 
          it is a sign of technical debt.
        </p>

        <H3>Is a fake answer secure?</H3>
        <p>
          Yes. If the question is "What is your pet's name?" and you answer <code>Purple-Spaceship-7</code>, that is 
          secure because it acts like a secondary password.
        </p>

        <H3>What is KBA?</H3>
        <p>
          Knowledge-Based Authentication. It relies on the idea that only you know certain facts about your life. In the 
          age of social media, this premise is false.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          Your life story is not a password. It is a public record.
        </p>

        <p>
          As businesses, we need to stop asking these questions. As users, we need to stop answering them truthfully. 
          The era of Knowledge-Based Authentication is over; let it rest in peace.
        </p>

        <CalloutBox type="success" title="Take Action">
          <p>
            Replace security questions with modern recovery methods. Use our <Link href="/">Password Generator</Link> to 
            create fake answers for legacy systems that still require them.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
