import React from 'react'
import SEOHead from '../components/Common/SEOHead'

const BreachCheckerPage = () => (
  <>
    <SEOHead title="Breach Database Checker | DynamicPassGen" />
    <section className="section">
      <div className="container-narrow">
        <h1>Breach Database Checker</h1>
        <div className="mt-2">
          <p>This tool allows users to verify whether their passwords or emails have been exposed in data breaches. Integrate with the HaveIBeenPwned API or similar.</p>
        </div>
      </div>
    </section>
  </>
)

export default BreachCheckerPage
