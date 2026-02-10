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

export default function PreventCredentialStuffingGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Credential Stuffing Attacks: How They Work & How to Prevent Them"
        subtitle="Why do hackers target accounts that haven't been breached? Because of Credential Stuffing. Learn how attackers weaponize password reuse and how to stop them cold."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is credential stuffing and how do I prevent it?">
        Credential stuffing uses stolen email/password pairs from past breaches to access other accounts. Prevent it by using unique passwords for every site (password manager), enabling two-factor authentication, and monitoring for breaches at haveibeenpwned.com. Businesses should implement rate limiting and breach screening.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Silent Epidemic</H2>
        
        <p>
          You wake up to an email: <em>"Your Netflix password has been changed."</em>
          Then another: <em>"Your Uber account order is on its way."</em>
        </p>

        <p>
          You panic. <em>"How did they hack me? I still have my password! I didn't click any links!"</em>
        </p>

        <p>
          You weren't hacked. <strong>Adobe</strong> was hacked 4 years ago. Or <strong>LinkedIn</strong>. Or that random 
          fitness forum you signed up for in 2018.
        </p>

        <p>
          This is <strong>Credential Stuffing</strong>. It is the #1 cause of Account Takeovers (ATO) today, and it relies 
          entirely on one bad habit: <strong>Password Reuse.</strong>
        </p>

        <StatBox
          value="100B+"
          label="credential stuffing attacks annually"
          source="Akamai Security Report, 2024"
          trend="Fully automated warfare"
          icon="🤖"
        />

        <CalloutBox type="danger" title="The Scale of the Problem">
          <p>
            Akamai reports seeing over <strong>100 BILLION</strong> credential stuffing attacks every year. It is fully 
            automated warfare.
          </p>
        </CalloutBox>
      </Section>

      <Section id="anatomy">
        <H2>The Anatomy of an Attack</H2>
        
        <p>
          Here is how it works, step by step:
        </p>

        <ol>
          <li>
            <strong>The Breach:</strong> A poorly secured site (let's call it <code>CatForum.com</code>) gets hacked. 
            1 million emails and passwords leak to the dark web
          </li>
          <li>
            <strong>The Aggregation:</strong> Hackers add these to a "Combo List"—a master database of billions of 
            leaked credentials
          </li>
          <li>
            <strong>The Automation:</strong> The hacker feeds this list into a bot tool (like Sentry MBA or Snipr)
          </li>
          <li>
            <strong>The Stuffing:</strong> The bot tries these Email/Password combinations on high-value targets like 
            <strong>PayPal, Amazon, Netflix, and Bank of America</strong>
          </li>
          <li>
            <strong>The Success:</strong> If 0.1% of users reused their <code>CatForum</code> password on <code>PayPal</code>, 
            the hacker now has 1,000 valid PayPal accounts
          </li>
        </ol>

        <CalloutBox type="warning" title="Why It Works">
          <p>
            Over <strong>65%</strong> of people use the same password (or slight variations) across multiple sites. If you 
            use <code>Password123</code> for your throwaway newsletter account and your Bank account, you have tied their 
            security together.
          </p>
        </CalloutBox>
      </Section>

      <Section id="economics">
        <H2>The Economics of Hacking</H2>
        
        <p>
          Hacking is a business. Credential Stuffing is profitable because it is <strong>cheap</strong>.
        </p>

        <ul>
          <li><strong>Cost:</strong> $0. (Combo lists are often free or very cheap)</li>
          <li><strong>Effort:</strong> Near zero. The bots run 24/7 while the hacker sleeps</li>
          <li><strong>Reward:</strong> High. Stolen accounts sell for $1 to $50 each</li>
        </ul>

        <p>
          A hacker can set up a bot, go to bed, and wake up to thousands of compromised accounts ready to sell or exploit.
        </p>
      </Section>

      <Section id="detection">
        <H2>How to Detect Stuffing Attacks (For Businesses)</H2>
        
        <p>
          For businesses, detecting these attacks is a cat-and-mouse game.
        </p>

        <H3>Signs you are under attack:</H3>
        <ol>
          <li>
            <strong>Spike in Failed Logins:</strong> You normally see 1% failure rate. Suddenly it hits 40%
          </li>
          <li>
            <strong>High Traffic Volume:</strong> A surge of traffic to <code>/login</code> endpoints, often from data 
            center IP addresses (AWS, DigitalOcean) rather than residential ISPs
          </li>
          <li>
            <strong>Account Lockouts:</strong> Customer support gets flooded with calls from users saying their accounts 
            are locked
          </li>
          <li>
            <strong>Geographic Anomalies:</strong> Login attempts from countries where you have no users
          </li>
        </ol>
      </Section>

      <Section id="business-prevention">
        <H2>Prevention Strategy for Businesses</H2>
        
        <p>
          You cannot stop users from reusing passwords. But you can stop the bots.
        </p>

        <H3>1. MFA (Multi-Factor Authentication)</H3>
        <p>
          The silver bullet. Even if the bot has the password, it can't login without the OTP code.
        </p>

        <H3>2. Rate Limiting</H3>
        <p>
          Block IP addresses that fail 5 logins in a row. Implement exponential backoff for repeated failures.
        </p>

        <H3>3. Breach Screening</H3>
        <p>
          When a user creates an account or logs in, check their password against a database like <em>Have I Been Pwned</em>. 
          If it's compromised, force a reset immediately.
        </p>

        <H3>4. CAPTCHA (With Caution)</H3>
        <p>
          Sophisticated bots can bypass basic CAPTCHAs, but they add friction. Use adaptive challenges (e.g., show CAPTCHA 
          only after suspicious behavior).
        </p>

        <H3>5. Device Fingerprinting</H3>
        <p>
          Track device characteristics. If a user normally logs in from Chrome on macOS and suddenly there's a login from 
          Firefox on Linux, trigger additional verification.
        </p>

        <H3>6. Behavioral Analytics</H3>
        <p>
          Bots behave differently than humans. They login faster, navigate differently, and exhibit mechanical patterns. 
          Machine learning can detect these.
        </p>
      </Section>

      <Section id="user-prevention">
        <H2>Prevention Strategy for Users</H2>
        
        <p>
          How do you protect yourself?
        </p>

        <H3>1. Use a Password Manager</H3>
        <p>
          Every single website must have a <strong>unique</strong> password. <code>Site A</code> gets a random string. 
          <code>Site B</code> gets a different random string.
        </p>

        <H3>2. Enable 2FA</H3>
        <p>
          It stops stuffing attacks dead. Even if your password leaks, the hacker can't get past the second factor.
        </p>

        <H3>3. Check Your Status</H3>
        <p>
          Go to <strong>haveibeenpwned.com</strong>. Enter your email. If you have been in a breach, change that password 
          everywhere immediately.
        </p>

        <H3>4. Prioritize Email Security</H3>
        <p>
          Your email is the "Master Key" to reset every other account. Give it your strongest, most unique password and 
          enable 2FA.
        </p>

        <CalloutBox type="tip" title="Quick Tips">
          <ul>
            <li>
              <strong>Don't modify passwords slightly.</strong> Changing <code>Password2023</code> to <code>Password2024</code> 
              doesn't trick the bots. They have "rule sets" that guess those changes automatically
            </li>
            <li>
              <strong>Use breach notifications.</strong> Enable alerts from Have I Been Pwned to get notified immediately 
              when your email appears in a new breach
            </li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="vs-brute-force">
        <H2>Credential Stuffing vs Brute Force</H2>
        
        <H3>Is credential stuffing the same as brute force?</H3>
        <p>
          No. Brute force guesses random characters (<code>aaaa</code>, <code>aaab</code>). Stuffing uses specific 
          Email/Password pairs known to work elsewhere. It is much quieter and more effective.
        </p>

        <H3>How do hackers get my data?</H3>
        <p>
          They buy "Combo Lists" from the dark web. These are massive text files containing billions of credentials 
          aggregated from thousands of past breaches (LinkedIn, Adobe, etc.).
        </p>

        <H3>Does CAPTCHA stop this?</H3>
        <p>
          It helps, but sophisticated bots can often bypass basic CAPTCHAs. Rate limiting and MFA are more effective defenses.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion: A Tax on Laziness</H2>
        
        <p>
          Credential Stuffing is a tax on laziness. It punishes password reuse ruthlessly.
        </p>

        <p>
          The defense is simple but requires discipline: <strong>Never reuse a password.</strong> Not once. Not ever. 
          Let a password manager handle the memory work, and this entire class of attacks becomes harmless to you.
        </p>

        <CalloutBox type="success" title="Your Action Plan">
          <ol>
            <li>Install a password manager (Bitwarden, 1Password)</li>
            <li>Change all duplicate passwords to unique, random ones</li>
            <li>Enable 2FA on all important accounts</li>
            <li>Check haveibeenpwned.com regularly</li>
          </ol>
        </CalloutBox>

        <p>
          Need unique passwords for all your accounts? Use our <Link href="/">Password Generator</Link> to create 
          cryptographically secure credentials that can't be reused from other breaches.
        </p>
      </Section>
    </StandardGuide>
  )
}
