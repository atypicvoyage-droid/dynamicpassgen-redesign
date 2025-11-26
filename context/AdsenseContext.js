// context/AdsenseContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AdSenseContext = createContext(null);

export function AdsenseProvider({ children }) {
  const [enabled, setEnabled] = useState(false);
  const [placements, setPlacements] = useState({});

  useEffect(() => {
    // Load AdSense configuration from environment
    const adsenseEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
    setEnabled(adsenseEnabled);

    // IMPORTANT: After AdSense approval, update these with your real ad unit IDs
    // You can reuse the same ad units across different placements, or create separate ones
    
    // Example configuration (update with your real IDs after approval):
    // setPlacements({
    //   // ============================================
    //   // GLOBAL PLACEMENTS (Homepage + Tools)
    //   // ============================================
    //   'global_top': '1234567890',              // Top banner
    //   'global_after_tool': '0987654321',       // After tool/content
    //   'global_mid_content': '1122334455',      // Mid content
    //   'global_before_cta': '5544332211',       // Before CTA
    //   'global_footer_above': '9988776655',     // Above footer
    //   
    //   // ============================================
    //   // ARTICLE PLACEMENTS
    //   // ============================================
    //   'article_top': '1234567890',             // Top of article (can reuse global_top)
    //   'article_after_intro': '0987654321',     // After intro (can reuse global_after_tool)
    //   'article_mid_content': '1122334455',     // Mid article (can reuse global_mid_content)
    //   'article_before_faq': '5544332211',      // Before FAQ section (can reuse global_before_cta)
    //   'article_end': '9988776655',             // End of article (can reuse global_footer_above)
    //   
    //   // ============================================
    //   // GUIDES LANDING PAGE
    //   // ============================================
    //   'guides_top': '1234567890',              // Top of guides list (can reuse global_top)
    //   'guides_bottom': '5544332211',           // Bottom of guides list (can reuse global_before_cta)
    // });
    
    // TIP: You can create just 5 ad units in AdSense and reuse them across all placements
    // or create separate units for better tracking per page type
  }, []);

  return (
    <AdSenseContext.Provider value={{ enabled, setEnabled, placements, setPlacements }}>
      {children}
    </AdSenseContext.Provider>
  );
}

export const useAdsense = () => {
  const context = useContext(AdSenseContext);
  if (!context) {
    throw new Error("useAdsense must be used within AdsenseProvider");
  }
  return context;
};
