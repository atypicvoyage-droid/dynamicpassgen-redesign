import './globals.css'

export const metadata = {
  title: 'Dynamic Password Generator - Secure, NIST-Compliant Free Tool | 2025',
  description: 'Generate cryptographically secure passwords with advanced algorithms. Real-time strength analysis, NIST 2025 compliant, 100% client-side security.',
  keywords: 'dynamic password generator, secure password generator, NIST compliant, cryptographic password, random password tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google AdSense - Replace with your Publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  )
}
