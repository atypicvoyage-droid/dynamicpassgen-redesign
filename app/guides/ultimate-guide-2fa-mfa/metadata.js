export const metadata = {
  title: 'The Ultimate Guide to Two-Factor Authentication (2FA) & MFA',
  description: 'Passwords aren\'t enough anymore. Learn the difference between SMS, TOTP apps, and Hardware Keys—and why enabling 2FA is the single most important step for your digital security.',
  keywords: 'what is 2fa, multi-factor authentication explained, sms vs authenticator app, yubikey guide, 2fa security',
  author: 'DynamicPassGen Security Team',
  category: 'fundamentals',
  difficulty: 'Beginner',
  readTime: '10',
  published: '2025-11-25',
  updated: '2026-02-10',
  image: '/images/guides/2fa-ultimate-guide-hero.jpg',
  slug: 'ultimate-guide-2fa-mfa'
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
