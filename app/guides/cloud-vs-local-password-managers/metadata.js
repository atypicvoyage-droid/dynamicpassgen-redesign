export const metadata = {
  title: 'Cloud vs. Local Password Managers: Which is Safer?',
  description: "Should you trust the cloud (1Password, Bitwarden) or keep it offline (KeePass)? We break down the security trade-offs, the 'LastPass' incident, and which method is right for your threat model.",
  author: 'DynamicPassGen Security Team',
  published: '2025-11-10',
  updated: '2026-02-09',
  category: 'tools',
  difficulty: 'Intermediate',
  readTime: 10,
  image: '/images/guides/cloud-vs-local-hero.jpg',
  keywords: 'cloud password manager vs local, keepass vs bitwarden, lastpass security breach, offline password vault, password manager sync safety'
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
