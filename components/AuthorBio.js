// components/AuthorBio.js
export default function AuthorBio({ variant = 'default' }) {
  const styles = {
    default: {
      container: {
        marginTop: '64px',
        padding: '32px',
        background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
        borderRadius: '16px',
        border: '1px solid #e2e8f0'
      }
    },
    minimal: {
      container: {
        marginTop: '48px',
        padding: '24px',
        background: '#f8fafc',
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }
    }
  }

  const style = styles[variant] || styles.default

  return (
    <div style={style.container}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px', 
        marginBottom: '16px' 
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'white',
          flexShrink: 0
        }}>
          🔒
        </div>
        <div>
          <h3 style={{ 
            fontSize: '1.3rem', 
            marginBottom: '4px', 
            fontWeight: '700', 
            color: '#1e293b',
            margin: 0
          }}>
            DynamicPassGen Security Team
          </h3>
          <p style={{ 
            color: '#64748b', 
            margin: 0,
            fontSize: '0.95rem'
          }}>
            Security Research & Education
          </p>
        </div>
      </div>
      <p style={{ 
        color: '#475569', 
        lineHeight: '1.7', 
        fontSize: '1.05rem', 
        margin: 0 
      }}>
        Our security team stays current with the latest password standards, authentication methods, 
        and cybersecurity best practices to provide accurate, actionable guidance for users and organizations. 
        We analyze emerging threats, study real-world breaches, and translate complex security concepts 
        into practical advice you can implement immediately.
      </p>
    </div>
  )
}
