import React, { useState } from 'react'
import SEOHead from '../components/Common/SEOHead'

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead title="Contact | DynamicPassGen" />
      <section className="section">
        <div className="container-narrow">
          <h1>Contact Us</h1>
          {submitted ? (
            <div className="alert alert-success">Thank you for your feedback! We'll reply to your email soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="form-textarea" required />
              </div>
              <button type="submit" className="btn btn-large btn-block">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default ContactPage
