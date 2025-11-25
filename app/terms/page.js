import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
  title: 'Terms of Service - DynamicPassGen | Free Password Generator Usage Terms',
  description: 'Read DynamicPassGen Terms of Service: Free password generator usage terms, acceptable use policy, liability disclaimers, and user responsibilities. Simple, transparent legal terms.',
  keywords: 'terms of service, terms and conditions, usage policy, acceptable use, legal terms, user agreement, password generator terms',
  openGraph: {
    title: 'Terms of Service - DynamicPassGen Usage Agreement',
    description: 'Fair and transparent terms of service for our free password generator tool. Understand your rights and responsibilities when using DynamicPassGen.',
    url: 'https://dynamicpassgen.com/terms',
    type: 'website'
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/terms'
  },
  other: {
    'article:modified_time': '2025-11-25T00:00:00Z'
  }
}

export default function TermsPage() {
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
        "name": "Terms of Service",
        "item": "https://dynamicpassgen.com/terms"
      }
    ]
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "DynamicPassGen Terms of Service outlining usage terms, user responsibilities, and legal disclaimers for our free password generator service.",
    "url": "https://dynamicpassgen.com/terms",
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
              Terms of Service
            </li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Simple, fair terms for using our free password generator
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              <strong>Last Updated:</strong> November 25, 2025 | <strong>Effective Date:</strong> January 1, 2024
            </p>
          </header>

          <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-12 border-2 border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Welcome to DynamicPassGen
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>
                These Terms of Service are designed to be straightforward and fair. By using DynamicPassGen, you agree to these terms. If you don't agree, please don't use our service.
              </p>
              <p className="font-semibold">
                Key points to remember:
              </p>
              <ul className="space-y-2 ml-6">
                <li>✓ Our service is <strong>completely free</strong> with no hidden charges</li>
                <li>✓ You're responsible for <strong>managing your generated passwords</strong></li>
                <li>✓ We provide the tool <strong>"as is"</strong> without warranties</li>
                <li>✓ You agree to use our service <strong>legally and responsibly</strong></li>
              </ul>
            </div>
          </section>

          <nav className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-12 border border-gray-200 dark:border-gray-700" aria-label="Table of Contents">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Table of Contents
            </h2>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#acceptance" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">1. Acceptance of Terms</a></li>
              <li><a href="#service-description" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">2. Service Description</a></li>
              <li><a href="#user-responsibilities" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">3. User Responsibilities</a></li>
              <li><a href="#acceptable-use" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">4. Acceptable Use Policy</a></li>
              <li><a href="#intellectual-property" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">5. Intellectual Property</a></li>
              <li><a href="#disclaimers" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">6. Disclaimers and Warranties</a></li>
              <li><a href="#limitation-liability" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">7. Limitation of Liability</a></li>
              <li><a href="#third-party" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">8. Third-Party Links and Services</a></li>
              <li><a href="#termination" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">9. Termination</a></li>
              <li><a href="#changes-terms" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">10. Changes to Terms</a></li>
              <li><a href="#governing-law" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">11. Governing Law</a></li>
              <li><a href="#contact" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors">12. Contact Information</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none">
            
            <section id="acceptance" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  By accessing or using DynamicPassGen (the "Service"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and DynamicPassGen.
                </p>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    What "Acceptance" Means
                  </h3>
                  <p className="mb-3">You accept these Terms by:</p>
                  <ul className="space-y-2 ml-6">
                    <li>Visiting or using any part of our website</li>
                    <li>Generating passwords using our <Link href="/" className="text-blue-600 hover:underline">password generator tool</Link></li>
                    <li>Using any of our <Link href="/tools/strength-checker" className="text-blue-600 hover:underline">security tools</Link></li>
                    <li>Reading our guides or educational content</li>
                  </ul>
                </div>

                <p className="mt-4">
                  <strong>If you do not agree to these Terms, you must not use our Service.</strong> If you're using our Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
                </p>

                <p className="text-sm bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4">
                  <strong>Age Requirement:</strong> You must be at least 13 years old to use our Service. If you're under 18, you should review these Terms with a parent or guardian. Users under 13 may use our Service only with parental consent and supervision.
                </p>
              </div>
            </section>

            <section id="service-description" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                2. Service Description
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  DynamicPassGen provides a <strong>free, web-based password generation service</strong> along with related security tools and educational resources.
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    What We Provide
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Password Generation Tools</h4>
                      <ul className="space-y-1 ml-6">
                        <li>Random password generator with customizable options</li>
                        <li>Passphrase generator for memorable security</li>
                        <li>PIN generator for numeric codes</li>
                        <li>All generation happens client-side in your browser</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Analysis Tools</h4>
                      <ul className="space-y-1 ml-6">
                        <li><Link href="/tools/strength-checker" className="text-blue-600 hover:underline">Password strength checker</Link> with entropy calculation</li>
                        <li><Link href="/tools/breach-checker" className="text-blue-600 hover:underline">Password breach checker</Link> using k-anonymity</li>
                        <li><Link href="/tools/security-score" className="text-blue-600 hover:underline">Security score calculator</Link></li>
                        <li>Real-time strength visualization and feedback</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Educational Content</h4>
                      <ul className="space-y-1 ml-6">
                        <li>Password security guides and best practices</li>
                        <li>NIST compliance information</li>
                        <li>Cybersecurity tips and resources</li>
                        <li>Regular blog articles on security topics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-600 p-4 mt-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Important: What We DON'T Provide</h3>
                  <ul className="space-y-2 ml-6">
                    <li>❌ Password storage or management (use a dedicated password manager)</li>
                    <li>❌ Account recovery services (we don't store your passwords)</li>
                    <li>❌ Guarantees that your passwords won't be compromised</li>
                    <li>❌ Professional security advice or consultation</li>
                    <li>❌ Liability for how you use generated passwords</li>
                  </ul>
                </div>

                <p className="mt-4">
                  Our Service is provided <strong>"as is"</strong> and <strong>"as available"</strong>. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.
                </p>
              </div>
            </section>

            <section id="user-responsibilities" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                3. User Responsibilities
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  When using DynamicPassGen, you agree to take responsibility for the following:
                </p>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      Password Management
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li>✓ <strong>Saving passwords:</strong> You are solely responsible for saving and storing generated passwords securely</li>
                      <li>✓ <strong>Using password managers:</strong> We strongly recommend using a reputable password manager</li>
                      <li>✓ <strong>Unique passwords:</strong> Use different passwords for different accounts</li>
                      <li>✓ <strong>Secure storage:</strong> Never store passwords in plain text files or unsecured locations</li>
                      <li>✓ <strong>No recovery:</strong> We cannot recover passwords you've generated and lost</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      Security Best Practices
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li>✓ <strong>Environment security:</strong> Use our Service only on trusted, secure devices</li>
                      <li>✓ <strong>Network security:</strong> Avoid using public Wi-Fi when generating passwords for sensitive accounts</li>
                      <li>✓ <strong>Browser security:</strong> Keep your browser updated and secure</li>
                      <li>✓ <strong>Verification:</strong> Verify you're on the correct website (dynamicpassgen.com) before using our tools</li>
                      <li>✓ <strong>Two-factor authentication:</strong> Enable 2FA on all accounts that support it</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      Compliance with Laws
                    </h3>
                    <ul className="space-y-2 ml-6">
                      <li>✓ Comply with all applicable local, state, national, and international laws</li>
                      <li>✓ Use generated passwords only for legitimate, authorized purposes</li>
                      <li>✓ Do not use our Service to facilitate illegal activities</li>
                      <li>✓ Respect intellectual property rights and other legal rights</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      Professional Judgment
                    </h3>
                    <p className="mb-3">
                      While we provide security tools and educational content, you should:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>✓ Use your own judgment regarding password security for your specific needs</li>
                      <li>✓ Consult with security professionals for critical systems</li>
                      <li>✓ Follow your organization's security policies and requirements</li>
                      <li>✓ Understand that our recommendations are general guidelines, not professional advice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="acceptable-use" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                4. Acceptable Use Policy
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  You agree to use DynamicPassGen only for lawful purposes and in accordance with these Terms.
                </p>

                <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-600 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Prohibited Uses
                  </h3>
                  <p className="mb-3">You may NOT use our Service to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>❌ Violate any laws, regulations, or third-party rights</li>
                    <li>❌ Engage in unauthorized access to computer systems (hacking)</li>
                    <li>❌ Create passwords for malicious purposes or illegal activities</li>
                    <li>❌ Attempt to reverse engineer, decompile, or extract our source code</li>
                    <li>❌ Scrape, crawl, or automatically access our Service in ways that burden our servers</li>
                    <li>❌ Transmit viruses, malware, or other harmful code</li>
                    <li>❌ Interfere with other users' access to the Service</li>
                    <li>❌ Impersonate others or provide false information</li>
                    <li>❌ Use the Service for spam or unsolicited communications</li>
                    <li>❌ Bypass any security features or access restrictions</li>
                    <li>❌ Use automated tools to generate excessive requests (DDoS)</li>
                    <li>❌ Sell, rent, or commercialize access to our Service without permission</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-600 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Acceptable Uses
                  </h3>
                  <p className="mb-3">You ARE encouraged to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>✓ Generate passwords for your personal or business accounts</li>
                    <li>✓ Use our tools for security education and training</li>
                    <li>✓ Share links to our Service with others</li>
                    <li>✓ Provide feedback and suggestions for improvement</li>
                    <li>✓ Reference our content with proper attribution</li>
                    <li>✓ Use our Service as part of security awareness programs</li>
                    <li>✓ Integrate our tools into legitimate security workflows</li>
                  </ul>
                </div>

                <p className="mt-4">
                  We reserve the right to investigate and take appropriate action against anyone who violates this Acceptable Use Policy, including reporting to law enforcement authorities.
                </p>
              </div>
            </section>

            <section id="intellectual-property" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                5. Intellectual Property Rights
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Our Rights
                  </h3>
                  <p className="mb-3">
                    DynamicPassGen and its content, features, and functionality are owned by us and protected by:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>Copyright laws</li>
                    <li>Trademark laws</li>
                    <li>Trade secret laws</li>
                    <li>Other intellectual property rights</li>
                  </ul>
                  <p className="mt-4">
                    This includes but is not limited to: website design, logos, text content, graphics, user interface elements, algorithms, and software code.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Your Rights
                  </h3>
                  <p className="mb-3">
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>✓ Access and use our Service for personal or internal business purposes</li>
                    <li>✓ Generate passwords for your own use</li>
                    <li>✓ View and use our educational content</li>
                  </ul>
                  <p className="mt-4 font-semibold">
                    Important: The passwords you generate are yours. We claim no ownership over them.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Restrictions
                  </h3>
                  <p className="mb-3">You may NOT:</p>
                  <ul className="space-y-2 ml-6">
                    <li>❌ Copy, modify, or create derivative works from our Service</li>
                    <li>❌ Use our branding, logos, or trademarks without written permission</li>
                    <li>❌ Republish or redistribute our content without attribution</li>
                    <li>❌ Frame or mirror our website on another site</li>
                    <li>❌ Reverse engineer our algorithms or software</li>
                    <li>❌ Remove or alter any copyright or proprietary notices</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fair Use</h3>
                  <p>
                    You may link to our Service, reference our content with proper attribution, and use screenshots for educational or review purposes in accordance with fair use principles.
                  </p>
                </div>
              </div>
            </section>

            <section id="disclaimers" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                6. Disclaimers and Warranties
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white uppercase">
                    Important Legal Notice
                  </h3>
                  <p className="font-semibold mb-3">
                    PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    "AS IS" Service
                  </h3>
                  <p className="mb-3">
                    DynamicPassGen is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> without any warranties of any kind, either express or implied, including but not limited to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>Warranties of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement</li>
                    <li>Accuracy or reliability</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Freedom from viruses or harmful components</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Specific Disclaimers
                  </h3>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Password Security</h4>
                    <p>
                      While we use industry-standard cryptographic methods (Web Crypto API), we make NO WARRANTY that passwords generated through our Service are absolutely unbreakable or will remain secure forever. Password security depends on many factors beyond our control.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">No Professional Advice</h4>
                    <p>
                      Our content is for informational purposes only and does NOT constitute professional security advice, legal advice, or professional consultation. You should consult qualified professionals for advice specific to your situation.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Availability</h4>
                    <p>
                      We do NOT guarantee that our Service will always be available, accessible, uninterrupted, timely, secure, or error-free. We may experience downtime for maintenance, updates, or technical issues.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Content</h4>
                    <p>
                      We are not responsible for the accuracy, reliability, or legality of content from third-party sources, including but not limited to external links, advertisements, or API providers like Have I Been Pwned.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Conduct</h4>
                    <p>
                      We are NOT responsible for user conduct or how users apply passwords generated through our Service. You are solely responsible for your actions and their consequences.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm">
                  Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. In such cases, warranties are limited to the extent permitted by law.
                </p>
              </div>
            </section>

            <section id="limitation-liability" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                7. Limitation of Liability
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white uppercase">
                    Critical Legal Provision
                  </h3>
                  <p className="font-semibold">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, DYNAMICPASSGEN AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Types of Damages We're Not Liable For
                  </h3>

                  <p>This includes, but is not limited to:</p>

                  <ul className="space-y-3 ml-6">
                    <li>
                      <strong>Direct damages:</strong> Any direct financial losses resulting from use of our Service
                    </li>
                    <li>
                      <strong>Indirect damages:</strong> Lost profits, business interruption, or loss of business opportunity
                    </li>
                    <li>
                      <strong>Data loss:</strong> Loss of data, passwords, or information
                    </li>
                    <li>
                      <strong>Security breaches:</strong> Unauthorized access to your accounts resulting from compromised passwords
                    </li>
                    <li>
                      <strong>Consequential damages:</strong> Any downstream effects or consequences of using our Service
                    </li>
                    <li>
                      <strong>Incidental damages:</strong> Any incidental costs or expenses
                    </li>
                    <li>
                      <strong>Punitive damages:</strong> Damages intended to punish
                    </li>
                    <li>
                      <strong>Special damages:</strong> Unique or special circumstances
                    </li>
                  </ul>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Scenarios Where We're Not Liable
                    </h4>
                    <ul className="space-y-2 ml-6">
                      <li>❌ If you lose a generated password and can't access an account</li>
                      <li>❌ If a password you generated is compromised through a data breach</li>
                      <li>❌ If our Service is temporarily unavailable when you need it</li>
                      <li>❌ If you use a weak password despite our recommendations</li>
                      <li>❌ If you misuse the Service or violate these Terms</li>
                      <li>❌ If third-party services (like breach checkers) provide inaccurate information</li>
                      <li>❌ If your device is compromised (malware, keyloggers, etc.)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4 mt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Maximum Liability Cap
                    </h4>
                    <p>
                      In jurisdictions that don't allow full exclusion of liability, our total liability to you for all claims arising from or related to the Service is limited to the amount you paid us for using the Service (which is <strong>$0.00</strong>, as our Service is free).
                    </p>
                  </div>

                  <p className="mt-6 text-sm">
                    These limitations apply whether the alleged liability is based on contract, tort, negligence, strict liability, or any other legal theory, even if we've been advised of the possibility of such damages.
                  </p>
                </div>
              </div>
            </section>

            <section id="third-party" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                8. Third-Party Links and Services
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Our Service may contain links to third-party websites, services, or resources. We also integrate with certain third-party APIs.
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Third-Party Services We Use
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li><strong>Google Analytics:</strong> For anonymous usage statistics (see our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>)</li>
                    <li><strong>Google AdSense:</strong> For displaying contextual advertisements</li>
                    <li><strong>Have I Been Pwned API:</strong> For password breach checking</li>
                    <li><strong>CDN providers:</strong> For fast, reliable content delivery</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-600 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h3>
                  <p className="mb-3">We are NOT responsible for:</p>
                  <ul className="space-y-2 ml-6">
                    <li>❌ The content, accuracy, or practices of third-party websites or services</li>
                    <li>❌ Privacy policies or terms of service of third parties</li>
                    <li>❌ Any damages resulting from your use of third-party services</li>
                    <li>❌ Availability or functionality of external links or services</li>
                  </ul>
                </div>

                <p className="mt-4">
                  Links to third-party sites are provided for your convenience only and do not constitute an endorsement. You access and use third-party services at your own risk. We encourage you to review their terms and privacy policies.
                </p>
              </div>
            </section>

            <section id="termination" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                9. Termination
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Your Right to Stop Using Our Service
                  </h3>
                  <p>
                    You may stop using our Service at any time. Simply close your browser and don't return. Since we don't have user accounts, there's nothing to delete or deactivate.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Our Right to Restrict Access
                  </h3>
                  <p className="mb-3">
                    We reserve the right to restrict, suspend, or terminate your access to the Service at any time, for any reason, including but not limited to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>Violation of these Terms or our Acceptable Use Policy</li>
                    <li>Illegal or harmful activities</li>
                    <li>Excessive use that burdens our servers</li>
                    <li>Security threats or abuse</li>
                    <li>False or misleading information</li>
                  </ul>
                  <p className="mt-3">
                    We may do so with or without notice, at our sole discretion.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Effect of Termination
                  </h3>
                  <p className="mb-3">
                    Upon termination:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>Your right to use the Service immediately ceases</li>
                    <li>Any sections of these Terms that should survive termination will remain in effect (including disclaimers, liability limitations, and intellectual property rights)</li>
                    <li>We're not liable for any consequences of termination</li>
                  </ul>
                </div>

                <p className="text-sm bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-4">
                  <strong>Note:</strong> Since we don't store your data or require accounts, termination simply means you can no longer access our Service. Any passwords you previously generated remain yours.
                </p>
              </div>
            </section>

            <section id="changes-terms" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                10. Changes to These Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We reserve the right to modify these Terms at any time. When we make changes, we will:
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    How We'll Notify You
                  </h3>
                  <ul className="space-y-2 ml-6">
                    <li>✓ Update the "Last Updated" date at the top of this page</li>
                    <li>✓ Display a prominent notice on our homepage for significant changes</li>
                    <li>✓ Highlight what specifically changed (when practical)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-600 p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Your Acceptance of Changes</h3>
                  <p className="mb-3">
                    By continuing to use our Service after changes are posted, you accept the modified Terms. If you don't agree with the changes:
                  </p>
                  <ul className="space-y-1 ml-6">
                    <li>Stop using our Service immediately</li>
                    <li>The previous Terms will no longer govern your use</li>
                    <li>Your only recourse is to discontinue use</li>
                  </ul>
                </div>

                <p className="mt-4">
                  We encourage you to review these Terms periodically to stay informed of any changes. Material changes will be effective immediately upon posting for new users, and 30 days after posting for existing users.
                </p>

                <p className="text-sm">
                  <strong>Version History:</strong> Previous versions of these Terms are <Link href="/contact" className="text-blue-600 hover:underline">available upon request</Link>.
                </p>
              </div>
            </section>

            <section id="governing-law" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                11. Governing Law and Dispute Resolution
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Governing Law
                  </h3>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of the jurisdiction where DynamicPassGen is based, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Dispute Resolution
                  </h3>
                  <p className="mb-3">
                    If you have a dispute with us, please first try to resolve it informally by <Link href="/contact" className="text-blue-600 hover:underline">contacting us</Link>. Most disputes can be resolved through friendly communication.
                  </p>
                  <p className="mt-3">
                    If informal resolution fails, you agree that any legal action or proceeding must be brought exclusively in the courts of competent jurisdiction in our location, and you consent to the personal jurisdiction of such courts.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Class Action Waiver
                  </h3>
                  <p>
                    You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Severability
                  </h3>
                  <p>
                    If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Entire Agreement
                  </h3>
                  <p>
                    These Terms, along with our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, constitute the entire agreement between you and DynamicPassGen regarding use of the Service, superseding any prior agreements.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className="mb-12" style={{ scrollMarginTop: '5rem' }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                12. Contact Information
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  If you have questions, concerns, or feedback regarding these Terms of Service, please contact us:
                </p>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Get in Touch
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Email:</strong> <a href="mailto:legal@dynamicpassgen.com" className="text-blue-600 hover:underline">legal@dynamicpassgen.com</a>
                    </p>
                    <p>
                      <strong>General Inquiries:</strong> <a href="mailto:contact@dynamicpassgen.com" className="text-blue-600 hover:underline">contact@dynamicpassgen.com</a>
                    </p>
                    <p>
                      <strong>Contact Form:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Submit a message</Link>
                    </p>
                    <p>
                      <strong>Response Time:</strong> We aim to respond to inquiries within 48-72 hours
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  For privacy-related questions, please refer to our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> or contact our privacy team at <a href="mailto:privacy@dynamicpassgen.com" className="text-blue-600 hover:underline">privacy@dynamicpassgen.com</a>.
                </p>
              </div>
            </section>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">
                Thank You for Using DynamicPassGen
              </h2>
              <p className="text-lg mb-6 text-green-100">
                By using our Service responsibly, you help us maintain a secure, reliable tool for everyone.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Start Generating Secure Passwords →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
