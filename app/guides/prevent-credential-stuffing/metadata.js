export const metadata = {
  title: 'Credential Stuffing Attacks: How They Work & How to Prevent Them',
  description: 'Why do hackers target accounts that haven\'t been breached? Because of Credential Stuffing. Learn how attackers weaponize password reuse and how to stop them cold.',
  keywords: 'credential stuffing definition, account takeover ATO, password reuse attack, bot mitigation, haveibeenpwned',
  author: 'DynamicPassGen Security Team',
  category: 'threats',
  difficulty: 'Intermediate',
  readTime: '9',
  published: '2025-11-25',
  updated: '2026-02-10',
  image: '/images/guides/credential-stuffing-hero.jpg',
  slug: 'prevent-credential-stuffing'
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
