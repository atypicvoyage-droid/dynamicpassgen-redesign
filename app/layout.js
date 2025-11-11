// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Default/fallback site-wide metadata
export const metadata = {
  title: {
    default: 'DynamicPassGen - Secure, Free Password Generator',
    template: '%s | DynamicPassGen'
  },
  description: 'Generate strong, secure, cryptographically random passwords—NIST compliant, mobile-first, and privacy-centric.',
  keywords: [
    'password generator',
    'secure password',
    'free password generator',
    'NIST compliant',
    'cryptographic security',
    'privacy-first'
  ],
  metadataBase: new URL('https://dynamicpassgen.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dynamicpassgen.com',
    siteName: 'DynamicPassGen',
    images: [
      '/images/og-image.jpg'
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dynamicpassgen',
    images: [
      '/images/og-image.jpg'
    ]
  },
  icons: [
    { rel: 'icon', url: '/images/favicon/favicon.ico', sizes: 'any' },
    { rel: 'apple-touch-icon', url: '/images/favicon/apple-touch-icon.png', sizes: '180x180' }
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({ children }) {
  // Environment variable for Google Analytics (GA4)
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Global Preconnect/Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Google site verification meta if needed for Search Console */}
        {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}

        {/* Google Analytics Global Site Tag (gtag.js) */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
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
                    send_page_view: true
                  });
                `
              }}
            />
          </>
        )}
      </head>
      <body className="bg-slate-bg text-text-dark dark:bg-navy-dark dark:text-text-secondary min-h-screen font-inter transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
