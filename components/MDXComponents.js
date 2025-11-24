// components/MDXComponents.js - FIXED BULLETS & NO DUPLICATE H1
import Link from 'next/link'

export const Callout = ({ type = 'info', title, children }) => {
  const configs = {
    info: {
      bg: '#eff6ff',
      border: '#3b82f6',
      icon: '💡',
      titleColor: '#1e40af'
    },
    warning: {
      bg: '#fef3c7',
      border: '#f59e0b',
      icon: '⚠️',
      titleColor: '#92400e'
    },
    success: {
      bg: '#d1fae5',
      border: '#10b981',
      icon: '✅',
      titleColor: '#065f46'
    },
    tip: {
      bg: '#f3e8ff',
      border: '#8b5cf6',
      icon: '💡',
      titleColor: '#5b21b6'
    }
  }
  
  const config = configs[type] || configs.info
  
  return (
    <div style={{
      background: config.bg,
      borderLeft: `4px solid ${config.border}`,
      padding: '20px 24px',
      margin: '32px 0',
      borderRadius: '8px'
    }}>
      {title && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '10px'
        }}>
          <span style={{ fontSize: '1.25rem' }}>{config.icon}</span>
          <strong style={{ 
            fontSize: '1rem',
            color: config.titleColor,
            fontWeight: '700'
          }}>
            {title}
          </strong>
        </div>
      )}
      <div style={{ 
        color: '#374151',
        lineHeight: '1.7',
        fontSize: '0.9375rem'
      }}>
        {children}
      </div>
    </div>
  )
}

export const CTABox = ({ title, description, buttonText = "Try It Now", buttonLink = "/" }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      padding: '32px',
      borderRadius: '12px',
      color: 'white',
      textAlign: 'center',
      margin: '48px 0'
    }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '10px',
        fontWeight: '700',
        margin: '0 0 10px 0'
      }}>
        {title}
      </h3>
      <p style={{ 
        marginBottom: '24px', 
        opacity: 0.95,
        fontSize: '1rem',
        lineHeight: '1.6',
        margin: '0 0 24px 0'
      }}>
        {description}
      </p>
      <Link
        href={buttonLink}
        style={{
          display: 'inline-block',
          padding: '12px 28px',
          background: 'white',
          color: '#3b82f6',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '0.9375rem',
          transition: 'transform 0.2s ease'
        }}
      >
        {buttonText} →
      </Link>
    </div>
  )
}

export const QuickTips = ({ children }) => {
  return (
    <div style={{
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '24px',
      margin: '32px 0'
    }}>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <span style={{ fontSize: '1.5rem' }}>⚡</span>
        <h3 style={{ 
          fontSize: '1.25rem',
          margin: 0,
          fontWeight: '700',
          color: '#1e293b'
        }}>
          Quick Tips
        </h3>
      </div>
      {/* children will be the <ul> from markdown */}
      <div style={{ 
        color: '#475569',
        lineHeight: '1.7',
        fontSize: '0.9375rem'
      }}>
        {children}
      </div>
    </div>
  )
}


export const KeyTakeaway = ({ children }) => {
  return (
    <div style={{
      background: '#fef3c7',
      borderLeft: '4px solid #f59e0b',
      padding: '24px',
      margin: '32px 0',
      borderRadius: '8px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px'
      }}>
        <span style={{ fontSize: '1.5rem' }}>🔑</span>
        <strong style={{ 
          fontSize: '1.125rem',
          color: '#92400e',
          fontWeight: '700'
        }}>
          Key Takeaway
        </strong>
      </div>
      <div style={{ 
        color: '#78350f',
        fontSize: '1rem',
        lineHeight: '1.7',
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
      margin: '32px 0',
      overflowX: 'auto',
      borderRadius: '8px',
      border: '1px solid #e2e8f0', // Outer border
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        minWidth: '600px' // Ensure it scrolls on small screens
      }}>
        <thead>
          <tr style={{ 
            background: '#f1f5f9', // Lighter background (slate-100)
            borderBottom: '2px solid #e2e8f0' 
          }}>
            {data.headers.map((header, i) => (
              <th key={i} style={{
                padding: '16px',
                textAlign: 'left',
                color: '#1e293b', // Dark text (slate-800)
                fontWeight: '700',
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} style={{
              background: i % 2 === 0 ? '#ffffff' : '#f8fafc', // Zebra striping
              borderBottom: i < data.rows.length - 1 ? '1px solid #e2e8f0' : 'none',
              transition: 'background 0.2s'
            }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '16px',
                  color: '#475569', // Slate-600
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  verticalAlign: 'top'
                }}>
                  {/* Render bold/markdown if passed as string, or simple text */}
                  <span dangerouslySetInnerHTML={{ __html: cell }} /> 
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
    <div style={{ margin: '32px 0' }}>
      {children}
    </div>
  )
}

export const Step = ({ number, title, children }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      marginBottom: '24px',
      alignItems: 'flex-start'
    }}>
      <div style={{
        minWidth: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '1.125rem'
      }}>
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '1.125rem',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#1e293b',
          margin: '0 0 8px 0'
        }}>
          {title}
        </h3>
        <div style={{
          color: '#475569',
          lineHeight: '1.7',
          fontSize: '0.9375rem'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// Professional HTML element styles - NO H1 (will use hero H1)
const MDXComponents = {
  // REMOVED H1 - Use hero section H1 instead
  h2: ({node, ...props}) => (
    <h2 
      id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
      style={{
        fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
        marginTop: '48px',
        marginBottom: '16px',
        fontWeight: '700',
        lineHeight: '1.4',
        color: '#334155',
        letterSpacing: '-0.01em',
        scrollMarginTop: '80px' // For smooth scroll offset
      }} 
      {...props} 
    />
  ),
  h3: ({node, ...props}) => (
    <h3 
      id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
      style={{
        fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
        marginTop: '32px',
        marginBottom: '12px',
        fontWeight: '600',
        color: '#475569',
        lineHeight: '1.5',
        scrollMarginTop: '80px'
      }} 
      {...props} 
    />
  ),
  h4: ({node, ...props}) => (
    <h4 style={{
      fontSize: '1.125rem',
      marginTop: '24px',
      marginBottom: '10px',
      fontWeight: '600',
      color: '#475569'
    }} {...props} />
  ),
  p: ({node, ...props}) => (
    <p style={{
      marginBottom: '20px',
      lineHeight: '1.75',
      fontSize: '1rem',
      color: '#475569',
      letterSpacing: '0.01em'
    }} {...props} />
  ),
  // FIXED BULLETS - Now showing properly
  ul: ({node, ...props}) => (
    <ul style={{
      marginBottom: '24px',
      paddingLeft: '28px',
      lineHeight: '1.75',
      fontSize: '1rem',
      color: '#475569',
      listStyleType: 'disc', // Show actual bullets
      listStylePosition: 'outside'
    }} {...props} />
  ),
  ol: ({node, ...props}) => (
    <ol style={{
      marginBottom: '24px',
      paddingLeft: '28px',
      lineHeight: '1.75',
      fontSize: '1rem',
      color: '#475569',
      listStyleType: 'decimal',
      listStylePosition: 'outside'
    }} {...props} />
  ),
  li: ({node, ...props}) => (
    <li style={{
      marginBottom: '10px',
      paddingLeft: '8px'
    }} {...props} />
  ),
  a: ({node, ...props}) => (
    <a style={{
      color: '#3b82f6',
      textDecoration: 'underline',
      textDecorationColor: 'rgba(59, 130, 246, 0.4)',
      textUnderlineOffset: '2px',
      transition: 'color 0.2s ease',
      fontWeight: '500'
    }} {...props} />
  ),
  blockquote: ({node, ...props}) => (
    <blockquote style={{
      borderLeft: '4px solid #cbd5e1',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '2px',
      paddingBottom: '2px',
      margin: '28px 0',
      fontStyle: 'italic',
      color: '#64748b',
      fontSize: '1rem',
      lineHeight: '1.75',
      background: '#f8fafc',
      borderRadius: '0 6px 6px 0'
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
  code: ({node, inline, ...props}) => {
    if (inline) {
      return (
        <code style={{
          background: '#f1f5f9',
          padding: '3px 6px',
          borderRadius: '4px',
          fontSize: '0.875em',
          fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
          color: '#e11d48',
          border: '1px solid #e2e8f0'
        }} {...props} />
      )
    } else {
      return (
        <code style={{
          display: 'block',
          background: '#1e293b',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '0.875rem',
          lineHeight: '1.7',
          fontFamily: '"Fira Code", "Consolas", "Monaco", monospace'
        }} {...props} />
      )
    }
  },
  pre: ({node, ...props}) => (
    <pre style={{
      background: '#1e293b',
      padding: '20px',
      borderRadius: '8px',
      overflow: 'auto',
      margin: '28px 0',
      fontSize: '0.875rem',
      lineHeight: '1.7',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #334155'
    }} {...props} />
  ),
  hr: ({node, ...props}) => (
    <hr style={{
      border: 'none',
      borderTop: '1px solid #e2e8f0',
      margin: '40px 0'
    }} {...props} />
  ),
  table: ({node, ...props}) => (
    <div style={{ overflowX: 'auto', margin: '32px 0', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        fontSize: '0.95rem'
      }} {...props} />
    </div>
  ),
  
  thead: ({node, ...props}) => (
    <thead style={{
      background: '#f1f5f9', // Light gray background
      color: '#1e293b',      // Dark text
      borderBottom: '2px solid #e2e8f0'
    }} {...props} />
  ),
  
  th: ({node, ...props}) => (
    <th style={{
      padding: '16px',
      textAlign: 'left',
      fontWeight: '700',
      color: '#1e293b', // Force dark text
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }} {...props} />
  ),
  
  tbody: ({node, ...props}) => <tbody {...props} />,
  
  tr: ({node, ...props}) => (
    <tr style={{
      borderBottom: '1px solid #e2e8f0',
      background: 'transparent',
      transition: 'background 0.2s'
    }} {...props} />
  ),
  
  td: ({node, ...props}) => (
    <td style={{
      padding: '16px',
      color: '#475569',
      lineHeight: '1.6',
      verticalAlign: 'top'
    }} {...props} />
  ),
  img: ({node, ...props}) => (
    <img style={{
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      margin: '28px 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
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
