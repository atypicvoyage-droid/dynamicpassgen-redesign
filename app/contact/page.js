'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, send to your backend/email service
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main style={{minHeight: '60vh', padding: '60px 20px'}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Contact Us</h1>
          <p style={{color: 'var(--text-light)', marginBottom: '2rem'}}>Have questions or feedback? We'd love to hear from you.</p>
          
          {submitted ? (
            <div style={{padding: '20px', background: 'rgba(34, 214, 167, 0.1)', borderRadius: '8px', color: 'var(--accent-green)'}}>
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div>
                <label style={{display: 'block', marginBottom: '8px'}}>Name</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: 'var(--navy-card)'}}
                />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '8px'}}>Email</label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: 'var(--navy-card)'}}
                />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '8px'}}>Message</label>
                <textarea 
                  required
                  rows="6"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: 'var(--navy-card)', resize: 'vertical'}}
                />
              </div>
              
              <button type="submit" className="generate-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
