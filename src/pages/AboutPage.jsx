import React from 'react'
import SEOHead from '../components/Common/SEOHead'

const AboutPage = () => (
  <>
    <SEOHead title="About | DynamicPassGen" />
    <section className="section">
      <div className="container-narrow">
        <h1>About DynamicPassGen</h1>
        <div className="mt-2">
          <p>DynamicPassGen is built by a team passionate about cybersecurity and user safety. We are committed to providing best-in-class password generation, security learning resources, and digital trust signals for every user. All password processing is done client-side for maximum privacy.</p>
          <h3>Our Mission</h3>
          <ul>
            <li>Empower users to create unbreakable passwords easily</li>
            <li>Educate the public about advanced cyber hygiene</li>
            <li>Continuously improve based on user feedback</li>
          </ul>
        </div>
      </div>
    </section>
  </>
)

export default AboutPage
