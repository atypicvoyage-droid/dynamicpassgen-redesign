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

export { generateMetadata } from './metadata'

export default function DeepfakeGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="When seeing is no longer believing. Protecting your organization from AI-driven identity fraud."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Deepfake Social Engineering?">
        Deepfake social engineering involves using AI to generate realistic voice (vishing) 
        or video clones of trusted individuals (CEOs, family, IT staff) to manipulate victims 
        into transferring funds or revealing credentials. It bypasses traditional "trust" 
        verification methods.
      </AnswerBlock>

      <Section id="rise-of-deepfakes">
        <H2>The New Face of Phishing</H2>
        <StatBox
          value="$25M"
          label="lost in a single deepfake CEO scam (2025)"
          source="Global Security Report"
          trend="Targeting Finance Depts"
          icon="🎭"
        />
        <p>
          Attackers no longer need to hack passwords if they can convince an employee to 
          wire money by impersonating the CFO on a Zoom call.
        </p>
      </Section>

      <Section id="defense">
        <H2>How to Defend Against Clones</H2>
        <H3>1. The "Safe Word" Protocol</H3>
        <p>
          Establish a verbal challenge-response code for sensitive authorizations that is 
          never written digitally.
        </p>
        <H3>2. Call Back Verification</H3>
        <p>
          If a "CEO" calls with an urgent request, hang up and call them back on their 
          known internal number.
        </p>
        <CalloutBox type="error" title="Red Flag">
          <p>
            Deepfake audio often has subtle unnatural pauses or lack of emotional variance, 
            but 2026 models are getting nearly perfect. Rely on process, not your ears.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
