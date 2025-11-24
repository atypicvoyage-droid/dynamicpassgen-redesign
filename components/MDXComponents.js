// components/MDXComponents.js
import Link from 'next/link'
import Image from 'next/image'

export const Callout = ({ type = 'info', title, children }) => {
  const configs = {
    info: {
      bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      border: '#3b82f6',
      icon: '💡',
      titleColor: '#1e40af'
    },
    warning: {
      bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      border: '#f59e0b',
      icon: '⚠️',
      titleColor: '#92400e'
    },
    success: {
      bg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      border: '#10b981',
      icon: '✅',
      titleColor: '#065f46'
    },
    tip: {
      bg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
      border: '#8b5cf6',
      icon: '💡',
      titleColor: '#5b21b6'
    }
  }
  
  const config = configs[type] || configs.info
  
  return (
    <div style={{
      background: config.bg,
      borderLeft: `5px solid ${config.border}`,
      padding: '24px 28px',
      margin: '32px 0',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      {title && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <span style={{ fontSize: '1.5rem' }}>{config.icon}</span>
          <strong style={{ 
            fontSize: '1.1rem',
            color: config.titleColor,
            fontWeight: '700'
          }}>
            {title}
          </strong>
        </div>
      )}
      <div style={{ 
        color: '#334155',
        lineHeight: '1.7',
        fontSize: '1.05rem'
      }}>
        {children}
      </div>
    </div>
  )
}

export const CTABox = ({ title, description, buttonText = "Try It Now", buttonLink = "/" }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      padding: '40px',
      borderRadius: '16px',
      color: 'white',
      textAlign: 'center',
      margin: '48px 0',
      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
    }}>
      <h3 style={{ 
        fontSize: '1.75rem', 
        marginBottom: '12px',
        fontWeight: '700',
        margin: '0 0 12px 0'
      }}>
        {title}
      </h3>
      <p style={{ 
        marginBottom: '28px', 
        opacity: 0.95,
        fontSize: '1.1rem',
        lineHeight: '1.6',
        margin: '0 0 28px 0'
      }}>
        {description}
      </p>
      <Link
        href={buttonLink}
        style={{
          display: 'inline-block',
          padding: '16px 36px',
          background: 'white',
          color: '#3b82f6',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '1.05rem',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        className="cta-button-hover"
      >
        {buttonText} →
      </Link>
    </div>
  )
}

export const QuickTips = ({ tips }) => {
  return (
    <div style={{
      background: '#f8fafc',
      border: '2px solid #e2e8f0',
      borderRadius: '16px',
      padding: '32px',
      margin: '40px 0'
    }}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '20px'
      }}>
        <span style={{ fontSize: '1.8rem' }}>⚡</span>
        <h3 style={{ 
          fontSize: '1.5rem',
          margin: 0,
          fontWeight: '700',
          color: '#1e293b'
        }}>
          Quick Tips
        </h3>
      </div>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {tips.map((tip, index) => (
          <li key={index} style={{
            padding: '16px 0',
            borderBottom: index < tips.length - 1 ? '1px solid #e2e8f0' : 'none',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start'
          }}>
            <span style={{ 
              color: '#3b82f6',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              minWidth: '24px'
            }}>
              {index + 1}.
            </span>
            <span style={{ 
              color: '#475569',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              {tip}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const KeyTakeaway = ({ children }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)',
      borderLeft: '6px solid #f59e0b',
      padding: '28px 32px',
      margin: '40px 0',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(245, 158, 11, 0.15)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
      }}>
        <span style={{ fontSize: '1.8rem' }}>🔑</span>
        <strong style={{ 
          fontSize: '1.2rem',
          color: '#92400e',
          fontWeight: '700'
        }}>
          Key Takeaway
        </strong>
      </div>
      <div style={{ 
        color: '#78350f',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        fontWeight: '500'
      }}>
        {children}
      </div>
    </div>
  )
}

export const ComparisonTable = ({ data }) => {
  return (
    <div style={{ 
      margin: '40px 0',
      overflowX: 'auto'
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <thead>
          <tr style={{ background: 'linear-gradient(135deg, #1e293b, #334155)' }}>
            {data.headers.map((header, i) => (
              <th key={i} style={{
                padding: '18px 20px',
                textAlign: 'left',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.05rem'
              }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} style={{
              background: i % 2 === 0 ? '#ffffff' : '#f8fafc',
              borderBottom: i < data.rows.length - 1 ? '1px solid #e2e8f0' : 'none'
            }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '16px 20px',
                  color: '#475569',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const Steps = ({ children }) => {
  return (
    <div style={{ margin: '40px 0' }}>
      {children}
    </div>
  )
}

export const Step = ({ number, title, children }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '24px',
      marginBottom: '32px',
      alignItems: 'flex-start'
    }}>
      <div style={{
        minWidth: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '1.2rem',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
      }}>
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '1.3rem',
          marginBottom: '12px',
          fontWeight: '700',
          color: '#1e293b',
          margin: '0 0 12px 0'
        }}>
          {title}
        </h3>
        <div style={{
          color: '#475569',
          lineHeight: '1.7',
          fontSize: '1.05rem'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// Styled HTML elements for professional typography
const MDXComponents = {
  // Standard HTML elements with node destructuring for ReactMarkdown
  h1: ({node, ...props}) => (
    <h1 style={{
      fontSize: 'clamp(2rem, 5vw, 2.75rem)',
      marginTop: '56px',
      marginBottom: '24px',
      fontWeight: '800',
      lineHeight: '1.2',
      color: '#0f172a',
      letterSpacing: '-0.02em'
    }} {...props} />
  ),
  h2: ({node, ...props}) => (
    <h2 style={{
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      marginTop: '48px',
      marginBottom: '20px',
      fontWeight: '700',
      lineHeight: '1.3',
      color: '#1e293b',
      letterSpacing: '-0.01em'
    }} {...props} />
  ),
  h3: ({node, ...props}) => (
    <h3 style={{
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      marginTop: '36px',
      marginBottom: '16px',
      fontWeight: '600',
      color: '#334155',
      lineHeight: '1.4'
    }} {...props} />
  ),
  h4: ({node, ...props}) => (
    <h4 style={{
      fontSize: '1.2rem',
      marginTop: '28px',
      marginBottom: '12px',
      fontWeight: '600',
      color: '#475569'
    }} {...props} />
  ),
  p: ({node, ...props}) => (
    <p style={{
      marginBottom: '24px',
      lineHeight: '1.8',
      fontSize: '1.125rem',
      color: '#475569',
      letterSpacing: '0.01em'
    }} {...props} />
  ),
  ul: ({node, ...props}) => (
    <ul style={{
      marginBottom: '28px',
      paddingLeft: '32px',
      lineHeight: '1.9',
      fontSize: '1.1rem',
      color: '#475569'
    }} {...props} />
  ),
  ol: ({node, ...props}) => (
    <ol style={{
      marginBottom: '28px',
      paddingLeft: '32px',
      lineHeight: '1.9',
      fontSize: '1.1rem',
      color: '#475569'
    }} {...props} />
  ),
  li: ({node, ...props}) => (
    <li style={{
      marginBottom: '12px',
      paddingLeft: '8px'
    }} {...props} />
  ),
  a: ({node, ...props}) => (
    <a style={{
      color: '#3b82f6',
      textDecoration: 'underline',
      textDecorationColor: 'rgba(59, 130, 246, 0.3)',
      textUnderlineOffset: '3px',
      transition: 'all 0.2s ease',
      fontWeight: '500'
    }} {...props} />
  ),
  blockquote: ({node, ...props}) => (
    <blockquote style={{
      borderLeft: '4px solid #cbd5e1',
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '4px',
      paddingBottom: '4px',
      margin: '32px 0',
      fontStyle: 'italic',
      color: '#64748b',
      fontSize: '1.15rem',
      lineHeight: '1.8',
      background: '#f8fafc',
      borderRadius: '0 8px 8px 0'
    }} {...props} />
  ),
  strong: ({node, ...props}) => (
    <strong style={{
      fontWeight: '700',
      color: '#1e293b'
    }} {...props} />
  ),
  em: ({node, ...props}) => (
    <em style={{
      fontStyle: 'italic',
      color: '#334155'
    }} {...props} />
  ),
  code: ({node, inline, ...props}) => 
    inline ? (
      <code style={{
        backgrounund: '#f1f5f9',
        padding: '3px 8px',
        borderRadius: '4px',
        fontSize: '0.9em',
        fontFamily: 'ui-monospace, monospace',
        color: '#e11d48',
        border: '1px solid #e2e8f0'
      }} {...props} />
    ) : (
      <code style={{
        displayay: 'block',
        background: '#1e293b',
        color: '#e2e8f0',
        padding: '24px',
        borderRadius: '12px',
        overflow: 'auto',
        fontSize: '0.95rem',
        lineHeight: '1.7',
        fontFamily: 'ui-monospace, monospace'
      }} {...props} />
    ),
  pre: ({node, ...props}) => (
    <pre style={{
      background: '#1e293b',
      padding: '24px',
      borderRadius: '12px',
      overflow: 'auto',
      margin: '32px 0',
      fontSize: '0.95rem',
      lineHeight: '1.7',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
    }} {...props} />
  ),
  hr: ({node, ...props}) => (
    <hr style={{
      border: 'none',
      borderTop: '2px solid #e2e8f0',
      margin: '48px 0'
    }} {...props} />
  ),
  table: ({node, ...props}) => (
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      margin: '32px 0',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      overflow: 'hidden'
    }} {...props} />
  ),
  thead: ({node, ...props}) => (
    <thead style={{
      background: 'linear-gradient(135deg, #1e293b, #334155)'
    }} {...props} />
  ),
  th: ({node, ...props}) => (
    <th style={{
      padding: '18px 20px',
      textAlign: 'left',
      color: 'white',
      fontWeight: '700',
      fontSize: '1.05rem',
      borderBottom: '2px solid #e2e8f0'
    }} {...props} />
  ),
  tbody: ({node, ...props}) => <tbody {...props} />,
  tr: ({node, ...props}) => <tr {...props} />,
  td: ({node, ...props}) => (
    <td style={{
      padding: '16px 20px',
      borderBottom: '1px solid #e2e8f0',
      color: '#475569',
      fontSize: '1rem'
    }} {...props} />
  ),
  img: ({node, ...props}) => (
    <img style={{
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '12px',
      margin: '32px 0',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
    }} {...props} />
  ),
  
  // Custom components
  Callout,
  CTABox,
  QuickTips,
  KeyTakeaway,
  ComparisonTable,
  Steps,
  Step,
}

export default MDXComponents
