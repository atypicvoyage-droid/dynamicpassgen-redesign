import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  StatBox,
  ComparisonTable 
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function AiPasswordCrackingGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The machines are guessing faster. Understand the threat of PassGAN and AI-driven cracking tools in 2026."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="How fast can AI crack passwords?">
        AI tools like PassGAN can crack 51% of common passwords in under 60 seconds. 
        Unlike traditional brute force that guesses randomly, AI learns human patterns 
        from billions of leaked credentials (e.g., capitalizing the first letter, 
        using years) to predict your password with frightening accuracy.
      </AnswerBlock>

      <Section id="ai-threat">
        <H2>The New Threat Landscape: Generative Adversarial Networks (GANs)</H2>
        <p>
          Traditional password crackers (like Hashcat) rely on wordlists and rule sets. 
          <strong>PassGAN</strong> uses machine learning to generate guesses autonomously.
        </p>
        <StatBox
          value="81%"
          label="of common passwords cracked within 1 month"
          source="Home Security Heroes, 2025"
          trend="Accelerated by 2026 GPU hardware"
          icon="🤖"
        />
      </Section>

      <Section id="how-it-works">
        <H2>How AI Predicts Your Password</H2>
        <p>
          AI doesn't "guess" — it "generates." It understands that if you use "Summer", 
          you're likely to follow it with "2024" or "2025". It understands semantic 
          relationships and keyboard patterns (qwerty, 123456).
        </p>
        <CalloutBox type="warning" title="Pattern Recognition">
          <p>
            If your password is "Password123!", AI doesn't need to try "A" then "B". 
            It goes straight to the most probable patterns found in its training data.
          </p>
        </CalloutBox>
      </Section>

      <Section id="defense">
        <H2>How to Beat the AI</H2>
        <p>
          The only way to beat pattern recognition is <strong>randomness</strong> and <strong>length</strong>.
        </p>
        <ComparisonTable
          title="AI vs. Human Passwords"
          headers={['Vulnerable to AI ❌', 'AI Resistant ✅']}
          data={[
            {
              old: 'Human-generated patterns (names, dates)',
              new: 'True random generation (entropy)'
            },
            {
              old: 'Common substitutions (@ for a)',
              new: 'Long passphrases (4+ random words)'
            },
            {
              old: 'Short complex strings (8 chars)',
              new: 'Long strings (16+ characters)'
            }
          ]}
        />
        <p>
          AI struggles with length because the search space expands exponentially. 
          A 15-character random password is mathematically infeasible for current AI to crack 
          within a human lifetime.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        <p>
          AI has killed the "clever" password. Leet speak (`P@ssw0rd`) is dead. 
          The only defense is high entropy. Use a password manager to generate 
          random 20+ character strings for every account.
        </p>
      </Section>
    </StandardGuide>
  )
}
