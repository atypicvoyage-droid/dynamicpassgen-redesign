// lib/analytics.js
// Google Analytics utility with local environment filtering

export const isProd = 
  typeof window !== "undefined" && 
  !window.location.hostname.includes("localhost") &&
  !window.location.hostname.includes("127.0.0.1");

// Track custom events - only sends in production
export function trackGAEvent({
  action,
  category,
  label,
  value,
}) {
  if (!isProd) {
    console.log('[GA - Dev Mode]', { action, category, label, value });
    return;
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track page views
export function trackPageView(url) {
  if (!isProd) {
    console.log('[GA - Dev Mode] Page view:', url);
    return;
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
      page_path: url,
    });
  }
}
