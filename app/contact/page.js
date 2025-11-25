import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
  title: 'Contact Us - DynamicPassGen | Get Help with Password Security',
  description: 'Contact DynamicPassGen for support, feedback, or questions about our free password generator tools. Reach out for help with password security.',
  keywords: 'contact us, customer support, help, feedback, password generator support, security questions',
  openGraph: {
    title: 'Contact DynamicPassGen - We\'re Here to Help',
    description: 'Get in touch with our team for support, feedback, or questions about password security and our free tools.',
    url: 'https://dynamicpassgen.com/contact',
    type: 'website'
  },
  alternates: {
    canonical: 'https://dynamicpassgen.com/contact'
  }
}

export default function ContactPage() {
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
        "name": "Contact",
        "item": "https://dynamicpassgen.com/contact"
      }
    ]
  }

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DynamicPassGen",
    "description": "Contact information and ways to reach DynamicPassGen for support, feedback, or questions.",
    "url": "https://dynamicpassgen.com/contact"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DynamicPassGen",
    "url": "https://dynamicpassgen.com",
    "logo": "https://dynamicpassgen.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@dynamicpassgen.com",
      "contactType": "Customer Support",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    }
  }

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="contact-page-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(contactPageSchema)}
      </Script>
      <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(organizationSchema)}
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
              Contact
            </li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're here to help with questions, feedback, or support. Reach out and we'll get back to you soon.
            </p>
          </header>

          {/* Main Contact Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-12 mb-12 border-2 border-blue-200 dark:border-blue-700 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Email Us Directly
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you have questions, need support, want to report a bug, or just want to share feedback, send us an email and we'll respond as soon as possible.
            </p>
            <a 
              href="mailto:contact@dynamicpassgen.com" 
              className="inline-flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline mb-4"
            >
              contact@dynamicpassgen.com
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              <strong>Response time:</strong> We typically respond within 24-48 hours
            </p>
          </div>

          {/* What We Can Help With */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              What We Can Help You With
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">General Questions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Questions about our tools, features, or how to use DynamicPassGen</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Technical Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Report bugs, technical issues, or problems with our service</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Privacy & Security</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Questions about data practices, privacy, or security concerns</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Feedback & Suggestions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Share ideas for new features or improvements to our tools</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Business Inquiries</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Partnership opportunities or business-related questions</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Security Research</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Report security vulnerabilities or research findings</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Quick Links */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Before You Email Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
              Your question might already be answered! Check these resources first:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/about#faq"
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    FAQs
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Browse frequently asked questions about our service and security
                </p>
              </Link>

              <Link 
                href="/guides"
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Security Guides
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn password best practices from our comprehensive guides
                </p>
              </Link>

              <Link 
                href="/privacy"
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Privacy Policy
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Understand our data practices and privacy commitment
                </p>
              </Link>
            </div>
          </section>

          {/* Alternative Contact - GitHub */}
          {/* <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Report Issues on GitHub
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Found a bug or want to contribute? Open an issue or submit a pull request on our GitHub repository.
                </p>
                <a 
                  href="https://github.com/atypicvoyage-droid/dynamicpassgen-redesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Visit GitHub Repository
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section> */}

          {/* Response Expectation */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  What to Expect When You Email Us
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>✓ <strong>Quick acknowledgment:</strong> We confirm receipt within 24 hours</li>
                  <li>✓ <strong>Detailed responses:</strong> We aim for helpful, thorough answers</li>
                  <li>✓ <strong>Follow-up:</strong> If we need more info, we'll reach out promptly</li>
                  <li>✓ <strong>Privacy respected:</strong> Your contact info is never shared (see our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>)</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
