// lib/withGAClick.js
// Higher-order function to wrap click handlers with GA tracking

import { trackGAEvent } from './analytics';

export function withGAClick(handler, label, category = 'User Interaction') {
  return (...args) => {
    trackGAEvent({
      action: 'click',
      category,
      label,
    });
    return handler(...args);
  };
}

// Simpler version for direct onClick handlers
export function trackClick(label, category = 'User Interaction') {
  trackGAEvent({
    action: 'click',
    category,
    label,
  });
}
