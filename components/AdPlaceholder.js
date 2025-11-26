// components/AdPlaceholder.js
"use client";

import { useAdsense } from "../context/AdsenseContext";
import { useEffect } from "react";

export default function AdPlaceholder({ placementId, className = "", style = {} }) {
  const { enabled, placements } = useAdsense();
  const adUnitId = placements[placementId];

  useEffect(() => {
    // Load AdSense ads when enabled and mounted
    if (enabled && adUnitId && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [enabled, adUnitId]);

  // AdSense is enabled but no ad unit configured - hide completely
  if (enabled && !adUnitId) {
    return null;
  }

  // AdSense is enabled with ad unit - show real ad
  if (enabled && adUnitId) {
    return (
      <div className={`ad-container ${className}`} style={style}>
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            minHeight: 120,
            background: "#f9f9f9",
          }}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ""}
          data-ad-slot={adUnitId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // AdSense disabled - show placeholder
  return (
    <div
      className={`ad-placeholder ${className}`}
      style={{
        border: "2px dashed #cbd5e0",
        padding: "24px",
        textAlign: "center",
        background: "#f7fafc",
        color: "#718096",
        borderRadius: "8px",
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: "14px",
        ...style,
      }}
    >
      <div>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>
          📢 Ad Placement
        </div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>
          ID: {placementId}
        </div>
      </div>
    </div>
  );
}
