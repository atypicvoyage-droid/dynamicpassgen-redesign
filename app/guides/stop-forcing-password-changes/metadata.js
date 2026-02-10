export const metadata = {
  title: 'Why Mandatory Password Expiration Is Dead (And Dangerous)',
  description: 'Still forcing users to change their password every 90 days? You are actually making your organization less secure. Here is the science (and the NIST standards) explaining why rotation is dead.',
  keywords: 'password expiration policy 2025, NIST 90 day password change, microsoft password rotation, bad security practices, password fatigue',
  author: 'DynamicPassGen Security Team',
  category: 'enterprise',
  difficulty: 'Intermediate',
  readTime: '11',
  published: '2025-11-10',
  updated: '2026-02-10',
  image: '/images/guides/password-expiration-dead-hero.jpg',
  slug: 'stop-forcing-password-changes'
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
