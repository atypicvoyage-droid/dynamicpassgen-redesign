import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
  title: 'Privacy Policy - DynamicPassGen | Zero Data Collection Password Generator',
  description: 'DynamicPassGen Privacy Policy: Learn how we protect your privacy with 100% client-side password generation, zero password storage, and transparent data practices. GDPR and CCPA compliant.',
  keywords: 'privacy policy, data protection, GDPR compliant, zero data collection, client-side security, password privacy, no tracking, transparent privacy practices',
  openGraph: {
    title: 'Privacy Policy - Complete Transparency on Data Protection',
    description: 'Read our privacy policy: 100% client-side password generation, zero password storage, transparent data practices. Your security and privacy are our priority.',
    url: 'https://dynamicpassgen.com/privacy',
    type: 'website'
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/privacy'
  },
  other: {
    'article:modified_time': '2025-11-25T00:00:00Z'
  }
}

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dynamicpassgen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://dynamicpassgen.com/privacy"
      }
    ]
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "DynamicPassGen Privacy Policy explaining our zero data collection approach, client-side security, and transparent data practices.",
    "url": "https://dynamicpassgen.com/privacy",
    "dateModified": "2025-11-25",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "DynamicPassGen",
      "url": "https://dynamicpassgen.com"
    }
  }

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="webpage-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>

      <Script id="smooth-scroll" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            document.documentElement.style.scrollBehavior = 'smooth';
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  const headerOffset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });

                  history.pushState(null, null, this.getAttribute('href'));
                }
              });
            });

            if (window.location.hash) {
              setTimeout(function() {
                const target = document.querySelector(window.location.hash);
                if (target) {
                  const headerOffset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 100);
            }
          });
        `}
      </Script>

      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li aria-current="page" className="text-gray-900 dark:text-white font-medium">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Your privacy is our foundation, not an afterthought
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              <strong>Last Updated:</strong> November 25, 2025 | <strong>Effective Date:</strong> January 1, 2024
            </p>
          </header>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-12 border-2 border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Privacy Guarantee
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Zero Password Storage:</strong> Your generated passwords NEVER leave your device. Period.</span>
              </p>
              <p className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>100% Client-Side:</strong> All password generation happens in your browser using the Web Crypto API.</span>
              </p>
              <p className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>No Account Required:</strong> We don't collect email addresses, usernames, or personal information.</span>
              </p>
              <p className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Transparent & Compliant:</strong> GDPR, CCPA, and PIPEDA compliant. No hidden tracking or data selling.</span>
              </p>
            </div>
          </section>

          <nav className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-12 border border-gray-200 dark:border-gray-700" aria-label="Table of Contents">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Table of Contents
            </h2>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#information-we-collect" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">1. Information We Collect (and Don't Collect)</a></li>
              <li><a href="#how-we-use" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">2. How We Use Your Information</a></li>
              <li><a href="#password-security" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">3. Password Generation Security & Privacy</a></li>
              <li><a href="#cookies-tracking" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">4. Cookies and Tracking Technologies</a></li>
              <li><a href="#third-party" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">5. Third-Party Services</a></li>
              <li><a href="#data-retention" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">6. Data Retention and Deletion</a></li>
              <li><a href="#your-rights" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">7. Your Privacy Rights</a></li>
              <li><a href="#children" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">8. Children's Privacy</a></li>
              <li><a href="#changes" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">9. Changes to This Policy</a></li>
              <li><a href="#contact" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">10. Contact Us</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none">
            
            <section id="information-we-collect" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                1. Information We Collect (and Don't Collect)
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-6 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  ❌ What We DO NOT Collect
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  DynamicPassGen is fundamentally different from most web services. Here's what we explicitly <strong>never</strong> collect, store, or have access to:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 ml-6">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Generated passwords</strong> - Your passwords are created entirely in your browser and never transmitted to our servers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Passwords you test</strong> - When using our <Link href="/tools/strength-checker" className="text-blue-600 hover:underline">password strength checker</Link> or <Link href="/tools/breach-checker" className="text-blue-600 hover:underline">breach checker</Link>, analysis happens locally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Personal information</strong> - No names, email addresses, phone numbers, or account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>User accounts</strong> - We don't have user accounts, so we can't tie data to individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Clipboard data</strong> - We never access your clipboard except when you explicitly click "Copy"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Device fingerprinting</strong> - We don't create unique device identifiers or track you across sessions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  ✓ What We DO Collect (Minimal, Anonymous)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To improve our service and ensure it works properly, we collect minimal, anonymized data:
                </p>
                
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">
                  A. Analytics Data (via Google Analytics 4)
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6 mb-6">
                  <li><strong>Page views:</strong> Which pages you visit (e.g., homepage, tools pages, guides)</li>
                  <li><strong>Referral source:</strong> How you found our site (search engine, direct visit, social media)</li>
                  <li><strong>Browser and device type:</strong> Chrome/Firefox/Safari, desktop/mobile (for compatibility)</li>
                  <li><strong>Country/region:</strong> General geographic location (city-level, never precise location)</li>
                  <li><strong>Session duration:</strong> How long you stay on our site</li>
                  <li><strong>Feature usage:</strong> Which tools you use (password generator, strength checker, etc.)</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <strong>Important:</strong> Google Analytics is configured with IP anonymization enabled, meaning your full IP address is never stored. We've also disabled all advertising features and user-level data collection.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">
                  B. Server Logs (Automatic)
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Our web server automatically logs standard technical information:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6 mb-4">
                  <li><strong>IP address:</strong> Anonymized after 24 hours, used only for security and abuse prevention</li>
                  <li><strong>Request timestamp:</strong> When you accessed our site</li>
                  <li><strong>HTTP request details:</strong> URL requested, response status code</li>
                  <li><strong>User agent string:</strong> Browser and operating system version</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  These logs are retained for 7 days for security purposes (detecting attacks, preventing abuse), then automatically deleted.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white mt-6">
                  C. Contact Form Data (Only If You Contact Us)
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  If you use our <Link href="/contact" className="text-blue-600 hover:underline">contact form</Link>:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6">
                  <li>Email address (required to respond to you)</li>
                  <li>Name (optional)</li>
                  <li>Message content (what you write to us)</li>
                  <li>Timestamp of submission</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  This information is stored only as long as necessary to respond to your inquiry, typically 30-90 days, then deleted unless ongoing correspondence is required.
                </p>
              </div>
            </section>

            <section id="how-we-use" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                2. How We Use Your Information
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  The minimal data we collect is used exclusively for the following purposes:
                </p>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Service Improvement
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>Understanding which features are most valuable to users</li>
                    <li>Identifying technical issues or performance bottlenecks</li>
                    <li>Optimizing page load times and user experience</li>
                    <li>Deciding which new features to prioritize</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Security and Abuse Prevention
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>Detecting and blocking malicious traffic (DDoS attacks, bots)</li>
                    <li>Identifying and preventing spam or abuse</li>
                    <li>Ensuring fair usage of our free services</li>
                    <li>Complying with legal requirements if necessary</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Communication (Only If You Contact Us)
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>Responding to support requests and questions</li>
                    <li>Addressing bug reports or feature requests</li>
                    <li>Following up on feedback you provide</li>
                  </ul>
                </div>

                <p className="font-semibold text-gray-900 dark:text-white mt-6">
                  We will NEVER:
                </p>
                <ul className="space-y-2 ml-6 text-red-700 dark:text-red-400">
                  <li>❌ Sell your data to third parties</li>
                  <li>❌ Use your data for advertising targeting</li>
                  <li>❌ Share your information with data brokers</li>
                  <li>❌ Send you marketing emails (we don't have your email unless you contact us)</li>
                  <li>❌ Track you across other websites</li>
                </ul>
              </div>
            </section>

            <section id="password-security" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                3. Password Generation Security & Privacy
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  This is the most important section. Here's exactly how our <Link href="/" className="text-blue-600 hover:underline">password generator</Link> protects your privacy:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    🔐 Complete Client-Side Processing
                  </h3>
                  <p className="mb-3">
                    When you generate a password on DynamicPassGen, here's what happens:
                  </p>
                  <ol className="space-y-2 ml-6">
                    <li><strong>1. You click "Generate"</strong> - Your browser receives the request</li>
                    <li><strong>2. Web Crypto API activates</strong> - Your browser's built-in <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">crypto.getRandomValues()</code> function executes</li>
                    <li><strong>3. Password is created locally</strong> - Using your device's hardware entropy, a cryptographically secure password is generated</li>
                    <li><strong>4. Display in your browser</strong> - The password appears on your screen</li>
                    <li><strong>5. Optional: Copy to clipboard</strong> - If you click "Copy," it's added to your clipboard</li>
                  </ol>
                  <p className="mt-4 font-semibold">
                    At NO point in this process does the password leave your device or get sent to our servers.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Proof: Verify It Yourself
                  </h3>
                  <p className="mb-3">
                    Don't just trust our word. You can verify our privacy claims:
                  </p>
                  <ol className="space-y-3 ml-6">
                    <li><strong>Open your browser's Developer Tools</strong> (F12 or right-click → Inspect)</li>
                    <li><strong>Go to the Network tab</strong></li>
                    <li><strong>Generate a password</strong> on our site</li>
                    <li><strong>Watch the network requests</strong> - You'll see ZERO network activity when generating passwords</li>
                  </ol>
                  <p className="mt-4 text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    Complete transparency is part of our commitment to you. If you find ANY evidence of passwords being transmitted, please <Link href="/contact" className="text-blue-600 hover:underline">contact us immediately</Link>.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
                  Session History Feature
                </h3>
                <p>
                  Our interface shows your last 5 generated passwords for convenience during your session. This history:
                </p>
                <ul className="space-y-2 ml-6 mt-3">
                  <li>✓ Is stored ONLY in your browser's memory (JavaScript variable)</li>
                  <li>✓ Is never written to cookies or local storage</li>
                  <li>✓ Is automatically cleared when you close the tab/window</li>
                  <li>✓ Can be manually cleared with the "Clear History" button</li>
                  <li>✓ Never leaves your device</li>
                </ul>
              </div>
            </section>

            <section id="cookies-tracking" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                4. Cookies and Tracking Technologies
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We use minimal cookies and tracking technologies. Here's a complete breakdown:</p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Cookie Name</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Purpose</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Duration</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3"><code>_ga</code></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Google Analytics - distinguishes users</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">2 years</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Analytics</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-700 p-3"><code>_ga_*</code></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Google Analytics - session data</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">2 years</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Analytics</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3"><code>theme_preference</code></td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Remembers dark/light mode choice</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">1 year</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  How to Control Cookies
                </h3>
                <p>You have full control over cookies:</p>
                <ul className="space-y-2 ml-6 mt-3">
                  <li><strong>Browser settings:</strong> Block or delete cookies in your browser preferences</li>
                  <li><strong>Google Analytics opt-out:</strong> Use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Do Not Track:</strong> We respect Do Not Track (DNT) browser signals</li>
                </ul>
                <p className="mt-4 text-sm bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-600 p-4">
                  <strong>Note:</strong> Blocking cookies won't affect password generation (which requires no cookies), but may affect analytics and theme preferences.
                </p>
              </div>
            </section>

            <section id="third-party" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                5. Third-Party Services
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We use a small number of third-party services. Here's complete transparency:</p>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Google Analytics 4</h3>
                    <p className="mb-2"><strong>Purpose:</strong> Website analytics and usage statistics</p>
                    <p className="mb-2"><strong>Data shared:</strong> Anonymized page views, device type, location (country/city)</p>
                    <p className="mb-2"><strong>Privacy measures:</strong></p>
                    <ul className="space-y-1 ml-6 mb-2">
                      <li>✓ IP anonymization enabled</li>
                      <li>✓ Advertising features disabled</li>
                      <li>✓ Data retention set to 14 months (minimum allowed)</li>
                      <li>✓ User-ID tracking disabled</li>
                    </ul>
                    <p><strong>Privacy policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a></p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Google AdSense (Optional Advertising)</h3>
                    <p className="mb-2"><strong>Purpose:</strong> Display contextual advertisements to fund free services</p>
                    <p className="mb-2"><strong>Data shared:</strong> Page URL, device type, approximate location</p>
                    <p className="mb-2"><strong>Your choices:</strong></p>
                    <ul className="space-y-1 ml-6 mb-2">
                      <li>✓ Use an ad blocker - we don't restrict access</li>
                      <li>✓ Opt out of personalized ads via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ad Settings</a></li>
                      <li>✓ Ads never appear on password generation sections</li>
                    </ul>
                    <p><strong>Privacy policy:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Privacy</a></p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Content Delivery Network (CDN)</h3>
                    <p className="mb-2"><strong>Provider:</strong> Hostinger / Cloudflare</p>
                    <p className="mb-2"><strong>Purpose:</strong> Fast, secure content delivery worldwide</p>
                    <p className="mb-2"><strong>Data processed:</strong> IP address (temporary), request metadata</p>
                    <p className="mb-2"><strong>Privacy benefit:</strong> Additional DDoS protection and encryption</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Have I Been Pwned API (Breach Checker Tool)</h3>
                    <p className="mb-2"><strong>Purpose:</strong> Check if passwords appear in known data breaches</p>
                    <p className="mb-2"><strong>Privacy protection:</strong> We use k-anonymity - only the first 5 characters of the SHA-1 hash are sent</p>
                    <p className="mb-2"><strong>Data shared:</strong> First 5 characters of hashed password (NOT the actual password)</p>
                    <p className="mb-3">Your actual password <strong>never leaves your browser</strong> and is <strong>never sent</strong> to any server when using our <Link href="/tools/breach-checker" className="text-blue-600 hover:underline">breach checker</Link>.</p>
                    <p><strong>Learn more:</strong> <a href="https://haveibeenpwned.com/Privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HIBP Privacy Policy</a></p>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-retention" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                6. Data Retention and Deletion
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We practice data minimization and retention limits:</p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Data Type</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Retention Period</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Deletion Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Generated passwords</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">NEVER stored</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">N/A - never collected</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Server logs</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">7 days</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Automatic deletion</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Google Analytics data</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">14 months</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Automatic expiration (Google's system)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Contact form submissions</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">30-90 days</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Manual deletion after resolution</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Session history (last 5 passwords)</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Until tab closed</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3">Automatic (browser memory only)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  You can request deletion of any data we hold by <Link href="/contact" className="text-blue-600 hover:underline">contacting us</Link>. Since we collect minimal data and don't use accounts, there's typically nothing to delete.
                </p>
              </div>
            </section>

            <section id="your-rights" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                7. Your Privacy Rights (GDPR, CCPA, PIPEDA)
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>Depending on your location, you have certain privacy rights. We respect all of them globally, regardless of where you live.</p>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Your Rights Include:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Right to Access</h4>
                      <p>Request a copy of any personal data we hold about you. Since we don't collect personal data for password generation, there's typically nothing to access.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✏️ Right to Correction</h4>
                      <p>Request correction of inaccurate data. Contact us if you believe we have incorrect information.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🗑️ Right to Deletion ("Right to be Forgotten")</h4>
                      <p>Request deletion of your data. We'll comply within 30 days unless legally required to retain it.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⛔ Right to Opt-Out</h4>
                      <p>Opt out of data collection (analytics). Use browser settings, ad blockers, or DNT signals.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📤 Right to Data Portability</h4>
                      <p>Receive your data in a machine-readable format. Applicable if we ever store user accounts (currently we don't).</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🚫 Right to Object</h4>
                      <p>Object to processing of your data for specific purposes. We only use data for essential operations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">How to Exercise Your Rights</h3>
                  <p className="mb-3">To exercise any privacy right:</p>
                  <ol className="space-y-2 ml-6">
                    <li><Link href="/contact" className="text-blue-600 hover:underline">Contact us via our contact form</Link></li>
                    <li>Include your request details and proof of identity (if necessary)</li>
                    <li>We'll respond within 30 days with confirmation or explanation</li>
                  </ol>
                  <p className="mt-4 text-sm">
                    <strong>No fees:</strong> Exercising your privacy rights is always free.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Regulatory Authorities</h3>
                  <p className="mb-2">You have the right to lodge a complaint with your local data protection authority:</p>
                  <ul className="space-y-2 ml-6">
                    <li><strong>EU:</strong> <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">European Data Protection Board</a></li>
                    <li><strong>UK:</strong> <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Information Commissioner's Office (ICO)</a></li>
                    <li><strong>Canada:</strong> <a href="https://www.priv.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Office of the Privacy Commissioner of Canada</a></li>
                    <li><strong>California:</strong> <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">California Attorney General - CCPA</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="children" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                8. Children's Privacy (COPPA Compliance)
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>DynamicPassGen is safe for all ages. Our service:</p>
                <ul className="space-y-2 ml-6">
                  <li>✓ Does not knowingly collect personal information from children under 13</li>
                  <li>✓ Does not require account registration (no age verification needed)</li>
                  <li>✓ Does not use targeted advertising based on user profiles</li>
                  <li>✓ Provides educational content about password security</li>
                </ul>
                <p className="mt-4">
                  Since password generation is 100% client-side with zero data collection, there are no COPPA concerns. Parents can safely allow children to use our password generator for school accounts, games, or other online services.
                </p>
                <p className="mt-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-600 p-4">
                  <strong>Educational Use:</strong> Teachers and parents are welcome to use DynamicPassGen as an educational tool to teach children about password security and online safety.
                </p>
              </div>
            </section>

            <section id="changes" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                9. Changes to This Privacy Policy
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We may update this privacy policy occasionally to reflect:</p>
                <ul className="space-y-2 ml-6">
                  <li>Changes in our services or features</li>
                  <li>Updates to legal requirements</li>
                  <li>Improvements to our privacy practices</li>
                  <li>User feedback and suggestions</li>
                </ul>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mt-4">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How We'll Notify You</h3>
                  <p className="mb-3">For significant changes, we will:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✓ Update the "Last Updated" date at the top of this page</li>
                    <li>✓ Display a prominent notice on our homepage for 30 days</li>
                    <li>✓ Highlight the specific changes made</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Your continued use</strong> of DynamicPassGen after changes constitutes acceptance of the updated policy. If you disagree with changes, please stop using our service.
                  </p>
                </div>

                <p className="mt-4 text-sm">
                  <strong>Version History:</strong> Previous versions of our privacy policy are <Link href="/contact" className="text-blue-600 hover:underline">available upon request</Link>.
                </p>
              </div>
            </section>

            <section id="contact" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                10. Contact Us About Privacy
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We take your privacy seriously. If you have questions, concerns, or requests related to this privacy policy or our data practices:</p>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Email:</strong> <a href="mailto:privacy@dynamicpassgen.com" className="text-blue-600 hover:underline">privacy@dynamicpassgen.com</a>
                    </p>
                    <p>
                      <strong>Contact Form:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Submit a privacy request</Link>
                    </p>
                    <p>
                      <strong>Response Time:</strong> We aim to respond within 48 hours for privacy inquiries
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  <strong>For general support</strong> or questions about how to use our tools, please visit our <Link href="/guides" className="text-blue-600 hover:underline">security guides</Link> or <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>.
                </p>
              </div>
            </section>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">
                Privacy-First Password Security
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Your passwords never leave your device. Your privacy is guaranteed, not promised.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Generate Secure Password Now →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
