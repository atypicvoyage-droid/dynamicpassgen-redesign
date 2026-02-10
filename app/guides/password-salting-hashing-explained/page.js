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

export default function SaltingHashingGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title="Understanding Salt & Hashing: How Websites Store Your Passwords"
        subtitle="When you sign up for a website, they (hopefully) don't save your password. They save a 'Hash.' Learn the difference between Encryption, Hashing, and Salting—and why it matters."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is the difference between hashing and salting passwords?">
        Hashing converts passwords into fixed-length fingerprints using one-way functions (cannot be reversed). Salting adds random data to each password before hashing, ensuring identical passwords produce different hashes. This defeats rainbow tables and forces attackers to crack each password individually.
      </AnswerBlock>

      <Section id="introduction">
        <H2>The Plain Text Crime</H2>
        
        <p>
          Have you ever used a "Forgot Password" feature, and the website emailed you your old password in plain text?
        </p>

        <p>
          <strong>Run.</strong> Delete your account immediately.
        </p>

        <p>
          That website is committing a cardinal sin of security: storing passwords in <strong>Plain Text</strong>. 
          Competent websites never store your password. They store a mathematical fingerprint of your password called 
          a <strong>Hash</strong>.
        </p>

        <p>
          In this guide, we look under the hood of the database to explain how Hashing, Salting, and Peppering protect 
          your data even when a server gets hacked.
        </p>

        <CalloutBox type="danger" title="Red Flag">
          <p>
            If a website can email you your actual password, it means they stored it unencrypted. This is a massive 
            security violation. They should only be able to send a <strong>password reset link</strong>.
          </p>
        </CalloutBox>
      </Section>

      <Section id="encryption-vs-hashing">
        <H2>Encryption vs. Hashing: The One-Way Street</H2>
        
        <p>
          People confuse these terms constantly.
        </p>

        <ComparisonTable
          title="Encryption vs Hashing"
          headers={['Feature', 'Encryption', 'Hashing']}
          data={[
            {
              old: 'Direction',
              new: 'Two-way (reversible)::One-way (irreversible)'
            },
            {
              old: 'Analogy',
              new: 'Like a safe (lock/unlock)::Like a blender (cannot un-blend)'
            },
            {
              old: 'Requires key',
              new: 'Yes::No'
            },
            {
              old: 'Use case',
              new: 'Data transmission::Password storage'
            },
            {
              old: 'Output',
              new: 'Variable length::Fixed length'
            }
          ]}
        />

        <p>
          <strong>Encryption</strong> is <strong>Two-Way</strong>. It is like a safe. You can lock it (encrypt) and 
          unlock it (decrypt) if you have the key.
        </p>

        <p>
          <strong>Hashing</strong> is <strong>One-Way</strong>. It is like a blender. Once you blend a smoothie, you 
          cannot un-blend it back into a strawberry.
        </p>

        <p>
          Websites use <strong>Hashing</strong>. When you type your password to login, they blend your input 
          (<code>Password123</code>) and compare the resulting smoothie to the smoothie they have on file. If they match, 
          you get in.
        </p>
      </Section>

      <Section id="hash-function">
        <H2>What is a Hash Function?</H2>
        
        <p>
          A hash function is a math algorithm (like <strong>SHA-256</strong>) that turns any input into a fixed-length 
          string of characters.
        </p>

        <ul>
          <li>Input: <code>Cat</code> → Hash: <code>77af...</code></li>
          <li>Input: <code>Dog</code> → Hash: <code>0f1a...</code></li>
        </ul>

        <CalloutBox type="info" title="The Avalanche Effect">
          <p>
            If you change just <strong>one letter</strong> of the input, the Hash changes completely.
          </p>
          <ul>
            <li>Input: <code>Cat</code> → Hash: <code>77af...</code></li>
            <li>Input: <code>Catz</code> → Hash: <code>b94d...</code> (Totally different)</li>
          </ul>
        </CalloutBox>

        <H3>Properties of Good Hash Functions</H3>
        <ul>
          <li><strong>Deterministic:</strong> Same input always produces same output</li>
          <li><strong>Fast to compute:</strong> Can quickly generate hash</li>
          <li><strong>Irreversible:</strong> Cannot derive original input from hash</li>
          <li><strong>Collision-resistant:</strong> Hard to find two inputs with same hash</li>
        </ul>
      </Section>

      <Section id="rainbow-tables">
        <H2>The Problem: Rainbow Tables</H2>
        
        <p>
          In the early days, hackers realized that <code>Password123</code> always hashes to the same string: <code>e7b...</code>.
        </p>

        <p>
          So they pre-calculated the hashes for every word in the dictionary and stored them in a massive database 
          called a <strong>Rainbow Table</strong>.
        </p>

        <p>
          If they hacked a database and saw <code>e7b...</code>, they didn't need to crack it. They just looked it up 
          in their table and instantly knew it meant <code>Password123</code>.
        </p>

        <CalloutBox type="warning" title="The Attack">
          <ol>
            <li>Hacker steals database with hashed passwords</li>
            <li>Looks up each hash in pre-computed rainbow table</li>
            <li>Instantly recovers millions of passwords</li>
            <li>Total time: minutes, not years</li>
          </ol>
        </CalloutBox>
      </Section>

      <Section id="salt">
        <H2>The Solution: Add Some Salt</H2>
        
        <p>
          To defeat Rainbow Tables, developers invented <strong>Salt</strong>.
        </p>

        <p>
          A <strong>Salt</strong> is a random string of characters added to your password <em>before</em> it is hashed.
        </p>

        <ul>
          <li><strong>User A</strong> password: <code>password</code> + Salt: <code>Xy9</code> → Hash: <code>a84f...</code></li>
          <li><strong>User B</strong> password: <code>password</code> + Salt: <code>Lm2</code> → Hash: <code>c91b...</code></li>
        </ul>

        <p>
          Now, even though User A and User B have the same password, their hashes look completely different in the database. 
          The hacker's Rainbow Table is useless because it doesn't contain hashes for <code>passwordXy9</code>.
        </p>

        <CalloutBox type="success" title="Key Takeaway">
          <p>
            <strong>Salting</strong> ensures that every user's hash is unique, even if they share the same password. 
            It forces the hacker to crack every single password individually, which is too slow to be profitable.
          </p>
        </CalloutBox>
      </Section>

      <Section id="pepper">
        <H2>Pepper: The Secret Ingredient</H2>
        
        <p>
          Some high-security systems go a step further and add <strong>Pepper</strong>.
        </p>

        <ul>
          <li><strong>Salt</strong> is stored in the database next to the password</li>
          <li><strong>Pepper</strong> is stored <em>somewhere else</em> (like in the application code or a secure hardware module)</li>
        </ul>

        <p>
          If a hacker steals the database (SQL Injection), they get the Hashes and the Salts. But they <em>don't</em> 
          get the Pepper. Without the Pepper, they can't crack a single password, even if they have infinite time.
        </p>

        <CalloutBox type="info" title="Salt vs Pepper">
          <ul>
            <li><strong>Salt:</strong> Unique per user, stored with hash in database, prevents rainbow tables</li>
            <li><strong>Pepper:</strong> Same for all users, stored separately, provides defense-in-depth if database is stolen</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="modern-algorithms">
        <H2>Modern Hashing Algorithms</H2>
        
        <H3>Fast Hashes (Avoid for Passwords)</H3>
        <ul>
          <li><strong>MD5, SHA-1, SHA-256:</strong> Designed for speed, terrible for passwords</li>
          <li>Can be cracked billions of times per second with modern GPUs</li>
          <li>Status: Obsolete for password storage</li>
        </ul>

        <H3>Slow Hashes (Modern Standard)</H3>
        <ul>
          <li><strong>Bcrypt:</strong> Adjustable work factor, widely supported, battle-tested since 1999</li>
          <li><strong>Scrypt:</strong> Memory-hard algorithm, resistant to ASIC attacks</li>
          <li><strong>Argon2:</strong> Winner of Password Hashing Competition, best-in-class, recommended for new systems</li>
        </ul>

        <CalloutBox type="tip" title="Why Slow is Good">
          <p>
            Modern algorithms like Bcrypt and Argon2 are designed to be deliberately slow (100-250ms to hash). 
            This is imperceptible to users logging in, but makes brute force attacks 100,000x slower.
          </p>
        </CalloutBox>
      </Section>

      <Section id="why-it-matters">
        <H2>Why This Matters to You</H2>
        
        <p>
          Understanding this explains why <strong>password reuse</strong> is so dangerous.
        </p>

        <p>
          If you use the same password on <code>Site A</code> (Good Security, Salted & Hashed) and <code>Site B</code> 
          (Bad Security, Plain Text):
        </p>

        <ol>
          <li>Hacker breaches <code>Site B</code>. They get your plain text password</li>
          <li>They try that password on <code>Site A</code></li>
          <li>They get in</li>
        </ol>

        <p>
          The math of Hashing protects you from a breach at <code>Site A</code>. But nothing protects you from a breach 
          at <code>Site B</code> except <strong>having a unique password</strong>.
        </p>
      </Section>

      <Section id="faq">
        <H2>Common Questions Answered</H2>
        
        <H3>Can a hash be reversed?</H3>
        <p>
          No. Hashing is a one-way mathematical function. You can't turn a nugget back into a chicken. You can only 
          guess input until you match the output.
        </p>

        <H3>What is the difference between Salt and Pepper?</H3>
        <p>
          Salt is stored <em>with</em> the password in the database. Pepper is a secret key stored <em>separately</em> 
          (in the app code or a hardware security module).
        </p>

        <H3>Why don't they just encrypt passwords?</H3>
        <p>
          Encryption requires a key. If a hacker stole the database and the key, they could decrypt everyone's passwords 
          instantly. Hashing prevents this.
        </p>
      </Section>

      <Section id="conclusion">
        <H2>Conclusion</H2>
        
        <p>
          Modern cryptography is amazing. Algorithms like <strong>Argon2</strong> and <strong>Bcrypt</strong> are designed 
          to be deliberately slow, making them incredibly resistant to GPU attacks.
        </p>

        <p>
          But math can only protect a secret if it stays secret. The moment you type your password into a phishing site 
          or reuse it on a sloppy forum, all the hashing in the world can't save you.
        </p>

        <CalloutBox type="success" title="Your Action Plan">
          <p>
            Use our <Link href="/">Password Generator</Link> to create unique passwords for every site. Let the 
            math protect you properly.
          </p>
        </CalloutBox>
      </Section>
    </StandardGuide>
  )
}
