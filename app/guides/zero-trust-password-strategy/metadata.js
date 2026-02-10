export const metadata = {
  title: 'Zero Trust Architecture: Identity & Password Strategy Guide (2026)',
  description: 'Implement zero trust authentication with continuous monitoring, adaptive MFA, and passwordless options. Enterprise-grade security roadmap for 2026.',
  category: 'enterprise',
  difficulty: 'Advanced',
  readTime: 15,
  keywords: ['zero trust', 'continuous authentication', 'zero trust architecture', 'adaptive MFA', 'passwordless enterprise'],
  published: '2025-11-05',
  updated: '2026-02-10',
  author: 'DynamicPassGen Enterprise Team',
  image: '/images/guides/zero-trust-hero.jpg'
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
