export const metadata = {
  title: 'Implementing Single Sign-On (SSO): Pros, Cons, and Best Practices',
  description: 'Managing 50 different logins for every employee is a security nightmare. Learn how SSO works, the difference between SAML and OIDC, and why it is the ultimate upgrade for enterprise security.',
  keywords: 'what is sso, single sign on benefits, SAML vs OIDC, identity provider setup, okta implementation guide',
  author: 'DynamicPassGen Security Team',
  category: 'enterprise',
  difficulty: 'Advanced',
  readTime: '13',
  published: '2025-11-15',
  updated: '2026-02-10',
  image: '/images/guides/sso-implementation-hero.jpg',
  slug: 'sso-implementation-guide'
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
