export const metadata = {
  title: 'Deepfake Social Engineering: Defend Against AI Voice & Video Scams',
  description: 'Deepfake phishing attacks use AI-generated voice and video to impersonate executives and bypass authentication. Learn detection techniques and defense strategies for 2026.',
  category: 'threats',
  difficulty: 'Intermediate',
  readTime: 10,
  keywords: ['deepfake phishing', 'AI voice scam', 'synthetic identity fraud', 'social engineering 2026', 'deepfake detection'],
  published: '2026-01-15',
  updated: '2026-02-10',
  author: 'DynamicPassGen Research',
  image: '/images/guides/deepfake-phishing-hero.jpg'
}

export function generateMetadata() {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(', '),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.published,
      modifiedTime: metadata.updated,
      authors: [metadata.author],
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image]
    }
  }
}
