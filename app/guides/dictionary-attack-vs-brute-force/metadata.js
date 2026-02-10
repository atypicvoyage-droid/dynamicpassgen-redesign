export const metadata = {
  title: 'Dictionary Attacks vs. Brute Force: Understanding the Difference',
  description: 'Not all hacks are the same. Learn the difference between the smart Dictionary Attack and the dumb Brute Force attack—and how to build a password that beats both.',
  keywords: 'dictionary attack vs brute force, rainbow tables, hybrid attack, password cracking methods, cyber security basics',
  author: 'DynamicPassGen Security Team',
  category: 'threats',
  difficulty: 'Beginner',
  readTime: '7',
  published: '2025-11-05',
  updated: '2026-02-10',
  image: '/images/guides/dictionary-vs-brute-force-hero.jpg',
  slug: 'dictionary-attack-vs-brute-force'
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
