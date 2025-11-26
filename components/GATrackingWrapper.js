// components/GATrackingWrapper.js
"use client";

import { trackClick } from '@/lib/withGAClick';

/**
 * Wrapper component to add GA tracking to any clickable element
 * Usage: <GATrackingWrapper label="Button Name" category="CTA"><button>Click Me</button></GATrackingWrapper>
 */
export default function GATrackingWrapper({ children, label, category = "User Interaction" }) {
  const handleClick = (e) => {
    trackClick(label, category);
    // If the child has an onClick handler, call it
    if (children?.props?.onClick) {
      children.props.onClick(e);
    }
  };

  // Clone the child element and add onClick handler
  return (
    <div onClick={handleClick} style={{ display: 'inline-block', cursor: 'pointer' }}>
      {children}
    </div>
  );
}
