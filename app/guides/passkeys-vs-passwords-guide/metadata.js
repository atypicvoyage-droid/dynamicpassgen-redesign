export const metadata = {
  title: 'Passkeys vs Passwords: The Future of Passwordless Authentication (2026)',
  description: '75% of users now know about passkeys. Learn how FIDO2 passwordless authentication works, how to enable it, and why 36% of accounts are switching from traditional passwords.',
  category: 'fundamentals',
  difficulty: 'Intermediate',
  readTime: 12,
  keywords: ['passkeys', 'FIDO2', 'passwordless', 'WebAuthn', 'biometric authentication'],
  published: '2025-11-15',
  updated: '2026-02-10',
  author: 'DynamicPassGen Security Team',
  image: '/images/guides/passkeys-guide-hero.jpg'
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
