import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox 
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'
import Link from 'next/link'

export { generateMetadata } from './metadata'

export default function DictionaryVsBruteForceGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Dictionary Attacks vs. Brute Force: Understanding the Difference"
        subtitle="Not all hacks are the same. Learn the difference between the 'smart' Dictionary Attack and the 'dumb' Brute Force attack—and how to build a password that beats both."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What's the difference between dictionary attacks and brute force?">
        Brute force tries every possible character combination sequentially (slow but guaranteed), while dictionary attacks test only likely passwords from word lists and leaked databases (fast but limited). Most modern attacks use hybrid approaches that combine both methods with pattern variations.
      </AnswerBlock>

      <Section id="introduction">
        <H2>Automated Attacks: The Real Threat</H2>
        
        <p>
          When you hear "hacker trying to guess your password," you probably imagine someone typing frantically on a keyboard.
        </p>

        <p>
          In reality, hacking is automated math. It's software trying millions of keys per second until the door opens.
        </p>

        <p>
          But not all automated attacks are the same. There are two main strategies hackers use: the <strong>Brute Force</strong> 
          (trying everything) and the <strong>Dictionary Attack</strong> (trying likely things). Understanding the difference 
          is the key to creating a password that actually works.
        </p>
      </Section>

      <Section id="analogy">
        <H2>The Dumb Hacker vs. The Smart Hacker</H2>
        
        <p>
          Imagine you lost the combination to a 4-digit padlock.
        </p>

        <ul>
          <li><strong>Method A:</strong> You start at 0000, then 0001, 0002, 0003... all the way to 9999. You'll eventually 
              open it, but it takes time. This is <strong>Brute Force</strong>.</li>
          <li><strong>Method B:</strong> You think, "Most people use birth years." So you try 1980, 1981... up to 2010. 
              You try only 30 combinations instead of 10,000. This is a <strong>Dictionary Attack</strong>.</li>
        </ul>
      </Section>

      <Section id="brute-force">
        <H2>What is a Brute Force Attack?</H2>
        
        <p>
          A Brute Force attack is pure exhaustion. The software tries every possible combination of characters.
        </p>

        <ul>
          <li><code>aaaaaa</code></li>
          <li><code>aaaaab</code></li>
          <li><code>aaaaac</code></li>
          <li>...</li>
        </ul>

        <CalloutBox type="info" title="Strengths & Weaknesses">
          <p>
            <strong>Strengths:</strong> Guaranteed to work... eventually.
          </p>
          <p>
            <strong>Weaknesses:</strong> Incredibly slow. As you add length to a password, the time required grows exponentially. 
            Cracking a 12-character password by brute force would take millions of years.
          </p>
        </CalloutBox>
      </Section>

      <Section id="dictionary-attack">
        <H2>What is a Dictionary Attack?</H2>
        
        <p>
          Hackers know that humans aren't random. We use words. We use names. We use "password."
        </p>

        <p>
          A Dictionary Attack skips the random gibberish (<code>xk9#m!</code>) and only tries words from a pre-defined 
          list (a "Dictionary").
        </p>

        <p>
          This list includes:
        </p>
        <ul>
          <li>Every word in the English language</li>
          <li>Popular passwords (<code>123456</code>, <code>password</code>, <code>qwerty</code>)</li>
          <li>Pop culture terms (<code>Superman</code>, <code>StarWars</code>)</li>
          <li>Leaked passwords from other breaches</li>
        </ul>

        <CalloutBox type="warning" title="The Leetspeak Myth">
          <p>
            Think <code>P@ssw0rd</code> beats a dictionary attack? It doesn't. Hacking tools have "Rule Sets" that 
            automatically swap <code>a → @</code>, <code>s → $</code>, and <code>o → 0</code>. To a hacker, 
            <code>Password</code> and <code>P@$$w0rd</code> are effectively the same word.
          </p>
        </CalloutBox>

        <p>
          <strong>Strengths:</strong> Incredibly fast. It can guess millions of "likely" passwords in seconds.
        </p>
        <p>
          <strong>Weaknesses:</strong> Fails if your password isn't on the list.
        </p>
      </Section>

      <Section id="hybrid-attack">
        <H2>The Hybrid Attack (The Real Danger)</H2>
        
        <p>
          Modern tools combine both methods. They start with a Dictionary Attack ("smart guessing"). If that fails, 
          they append brute-force suffixes.
        </p>

        <ul>
          <li>Try: <code>Summer</code> (Dictionary)</li>
          <li>Try: <code>Summer1</code> (Hybrid)</li>
          <li>Try: <code>Summer123</code> (Hybrid)</li>
          <li>Try: <code>Summer2024</code> (Hybrid)</li>
          <li>Try: <code>Summer2024!</code> (Hybrid)</li>
        </ul>

        <p>
          This catches the vast majority of corporate passwords like <code>CompanyName2024!</code>.
        </p>
      </Section>

      <Section id="defense">
        <H2>How to Defeat Both Strategies</H2>
        
        <p>
          The defense strategy is simple: <strong>Be Long and Random.</strong>
        </p>

        <H3>1. Beat the Dictionary</H3>
        <p>
          Use words that aren't related (Passphrase) or use total gibberish (Password Manager). The phrase 
          <code>correct-horse-battery-staple</code> isn't in a dictionary because "correcthorsebatterystaple" 
          isn't a word.
        </p>

        <H3>2. Beat Brute Force</H3>
        <p>
          Make it long. A 15-character password is mathematically too expensive to brute force.
        </p>

        <CalloutBox type="tip" title="Best Practices">
          <ul>
            <li><strong>Avoid common patterns:</strong> Don't use seasons ("Summer"), months ("July"), or years ("2025")</li>
            <li><strong>Don't reuse passwords:</strong> If your password leaks in one breach, it gets added to the "Dictionary" for everyone else</li>
            <li><strong>Use a Generator:</strong> Let a computer pick your password. Humans are incapable of being truly random</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Is my name a weak password?</H3>
        <p>
          Yes. Names, sports teams, and cities are the first things checked in a dictionary attack. Even 
          <code>Michael123</code> is incredibly weak.
        </p>

        <H3>Does substituting letters protect me?</H3>
        <p>
          No. Swapping 'a' for '@' or 'e' for '3' (Leetspeak) is widely known. Dictionary scripts automatically test 
          these variations (e.g., <code>P@ssw0rd</code>).
        </p>

        <H3>Do hackers do this manually?</H3>
        <p>
          Never. They use tools like John the Ripper or Hashcat that automate the process, running millions of attempts per second.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>The Bottom Line</H2>
        
        <p>
          If your password is a single word found in the dictionary (even with a number at the end), you're vulnerable 
          to a dictionary attack. It takes seconds to crack.
        </p>

        <p>
          If your password is short (under 8 chars), you're vulnerable to brute force. It takes minutes to crack.
        </p>

        <p>
          The sweet spot? <strong>12+ characters</strong> that <strong>don't form a predictable sentence</strong>. 
          That puts you out of reach of both the smart hacker and the dumb one.
        </p>

        <p>
          <strong>Create uncrackable passwords:</strong> Use our{' '}
          <Link href="/">Dynamic Password Generator</Link> with built-in entropy analysis.
        </p>
      </Section>
    </StandardGuide>
  )
}
