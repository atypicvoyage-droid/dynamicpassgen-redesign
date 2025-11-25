'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PasswordBreachChecker() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const checkPasswordBreach = async () => {
    if (!password || password.length < 3) {
      setError('Please enter a password to check')
      return
    }

    setIsChecking(true)
    setError(null)
    setResult(null)

    try {
      // Step 1: Hash the password with SHA-1
      const sha1Hash = await hashPassword(password)
      
      // Step 2: Split hash - first 5 chars for API, rest for local comparison
      const prefix = sha1Hash.substring(0, 5).toUpperCase()
      const suffix = sha1Hash.substring(5).toUpperCase()

      // Step 3: Call Pwned Passwords API (FREE - No API Key Required!)
      const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`)
      
      if (!response.ok) {
        throw new Error('Unable to check breach database')
      }

      // Step 4: Get all matching hash suffixes
      const data = await response.text()
      const hashes = data.split('\n')
      
      // Step 5: Look for our password's hash suffix
      const found = hashes.find(line => line.startsWith(suffix))

      if (found) {
        const count = parseInt(found.split(':')[1])
        setResult({
          breached: true,
          count: count,
          message: 'This password has been exposed in data breaches!',
          severity: count > 100000 ? 'critical' : count > 10000 ? 'high' : 'medium'
        })
      } else {
        setResult({
          breached: false,
          message: 'Good news! This password was not found in known breaches.',
          severity: 'safe'
        })
      }
    } catch (err) {
      setError('Unable to check breaches. Please try again later.')
      console.error('Breach check error:', err)
    } finally {
      setIsChecking(false)
    }
  }

  // SHA-1 hash function (client-side only)
  const hashPassword = async (text) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(text)
    const hashBuffer = await crypto.subtle.digest('SHA-1', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  const handleClear = () => {
    setPassword('')
    setResult(null)
    setError(null)
  }

  const getSeverityColor = (severity) => {
    const colors = {
      critical: { bg: '#dc2626', light: '#fee2e2' },
      high: { bg: '#ef4444', light: '#fecaca' },
      medium: { bg: '#f59e0b', light: '#fed7aa' },
      safe: { bg: '#22c55e', light: '#dcfce7' }
    }
    return colors[severity] || colors.safe
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Input Card */}
      <div style={{
        background: 'var(--card-bg)',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        marginBottom: '24px',
        border: '2px solid var(--border-color)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px'
        }}>
          <label htmlFor="password-input" style={{
            fontSize: '1.125rem',
            fontWeight: '700',
            color: 'var(--text-primary)'
          }}>
            Check Your Password
          </label>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            background: '#dcfce7',
            color: '#16a34a',
            borderRadius: '8px',
            fontSize: '0.8125rem',
            fontWeight: '600'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            100% Private
          </span>
        </div>
        
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            id="password-input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(null)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && password) {
                checkPasswordBreach()
              }
            }}
            placeholder="Enter a password to check..."
            autoComplete="off"
            style={{
              width: '100%',
              padding: '16px 150px 16px 16px',
              fontSize: '1.0625rem',
              border: `3px solid ${error ? '#ef4444' : 'var(--border-color)'}`,
              borderRadius: '14px',
              background: 'var(--card-alt-bg)',
              color: 'var(--text-primary)',
              outline: 'none',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              fontFamily: 'monospace'
            }}
            onFocus={(e) => {
              if (!error) {
                e.target.style.borderColor = 'var(--accent)'
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
              }
            }}
            onBlur={(e) => {
              if (!error) {
                e.target.style.borderColor = 'var(--border-color)'
                e.target.style.boxShadow = 'none'
              }
            }}
          />
          
          <div style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              style={{
                padding: '10px',
                background: 'var(--card-bg)',
                border: '2px solid var(--border-color)',
                borderRadius: '10px',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-blue)'
                e.currentTarget.style.borderColor = 'var(--primary-blue)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--card-bg)'
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
            
            {password && (
              <button
                onClick={handleClear}
                type="button"
                style={{
                  padding: '10px',
                  background: 'var(--card-bg)',
                  border: '2px solid var(--border-color)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ef4444'
                  e.currentTarget.style.borderColor = '#ef4444'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--card-bg)'
                  e.currentTarget.style.borderColor = 'var(--border-color)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        {error && (
          <p style={{
            color: '#ef4444',
            fontSize: '0.875rem',
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            ⚠️ {error}
          </p>
        )}

        <button
          onClick={checkPasswordBreach}
          disabled={!password || isChecking}
          type="button"
          style={{
            width: '100%',
            padding: '16px 24px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '14px',
            fontSize: '1.0625rem',
            fontWeight: '700',
            cursor: !password || isChecking ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
            marginBottom: '12px',
            opacity: !password || isChecking ? 0.6 : 1
          }}
          onMouseEnter={(e) => {
            if (password && !isChecking) {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(59, 130, 246, 0.4)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)'
          }}
        >
          {isChecking ? (
            <>
              <div style={{
                width: '20px',
                height: '20px',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                borderTopColor: 'white',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }}></div>
              Checking Breaches...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Check Password Breach
            </>
          )}
        </button>
        
        <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          fontWeight: '500'
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          Your password is hashed locally. Only the first 5 characters of the hash are sent to the API.
        </p>
      </div>

      {/* Results */}
      {result && (
        <div style={{
          background: result.breached 
            ? `linear-gradient(135deg, ${getSeverityColor(result.severity).light} 0%, ${getSeverityColor(result.severity).light} 100%)` 
            : 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
          border: `2px solid ${getSeverityColor(result.severity).bg}`,
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '3.5rem' }}>
              {result.breached ? '🚨' : '✅'}
            </div>
            <div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '900',
                color: result.breached ? '#991b1b' : '#166534',
                marginBottom: '8px'
              }}>
                {result.breached ? 'Password Compromised!' : 'Password Safe!'}
              </h3>
              <p style={{
                fontSize: '1.125rem',
                color: result.breached ? '#7f1d1d' : '#14532d',
                fontWeight: '600'
              }}>
                {result.message}
              </p>
            </div>
          </div>

          {result.breached && result.count && (
            <div style={{
              background: 'rgba(127, 29, 29, 0.15)',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '20px'
            }}>
              <p style={{
                fontSize: '1.125rem',
                color: '#7f1d1d',
                fontWeight: '700',
                marginBottom: '12px'
              }}>
                ⚠️ Found in {result.count.toLocaleString()} breaches
              </p>
              <p style={{
                fontSize: '0.9375rem',
                color: '#991b1b',
                lineHeight: '1.6',
                marginBottom: '8px'
              }}>
                This password has been seen {result.count.toLocaleString()} times in data breaches. 
                {result.count > 100000 && ' This is an extremely common password!'}
                {result.count > 10000 && result.count <= 100000 && ' This password is frequently compromised.'}
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: '#991b1b',
                fontWeight: '600'
              }}>
                🔴 {result.severity === 'critical' ? 'CRITICAL - Change immediately!' : result.severity === 'high' ? 'HIGH RISK - Change as soon as possible' : 'MODERATE RISK - Consider changing'}
              </p>
            </div>
          )}

          <div style={{
            background: result.breached ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.7)',
            padding: '24px',
            borderRadius: '12px'
          }}>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              color: result.breached ? '#7f1d1d' : '#14532d',
              marginBottom: '16px'
            }}>
              {result.breached ? '🛡️ Immediate Actions Required:' : '💡 Security Best Practices:'}
            </h4>
            <ul style={{
              margin: 0,
              paddingLeft: '24px',
              lineHeight: '1.9',
              color: result.breached ? '#991b1b' : '#166534',
              fontWeight: result.breached ? '600' : '500'
            }}>
              {result.breached ? (
                <>
                  <li style={{ marginBottom: '10px' }}>Stop using this password immediately on ALL accounts</li>
                  <li style={{ marginBottom: '10px' }}>Generate a new strong, unique password for each account</li>
                  <li style={{ marginBottom: '10px' }}>Enable two-factor authentication (2FA) everywhere</li>
                  <li style={{ marginBottom: '10px' }}>Check for unauthorized account activity</li>
                  <li style={{ marginBottom: '10px' }}>Use a password manager to avoid reusing passwords</li>
                </>
              ) : (
                <>
                  <li style={{ marginBottom: '10px' }}>Still use unique passwords for every account</li>
                  <li style={{ marginBottom: '10px' }}>Enable 2FA for additional security</li>
                  <li style={{ marginBottom: '10px' }}>Regularly change passwords for sensitive accounts</li>
                  <li style={{ marginBottom: '10px' }}>Never share passwords via email or messaging apps</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Initial State */}
      {!result && !isChecking && (
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          background: 'var(--card-alt-bg)',
          borderRadius: '20px',
          border: '2px dashed var(--border-color)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🔍</div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '12px'
          }}>
            Check If Your Password Was Breached
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Enter any password above to check if it has been exposed in known data breaches. Your password is hashed locally and never leaves your browser.
          </p>
        </div>
      )}

      {/* CTA */}
      {result && result.breached && (
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          borderRadius: '20px',
          padding: '32px',
          color: 'white',
          marginTop: '24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              marginBottom: '12px'
            }}>
              Need a Secure Password?
            </h3>
            <p style={{
              opacity: 0.95,
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '24px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Generate a strong, unique password that has never been compromised in any data breach.
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                background: 'white',
                color: '#3b82f6',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                minWidth: '280px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)'
              }}
            >
              Generate Secure Password
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
