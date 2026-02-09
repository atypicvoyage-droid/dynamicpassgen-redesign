'use client'
export default function CalloutBox({ type = 'info', title, children }) {
  const styles = {
    info: {
      bg: '#eff6ff',
      border: '#3b82f6',
      icon: 'ℹ️',
      titleColor: '#1e40af',
    },
    warning: {
      bg: '#fef3c7',
      border: '#f59e0b',
      icon: '⚠️',
      titleColor: '#92400e',
    },
    success: {
      bg: '#d1fae5',
      border: '#10b981',
      icon: '✅',
      titleColor: '#065f46',
    },
    error: {
      bg: '#fee2e2',
      border: '#ef4444',
      icon: '❌',
      titleColor: '#991b1b',
    },
    tip: {
      bg: '#e0e7ff',
      border: '#6366f1',
      icon: '💡',
      titleColor: '#3730a3',
    },
  }

  const style = styles[type] || styles.info

  return (
    <div className="callout-box">
      <div className="callout-header">
        <span className="callout-icon">{style.icon}</span>
        {title && <h4 className="callout-title">{title}</h4>}
      </div>
      <div className="callout-content">{children}</div>

      <style jsx>{`
        .callout-box {
          background: ${style.bg};
          border-left: 4px solid ${style.border};
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .callout-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .callout-icon {
          font-size: 1.5rem;
          line-height: 1;
        }

        .callout-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: ${style.titleColor};
          margin: 0;
        }

        .callout-content {
          font-size: 1rem;
          line-height: 1.6;
          color: #334155;
        }

        .callout-content :global(p) {
          margin: 0 0 0.75rem 0;
        }

        .callout-content :global(p:last-child) {
          margin-bottom: 0;
        }

        .callout-content :global(ul),
        .callout-content :global(ol) {
          margin: 0.5rem 0 0 0;
          padding-left: 1.5rem;
        }

        .callout-content :global(li) {
          margin-bottom: 0.375rem;
        }

        @media (max-width: 768px) {
          .callout-box {
            padding: 1.25rem;
          }

          .callout-icon {
            font-size: 1.25rem;
          }

          .callout-title {
            font-size: 1rem;
          }

          .callout-content {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </div>
  )
}
