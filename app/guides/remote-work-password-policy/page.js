import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  CodeBlock 
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function RemoteWorkGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The perimeter is gone. Securing identity in a world where the office is everywhere."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="How to secure remote passwords?">
        Remote work security relies on Identity as the Perimeter. Enforce strong MFA 
        (preferably hardware keys or number matching) for all remote access, require 
        device compliance (MDM) before allowing login, and use Conditional Access policies 
        to block suspicious locations or impossible travel.
      </AnswerBlock>

      <Section id="challenges">
        <H2>Home Network Vulnerabilities</H2>
        <p>
          Your corporate firewall doesn't protect Dave's home WiFi router that still uses 
          default admin credentials.
        </p>
      </Section>

      <Section id="policy">
        <H2>Modern Remote Policy Template</H2>
        <CodeBlock
          language="text"
          filename="remote-policy-snippet.txt"
          code={`1. MFA is MANDATORY for all remote access.
2. Personal devices (BYOD) must be enrolled in MDM or access is restricted to web-only.
3. No saving corporate passwords in personal browser profiles.
4. Session timeouts set to 1 hour for inactivity.`}
        />
        <CalloutBox type="tip" title="Device Trust">
          <p>
            Don't just check the password. Check the device. Is the OS updated? Is the disk encrypted? 
            If no, block the login.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
