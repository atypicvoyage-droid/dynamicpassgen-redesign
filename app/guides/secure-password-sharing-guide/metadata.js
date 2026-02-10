export const metadata = {
  title: 'Password Sharing: Enterprise Security Risks & Safe Methods (2026)',
  description: '73% of employees share passwords via Slack or email. Learn the hidden risks, compliance implications, and secure password sharing methods for teams.',
  category: 'enterprise',
  difficulty: 'Beginner',
  readTime: 9,
  keywords: ['password sharing', 'secure password sharing', 'team password management', 'shared credentials', 'password vault'],
  published: '2025-10-05',
  updated: '2026-02-10',
  author: 'DynamicPassGen Enterprise Team',
  image: '/images/guides/secure-sharing-hero.jpg'
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
