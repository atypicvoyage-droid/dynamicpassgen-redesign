export const metadata = {
  title: 'My Email Was In a Data Breach: 5 Immediate Steps to Take',
  description: "Don't panic. Just act. If your email appeared in a 'Have I Been Pwned' alert or a dark web scan, here's your step-by-step battle plan to lock down your identity.",
  author: 'DynamicPassGen Security Team',
  published: '2025-11-14',
  updated: '2026-02-09',
  category: 'threats',
  difficulty: 'Beginner',
  readTime: 8,
  image: '/images/guides/data-breach-recovery-hero.jpg',
  keywords: 'data breach checklist, email hack recovery, change password immediately, credit freeze guide, identity monitoring'
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
