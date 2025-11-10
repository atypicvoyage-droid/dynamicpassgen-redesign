import React from 'react'
import SEOHead from '../components/Common/SEOHead'

const PrivacyPage = () => (
  <>
    <SEOHead title="Privacy Policy | DynamicPassGen" />
    <section className="section">
      <div className="container-narrow">
        <h1>Privacy Policy</h1>
        <p><em>Last Updated: November 2025</em></p>
        <div className="mt-2">
          <p>Your privacy is our highest priority. DynamicPassGen is 100% client-side for all password generation – nothing you enter or generate is ever stored or sent to our servers. We use Google Analytics and AdSense with anonymized tracking only.</p>
          <ul>
            <li>No passwords or sensitive user input are ever logged</li>
            <li>Data processed for analytics is anonymized</li>
            <li>GDPR compliant: you may request data deletion or information at any time via contact form</li>
          </ul>
        </div>
      </div>
    </section>
  </>
)

export default PrivacyPage
