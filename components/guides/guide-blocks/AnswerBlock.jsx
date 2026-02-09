'use client'
export default function AnswerBlock({ children, question }) {
  return (
    <div className="answer-block" itemScope itemType="https://schema.org/Question">
      {question && (
        <h3 className="answer-question" itemProp="name">
          {question}
        </h3>
      )}
      <div
        className="answer-content"
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <div itemProp="text">{children}</div>
      </div>

      <style jsx>{`
        .answer-block {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 0.75rem;
          margin: 2rem 0;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        }

        .answer-question {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: white;
        }

        .answer-content {
          font-size: 1.0625rem;
          line-height: 1.7;
        }

        .answer-content :global(p) {
          margin: 0;
          color: white;
        }

        .answer-content :global(strong) {
          font-weight: 700;
          color: white;
        }

        .answer-content :global(a) {
          color: #bfdbfe;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .answer-block {
            padding: 1.5rem;
            margin: 1.5rem 0;
          }

          .answer-question {
            font-size: 1rem;
          }

          .answer-content {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
