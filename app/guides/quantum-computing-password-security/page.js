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

export { generateMetadata } from './metadata'

export default function QuantumGuide() {
  return (
    <StandardGuide metadata={metadata}>
      <Hero
        title={metadata.title}
        subtitle="Q-Day is coming. Is your cryptography ready for the end of RSA?"
        category={metadata.category}
        difficulty={metadata.difficulty}
        readTime={metadata.readTime}
        image={metadata.image}
      />

      <AnswerBlock question="What is Post-Quantum Cryptography (PQC)?">
        PQC refers to cryptographic algorithms (like CRYSTALS-Kyber) designed to be secure 
        against both classical and quantum computers. It aims to replace current standards 
        (RSA, ECC) which will be broken by Shor's algorithm once sufficiently powerful 
        quantum computers exist (predicted ~2030).
      </AnswerBlock>

      <Section id="threat">
        <H2>Harvest Now, Decrypt Later</H2>
        <p>
          Why worry now? Attackers are stealing encrypted data TODAY. They can't read it yet, 
          but they store it until quantum computers are available to decrypt it.
        </p>
        <CalloutBox type="warning" title="Long-Term Secrets at Risk">
          <p>
            Medical records, state secrets, and trade secrets encrypted today with standard 
            TLS/RSA are already vulnerable to future decryption.
          </p>
        </CalloutBox>
      </Section>

      <Section id="standards">
        <H2>NIST PQC Standards</H2>
        <p>
          NIST has selected the algorithms to replace RSA:
        </p>
        <ul>
          <li><strong>CRYSTALS-Kyber:</strong> For general encryption (key encapsulation).</li>
          <li><strong>CRYSTALS-Dilithium:</strong> For digital signatures.</li>
          <li><strong>SPHINCS+:</strong> Stateless hash-based signatures.</li>
        </ul>
      </Section>

      <Section id="preparation">
        <H2>Preparing Passwords</H2>
        <p>
          Good news: Symmetric encryption (AES) and hashing (SHA-256, Argon2) are mostly 
          quantum-resistant. You just need to double key lengths (AES-128 → AES-256).
        </p>
      </Section>
    </StandardGuide>
  )
}
