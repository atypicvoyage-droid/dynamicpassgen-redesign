export default function UniqueFeatures() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
          <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" fill="currentColor"/>
        </svg>
      ),
      title: "Session History",
      description: "Automatically saves your last 5 generated passwords in your browser session. Quickly copy or reuse previous passwords without regenerating."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="currentColor"/>
        </svg>
      ),
      title: "Live Strength Analysis",
      description: "Real-time entropy calculation with estimated crack time. See exactly how secure your password is before using it—from weak to trillions of years."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
        </svg>
      ),
      title: "3 Generation Modes",
      description: "Choose between random passwords, memorable passphrases, or numeric PINs—all in one tool. Switch modes instantly with tab navigation."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" fill="currentColor"/>
        </svg>
      ),
      title: "Zero Data Collection",
      description: "No accounts, no cookies, no analytics. Everything runs in your browser. We literally cannot see or store your passwords—complete privacy guaranteed."
    }
  ];

  return (
    <section className="unique-features-section">
      <div className="unique-features-container">
        <h2 className="unique-features-title">What Makes Us Different?</h2>
        <div className="unique-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="unique-feature-card highlight">
              <div className="unique-feature-icon">
                {feature.icon}
              </div>
              <h3 className="unique-feature-name">{feature.title}</h3>
              <p className="unique-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
