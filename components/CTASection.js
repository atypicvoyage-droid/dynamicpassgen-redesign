import ScrollLink from './ScrollLink';

export default function CTASection({ 
  title = "Ready to Secure Your Accounts?",
  description = "Generate your first secure password in seconds. No registration, completely free, and guaranteed private.",
  buttonText = "Generate Password Now →",
  buttonLink = "#generator"
}) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>
        <ScrollLink href={buttonLink} className="cta-button">
          {buttonText}
        </ScrollLink>
      </div>
    </section>
  );
}
