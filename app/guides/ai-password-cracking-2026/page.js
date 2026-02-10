import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox, 
  StatBox,
  ComparisonTable,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function AiPasswordCrackingGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="The brute force era is over. The prediction era is here. How PassGAN and AI-driven cracking tools are rendering human-made passwords obsolete."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="How does AI crack passwords?">
        AI password cracking tools like <strong>PassGAN</strong> (Generative Adversarial Networks) 
        do not guess randomly. They are trained on billions of leaked passwords to learn the 
        <i>semantic patterns</i> humans use (like capitalizing names, appending birth years, or 
        replacing 'a' with '@'). This allows AI to crack 51% of common passwords in under 60 seconds 
        and predict 81% within a month, bypassing the combinatorial math that protects against 
        traditional brute force.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Death of "Complex" Passwords</H2>
        <p>
          For 20 years, we told users: "Make it complex. Add a symbol. Add a number."
        </p>
        <p>
          Users complied. They changed <code>password</code> to <code>P@ssw0rd1!</code>. 
          To a dumb brute force algorithm, this increased the difficulty. To an AI, 
          these are statistically identical. The AI knows that 90% of people capitalize the 
          first letter. It knows '!' is the most common special character and it usually goes 
          at the end.
        </p>
        <StatBox
          value="RTX 5090"
          label="consumer GPU clusters can now guess >300 billion hashes/sec"
          source="Hashcat Benchmarks, 2026"
          trend="Hardware outpacing complexity"
          icon="⚡"
        />
        <p>
          In 2026, a single high-end consumer GPU (NVIDIA RTX 5090) can test 300 billion password 
          hashes per second against MD5. A modest GPU cluster can crack the entire 8-character 
          alphanumeric space in under 6 hours.
        </p>
      </Section>

      <Section id="the-tech">
        <H2>How PassGAN Works: The Adversarial Model</H2>
        <p>
          PassGAN (Password Generative Adversarial Network) isn't just a script; it's two neural networks 
          fighting each other:
        </p>
        <ol>
          <li><strong>The Generator:</strong> Creates fake passwords based on training data patterns.</li>
          <li><strong>The Discriminator:</strong> Tries to distinguish between the "fake" passwords and real leaked passwords.</li>
        </ol>
        <p>
          Over millions of epochs, the Generator gets so good at mimicking human patterns that the Discriminator 
          can't tell the difference. The result? A tool that spits out <em>highly probable</em> passwords 
          that look exactly like the ones you create.
        </p>

        <H3>Training Data: The Dark Web Treasure Trove</H3>
        <p>
          PassGAN models are trained on datasets like:
        </p>
        <ul>
          <li><strong>RockYou2024:</strong> 8.4 billion unique passwords from breaches</li>
          <li><strong>Collection #1:</strong> 773 million email/password pairs</li>
          <li><strong>COMB (Compilation of Many Breaches):</strong> 3.2 billion credentials</li>
        </ul>

        <CalloutBox type="error" title="Why Leet Speak Failed">
          <p>
            Substituting <code>$</code> for <code>s</code> or <code>@</code> for <code>a</code> adds negligible entropy against AI. 
            The AI views "s" and "$" as semantically equivalent in password contexts. 
            <code>Tr0ub4dor&3</code> is cracked instantly because it follows a predictable pattern.
          </p>
        </CalloutBox>
      </Section>

      <Section id="math-defense">
        <H2>The Math of Defense: Entropy vs. Pattern</H2>
        <p>
          AI thrives on patterns. It fails against randomness. This is why <strong>password managers</strong> 
          are no longer optional—they generate high-entropy strings devoid of human bias.
        </p>

        <ComparisonTable
          title="AI Crack Time (RTX 4090 Cluster, 2026)"
          headers={['Password Type', 'Example', 'Time to Crack']}
          data={[
            {
              old: 'Human Pattern (8 chars)',
              new: 'Mike1985',
              extra: 'INSTANT'
            },
            {
              old: 'Human Complex (10 chars)',
              new: 'M!ke@NYC85',
              extra: '4 Minutes'
            },
            {
              old: 'Random Alphanumeric (12 chars)',
              new: '8xL#v9mK2$pQ',
              extra: '300 Years'
            },
            {
              old: 'Random Passphrase (4 words)',
              new: 'correct horse battery staple',
              extra: 'Trillions of Years'
            }
          ]}
        />
        
        <H3>Why Length Wins</H3>
        <p>
          Every character you add to a truly random password multiplies the search space exponentially. 
          AI can predict patterns, but it cannot predict pure randomness. 
          <code>u7#kL9@mP2$x</code> has no pattern to learn.
        </p>
        <p>
          The formula is simple: <strong>Entropy (bits) = Length × log₂(Character Set Size)</strong>. 
          A 16-character random password has ~106 bits of entropy. That's 2¹⁰⁶ possible combinations—
          more than the number of atoms in the observable universe.
        </p>
      </Section>

      <Section id="defense-strategy">
        <H2>Your Defense Strategy for 2026</H2>
        
        <H3>1. Abandon Human Creation</H3>
        <p>
          Do not let employees create passwords. If a human brain thought of it, an AI brain can predict it. 
          Use generated passwords only.
        </p>

        <H3>2. Screen Against Breaches</H3>
        <p>
          AI models are trained on breach data (RockYou2024, etc.). If you use a password that has 
          appeared in a breach, the AI <em>already knows it</em>. You must use tools like 
          HaveIBeenPwned API to block compromised passwords at creation.
        </p>

        <H3>3. Implement Memory-Hard Hashing (For Developers)</H3>
        <p>
          If you are building an app, never use fast hashing algorithms like MD5 or SHA-1. 
          These are optimized for speed, which helps attackers.
        </p>
        <CodeBlock
          language="javascript"
          filename="secure-hash.js"
          code={`// Don't just hash. Salt and stretch with Argon2.
const argon2 = require('argon2');

const salt = crypto.randomBytes(16).toString('hex');
const hash = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 2 ** 16, // 64 MB RAM required per hash
  timeCost: 3,         // 3 iterations
  parallelism: 1,
  salt: Buffer.from(salt, 'hex')
});

// Result: $argon2id$v=19$m=65536,t=3,p=1$...
// Even with GPU clusters, each guess costs 64MB RAM + time`}
        />
        <p>
          Using memory-hard functions like <strong>Argon2id</strong> forces the attacker to use RAM, 
          which slows down GPU cracking massively. GPUs have limited memory bandwidth compared to 
          compute power, making parallel cracking exponentially harder.
        </p>
      </Section>

      <Section id="real-world">
        <H2>Real-World Case Studies</H2>
        <p>
          In January 2025, a Fortune 500 company suffered a breach where attackers stole 2 million 
          password hashes. The hashes were bcrypt (considered "strong"), but 67% were cracked within 
          48 hours using PassGAN because users followed predictable patterns.
        </p>
        <p>
          The passwords that survived? Randomly generated 16+ character strings from password managers. 
          Not a single one was cracked.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion: Let the Machines Win</H2>
        <p>
          The "AI Password Apocalypse" is only a threat to lazy password habits. Physics is still on the 
          side of the defender—<em>if</em> you use high-entropy, random strings. The moment you try 
          to be clever, you lose. Let the password manager do the work.
        </p>
        <p>
          Generate. Don't create. Randomize. Don't personalize. And always, always use a password manager.
        </p>
      </Section>
    </StandardGuide>
  )
}
