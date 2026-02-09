export const metadata = {
  title: "NIST Password Guidelines 2025: Complete Implementation Guide",
  description: "Master NIST SP 800-63B password standards: eliminate complexity rules, add breach screening, and improve security with evidence-based practices. Updated February 2026.",
  keywords: [
    "NIST password guidelines 2025",
    "NIST SP 800-63B",
    "password compliance",
    "enterprise password policy",
    "breach screening",
    "password length requirements"
  ],
  category: "compliance",
  difficulty: "Advanced",
  readTime: 18,
  published: "2025-11-15",
  updated: "2026-02-09",
  author: "DynamicPassGen Security Team",
  image: "/images/guides/nist-guidelines-hero.jpg"
}

// For Next.js generateMetadata
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
      images: [{ url: metadata.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image],
    },
    alternates: {
      canonical: `https://dynamicpassgen.com/guides/nist-password-guidelines-2025`
    }
  }
}
