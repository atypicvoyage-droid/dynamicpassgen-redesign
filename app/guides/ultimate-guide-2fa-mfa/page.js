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

export default function TwoFactorAuthGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="The Ultimate Guide to Two-Factor Authentication (2FA) & MFA"
        subtitle="Passwords aren't enough anymore. Learn the difference between SMS, TOTP apps, and Hardware Keys—and why enabling 2FA is the single most important step for your digital security."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is 2FA and why do I need it?">
        Two-Factor Authentication requires both a password (something you know) and a second factor like your phone or hardware key (something you have). Even if your password is stolen via phishing or breach, attackers cannot access your account without the second factor. 2FA blocks 99.9% of automated attacks.
      </AnswerBlock>

      <Section id="introduction">
        <H2>Passwords Aren't Enough</H2>
        
        <p>
          If you take only one piece of advice from this entire website, let it be this: <strong>Turn on Two-Factor 
          Authentication (2FA).</strong>
        </p>

        <p>
          Even the strongest, longest, most complex password can be stolen. You could type it into a phishing site, or a 
          server could get hacked. If a hacker has your password, they have your life.
        </p>

        <p>
          Unless you have 2FA.
        </p>

        <p>
          With 2FA, a hacker needs your password <strong>AND</strong> your phone (or key). That second barrier stops 99.9% 
          of automated attacks cold.
        </p>

        <StatBox
          value="99.9%"
          label="of automated attacks blocked by MFA"
          source="Microsoft Security Report, 2024"
          trend="Most effective single control"
          icon="🔒"
        />
      </Section>

      <Section id="three-factors">
        <H2>The Three Factors of Authentication</H2>
        
        <p>
          Security experts divide "proof of identity" into three buckets. MFA means using at least two different buckets.
        </p>

        <ol>
          <li><strong>Something You Know:</strong> Passwords, PINs, Security Questions</li>
          <li><strong>Something You Have:</strong> Your phone, a YubiKey, a smart card</li>
          <li><strong>Something You Are:</strong> Fingerprint, FaceID, Retina scan</li>
        </ol>

        <CalloutBox type="info" title="Why It Works">
          <p>
            Using two things from the <em>same</em> bucket (e.g., a password + a security question) is NOT strong security. 
            True MFA combines different factors (Password + Phone).
          </p>
        </CalloutBox>
      </Section>

      <Section id="methods-ranked">
        <H2>2FA Methods Ranked: Good, Better, Best</H2>
        
        <p>
          Not all 2FA is created equal. Here is the hierarchy of safety.
        </p>

        <H3>🥉 Good: SMS (Text Message)</H3>
        <ul>
          <li><strong>How it works:</strong> You get a text with a code like <code>123456</code></li>
          <li><strong>Pros:</strong> Easy, works on every phone</li>
          <li><strong>Cons:</strong> Vulnerable to "SIM Swapping" (hackers stealing your phone number)</li>
          <li><strong>Verdict:</strong> Better than nothing, but upgrade if possible</li>
        </ul>

        <H3>🥈 Better: Authenticator Apps (TOTP)</H3>
        <ul>
          <li><strong>How it works:</strong> An app (Google Auth, Authy, 1Password) generates a code that changes every 30 seconds</li>
          <li><strong>Pros:</strong> Doesn't need cell service, immune to SIM swapping</li>
          <li><strong>Cons:</strong> Slightly annoying to type codes</li>
          <li><strong>Verdict:</strong> The standard for most users</li>
        </ul>

        <H3>🥇 Best: Hardware Keys (FIDO2 / WebAuthn)</H3>
        <ul>
          <li><strong>How it works:</strong> You plug a USB key (like a YubiKey) into your computer or tap it on your phone</li>
          <li><strong>Pros:</strong> Phishing-proof. You can't accidentally type the code into a fake site because there is no code</li>
          <li><strong>Cons:</strong> You have to buy the key ($25-$50)</li>
          <li><strong>Verdict:</strong> Essential for high-value accounts (Banking, Email, Admin access)</li>
        </ul>

        <CalloutBox type="tip" title="Recommendation">
          <p>
            Use <strong>Authenticator Apps</strong> for most accounts, and <strong>Hardware Keys</strong> for your most 
            critical accounts (email, bank, password manager).
          </p>
        </CalloutBox>
      </Section>

      <Section id="sms-problem">
        <H2>Why You Should Stop Using SMS 2FA</H2>
        
        <p>
          SMS is convenient, but the phone network was never designed for security.
        </p>

        <H3>The Attack: SIM Swapping</H3>
        <p>
          A hacker calls your mobile carrier, pretending to be you. They say, "I lost my phone, please switch my service 
          to this new SIM card." If the rep falls for it, the hacker's phone becomes <em>your</em> phone. They can now 
          receive your bank's 2FA texts.
        </p>

        <p>
          This is called <strong>SIM Swapping</strong>, and it happens thousands of times a year. Authenticator apps 
          completely bypass this risk because the codes live on your device, not the carrier's network.
        </p>

        <CalloutBox type="danger" title="Disable SMS Fallback">
          <p>
            If a service offers both SMS and App-based 2FA, <strong>disable SMS</strong>. Leaving it on as a "backup" 
            leaves the backdoor open for SIM swappers.
          </p>
        </CalloutBox>
      </Section>

      <Section id="setup">
        <H2>Setting Up Your First Authenticator App</H2>
        
        <p>
          Ready to upgrade?
        </p>

        <ol>
          <li>
            <strong>Download an App:</strong> We recommend <strong>Authy</strong> (free, syncs across devices) or 
            <strong>Raivo OTP</strong> (iOS, privacy-focused)
          </li>
          <li>
            <strong>Login to your account:</strong> Go to Security settings (e.g., Gmail, Facebook)
          </li>
          <li>
            <strong>Scan the QR Code:</strong> The site will show a QR code. Scan it with your app
          </li>
          <li>
            <strong>Save Backup Codes:</strong> <strong>CRITICAL!</strong> The site will give you 10 one-time codes. Print 
            these or save them in a secure place. These are your only way in if you lose your phone
          </li>
        </ol>

        <CalloutBox type="tip" title="Quick Tips">
          <ul>
            <li>Use an app like <strong>Authy</strong> that allows encrypted backups. If you lose your phone, you can restore 
            your codes to a new device</li>
            <li>Start with your <strong>Email</strong> account. If a hacker gets into your email, they can reset passwords 
            for everything else. Secure email first!</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="hardware-keys">
        <H2>Hardware Keys: The Gold Standard</H2>
        
        <p>
          For maximum security, hardware keys like <strong>YubiKey</strong> or <strong>Titan Security Key</strong> are unbeatable.
        </p>

        <H3>Why Hardware Keys Are Phishing-Proof:</H3>
        <p>
          When you use an authenticator app, you type a 6-digit code. If you're on a phishing site that looks like Google, 
          you might type that code into the fake site, and the hacker captures it.
        </p>

        <p>
          With a hardware key, there's no code to steal. The key uses cryptographic signatures that are unique to the real 
          website. A phishing site can't fake this.
        </p>

        <H3>Recommended Hardware Keys:</H3>
        <ul>
          <li><strong>YubiKey 5 Series:</strong> USB-A, USB-C, NFC support ($45-$70)</li>
          <li><strong>Google Titan Security Key:</strong> USB-A/C + NFC ($30)</li>
          <li><strong>Thetis FIDO2:</strong> Budget option ($20)</li>
        </ul>

        <CalloutBox type="warning" title="Buy Two Keys">
          <p>
            Always buy two hardware keys. Keep one as a backup in a safe location. If you lose your only key, you could 
            be permanently locked out.
          </p>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Is SMS 2FA better than nothing?</H3>
        <p>
          Yes! While SMS has vulnerabilities (SIM swapping), it is still 99% more secure than having only a password.
        </p>

        <H3>What if I lose my phone?</H3>
        <p>
          This is why 'Backup Codes' are critical. Always save the recovery codes provided when you set up 2FA. Store them 
          somewhere safe offline.
        </p>

        <H3>What is the difference between 2FA and MFA?</H3>
        <p>
          They are often used interchangeably. 2FA requires exactly two factors. MFA requires two <em>or more</em> factors. 
          All 2FA is MFA, but not all MFA is 2FA.
        </p>

        <H3>Can I use biometrics as 2FA?</H3>
        <p>
          On your own device, yes. FaceID or fingerprint can unlock your authenticator app. But for remote authentication 
          (logging into a website), biometrics are typically used as a convenient unlock for a hardware key or app, not as 
          the second factor itself.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion: Turn It On Now</H2>
        
        <p>
          2FA is the single most effective security upgrade you can make. It turns a catastrophic password leak into a 
          minor inconvenience.
        </p>

        <p>
          It takes 5 minutes to set up, and it protects you for a lifetime. Go turn it on now.
        </p>

        <CalloutBox type="success" title="Priority Accounts">
          <p>
            Enable 2FA on these accounts first:
          </p>
          <ol>
            <li>Email (the keys to your digital kingdom)</li>
            <li>Banking and financial accounts</li>
            <li>Password manager</li>
            <li>Social media (to prevent account takeover)</li>
            <li>Work accounts (especially if you have admin access)</li>
          </ol>
        </CalloutBox>

        <p>
          Protect your accounts with strong passwords and 2FA. Use our <Link href="/">Password Generator</Link> to create 
          unique credentials for every account.
        </p>
      </Section>
    </StandardGuide>
  )
}
