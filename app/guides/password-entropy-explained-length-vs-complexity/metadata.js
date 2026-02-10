export const metadata = {
  title: 'Password Entropy 101: Why Length Beats Complexity Every Time',
  description: 'Stop forcing users to use special characters. Learn the math behind password entropy and why a long phrase like "correct-horse-battery-staple" is mathematically stronger than "Tr0ub4dor&3".',
  keywords: 'password entropy, password strength explained, length vs complexity, brute force calculation, XKCD password logic',
  author: 'DynamicPassGen Security Team',
  category: 'fundamentals',
  difficulty: 'Beginner',
  readTime: '8',
  published: '2025-11-20',
  updated: '2026-02-10',
  image: '/images/guides/password-entropy-hero.jpg',
  slug: 'password-entropy-explained-length-vs-complexity'
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
