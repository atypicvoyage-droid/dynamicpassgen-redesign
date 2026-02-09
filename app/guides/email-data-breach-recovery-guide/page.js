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

export default function EmailDataBreachRecoveryGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="My Email Was In a Data Breach: 5 Immediate Steps to Take"
        subtitle="Don't panic. Just act. If your email appeared in a 'Have I Been Pwned' alert or a dark web scan, here's your step-by-step battle plan to lock down your identity."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What should I do if my email was found in a data breach?">
        Immediately change your password on the breached service and any account using the same password. Enable 2FA on critical accounts (email, banking), check for unauthorized access or forwarding rules, and consider freezing your credit if SSN/financial data was exposed. Act within hours, not days.
      </AnswerBlock>

      <Section id="introduction">
        <H2>Don't Panic—Act Now</H2>
        
        <p>
          It's a sinking feeling. You get an alert from Google, Apple, or your bank: <em>"Your password was found in a data breach."</em>
        </p>

        <p>
          Your mind races. <em>Is my bank account safe? Are they reading my emails? Who has my address?</em>
        </p>

        <p>
          First: <strong>Breathe.</strong> Millions of people are affected by breaches every year. It's manageable if you move fast.
        </p>

        <p>
          This guide is your emergency checklist. Stop reading other tabs. Follow these 5 steps right now.
        </p>

        <CalloutBox type="warning" title="Time is Critical">
          <p>
            Hackers use automated bots to test breached credentials within <strong>hours</strong> of a leak release. 
            Do not wait until the weekend. Do this now.
          </p>
        </CalloutBox>
      </Section>

      <Section id="step1">
        <H2>Step 1: Don't Panic, Verify</H2>
        
        <p>
          Confirm exactly <strong>what</strong> was stolen. Not all breaches are equal.
        </p>

        <p>
          Go to <strong>Have I Been Pwned</strong> (haveibeenpwned.com) and enter your email.
          It will tell you:
        </p>
        <ul>
          <li><strong>The Source:</strong> (e.g., LinkedIn, Adobe, Canva)</li>
          <li><strong>The Data:</strong> (e.g., Passwords, Physical Addresses, Phone Numbers)</li>
        </ul>

        <p>
          If it was just emails? Low risk (expect spam).<br />
          If it was passwords? <strong>High risk.</strong> Proceed immediately.
        </p>
      </Section>

      <Section id="step2">
        <H2>Step 2: The Password Triage</H2>
        
        <p>
          You need to change passwords, but you need to prioritize.
        </p>

        <H3>Priority 1: Your Email Account</H3>
        <p>
          This is "Patient Zero." If they get into your email, they can reset every other password you own. 
          Change this <strong>first</strong>. Make it strong and unique.
        </p>

        <H3>Priority 2: Financials</H3>
        <p>
          Banks, PayPal, Crypto, retirement funds.
        </p>

        <H3>Priority 3: Medical & Government</H3>
        <p>
          Healthcare portals, IRS/Tax sites.
        </p>

        <H3>Priority 4: Social Media</H3>
        <p>
          Facebook, Instagram, X (Twitter).
        </p>

        <CalloutBox type="danger" title="Critical Rule">
          <p>
            <strong>Do not reuse the old password.</strong> Even adding a "1" at the end is dangerous. Use a password 
            manager to generate a completely new, random string.
          </p>
        </CalloutBox>
      </Section>

      <Section id="step3">
        <H2>Step 3: Enable 2FA Everywhere</H2>
        
        <p>
          If your password was stolen, 2-Factor Authentication (2FA) saves you. Even if the hacker has your password, 
          they can't login without the code on your phone.
        </p>

        <p>
          Turn it on for <strong>Email</strong> and <strong>Banking</strong> immediately. Use an app like <strong>Authy</strong> or 
          <strong>Google Authenticator</strong>, not SMS if you can avoid it.
        </p>
      </Section>

      <Section id="step4">
        <H2>Step 4: Check for Backdoors</H2>
        
        <p>
          Hackers sometimes login, add a "backdoor," and leave quietly. They want to ensure they can get back in even 
          after you change your password.
        </p>

        <H3>Check these settings:</H3>
        
        <ul>
          <li><strong>Email Forwarding:</strong> Did they set up a rule to forward all your emails to <code>hacker@gmail.com</code>? 
              Check your email settings → "Forwarding and POP/IMAP"</li>
          <li><strong>Authorized Devices:</strong> Look for "Logged in devices." Do you see a Windows PC in Russia or an iPhone 
              in Nigeria? <strong>Log them out.</strong></li>
          <li><strong>Recovery Info:</strong> Did they change the backup phone number or recovery email to <em>theirs</em>?</li>
        </ul>
      </Section>

      <Section id="step5">
        <H2>Step 5: Freeze Your Credit</H2>
        
        <p>
          If the breach included <strong>Social Security Numbers (SSN)</strong> or detailed personal info (like the Equifax breach), 
          changing passwords isn't enough. They can steal your identity.
        </p>

        <p>
          Go to the three major bureaus (Equifax, Experian, TransUnion) and <strong>Freeze Your Credit</strong>.
        </p>

        <ul>
          <li>It's free</li>
          <li>It stops anyone (including you) from opening new credit cards or loans</li>
          <li>You can temporarily "unfreeze" it if you need to buy a car or house</li>
        </ul>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>What does it mean if my email was "pwned"?</H3>
        <p>
          It means your email address (and likely password) was found in a database stolen from a company you use. 
          It doesn't necessarily mean your email account <em>itself</em> was hacked, but the credentials are compromised.
        </p>

        <H3>Should I delete my email account?</H3>
        <p>
          Usually no. Recovering and securing the account is better. Deleting it causes massive disruption and doesn't 
          remove your data from the dark web.
        </p>

        <H3>Can I remove my info from the dark web?</H3>
        <p>
          No. Once data is leaked, it's copied thousands of times. You cannot scrub the internet; you can only make that 
          old data useless by changing your passwords.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Take Control of Your Security</H2>
        
        <p>
          Being breached is not your fault, but cleaning it up is your responsibility.
        </p>

        <p>
          Once you've secured your accounts, take a moment to upgrade your habits. Start using a password manager. 
          Stop reusing passwords. The next breach is coming—make sure your data is useless when it happens.
        </p>

        <p>
          <strong>Need strong, unique passwords?</strong> Use our{' '}
          <Link href="/">Dynamic Password Generator</Link> with built-in breach screening.
        </p>
      </Section>
    </StandardGuide>
  )
}
