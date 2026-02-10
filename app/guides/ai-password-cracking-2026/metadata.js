export const metadata = {
  title: 'AI Password Cracking in 2026: Defense Strategy',
  description: 'AI tools crack 51% of passwords in under a minute. Learn how PassGAN and neural networks predict human password patterns, and how to build AI-resistant credentials.',
  category: 'threats',
  difficulty: 'Advanced',
  readTime: 14,
  keywords: ['AI password cracking', 'PassGAN', 'machine learning security', 'GAN attacks', 'neural network passwords'],
  published: '2025-12-01',
  updated: '2026-02-10',
  author: 'DynamicPassGen Security Team',
  image: '/images/guides/ai-password-cracking-hero.jpg'
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
