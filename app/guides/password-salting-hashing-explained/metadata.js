export const metadata = {
  title: 'Understanding Salt & Hashing: How Websites Store Your Passwords',
  description: 'When you sign up for a website, they (hopefully) don\'t save your password. They save a "Hash." Learn the difference between Encryption, Hashing, and Salting—and why it matters.',
  keywords: 'password hashing explained, what is salt in cryptography, encryption vs hashing, rainbow tables, argon2 vs bcrypt',
  author: 'DynamicPassGen Security Team',
  category: 'tools',
  difficulty: 'Advanced',
  readTime: '9',
  published: '2025-11-15',
  updated: '2026-02-10',
  image: '/images/guides/salting-hashing-hero.jpg',
  slug: 'password-salting-hashing-explained'
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
