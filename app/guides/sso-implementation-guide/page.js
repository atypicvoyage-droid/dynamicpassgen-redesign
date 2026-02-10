import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  ComparisonTable
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function SSOImplementationGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Implementing Single Sign-On (SSO): Pros, Cons, and Best Practices"
        subtitle="Managing 50 different logins for every employee is a security nightmare. Learn how SSO works, the difference between SAML and OIDC, and why it is the ultimate upgrade for enterprise security."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Single Sign-On and should I implement it?">
        SSO allows users to log in once to an Identity Provider (like Okta or Azure AD) and access all authorized apps without re-entering passwords. It improves security by centralizing access control, enabling instant offboarding, and enforcing MFA across all applications. Essential for companies with 20+ employees.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Keyring Problem</H2>
        
        <p>
          Imagine giving your employees a keyring with 50 different keys on it. One for email, one for Slack, one for Zoom, 
          one for HR...
        </p>

        <p>
          They will lose them. They will leave them in the door. They will hide copies under the mat.
        </p>

        <p>
          This is what managing individual accounts looks like. It is chaos.
        </p>

        <p>
          <strong>Single Sign-On (SSO)</strong> replaces that keyring with one master key card. Users log in once—to a 
          central Identity Provider—and gain access to everything they are authorized to use.
        </p>

        <p>
          It is convenient, yes. But more importantly, it is the backbone of modern enterprise security.
        </p>
      </Section>

      <Section id="what-is-sso">
        <H2>What is Single Sign-On?</H2>
        
        <p>
          SSO is a session and user authentication service.
        </p>

        <H3>Without SSO:</H3>
        <ul>
          <li>User logs into Gmail → Types Password A</li>
          <li>User logs into Slack → Types Password B</li>
          <li>User logs into Salesforce → Types Password C</li>
        </ul>

        <H3>With SSO:</H3>
        <ul>
          <li>User logs into <strong>Identity Provider (IdP)</strong> (e.g., Okta, Azure AD, Google Workspace)</li>
          <li>The IdP passes a secure "Token" to Slack, Gmail, and Salesforce</li>
          <li>The user never types a password for those apps</li>
        </ul>
      </Section>

      <Section id="security-case">
        <H2>The Security Case for SSO</H2>
        
        <p>
          SSO isn't just about saving time. It solves the three biggest risks in IT:
        </p>

        <H3>1. The Offboarding Gap</H3>
        <p>
          When an employee is fired, you have to revoke access to 50 apps. If you forget one (like a shared Dropbox), 
          they still have access.
        </p>
        <p>
          <strong>With SSO:</strong> You disable their account in the IdP. <em>Bam.</em> They are locked out of everything instantly.
        </p>

        <H3>2. Password Visibility</H3>
        <p>
          With SSO, the third-party app (like Slack) never sees the user's password. They only verify the token. This means 
          if Slack gets hacked, your user's credentials aren't compromised.
        </p>

        <H3>3. Enforcing MFA</H3>
        <p>
          Trying to enforce 2FA on 50 different apps is impossible.
        </p>
        <p>
          <strong>With SSO:</strong> You enforce strict MFA on the IdP. Now, <em>every</em> app is protected by 2FA automatically, 
          even if the app itself doesn't support it.
        </p>

        <CalloutBox type="tip" title="Quick Tips">
          <ul>
            <li><strong>Start with High-Risk Apps:</strong> Don't try to migrate 100 apps at once. Start with Email, CRM 
            (Salesforce), and Cloud Infrastructure (AWS)</li>
            <li><strong>Use Groups:</strong> Create groups like "Engineering" and "Sales". Assign apps to groups, not people. 
            It makes onboarding a breeze</li>
            <li><strong>Force MFA:</strong> Since SSO is the "keys to the kingdom", you MUST protect the IdP account with 
            hardware keys or an authenticator app</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="protocols">
        <H2>SAML vs. OIDC: The Protocols</H2>
        
        <p>
          You will hear these acronyms a lot. They are the languages the IdP uses to talk to the App.
        </p>

        <ComparisonTable
          title="SAML vs OIDC Comparison"
          headers={['Feature', 'SAML', 'OIDC']}
          data={[
            {
              old: 'Era',
              new: 'Early 2000s (Legacy)::Modern (2014+)'
            },
            {
              old: 'Format',
              new: 'XML-based::JSON-based (REST API)'
            },
            {
              old: 'Use case',
              new: 'Enterprise apps::Modern SaaS, Mobile'
            },
            {
              old: 'Complexity',
              new: 'High::Low (developer-friendly)'
            },
            {
              old: 'Support',
              new: 'Universal (legacy systems)::Growing (new apps)'
            }
          ]}
        />

        <H3>SAML (Security Assertion Markup Language)</H3>
        <ul>
          <li><strong>The Old Guard:</strong> Developed in the early 2000s. XML-based</li>
          <li><strong>Use Case:</strong> Traditional Enterprise Apps (Salesforce, Oracle, Workday)</li>
          <li><strong>Pros:</strong> Extremely mature, supported by almost everything corporate</li>
        </ul>

        <H3>OIDC (OpenID Connect)</H3>
        <ul>
          <li><strong>The Modern Standard:</strong> Built on top of OAuth 2.0. JSON-based (like a REST API)</li>
          <li><strong>Use Case:</strong> Modern SaaS, Mobile Apps, Single Page Apps</li>
          <li><strong>Pros:</strong> Lighter, friendlier for mobile, easier for developers</li>
        </ul>

        <p>
          <strong>Verdict:</strong> You will likely use both. Use OIDC where possible; fall back to SAML for older enterprise tools.
        </p>
      </Section>

      <Section id="risks">
        <H2>The Hidden Risks (Single Point of Failure)</H2>
        
        <p>
          We have to address the elephant in the room: <strong>If your SSO goes down, nobody works.</strong>
        </p>

        <p>
          Or worse: <strong>If an attacker compromises your SSO admin account, they have everything.</strong>
        </p>

        <p>
          This is the trade-off. You are putting all your eggs in one basket. To make this safe, you must watch that 
          basket very, very closely.
        </p>

        <CalloutBox type="danger" title="Break Glass Accounts">
          <p>
            Always have one "Emergency Admin" account that does NOT use SSO (but has a massive 64-char password and hardware 
            key). If your SSO provider breaks, this account lets you back in to fix configurations.
          </p>
        </CalloutBox>
      </Section>

      <Section id="implementation">
        <H2>Implementation Checklist</H2>
        
        <ol>
          <li>
            <strong>Audit:</strong> List every app your company uses (Shadow IT will surprise you)
          </li>
          <li>
            <strong>Choose an IdP:</strong> Microsoft Azure AD (Entra ID) is great if you use Office 365. Okta is the 
            gold standard for standalone
          </li>
          <li>
            <strong>Connect HR:</strong> Integrate your HR software (Rippling/BambooHR) to automatically create accounts 
            in the IdP when someone is hired
          </li>
          <li>
            <strong>Test:</strong> Roll out to IT first. Then a pilot group. Then the company
          </li>
          <li>
            <strong>Disable Direct Login:</strong> Once SSO is working, turn off username/password login for those apps 
            so users <em>must</em> use SSO
          </li>
        </ol>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Is SSO safer than individual passwords?</H3>
        <p>
          Yes, because it reduces the "attack surface". Employees only have to remember ONE strong password, reducing 
          password fatigue and reuse.
        </p>

        <H3>Does SSO work for all apps?</H3>
        <p>
          Most modern B2B SaaS apps support SSO (SAML/OIDC). For legacy apps that don't, password managers often fill the gap.
        </p>

        <H3>What happens if the SSO provider goes down?</H3>
        <p>
          Nobody can log in. This is the trade-off. However, major providers like Okta/Azure AD have 99.99% uptime, which 
          is better than your internal servers.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          Implementing SSO is a heavy lift upfront, but the ROI is instant. You gain visibility, you gain control, and you 
          eliminate the "I forgot my password" ticket forever.
        </p>

        <p>
          For any company with more than 20 employees, it isn't a luxury feature anymore—it's the baseline for a secure 
          architecture.
        </p>

        <CalloutBox type="success" title="Ready to Implement?">
          <p>
            Need secure master passwords for your SSO accounts? Use our <Link href="/tools/passphrase-generator">Passphrase Generator</Link> to 
            create memorable yet cryptographically strong credentials.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
