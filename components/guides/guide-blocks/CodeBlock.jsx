'use client'

import { useState } from 'react'

export default function CodeBlock({ code, language = 'javascript', filename, showLineNumbers = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block">
      <div className="code-header">
        {filename && <span className="code-filename">{filename}</span>}
        <span className="code-language">{language}</span>
        <button className="copy-button" onClick={handleCopy} title="Copy code">
          {copied ? (
            <span className="copy-feedback">✓ Copied!</span>
          ) : (
            <span>Copy</span>
          )}
        </button>
      </div>
      <div className="code-content">
        <pre className={showLineNumbers ? 'line-numbers' : ''}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>

      <style jsx>{`
        .code-block {
          background: #1e293b;
          border-radius: 0.5rem;
          overflow: hidden;
          margin: 1.5rem 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: #0f172a;
          border-bottom: 1px solid #334155;
        }

        .code-filename {
          flex: 1;
          font-size: 0.875rem;
          font-family: 'Courier New', Courier, monospace;
          color: #94a3b8;
        }

        .code-language {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #64748b;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .copy-button {
          background: #334155;
          color: #e2e8f0;
          border: none;
          padding: 0.375rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 0.8125rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }

        .copy-button:hover {
          background: #475569;
        }

        .copy-feedback {
          color: #10b981;
        }

        .code-content {
          overflow-x: auto;
          padding: 1rem;
        }

        pre {
          margin: 0;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        code {
          color: #e2e8f0;
          font-family: inherit;
        }

        .line-numbers {
          counter-reset: line;
        }

        .line-numbers code {
          display: block;
        }

        .line-numbers code::before {
          counter-increment: line;
          content: counter(line);
          display: inline-block;
          width: 2.5rem;
          margin-right: 1rem;
          color: #64748b;
          text-align: right;
          user-select: none;
        }

        @media (max-width: 768px) {
          .code-header {
            padding: 0.625rem 0.875rem;
          }

          .code-content {
            padding: 0.875rem;
          }

          pre {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </div>
  )
}
