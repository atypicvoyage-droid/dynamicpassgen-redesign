export const metadata = {
  title: 'HIPAA Compliant Passwords: What Healthcare Providers Need to Know',
  description: 'Stop worrying about audits. Here is the definitive guide to HIPAA password requirements for 2025, covering ePHI protection, multi-factor authentication, and access controls for healthcare.',
  author: 'DynamicPassGen Security Team',
  published: '2025-11-12',
  updated: '2026-02-09',
  category: 'compliance',
  difficulty: 'Intermediate',
  readTime: 10,
  image: '/images/guides/hipaa-compliance-hero.jpg',
  keywords: 'HIPAA compliant passwords, ePHI security requirements, healthcare data protection, HIPAA password policy 2025'
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
