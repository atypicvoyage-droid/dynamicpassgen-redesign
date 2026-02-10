export const metadata = {
  title: 'How Long Does It Take to Crack Your Password? (2025 Benchmarks)',
  description: 'Think your 8-character password is safe? Think again. We analyze 2025 GPU benchmarks to show exactly how fast a hacker can crack your credentials using modern hardware.',
  keywords: 'how long to crack password, brute force calculator 2025, RTX 4090 hashcat benchmarks, password strength table, gpu cracking speed',
  author: 'DynamicPassGen Security Team',
  category: 'fundamentals',
  difficulty: 'Intermediate',
  readTime: '9',
  published: '2025-11-25',
  updated: '2026-02-10',
  image: '/images/guides/password-cracking-benchmarks-hero.jpg',
  slug: 'how-long-to-crack-password'
}

export function generateMetadata() {
  return {
    title: `${metadata.title} | DynamicPassGen - Secure Password Tools`,
    description: metadata.description,
    keywords: metadata.keywords,
    author: metadata.author,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.published,
      modifiedTime: metadata.updated,
      images: [{
        url: `https://dynamicpassgen.com${metadata.image}`,
        width: 1200,
        height: 630,
        alt: metadata.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [`https://dynamicpassgen.com${metadata.image}`]
    }
  }
}
