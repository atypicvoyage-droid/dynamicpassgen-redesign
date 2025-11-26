// lib/withGAClick.js

/**
 * Track click events in Google Analytics
 * @param {string} label - Descriptive label for the click event
 * @param {string} category - Event category (e.g., 'Navigation', 'CTA', 'Tool Interaction')
 * @param {number} value - Optional numeric value for the event (defaults to 1)
 */
export function trackClick(label, category = 'User Interaction', value = 1) {
  if (typeof window === 'undefined') return;

  // Check if we're in development mode (localhost)
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isDev) {
    // Log to console in dev mode
    console.log('[GA - Dev Mode]', {
      action: 'click',
      category: category,
      label: label,
      value: value
    });
    return;
  }

  // Send to Google Analytics in production
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: false
    });
  }
}

/**
 * Track custom events in Google Analytics
 * @param {string} eventName - Name of the event
 * @param {object} params - Event parameters
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isDev) {
    console.log('[GA - Dev Mode]', {
      event: eventName,
      ...params
    });
    return;
  }

  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
}
