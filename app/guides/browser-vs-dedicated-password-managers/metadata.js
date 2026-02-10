export const metadata = {
  title: 'Browser vs Dedicated Password Managers: Security Analysis (2026)',
  description: 'Is Chrome password manager safe enough? Compare encryption, phishing protection, and security features of browser-based vs dedicated password managers like 1Password and Bitwarden.',
  category: 'tools',
  difficulty: 'Intermediate',
  readTime: 11,
  keywords: ['browser password manager', 'Chrome passwords', 'Safari Keychain', '1Password', 'Bitwarden', 'password manager comparison'],
  published: '2025-10-20',
  updated: '2026-02-10',
  author: 'DynamicPassGen Security Team',
  image: '/images/guides/browser-vs-dedicated-hero.jpg'
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
