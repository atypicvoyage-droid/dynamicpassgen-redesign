export const metadata = {
  title: 'ISO 27001:2022 Access Control: Complete Implementation Guide',
  description: 'Master ISO 27002:2022 access control requirements (5.15-5.18). Step-by-step implementation guide for identity management, authentication, and access rights compliance.',
  category: 'compliance',
  difficulty: 'Advanced',
  readTime: 16,
  keywords: ['ISO 27001', 'ISO 27002 2022', 'access control', '5.17 authentication', 'information security compliance'],
  published: '2025-09-10',
  updated: '2026-02-10',
  author: 'DynamicPassGen Compliance Team',
  image: '/images/guides/iso-27001-hero.jpg'
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
