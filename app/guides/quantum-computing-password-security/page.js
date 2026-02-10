import StandardGuide from '@/components/guides/templates/StandardGuide'
import { 
  Hero, 
  Section,
  H2,
  H3,
  AnswerBlock, 
  CalloutBox,
  ComparisonTable,
  CodeBlock
} from '@/components/guides/guide-blocks'
import { metadata } from './metadata'

export { generateMetadata } from './metadata'

export default function QuantumGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Q-Day is coming. The encryption that protects the internet is about to break. Here is your survival guide to the Post-Quantum era."
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Post-Quantum Cryptography (PQC)?">
        Post-Quantum Cryptography (PQC) refers to new cryptographic algorithms (standardized by NIST in 2024) 
        designed to withstand attacks from large-scale quantum computers. Current standards like RSA and 
        Elliptic Curve (ECC) rely on math problems that quantum computers can solve trivially using 
        <strong>Shor's Algorithm</strong>. PQC uses different math (lattice-based) that remains hard 
        for both classical and quantum machines.
      </AnswerBlock>

      <Section id="the-threat">
        <H2>The Threat: Harvest Now, Decrypt Later (HNDL)</H2>
        <p>
          "I don't need to worry until 2030, right?" <strong>Wrong.</strong>
        </p>
        <p>
          Nation-state adversaries are currently scraping encrypted traffic (VPNs, TLS sessions) and storing 
          it in massive data centers. This data is meaningless static today. But in 5-10 years, when a 
          cryptographically relevant quantum computer (CRQC) comes online, they will decrypt it retroactively.
        </p>
        <CalloutBox type="error" title="What is at Risk?">
          <ul>
            <li>Social Security Numbers & Genomes (Lifetime secrecy required)</li>
            <li>Trade Secrets & IP (20-year secrecy)</li>
            <li>State Secrets & Intelligence</li>
          </ul>
        </CalloutBox>
      </Section>

      <Section id="the-algorithms">
        <H2>The New NIST Standards (FIPS 203, 204, 205)</H2>
        <p>
          NIST has officially finalized the first batch of PQC algorithms. You need to know these names:
        </p>
        
        <H3>1. ML-KEM (formerly CRYSTALS-Kyber)</H3>
        <p>
          <strong>Use Case:</strong> General Encryption / Key Encapsulation. <br/>
          Replaces: RSA key exchange, ECDH.<br/>
          <em>Pros: Fast, small keys. Cons: Larger than ECC.</em>
        </p>

        <H3>2. ML-DSA (formerly CRYSTALS-Dilithium)</H3>
        <p>
          <strong>Use Case:</strong> Digital Signatures.<br/>
          Replaces: RSA signatures, ECDSA.<br/>
          <em>Pros: Strong security, fast verification.</em>
        </p>

        <H3>3. SLH-DSA (formerly SPHINCS+)</H3>
        <p>
          <strong>Use Case:</strong> Backup Signature Scheme.<br/>
          <em>Stateless hash-based signature. Slower, but very conservative security.</em>
        </p>
      </Section>

      <Section id="password-impact">
        <H2>Are My Passwords Vulnerable?</H2>
        <p>
          Surprisingly, <strong>No</strong>.
        </p>
        <p>
          Quantum computers break asymmetric crypto (RSA/ECC). They do <em>not</em> effectively break symmetric 
          crypto (AES) or Hashing (SHA-256, Argon2).
        </p>
        <ComparisonTable
          title="Quantum Impact on Crypto"
          headers={['Algorithm Type', 'Current Standard', 'Quantum Impact', 'Fix']}
          data={[
            {
              old: 'Public Key (Asymmetric)',
              new: 'RSA-2048',
              extra: 'BROKEN (Shor\'s Algo)',
              fix: 'Migrate to ML-KEM'
            },
            {
              old: 'Symmetric Encryption',
              new: 'AES-128',
              extra: 'Weakened (Grover\'s Algo)',
              fix: 'Double key size to AES-256'
            },
            {
              old: 'Hashing',
              new: 'SHA-256 / Argon2',
              extra: 'Minimal Impact',
              fix: 'Safe (Keep using SHA-256+)'
            }
          ]}
        />
      </Section>

      <Section id="action-plan">
        <H2>Your PQC Action Plan</H2>
        <ol>
          <li><strong>Inventory:</strong> Where are you using RSA/ECC? (TLS certificates, VPN keys, SSH keys).</li>
          <li><strong>Vendor Assessment:</strong> Ask AWS, Cloudflare, and Microsoft for their PQC roadmaps.</li>
          <li><strong>Hybrid Mode:</strong> Implement "Hybrid" encryption (Classical + Quantum) immediately for long-term data.</li>
        </ol>
      </Section>
    </StandardGuide>
  )
}
