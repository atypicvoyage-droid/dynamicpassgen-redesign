import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  ComparisonTable,
  StatBox
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function PasswordEntropyGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Password Entropy 101: Why Length Beats Complexity Every Time"
        subtitle="Stop forcing users to use special characters. Learn the math behind password entropy and why a long phrase like 'correct-horse-battery-staple' is mathematically stronger than 'Tr0ub4dor&3'."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is password entropy and why does it matter?">
        Password entropy measures unpredictability in bits. It determines how many guesses a computer needs to crack your password. A 60-bit password is strong for most accounts, 80+ bits for critical accounts, and 100+ bits is future-proof. Length adds exponentially more entropy than complexity.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Complexity Myth</H2>
        
        <p>
          We have all been there. You try to create an account, and the website yells at you:
          <em>"Password must contain 1 uppercase, 1 lowercase, 1 number, 1 symbol, and the blood of a unicorn."</em>
        </p>

        <p>
          So you create something like <code>P@ssw0rd1!</code>. You feel safe. The website says "Strong."
        </p>

        <p>
          But here is the uncomfortable truth: <strong>That password is weak.</strong>
        </p>

        <p>
          For decades, we prioritized <strong>complexity</strong> (messy characters) over <strong>length</strong>. 
          It turns out, we were wrong. In this guide, we're diving into the math of <strong>Entropy</strong> to explain 
          why a long, simple sentence is mathematically superior to a short, complex mess.
        </p>
      </Section>

      <Section id="what-is-entropy">
        <H2>What is Password Entropy?</H2>
        
        <p>
          In plain English, <strong>Entropy</strong> is a measure of unpredictability. It tells us how many guesses 
          it would take a computer to crack your password by brute force.
        </p>

        <p>
          It is measured in <strong>bits</strong>.
        </p>

        <ul>
          <li><strong>40 bits:</strong> Cracker can break it instantly</li>
          <li><strong>60 bits:</strong> Strong enough for most web accounts</li>
          <li><strong>80 bits:</strong> Very strong (years to crack)</li>
          <li><strong>100+ bits:</strong> Uncrackable with current technology</li>
        </ul>

        <CalloutBox type="info" title="The Formula">
          <p>
            <strong>Entropy (E) = Length (L) × log₂(Pool Size)</strong>
          </p>
          <p>
            Where Pool Size is the number of possible characters (26 for lowercase, 52 for upper+lower, etc.)
          </p>
        </CalloutBox>

        <p>
          Don't worry, we'll do the math for you below.
        </p>
      </Section>

      <Section id="complexity-vs-length">
        <H2>The Math: Complexity vs. Length</H2>
        
        <p>
          Let's compare two passwords.
        </p>

        <H3>Password A: The "Complex" One</H3>
        <p>
          <code>Tr0ub4dor&3</code> (11 characters)
        </p>
        <ul>
          <li>It looks scary. It has numbers, symbols, and weird capitalization</li>
          <li><strong>Pool Size:</strong> ~94 (all keyboard characters)</li>
          <li><strong>Entropy:</strong> ~60 bits</li>
          <li><strong>Crack Time:</strong> Days to Weeks</li>
        </ul>

        <H3>Password B: The "Long" One</H3>
        <p>
          <code>correct horse battery staple</code> (28 characters)
        </p>
        <ul>
          <li>It's just lowercase letters and spaces. Easy to type</li>
          <li><strong>Pool Size:</strong> ~27 (letters + space)</li>
          <li><strong>Entropy:</strong> ~130 bits</li>
          <li><strong>Crack Time:</strong> Trillions of years</li>
        </ul>

        <StatBox
          value="2x"
          label="more entropy per character when adding length vs. complexity"
          source="NIST SP 800-63B"
          trend="Length scales exponentially"
          icon="📏"
        />

        <CalloutBox type="success" title="Key Takeaway">
          <p>
            Adding just <strong>one character</strong> exponentially increases the difficulty for an attacker. 
            Adding a <strong>symbol</strong> only linearly increases the difficulty. <strong>Length always wins.</strong>
          </p>
        </CalloutBox>
      </Section>

      <Section id="human-factor">
        <H2>The Human Factor: Predictability</H2>
        
        <p>
          The problem with "complexity rules" is that humans are predictable. When forced to use a symbol, 90% of people 
          use <code>!</code> or <code>@</code>. When forced to use a number, they use <code>1</code> or <code>123</code> 
          and put it at the end.
        </p>

        <p>
          Hackers know this. They don't guess random characters; they use "Dictionary Attacks" that look for these 
          exact patterns.
        </p>

        <CalloutBox type="warning" title="The XKCD Logic">
          <p>
            The famous webcomic XKCD explained this perfectly. We trained humans to pick passwords that are 
            <strong>hard for humans to remember</strong> but <strong>easy for computers to guess</strong>.
          </p>
        </CalloutBox>

        <ComparisonTable
          title="Entropy Breakdown: Complexity vs Length"
          headers={['Password Type', 'Length', 'Pool Size', 'Entropy', 'Memorability']}
          data={[
            {
              old: 'Complex short',
              new: '8 chars::94 (all symbols)::52 bits::Difficult'
            },
            {
              old: 'Simple long',
              new: '16 chars::26 (lowercase)::75 bits::Easy'
            },
            {
              old: '4-word passphrase',
              new: '25 chars::27 (letters+space)::130 bits::Very easy'
            }
          ]}
        />
      </Section>

      <Section id="passphrases">
        <H2>Why Passphrases Are the Future</H2>
        
        <p>
          A <strong>Passphrase</strong> is a sequence of random words (e.g., <code>purple-monkey-dishwasher</code>).
        </p>

        <H3>Why they rule:</H3>
        <ol>
          <li><strong>High Entropy:</strong> 4 random words have massive mathematical strength</li>
          <li><strong>Memorable:</strong> Our brains are wired to remember stories and images, not abstract strings like <code>X9#b$2</code></li>
          <li><strong>Typing Speed:</strong> You can type <code>correct horse battery staple</code> much faster on a mobile phone than <code>Tr0ub4dor&3</code></li>
        </ol>

        <CalloutBox type="tip" title="Quick Tips">
          <ul>
            <li>Use a <strong>Dice</strong> or a generator to pick your words. Do not pick them yourself (humans aren't random enough)</li>
            <li>Use a separator like a space, hyphen, or dot to make it readable</li>
            <li>Aim for <strong>4 words minimum</strong>. 5 words is unbreakable</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>What is a good entropy score for a password?</H3>
        <p>
          Generally, 60 bits is decent for low-risk accounts. For critical accounts (banking, email), aim for 80+ bits. 
          100+ bits is considered future-proof.
        </p>

        <H3>Does adding a symbol really help?</H3>
        <p>
          It helps a little, but not as much as adding 2-3 extra letters. Length is the most powerful factor in the 
          entropy formula.
        </p>

        <H3>Are passphrases really secure?</H3>
        <p>
          Yes! A 4-word random passphrase usually has much higher entropy (70-100 bits) than a standard 8-character 
          complex password (40-50 bits).
        </p>

        <H3>What if a website limits password length?</H3>
        <p>
          That is a sign of bad security (legacy systems). If you are stuck with a short limit (e.g., 12 characters), 
          then yes—you <strong>must</strong> use complexity (symbols/numbers) to maximize the entropy of those few characters.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          The era of <code>P@ssw0rd1</code> is over. The math is undeniable.
        </p>

        <p>
          Stop fighting with special characters. Embrace the <strong>Passphrase</strong>. It's easier to type, easier to 
          remember, and mathematically harder for the bad guys to crack.
        </p>

        <CalloutBox type="success" title="Calculate Your Entropy">
          <p>
            Use our <Link href="/tools/password-strength-checker">Password Strength Checker</Link> to calculate the 
            entropy of your passwords and see exactly how long they would take to crack.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
