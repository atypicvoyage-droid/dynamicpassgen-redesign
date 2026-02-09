'use client'

export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`guide-section ${className}`}>
      {children}
      
      <style jsx>{`
        .guide-section {
          margin-bottom: 3rem;
          scroll-margin-top: 6rem;
        }

        .guide-section :global(h2) {
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 1.3;
          color: #0f172a;
          margin: 0 0 1.5rem 0;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .guide-section :global(h3) {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          color: #1e293b;
          margin: 2rem 0 1rem 0;
        }

        .guide-section :global(h4) {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.4;
          color: #334155;
          margin: 1.5rem 0 0.75rem 0;
        }

        .guide-section :global(p) {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #334155;
          margin: 0 0 1.25rem 0;
        }

        .guide-section :global(ul),
        .guide-section :global(ol) {
          font-size: 1.0625rem;
          line-height: 1.75;
          color: #334155;
          margin: 0 0 1.25rem 0;
          padding-left: 1.5rem;
        }

        .guide-section :global(li) {
          margin-bottom: 0.5rem;
        }

        .guide-section :global(a) {
          color: #3b82f6;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }

        .guide-section :global(a:hover) {
          border-bottom-color: #3b82f6;
        }

        .guide-section :global(strong) {
          font-weight: 600;
          color: #0f172a;
        }

        .guide-section :global(em) {
          font-style: italic;
        }

        .guide-section :global(code) {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9em;
          background: #f1f5f9;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          color: #be123c;
        }

        @media (max-width: 768px) {
          .guide-section :global(h2) {
            font-size: 1.5rem;
          }

          .guide-section :global(h3) {
            font-size: 1.25rem;
          }

          .guide-section :global(p),
          .guide-section :global(ul),
          .guide-section :global(ol) {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

// Helper components - exported separately
export function H2({ children, id }) {
  // Auto-generate ID from text if not provided
  const autoId = id || (typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '')
  
  return <h2 id={autoId}>{children}</h2>
}

export function H3({ children }) {
  return <h3>{children}</h3>
}

export function H4({ children }) {
  return <h4>{children}</h4>
}
