export const metadata = {
  title: 'Remote Work Password Policy: Security Framework for 2026',
  description: 'Secure your hybrid workforce with modern password policies for remote access. Includes MFA enforcement, device trust, and conditional access implementation guide.',
  category: 'enterprise',
  difficulty: 'Intermediate',
  readTime: 11,
  keywords: ['remote work security', 'work from home policy', 'hybrid workforce', 'remote access control', 'BYOD password policy'],
  published: '2025-11-22',
  updated: '2026-02-10',
  author: 'DynamicPassGen Enterprise Team',
  image: '/images/guides/remote-work-hero.jpg'
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
