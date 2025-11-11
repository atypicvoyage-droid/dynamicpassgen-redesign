'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { smoothScrollToId } from '@/utils/smoothScrollToId';

export default function CTASection({
  title = "Ready to Secure Your Accounts?",
  description = "Generate your first secure password in seconds. No registration, completely free, and guaranteed private.",
  buttonText = "Generate Password Now →",
  buttonLink = "#generator",
  ctaId = "default-cta"
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_impression', {
        event_category: 'CTA',
        event_label: ctaId,
        cta_title: title,
        non_interaction: true,
      });
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
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      const ctaElement = document.getElementById(`cta-${ctaId}`);
      if (ctaElement) observer.observe(ctaElement);
      return () => {
        if (ctaElement) observer.unobserve(ctaElement);
      };
    }
  }, [ctaId, title]);

  const handleCTAClick = (e) => {
    if (
      typeof buttonLink === "string" &&
      buttonLink.startsWith('#') &&
      pathname === '/'
    ) {
      // Smooth scroll for in-page anchor
      e.preventDefault();
      smoothScrollToId(buttonLink);
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: ctaId,
        cta_title: title,
        button_text: buttonText,
        destination_url: buttonLink,
        value: 1,
      });
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        event_category: 'Engagement',
        event_label: `CTA Click - ${ctaId}`,
        value: 1,
      });
    }
  };

  return (
    <section className="cta-section" id={`cta-${ctaId}`}>
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>
        <Link href={buttonLink} className="cta-button" onClick={handleCTAClick}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
