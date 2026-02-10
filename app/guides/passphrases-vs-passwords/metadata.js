export const metadata = {
  title: 'Passphrases vs. Passwords: Why You Should Switch Today',
  description: 'Complexity is out. Length is in. Learn why a random sentence like "correct-horse-battery-staple" is more secure and easier to remember than your current complex password.',
  keywords: 'passphrase generator, correct horse battery staple, xkcd password strength, diceware method, easy to remember passwords',
  author: 'DynamicPassGen Security Team',
  category: 'fundamentals',
  difficulty: 'Beginner',
  readTime: '7',
  published: '2025-11-05',
  updated: '2026-02-10',
  image: '/images/guides/passphrases-vs-passwords-hero.jpg',
  slug: 'passphrases-vs-passwords'
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
