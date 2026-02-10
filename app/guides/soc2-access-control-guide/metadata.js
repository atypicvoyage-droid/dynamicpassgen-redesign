export const metadata = {
  title: 'SOC 2 Type II: The Definitive Guide to Access Control & Auth',
  description: 'Preparing for a SOC 2 audit? Learn exactly what auditors look for in Access Control (CC6) and Logical Access (CC6.1), from onboarding checklists to quarterly access reviews.',
  keywords: 'SOC 2 Type II access control, CC6.1 logical access, quarterly access reviews, SOC 2 password policy, SaaS security audit',
  author: 'DynamicPassGen Security Team',
  category: 'compliance',
  difficulty: 'Advanced',
  readTime: '14',
  published: '2025-11-15',
  updated: '2026-02-10',
  image: '/images/guides/soc2-compliance-hero.jpg',
  slug: 'soc2-access-control-guide'
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
