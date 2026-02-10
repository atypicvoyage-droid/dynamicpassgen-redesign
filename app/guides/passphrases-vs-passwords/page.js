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

export default function PassphrasesVsPasswordsGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Passphrases vs. Passwords: Why You Should Switch Today"
        subtitle="Complexity is out. Length is in. Learn why a random sentence like 'correct-horse-battery-staple' is more secure and easier to remember than your current complex password."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="Are passphrases more secure than passwords?">
        Yes. A 4-word random passphrase (approximately 25 characters) has significantly higher entropy (70-100 bits) than a 10-character complex password (40-50 bits). Passphrases are easier to remember, faster to type on mobile devices, and mathematically much harder to crack.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Lie We Were Taught</H2>
        
        <p>
          For 20 years, we were taught a lie: <em>"A strong password looks like garbage."</em>
        </p>

        <p>
          We were told to take a word like "Password" and turn it into <code>P@ssw0rd1!</code>. We thought we were 
          being clever. In reality, we were just being annoying to ourselves and predictable to computers.
        </p>

        <p>
          Enter the <strong>Passphrase</strong>.
        </p>

        <p>
          It is the modern solution to the authentication problem. It is a method that respects how the human brain 
          works (we remember stories) while respecting the mathematics of security (length is king).
        </p>

        <CalloutBox type="info" title="The Golden Rule">
          <p>
            A password should be hard for computers to guess, but easy for humans to remember. Most people do the 
            exact opposite.
          </p>
        </CalloutBox>
      </Section>

      <Section id="complex-password-problem">
        <H2>The Problem with 'Complex' Passwords</H2>
        
        <p>
          Complex passwords like <code>J8#kL2$p</code> fail for two reasons:
        </p>

        <ol>
          <li>
            <strong>Hard to type:</strong> Have you ever tried typing <code>&</code> or <code>%</code> on a smartphone 
            keyboard? It is a nightmare of toggling menus.
          </li>
          <li>
            <strong>Hard to remember:</strong> Because they are abstract, our brains can't hook onto them. So what do 
            we do? We write them down, or we reuse them everywhere.
          </li>
        </ol>

        <CalloutBox type="warning" title="The Paradox">
          <p>
            Complexity requirements force users to create passwords that are <strong>hard for humans to remember</strong> 
            but <strong>easy for computers to guess</strong> because everyone uses the same patterns.
          </p>
        </CalloutBox>
      </Section>

      <Section id="what-is-passphrase">
        <H2>What is a Passphrase?</H2>
        
        <p>
          A passphrase is a string of <strong>random words</strong>.
        </p>

        <H3>Examples:</H3>
        <ul>
          <li>Bad: <code>IlovePizza!</code> (Predictable sentence structure)</li>
          <li>Bad: <code>To be or not to be</code> (Famous quote)</li>
          <li>Good: <code>correct horse battery staple</code> (Random, unrelated words)</li>
        </ul>

        <p>
          Because the words are random, they cannot be guessed by a dictionary attack. But because they are words, 
          you can visualize them. You can imagine a Horse holding a Battery with a Staple. 
          That mental image sticks in your brain forever.
        </p>

        <CalloutBox type="success" title="The Mathematics">
          <p>
            A 4-word passphrase (approx. 25 characters) has significantly higher entropy (security) than a 10-character 
            complex password. The math isn't even close.
          </p>
        </CalloutBox>
      </Section>

      <Section id="diceware-method">
        <H2>The Diceware Method</H2>
        
        <p>
          How do you generate a truly random passphrase? You use <strong>Diceware</strong>.
        </p>

        <p>
          Traditionally, this involved rolling a physical 6-sided die five times to generate a number (like <code>43152</code>). 
          You would look that number up in a special word list to find your word. You repeat this 4 or 5 times.
        </p>

        <p>
          Today, password managers do this digital equivalent automatically. They pull from a list of 7,776 curated words 
          to generate a string that is statistically random.
        </p>
      </Section>

      <Section id="mobile-advantage">
        <H2>Why Passphrases Win on Mobile</H2>
        
        <p>
          We live on our phones. Typing <code>Tr0ub4dor&3</code> on an iPhone requires switching between the ABC, 
          123, and special character keyboards <strong>six times</strong>.
        </p>

        <p>
          Typing <code>correct horse battery staple</code> requires switching keyboards <strong>zero times</strong>. 
          You just type.
        </p>

        <p>
          For user experience, passphrases are a massive upgrade. They reduce login frustration and 
          password reset requests because users actually remember them.
        </p>

        <ComparisonTable
          title="Passphrases vs Complex Passwords"
          headers={['Factor', 'Complex Password', 'Passphrase']}
          data={[
            {
              old: 'Security (Entropy)',
              new: '40-50 bits::70-100 bits'
            },
            {
              old: 'Memorability',
              new: 'Difficult (abstract)::Easy (visual story)'
            },
            {
              old: 'Mobile Typing',
              new: '6+ keyboard switches::0 keyboard switches'
            },
            {
              old: 'Typing Speed',
              new: 'Slow (special chars)::Fast (words)'
            }
          ]}
        />
      </Section>

      <Section id="best-practices">
        <H2>Passphrase Best Practices</H2>
        
        <CalloutBox type="tip" title="Quick Tips">
          <ul>
            <li>Don't make up words yourself. Your brain isn't random enough</li>
            <li>Do use a separator like spaces or hyphens</li>
            <li>Do add capitalization if you want, but length is the main factor</li>
            <li>Don't use song lyrics, movie quotes, or famous phrases</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="when-not-to-use">
        <H2>When NOT to Use a Passphrase</H2>
        
        <p>
          Passphrases are great for <strong>Master Passwords</strong> or for your computer login.
        </p>

        <p>
          However, for random accounts, you shouldn't be memorizing anything. Let your 
          password manager generate random strings and autofill them.
        </p>

        <CalloutBox type="info" title="The Rule">
          <p>
            Use passphrases for the few keys you must keep in your head. Let the robots handle the rest.
          </p>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Do spaces count as characters?</H3>
        <p>
          Yes! Spaces are valid special characters. <code>correct horse</code> is stronger than <code>correcthorse</code> 
          because it increases the character count and entropy.
        </p>

        <H3>Can I use a song lyric or quote?</H3>
        <p>
          No. Famous quotes, song lyrics, or movie lines are in hacker databases. Your passphrase 
          must be RANDOM words.
        </p>

        <H3>Are 3 words enough?</H3>
        <p>
          Usually no. We recommend <strong>4 words as the minimum standard</strong>, and 5 for high security.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          It is time to retire the complex password. Switch to passphrases. They are friendlier, stronger, and they 
          stop the endless cycle of forgotten passwords.
        </p>

        <p>
          Use our <Link href="/tools/passphrase-generator">Passphrase Generator</Link> to create memorable, 
          cryptographically secure passphrases.
        </p>
      </Section>
    </StandardGuide>
  )
}
