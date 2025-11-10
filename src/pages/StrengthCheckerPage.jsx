import React from 'react'
import SEOHead from '../components/Common/SEOHead'

const StrengthCheckerPage = () => (
  <>
    <SEOHead title="Password Strength Checker | DynamicPassGen" />
    <section className="section">
      <div className="container-narrow">
        <h1>Password Strength Checker</h1>
        <div className="mt-2">
          <p>This tool helps users assess how strong their existing passwords are. Integrate entropy calculations, crack time estimates, and improvement suggestions here.</p>
        </div>
      </div>
    </section>
  </>
)

export default StrengthCheckerPage
