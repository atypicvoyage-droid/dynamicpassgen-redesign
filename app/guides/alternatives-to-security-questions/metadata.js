export const metadata = {
  title: 'The End of Security Questions: Better Alternatives for Account Recovery',
  description: "Your mother's maiden name isn't a secret; it's public record. Learn why Knowledge-Based Authentication (KBA) is a security vulnerability and what NIST recommends using instead.",
  author: 'DynamicPassGen Security Team',
  published: '2025-11-20',
  updated: '2026-02-09',
  category: 'best-practices',
  difficulty: 'Beginner',
  readTime: 8,
  image: '/images/guides/security-questions-dead-hero.jpg',
  keywords: 'security questions hack, knowledge based authentication, account recovery best practices, nist guidelines security questions, mother\'s maiden name security'
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
