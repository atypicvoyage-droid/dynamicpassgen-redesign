import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';

export const metadata = {
  title: 'About Us - DynamicPassGen | NIST-Compliant Password Security',
  description: 'Learn about DynamicPassGen\'s mission to provide free, cryptographically secure password generation. Discover our story, why we built this tool, and how we\'re helping users protect their digital lives.',
  keywords: 'about password generator, secure password tool, NIST compliant, cryptographic security, password security mission, free password generator',
  openGraph: {
    title: 'About DynamicPassGen - Trusted Password Security',
    description: 'Professional password generation built on cryptographic standards. Zero data collection, 100% client-side security. Learn our story.',
    url: 'https://dynamicpassgen.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About DynamicPassGen
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Born from frustration, built for security. We're making <strong>strong password generation</strong> accessible to everyone through a free, professional-grade tool that protects your digital life without compromising your privacy.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Every password you create with our tool is generated using the same cryptographic technology that banks and governments rely on—completely free, forever.
          </p>
        </section>

        {/* Our Story - Personal & Authentic */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story: Born from Real Frustration
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
              <p>
                DynamicPassGen didn't start as a business plan or a grand vision. It started with me, sitting at 2 AM, locked out of an important account because I couldn't remember the <strong>random password</strong> I'd generated weeks earlier. I'd been so focused on creating a "strong password" that I forgot to save it anywhere. No password manager. No backup. Just... gone.
              </p>
              <p>
                Sound familiar? That moment of panic—when you realize you've locked yourself out of your own digital life—is something millions of people experience. But here's what frustrated me even more: the <strong>password generators</strong> I'd been using were part of the problem.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Problems I Kept Running Into</h3>
              <p>
                As I dug deeper into password security, I realized how broken most password generation tools really are:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>They don't tell you WHY</strong> - Most generators spit out a random string and leave you guessing. Is "Ab7!xK2m" actually secure? How long would it take to crack? You're left hoping it's good enough.</li>
                <li><strong>The "copy to clipboard" trap</strong> - You generate a password, copy it, paste it... and then what? Close the tab and it's gone forever. I can't count how many times I generated a password, got distracted during account setup, and lost it before I could save it.</li>
                <li><strong>Trust issues</strong> - How do you know the password generator isn't sending your passwords to a server somewhere? Most tools don't explain their security model, so you're trusting blindly.</li>
                <li><strong>Slow and bloated</strong> - Why does it take 5-10 seconds to load a password generator? Why are there ads everywhere? Why do I need to sign up just to generate a password?</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The "Aha!" Moment</h3>
              <p>
                After my 2 AM lockout incident, I spent the next morning building a simple password generator for myself. Just the basics: generate password, show strength, done. But then I thought—if I'm frustrated with existing tools, how many other people are dealing with the same problems?
              </p>
              <p>
                That weekend project turned into DynamicPassGen. I added features I wish other tools had:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Real-time strength analysis</strong> - See exactly how strong your password is, with actual math (entropy, estimated crack time). No guessing.</li>
                <li><strong>Visual feedback</strong> - Watch your password strength improve as you adjust length and character types. It's educational and empowering.</li>
                <li><strong>Instant generation</strong> - No loading screens, no delays. Click and get a secure password immediately.</li>
                <li><strong>Complete transparency</strong> - Everything happens in your browser. Zero server communication. Your passwords never leave your device—provably.</li>
                <li><strong>Free, no BS</strong> - No registration, no premium features locked behind paywalls, no annoying popups. Just security, instantly accessible.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why DynamicPassGen is Actually Better</h3>
              <p>
                Here's what makes us different from the dozens of other password generators out there:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>You understand what you're creating</strong> - We don't just generate passwords; we teach you about password security. See the entropy calculation, understand why 16 characters is better than 8, learn what makes a password truly secure.</li>
                <li><strong>Built with modern cryptographic standards</strong> - We use the Web Crypto API (<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">crypto.getRandomValues()</code>)—the same technology that secures your online banking. Not the predictable <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">Math.random()</code> function amateur tools use.</li>
                <li><strong>NIST 2025 compliant</strong> - We follow the guidelines set by the National Institute of Standards and Technology, the gold standard for password security. Our passwords meet government and enterprise requirements.</li>
                <li><strong>No trust required</strong> - Open your browser's developer tools and watch the network tab. You'll see zero requests when generating passwords. Everything happens locally. We can't steal what we never see.</li>
                <li><strong>Actually fast</strong> - No 10-second load times, no progress bars, no "calculating..." messages. Instant results, every time.</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Lost Password Problem (And How to Solve It)</h3>
              <p>
                Remember my 2 AM lockout? That experience taught me something crucial: <strong>generating secure passwords is only half the battle</strong>. The other half is <em>managing</em> them properly.
              </p>
              <p>
                That's why we built comprehensive guides on <strong>password managers</strong>, two-factor authentication, and password security best practices. We don't just give you the fish—we teach you how to fish. Because a password generator alone isn't enough. You need a complete security strategy.
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Pro tip: After you generate a secure password with our tool, immediately save it in a password manager like Bitwarden, 1Password, or LastPass. Never rely on memory alone. Learn from my 2 AM mistake.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Our Mission Today</h3>
              <p>
                We believe <strong>password security</strong> is a fundamental right, not a luxury feature hidden behind a paywall. Every internet user deserves access to tools that protect their digital identity, regardless of technical expertise or financial situation.
              </p>
              <p>
                Today, DynamicPassGen serves thousands of users who generate passwords for everything from personal email accounts to enterprise systems. Our community includes students setting up their first accounts, parents protecting their families online, small business owners securing customer data, and IT professionals managing complex systems.
              </p>
              <p>
                We're not a massive corporation with unlimited resources. We're a small team passionate about security, frustrated with the status quo, and committed to building tools that actually solve real problems. Every feature we add comes from user feedback and real-world experience.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Privacy First */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Privacy First, Always
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your <strong>passwords never leave your device</strong>. Period. Every password is generated 100% client-side using the Web Crypto API built into your browser. We can't see them, store them, access them, or compromise them—ever.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Don't believe us? Open your browser's network inspector during password generation—you'll see zero requests. Complete transparency.
              </p>
            </div>

            {/* Security Standards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                NIST 2025 Compliant
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built following <strong>NIST SP 800-63B guidelines</strong>—the gold standard for digital authentication. Our cryptographically secure algorithm meets government and enterprise security requirements.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Strong enough for classified systems, Fortune 500 companies, and everything in between.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Free Forever, For Everyone
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Password security</strong> shouldn't cost money. Our tool is completely free, with no premium tiers, hidden fees, or registration requirements. Security for everyone.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Funded through ethical advertising—never through paywalls that restrict essential security features.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="max-w-4xl mx-auto mb-16">
          <TrustBadges />
        </section>

        {/* Commitment */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Commitment to You
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Zero data collection</strong> — We don't track, store, analyze, or sell your information. No tracking cookies, no password logs, no hidden telemetry.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Regular security updates</strong> — Continuous monitoring and improvements to maintain the highest security standards based on latest threats.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Transparent methodology</strong> — Our password generation algorithm is based on established cryptographic standards. No proprietary "secret sauce"—just proven science.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Community-driven improvements</strong> — We listen to user feedback and continuously enhance based on real-world needs. Your voice shapes our product.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Always free, never paywalled</strong> — Core security features will never be locked behind premium tiers. Security is a right, not a luxury.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistics - Realistic */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              Built with Modern Standards
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">256-bit</div>
                <div className="text-blue-100">Cryptographic Entropy</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">0ms</div>
                <div className="text-blue-100">Server Communication</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Client-Side Security</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">Free</div>
                <div className="text-blue-100">Forever & Always</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Join users worldwide who trust DynamicPassGen to protect their digital lives. From students securing their first email accounts to professionals managing enterprise systems—our tool serves everyone who values security.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection 
          ctaId="about-page-bottom"
          title="Ready to Create Your First Secure Password?"
          description="Experience cryptographically secure password generation in seconds. No registration, no cost, no compromises—just real security."
          buttonText="Generate Secure Password Now →"
          buttonLink="/#generate"
        />
      </main>

      <Footer />
    </>
  );
}
