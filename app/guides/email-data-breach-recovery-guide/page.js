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
        subtitle="Don't panic. Just act. If your email appeared in a 'Have I Been Pwned' alert or a dark web scan, here is your step-by-step battle plan to lock down your identity."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What should I do immediately after a data breach?">
        Change your email password first, then update all financial accounts. Enable two-factor authentication everywhere. Check for unauthorized email forwarding rules and logged-in devices. If Social Security numbers were exposed, freeze your credit at all three bureaus (Equifax, Experian, TransUnion).
      </AnswerBlock>

      <Section id="introduction">
        <H2>Your Emergency Response Plan</H2>
        
        <p>
          It's a sinking feeling. You get an alert from Google, Apple, or your bank: <em>"Your password was found in a data breach."</em>
        </p>

        <p>
          Your mind races. <em>Is my bank account safe? Are they reading my emails? Who has my address?</em>
        </p>

        <p>
          First: <strong>Breathe.</strong> Millions of people are affected by breaches every year. It is manageable if you move fast.
        </p>

        <p>
          This guide is your emergency checklist. Stop reading other tabs. Follow these 5 steps right now.
        </p>

        <CalloutBox type="danger" title="Time is Critical">
          <p>
            Hackers use automated bots to test breached credentials within <strong>hours</strong> of a leak release. 
            Do not wait until the weekend. Do this now.
          </p>
        </CalloutBox>
      </Section>

      <Section id="step-1">
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
          <li><strong>When:</strong> The date of the breach</li>
        </ul>

        <CalloutBox type="info" title="Assess the Risk">
          <ul>
            <li><strong>Just emails?</strong> Low risk (expect spam)</li>
            <li><strong>Passwords?</strong> <strong>High risk.</strong> Proceed immediately</li>
            <li><strong>SSN or financial data?</strong> <strong>Critical risk.</strong> Follow all steps including credit freeze</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="step-2">
        <H2>Step 2: The Password Triage</H2>
        
        <p>
          You need to change passwords, but you need to prioritize.
        </p>

        <H3>Priority Order:</H3>
        
        <p>
          <strong>1. Your Email Account (Patient Zero)</strong>
        </p>
        <p>
          If they get into your email, they can reset every other password you own. Change this <strong>first</strong>. 
          Make it strong and unique.
        </p>

        <p>
          <strong>2. Financial Accounts</strong>
        </p>
        <ul>
          <li>Banks and credit unions</li>
          <li>PayPal, Venmo, Cash App</li>
          <li>Cryptocurrency exchanges</li>
          <li>Retirement and investment accounts</li>
        </ul>

        <p>
          <strong>3. Medical & Government</strong>
        </p>
        <ul>
          <li>Healthcare portals</li>
          <li>IRS/Tax filing sites</li>
          <li>Social Security Administration</li>
        </ul>

        <p>
          <strong>4. Social Media</strong>
        </p>
        <ul>
          <li>Facebook, Instagram</li>
          <li>X (Twitter), LinkedIn</li>
          <li>TikTok, Snapchat</li>
        </ul>

        <CalloutBox type="warning" title="Critical Rule">
          <p>
            <strong>Do not reuse the old password.</strong> Even adding a "1" at the end is dangerous. 
            Use a password manager to generate a completely new, random string.
          </p>
        </CalloutBox>
      </Section>

      <Section id="step-3">
        <H2>Step 3: Enable 2FA Everywhere</H2>
        
        <p>
          If your password was stolen, Two-Factor Authentication (2FA) saves you. Even if the hacker has your password, 
          they can't login without the code on your phone.
        </p>

        <H3>Turn it on immediately for:</H3>
        <ul>
          <li><strong>Email</strong> (Gmail, Outlook, Yahoo)</li>
          <li><strong>Banking</strong> (all financial institutions)</li>
          <li><strong>Social Media</strong> (Facebook, Instagram, X)</li>
          <li><strong>Cloud Storage</strong> (Google Drive, Dropbox, iCloud)</li>
        </ul>

        <CalloutBox type="tip" title="Best 2FA Methods">
          <p>
            <strong>Preferred:</strong> Authenticator apps (Authy, Google Authenticator, Microsoft Authenticator)
          </p>
          <p>
            <strong>Acceptable:</strong> SMS codes (better than nothing, but vulnerable to SIM swapping)
          </p>
          <p>
            <strong>Best:</strong> Hardware security keys (YubiKey, Titan Security Key)
          </p>
        </CalloutBox>
      </Section>

      <Section id="step-4">
        <H2>Step 4: Check for Backdoors</H2>
        
        <p>
          Hackers sometimes login, add a "backdoor," and leave quietly. They want to ensure they can get back in 
          even after you change your password.
        </p>

        <H3>Check these settings in your email:</H3>
        
        <p>
          <strong>Email Forwarding</strong>
        </p>
        <p>
          Did they set up a rule to forward all your emails to <code>hacker@gmail.com</code>? 
          Check your email settings → "Forwarding and POP/IMAP".
        </p>

        <p>
          <strong>Authorized Devices</strong>
        </p>
        <p>
          Look for "Logged in devices" or "Active sessions." Do you see a Windows PC in Russia or an iPhone in Nigeria? 
          <strong>Log them out immediately.</strong>
        </p>

        <p>
          <strong>Recovery Information</strong>
        </p>
        <p>
          Did they change the backup phone number or recovery email to <em>theirs</em>? Update these to your legitimate contact info.
        </p>

        <p>
          <strong>Connected Apps</strong>
        </p>
        <p>
          Revoke access to any suspicious third-party apps you don't recognize.
        </p>

        <CalloutBox type="danger" title="Gmail Users">
          <p>
            Go to <strong>myaccount.google.com/security</strong> → "Your devices" and "Third-party apps with account access." 
            Remove anything suspicious.
          </p>
        </CalloutBox>
      </Section>

      <Section id="step-5">
        <H2>Step 5: Freeze Your Credit</H2>
        
        <p>
          If the breach included <strong>Social Security Numbers (SSN)</strong> or detailed personal info 
          (like the Equifax breach), changing passwords isn't enough. They can steal your identity.
        </p>

        <H3>Freeze your credit at all three bureaus:</H3>
        
        <ul>
          <li><strong>Equifax:</strong> equifax.com/personal/credit-report-services</li>
          <li><strong>Experian:</strong> experian.com/freeze</li>
          <li><strong>TransUnion:</strong> transunion.com/credit-freeze</li>
        </ul>

        <H3>Why freeze?</H3>
        <ul>
          <li>It is <strong>free</strong></li>
          <li>It stops anyone (including you) from opening new credit cards or loans</li>
          <li>You can temporarily "unfreeze" it online if you need to buy a car or house</li>
          <li>It doesn't affect your credit score</li>
        </ul>

        <CalloutBox type="success" title="Don't Forget Innovis">
          <p>
            There's actually a <strong>fourth</strong> credit bureau: Innovis (innovis.com). Freeze this one too 
            for complete protection.
          </p>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>What does it mean if my email was "pwned"?</H3>
        <p>
          It means your email address (and likely password) was found in a database stolen from a company you use. 
          It does not necessarily mean your email account <em>itself</em> was hacked, but the credentials are compromised.
        </p>

        <H3>Should I delete my email account?</H3>
        <p>
          Usually no. Recovering and securing the account is better. Deleting it causes massive disruption and 
          doesn't remove your data from the dark web.
        </p>

        <H3>Can I remove my info from the dark web?</H3>
        <p>
          No. Once data is leaked, it is copied thousands of times. You cannot scrub the internet; you can only 
          make that old data useless by changing your passwords.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Moving Forward: Prevention</H2>
        
        <p>
          Being breached is not your fault, but cleaning it up is your responsibility.
        </p>

        <p>
          Once you have secured your accounts, take a moment to upgrade your habits:
        </p>

        <ul>
          <li>Start using a <strong>password manager</strong></li>
          <li>Stop reusing passwords across sites</li>
          <li>Enable 2FA on all important accounts</li>
          <li>Use our <Link href="/tools/breach-checker">Breach Checker</Link> to monitor future leaks</li>
        </ul>

        <CalloutBox type="info" title="The Next Breach is Coming">
          <p>
            Make sure your data is useless when it happens. Use unique passwords for every account, and they'll 
            have nothing to steal that works anywhere else.
          </p>
        </CalloutBox>

        <p>
          Need strong, unique passwords fast? Use our <Link href="/">Password Generator</Link> to create 
          secure credentials for all your accounts.
        </p>
      </Section>
    </StandardGuide>
  )
}
