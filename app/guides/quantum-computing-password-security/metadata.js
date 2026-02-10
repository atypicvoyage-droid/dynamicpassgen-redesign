export const metadata = {
  title: 'Quantum Computing & Password Security: Post-Quantum Crypto Guide',
  description: 'Quantum computers will break current encryption by 2030-2035. Learn about post-quantum cryptography, NIST standards, and how to prepare your password security for the quantum era.',
  category: 'fundamentals',
  difficulty: 'Advanced',
  readTime: 13,
  keywords: ['quantum computing', 'post-quantum cryptography', 'quantum-safe encryption', 'NIST PQC', 'harvest now decrypt later'],
  published: '2025-12-10',
  updated: '2026-02-10',
  author: 'DynamicPassGen Research',
  image: '/images/guides/quantum-security-hero.jpg'
}

export function generateMetadata() {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(', '),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.published,
      modifiedTime: metadata.updated,
      authors: [metadata.author],
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image]
    }
  }
}
