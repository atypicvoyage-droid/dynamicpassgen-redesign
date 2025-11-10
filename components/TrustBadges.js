export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="currentColor"/>
        </svg>
      ),
      label: "256-bit Encryption"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="currentColor"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" fill="none"/>
        </svg>
      ),
      label: "NIST Compliant"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" fill="currentColor"/>
        </svg>
      ),
      label: "100% Client-Side"
    }
  ];

  return (
    <div className="trust-badges">
      {badges.map((badge, index) => (
        <div key={index} className="trust-badge">
          {badge.icon}
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
