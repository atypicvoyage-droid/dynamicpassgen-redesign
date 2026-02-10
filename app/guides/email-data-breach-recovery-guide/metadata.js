export const metadata = {
  title: 'My Email Was In a Data Breach: 5 Immediate Steps to Take',
  description: 'Don\'t panic. Just act. If your email appeared in a "Have I Been Pwned" alert or a dark web scan, here is your step-by-step battle plan to lock down your identity.',
  keywords: 'data breach checklist, email hack recovery, change password immediately, credit freeze guide, identity monitoring',
  author: 'DynamicPassGen Security Team',
  category: 'threats',
  difficulty: 'Beginner',
  readTime: '8',
  published: '2025-11-14',
  updated: '2026-02-10',
  image: '/images/guides/data-breach-recovery-hero.jpg',
  slug: 'email-data-breach-recovery-guide'
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
