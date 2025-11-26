'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { smoothScrollToId } from '@/utils/smoothScrollToId'
import { trackClick } from '@/lib/withGAClick'

export default function CTASection({
  title = "Ready to Secure Your Accounts?",
  description = "Generate your first cryptographically secure password in seconds. No signup required.",
  buttonText = "Generate Password Now",
  buttonLink = "#generator",
  ctaId = "default-cta"
}) {
  const pathname = usePathname()

  // Track CTA impressions and views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_impression', {
        event_category: 'CTA',
        event_label: ctaId,
        cta_title: title,
        non_interaction: true,
      })

      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              window.gtag('event', 'cta_viewed', {
                event_category: 'CTA',
                event_label: ctaId,
                cta_title: title,
                visibility_ratio: entry.intersectionRatio,
                non_interaction: true,
              })
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 }
      )

      const ctaElement = document.getElementById(`cta-${ctaId}`)
      if (ctaElement) observer.observe(ctaElement)

      return () => {
        if (ctaElement) observer.unobserve(ctaElement)
      }
    }
  }, [ctaId, title])

  const handleCTAClick = (e) => {
    // Handle smooth scrolling for in-page anchors on homepage
    if (
      typeof buttonLink === "string" &&
      buttonLink.startsWith('#') &&
      pathname === '/'
    ) {
      e.preventDefault()
      smoothScrollToId(buttonLink)
    }

    // Track with both methods for comprehensive analytics
    trackClick(`CTA - ${ctaId} - ${buttonText}`, 'CTA')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: ctaId,
        cta_title: title,
        button_text: buttonText,
        destination_url: buttonLink,
        value: 1,
      })

      // Optional: Track as conversion if you have AdWords conversion tracking
      // Replace AW-CONVERSION_ID/CONVERSION_LABEL with your actual values
      // window.gtag('event', 'conversion', {
      //   send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      //   event_category: 'Engagement',
      //   event_label: `CTA Click - ${ctaId}`,
      //   value: 1,
      // })
    }
  }

  return (
    <section className="cta-section" id={`cta-${ctaId}`} style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '64px 32px',
      textAlign: 'center',
      marginTop: '80px',
      marginBottom: '40px',
      boxShadow: '0 20px 50px rgba(102, 126, 234, 0.2)'
    }}>
      <div className="cta-content">
        <h2 className="cta-title" style={{
          color: 'white',
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: '800',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          {title}
        </h2>
        <p className="cta-description" style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.25rem',
          marginBottom: '32px',
          maxWidth: '600px',
          margin: '0 auto 32px',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
        <Link 
          href={buttonLink} 
          className="cta-button" 
          onClick={handleCTAClick}
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#667eea',
            padding: '16px 40px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.125rem',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)'
          }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
