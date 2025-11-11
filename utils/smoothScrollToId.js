// No Next.js import needed in utility itself (don't import useRouter here!)

export function smoothScrollToId(anchor, offset = 80) {
  if (typeof window === "undefined") {
    console.error("smoothScrollToId called on server.");
    return false;
  }

  if (!anchor || typeof anchor !== 'string') {
    console.error("smoothScrollToId: No anchor provided or anchor is not a string.", anchor);
    return false;
  }

  // Accept "#id", "/#id", "/about#id"
  let id = '';
  if (anchor.startsWith('#')) {
    id = anchor.slice(1);
  } else if (anchor.includes('#')) {
    // e.g., "/#generator" or "/about#why-us"
    const parts = anchor.split('#');
    if (parts.length > 1) {
      id = parts[1];
    }
  } else {
    // Not an anchor, nothing to scroll to
    console.error("smoothScrollToId: No hash in anchor.", anchor);
    return false;
  }

  if (!id) {
    console.error("smoothScrollToId: Could not extract id from anchor.", anchor);
    return false;
  }

  // Check if target element exists
  const element = document.getElementById(id);

  if (!element) {
    console.warn(`smoothScrollToId: element with id "${id}" not found in DOM.`);
    return false;
  }

  // Scroll to element with offset
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

  return true; // Indicate scroll occurred
}
