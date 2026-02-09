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
        {filename && <span className="code-filename">📄 {filename}</span>}
        <span className="code-language">{language}</span>
        <button className="copy-button" onClick={handleCopy} title="Copy code">
          {copied ? (
            <span className="copy-feedback">✓ Copied!</span>
          ) : (
            <span>📋 Copy</span>
          )}
        </button>
      </div>
      <div className="code-content">
        <pre>
          <code>{code}</code>
        </pre>
      </div>

      <style jsx>{`
        .code-block {
          background: #0f172a;
          border-radius: 0.75rem;
          overflow: hidden;
          margin: 2rem 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1.25rem;
          background: #1e293b;
          border-bottom: 1px solid #475569;
        }

        .code-filename {
          flex: 1;
          font-size: 0.875rem;
          font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
          color: #cbd5e1;
          font-weight: 500;
        }

        .code-language {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #94a3b8;
          font-weight: 600;
          letter-spacing: 0.1em;
          background: #334155;
          padding: 0.25rem 0.625rem;
          border-radius: 0.25rem;
        }

        .copy-button {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.8125rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .copy-button:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .copy-button:active {
          transform: translateY(0);
        }

        .copy-feedback {
          color: #10b981;
        }

        .code-content {
          overflow-x: auto;
          padding: 1.5rem;
          background: #0f172a;
        }

        pre {
          margin: 0;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.7;
          color: #e2e8f0;
        }

        code {
          color: #e2e8f0;
          font-family: inherit;
          white-space: pre;
        }

        /* Custom scrollbar */
        .code-content::-webkit-scrollbar {
          height: 8px;
        }

        .code-content::-webkit-scrollbar-track {
          background: #1e293b;
        }

        .code-content::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }

        .code-content::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }

        @media (max-width: 768px) {
          .code-block {
            border-radius: 0.5rem;
            margin: 1.5rem 0;
          }

          .code-header {
            padding: 0.75rem 1rem;
            flex-wrap: wrap;
          }

          .code-filename {
            font-size: 0.8125rem;
          }

          .copy-button {
            padding: 0.375rem 0.75rem;
            font-size: 0.75rem;
          }

          .code-content {
            padding: 1rem;
          }

          pre {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </div>
  )
}
