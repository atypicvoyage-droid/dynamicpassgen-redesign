import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  StatBox,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function DeepfakeGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="When seeing is no longer believing. A survival guide for the era of AI-generated vishing and video fraud."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Deepfake Social Engineering?">
        Deepfake social engineering is a cyberattack that uses generative AI to clone the 
        <strong>voice</strong> (vishing) or <strong>video</strong> likeness of trusted individuals 
        (CEOs, family members, IT support) to trick victims into bypassing security protocols. 
        Unlike traditional phishing, these attacks exploit biological trust cues, convincing 
        employees to authorize wire transfers or reveal MFA codes because they "heard" their boss order it.
      </AnswerBlock>

      <Section id="the-threat">
        <H2>The Era of Synthetic Reality</H2>
        <p>
          In 2023, you could spot a deepfake by the unblinking eyes or robotic voice. 
          In 2026, consumer hardware can generate real-time, emotive, breathing video clones 
          with <50ms latency.
        </p>
        <StatBox
          value="$25 Million"
          label="lost by a multinational firm after a deepfake CFO video call"
          source="Hong Kong Police Force Case Study"
          trend="Real-world financial impact"
          icon="💸"
        />
        <p>
          <strong>The Attack Vector:</strong> Attackers scrape audio from YouTube interviews, earnings calls, 
          or TikTok. They train a model in hours. They call the Finance Director on WhatsApp or Teams. 
          The "CFO" says: "I need this transfer approved urgently for the merger. Keep it confidential."
        </p>
      </Section>

      <Section id="detection">
        <H2>Detection: Can You Trust Your Ears?</H2>
        <p>
          Technological detection is an arms race. As soon as detectors find artifacts, generators fix them. 
          You cannot rely solely on software. You must rely on <strong>process</strong>.
        </p>
        <H3>Signs of a Deepfake (Currently)</H3>
        <ul>
          <li><strong>Audio Artifacts:</strong> Metallic clipping at high frequencies.</li>
          <li><strong>Lack of Interruption:</strong> The model may lag if you interrupt it mid-sentence.</li>
          <li><strong>Video Glitches:</strong> Look at the edges of the face or when hands cross the face.</li>
        </ul>
      </Section>

      <Section id="defense-protocols">
        <H2>Defense Protocols: The "Human Firewall"</H2>
        
        <H3>1. The "Challenge-Response" (Safe Word)</H3>
        <p>
          Every C-suite executive and finance employee should have a pre-agreed "Challenge Phrase" 
          that is never transmitted electronically.
        </p>
        <CalloutBox type="success" title="Protocol">
          <p>
            <strong>Finance Employee:</strong> "I can process that, Bob. But per protocol, what is the project code?"<br/>
            <strong>Fake Bob:</strong> "Uh... it's urgent, just do it." (Hang up immediately).
          </p>
        </CalloutBox>

        <H3>2. Out-of-Band Verification</H3>
        <p>
          If the request comes via Video Call, verify via encrypted Text (Signal). 
          If it comes via Email, verify via Phone Call. Never verify on the same channel the request came from.
        </p>

        <H3>3. Multi-Person Approval</H3>
        <p>
          No single human should have the authority to move large sums of money based on a voice command. 
          Enforce technical "M-of-N" controls (2 out of 3 admins must approve).
        </p>
      </Section>

      <Section id="future">
        <H2>The Future: Digital Watermarking</H2>
        <p>
          We are moving toward a "Content Credentials" (C2PA) standard where real cameras cryptographically 
          sign footage. Until then, assume every unverified video call is potentially synthetic.
        </p>
      </Section>
    </StandardGuide>
  )
}
