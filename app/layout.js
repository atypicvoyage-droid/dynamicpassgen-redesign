// app/layout.js - WITH GA, ADSENSE, AND SILKTIDE CONSENT MANAGER (FINAL)
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { AdsenseProvider } from '../context/AdsenseContext';

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

        {/* Silktide Consent Manager CSS */}
        <link 
          rel="stylesheet" 
          id="silktide-consent-manager-css" 
          href="/cookie-banner/silktide-consent-manager.css" 
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

        {/* Google Analytics with Consent Mode - Only loads in production */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script 
              id="gtag-base"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  
                  // Default consent to denied
                  gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'wait_for_update': 500
                  });
                  
                  gtag('js', new Date());
                `
              }}
            />
            <Script 
              strategy="afterInteractive" 
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  // Check if localhost
                  var isLocalhost = window.location.hostname === 'localhost' || 
                                    window.location.hostname === '127.0.0.1' ||
                                    window.location.hostname === '';
                  
                  if (!isLocalhost) {
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                      page_path: window.location.pathname,
                      send_page_view: true,
                      anonymize_ip: true
                    });
                  } else {
                    console.log('[GA] Running in development mode - analytics disabled');
                  }
                `
              }}
            />
          </>
        )}

        {/* Google AdSense - Will be enabled when approved */}
        {ADSENSE_CLIENT_ID && (
          <Script
            id="adsense-script"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

        {/* Silktide Consent Manager Script */}
        <Script 
          src="/cookie-banner/silktide-consent-manager.js" 
          strategy="afterInteractive"
        />
        
        {/* Silktide Cookie Banner Configuration */}
        <Script
          id="silktide-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function initializeSilktideBanner() {
                if (typeof silktideCookieBannerManager === 'undefined') {
                  setTimeout(initializeSilktideBanner, 100);
                  return;
                }
                
                try {
                  silktideCookieBannerManager.updateCookieBannerConfig({
                    background: {
                      showBackground: true
                    },
                    cookieIcon: {
                      position: "bottomLeft"
                    },
                    cookieTypes: [
                      {
                        id: "necessary",
                        name: "Necessary",
                        description: "<p>These cookies are necessary for the website to function properly and cannot be switched off.</p>",
                        required: true,
                        onAccept: function() {
                          console.log('Necessary cookies accepted');
                        }
                      },
                      {
                        id: "analytics",
                        name: "Analytics",
                        description: "<p>These cookies help us improve the site by tracking which pages are most popular.</p>",
                        required: true,
                        onAccept: function() {
                          console.log('Analytics cookies accepted');
                          if (typeof gtag !== 'undefined') {
                            gtag('consent', 'update', {
                              'analytics_storage': 'granted'
                            });
                            gtag('event', 'consent_accepted_analytics');
                          }
                        },
                        onReject: function() {
                          console.log('Analytics cookies rejected');
                          if (typeof gtag !== 'undefined') {
                            gtag('consent', 'update', {
                              'analytics_storage': 'denied'
                            });
                          }
                        }
                      },
                      {
                        id: "advertising",
                        name: "Advertising",
                        description: "<p>These cookies provide extra features and personalization to improve your experience.</p>",
                        required: false,
                        onAccept: function() {
                          console.log('Advertising cookies accepted');
                          if (typeof gtag !== 'undefined') {
                            gtag('consent', 'update', {
                              'ad_storage': 'granted',
                              'ad_user_data': 'granted',
                              'ad_personalization': 'granted'
                            });
                            gtag('event', 'consent_accepted_advertising');
                          }
                        },
                        onReject: function() {
                          console.log('Advertising cookies rejected');
                          if (typeof gtag !== 'undefined') {
                            gtag('consent', 'update', {
                              'ad_storage': 'denied',
                              'ad_user_data': 'denied',
                              'ad_personalization': 'denied'
                            });
                          }
                        }
                      }
                    ],
                    text: {
                      banner: {
                        description: "<p>We use cookies to enhance your experience and analyze traffic. <a href='/privacy' target='_blank'>Cookie Policy</a></p>",
                        acceptAllButtonText: "Accept all",
                        acceptAllButtonAccessibleLabel: "Accept all cookies",
                        rejectNonEssentialButtonText: "Reject non-essential",
                        rejectNonEssentialButtonAccessibleLabel: "Reject non-essential cookies",
                        preferencesButtonText: "Preferences",
                        preferencesButtonAccessibleLabel: "Toggle cookie preferences"
                      },
                      preferences: {
                        title: "Customize your cookie preferences",
                        description: "<p>We respect your privacy. Choose which cookies you allow.</p>",
                        creditLinkText: "Get this banner for free",
                        creditLinkAccessibleLabel: "Get this banner for free"
                      }
                    }
                  });
                  console.log('Silktide banner initialized');
                } catch (error) {
                  console.error('Error initializing Silktide banner:', error);
                }
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initializeSilktideBanner);
              } else {
                initializeSilktideBanner();
              }
            `
          }}
        />
      </head>
      
      <body className="bg-slate-bg text-text-dark dark:bg-navy-dark dark:text-text-secondary min-h-screen font-inter transition-colors duration-300 antialiased">
        <AdsenseProvider>
          {children}
        </AdsenseProvider>
      </body>
    </html>
  );
}
