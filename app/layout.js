// app/layout.js - ENHANCED VERSION WITH STRONG SEO
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Enhanced metadata with comprehensive SEO
export const metadata = {
  title: {
    default: 'Free Password Generator - Secure, NIST 2025 Compliant | DynamicPassGen',
    template: '%s | DynamicPassGen - Secure Password Tools'
  },
  description: 'Generate cryptographically secure passwords, passphrases, and PINs instantly. NIST 2025 compliant, privacy-first, no data storage. Test password strength and check breach exposure free.',
  keywords: [
    'password generator',
    'secure password generator',
    'random password generator',
    'strong password generator',
    'NIST compliant password',
    'cryptographic password generator',
    'password strength checker',
    'breach checker',
    'passphrase generator',
    'PIN generator',
    'free password tool',
    'password security 2025',
    'entropy calculator',
    'password manager tool'
  ],
  authors: [{ name: 'DynamicPassGen Security Team' }],
  creator: 'DynamicPassGen',
  publisher: 'DynamicPassGen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dynamicpassgen.com'),
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dynamicpassgen.com',
    siteName: 'DynamicPassGen',
    title: 'Free Password Generator - Secure, NIST 2025 Compliant',
    description: 'Generate cryptographically secure passwords instantly. NIST compliant, privacy-first, no data storage. Test strength and check breaches free.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DynamicPassGen - Secure Password Generator Tool',
      }
    ]
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@dynamicpassgen',
    creator: '@dynamicpassgen',
    title: 'Free Password Generator - Secure, NIST 2025 Compliant',
    description: 'Generate cryptographically secure passwords instantly. NIST compliant, privacy-first.',
    images: ['/images/twitter-card.jpg']
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/images/favicon/safari-pinned-tab.svg', color: '#3b82f6' }
    ]
  },
  
  manifest: '/site.webmanifest',
  
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  
  alternates: {
    canonical: '/',
  },
  
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    // Add when ready: yandex, bing, etc.
  },
  
  category: 'technology',
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
  const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '';

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {ADSENSE_CLIENT_ID && <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />}
        
        {/* Google Fonts - Inter */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />

        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DynamicPassGen",
              "url": "https://dynamicpassgen.com",
              "logo": "https://dynamicpassgen.com/images/logo.png",
              "description": "Free, secure password generation tools with NIST 2025 compliance",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "url": "https://dynamicpassgen.com/contact"
              },
              "sameAs": [
                "https://twitter.com/dynamicpassgen"
              ]
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DynamicPassGen",
              "url": "https://dynamicpassgen.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dynamicpassgen.com/guides?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script 
              strategy="afterInteractive" 
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    send_page_view: true,
                    anonymize_ip: true
                  });
                `
              }}
            />
          </>
        )}

        {/* Google AdSense - Add when approved */}
        {ADSENSE_CLIENT_ID && (
          <Script
            id="adsense-script"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      
      <body className="bg-slate-bg text-text-dark dark:bg-navy-dark dark:text-text-secondary min-h-screen font-inter transition-colors duration-300 antialiased">
        {children}
      </body>
    </html>
  );
}
