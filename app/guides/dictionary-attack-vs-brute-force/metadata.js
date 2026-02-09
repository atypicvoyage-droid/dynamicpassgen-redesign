export const metadata = {
  title: 'Dictionary Attacks vs. Brute Force: Understanding the Difference',
  description: "Not all hacks are the same. Learn the difference between the 'smart' Dictionary Attack and the 'dumb' Brute Force attack—and how to build a password that beats both.",
  author: 'DynamicPassGen Security Team',
  published: '2025-11-05',
  updated: '2026-02-09',
  category: 'threats',
  difficulty: 'Beginner',
  readTime: 7,
  image: '/images/guides/dictionary-vs-brute-force-hero.jpg',
  keywords: 'dictionary attack vs brute force, rainbow tables, hybrid attack, password cracking methods, cyber security basics'
}

export async function generateMetadata() {
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
      authors: [metadata.author],
      images: [metadata.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image],
    },
  }
}
