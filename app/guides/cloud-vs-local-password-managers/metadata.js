export const metadata = {
  title: 'Cloud vs. Local Password Managers: Which is Safer?',
  description: 'Should you trust the cloud (1Password, Bitwarden) or keep it offline (KeePass)? We break down the security trade-offs, the LastPass incident, and which method is right for your threat model.',
  keywords: 'cloud password manager vs local, keepass vs bitwarden, lastpass security breach, offline password vault, password manager sync safety',
  author: 'DynamicPassGen Security Team',
  category: 'tools',
  difficulty: 'Intermediate',
  readTime: '10',
  published: '2025-11-10',
  updated: '2026-02-10',
  image: '/images/guides/cloud-vs-local-hero.jpg',
  slug: 'cloud-vs-local-password-managers'
}

export function generateMetadata() {
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
      images: [{
        url: `https://dynamicpassgen.com${metadata.image}`,
        width: 1200,
        height: 630,
        alt: metadata.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [`https://dynamicpassgen.com${metadata.image}`]
    }
  }
}
