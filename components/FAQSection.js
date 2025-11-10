export default function FAQSection({ faqs }) {
  const defaultFaqs = [
    {
      question: "Is this password generator really secure?",
      answer: "Yes. We use the Web Crypto API's window.crypto.getRandomValues() method, which is cryptographically secure and used by major browsers and banks. All generation happens locally—passwords never leave your device."
    },
    {
      question: "Do you store or log the passwords I generate?",
      answer: "No. All password generation happens entirely in your browser. We have no server-side logging or storage of generated passwords."
    },
    {
      question: "What's the difference between a password and a passphrase?",
      answer: "A password is a random string of characters, while a passphrase is a series of random words. Passphrases are easier to remember but equally secure when generated randomly."
    },
    {
      question: "How long should my password be?",
      answer: "For most accounts, 12-16 characters is sufficient. For high-security accounts, use 16-20+ characters. Longer passwords exponentially increase security."
    },
    {
      question: "Can I use this for business/commercial purposes?",
      answer: "Absolutely! Our tool is free for personal and commercial use. Generate passwords for business accounts, employee onboarding, or security training."
    }
  ];

  const faqList = faqs || defaultFaqs;

  return (
    <section className="content-section">
      <div className="content-container">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqList.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
