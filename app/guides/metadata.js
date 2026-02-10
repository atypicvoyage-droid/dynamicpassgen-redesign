export const metadata = {
  title: 'Security Guides & Best Practices | Password Security Library',
  description: 'Complete library of 16+ expert password security guides covering NIST compliance, 2FA setup, PCI DSS requirements, SSO implementation, credential stuffing prevention, and more. Regularly updated.',
  keywords: 'password security guides, NIST guidelines, 2FA tutorial, PCI DSS compliance, SOC2 access control, SSO implementation, password best practices',
  openGraph: {
    title: 'Security Guides & Best Practices | DynamicPassGen',
    description: 'Your complete library of password security, compliance, and authentication guides from NIST standards to 2FA implementation.',
    type: 'website',
    images: [{
      url: 'https://dynamicpassgen.com/images/guides-og.jpg',
      width: 1200,
      height: 630,
      alt: 'DynamicPassGen Security Guides'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Guides & Best Practices | DynamicPassGen',
    description: 'Complete library of password security guides: NIST, 2FA, PCI DSS, SSO, and more.'
  }
}

export function generateMetadata() {
  return metadata
}
