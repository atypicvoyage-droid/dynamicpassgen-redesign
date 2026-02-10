export const metadata = {
  title: 'PCI DSS Password Requirements: The 2025 Compliance Checklist',
  description: 'Stop guessing with auditors. Here is the plain-English checklist for PCI DSS v4.0 password requirements, including the new rules on 12-character minimums and the death of mandatory rotation.',
  keywords: 'PCI DSS v4.0 password requirements, PCI compliance checklist 2025, credit card data security, password length PCI, MFA requirements PCI',
  author: 'DynamicPassGen Security Team',
  category: 'compliance',
  difficulty: 'Intermediate',
  readTime: '12',
  published: '2025-11-10',
  updated: '2026-02-10',
  image: '/images/guides/pci-compliance-hero.jpg',
  slug: 'pci-dss-password-requirements-2025'
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
