'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [analysis, setAnalysis] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzePassword = (pwd) => {
    setIsAnalyzing(true)
    
    setTimeout(() => {
      const result = calculatePasswordStrength(pwd)
      setAnalysis(result)
      setIsAnalyzing(false)
    }, 300)
  }

  const calculatePasswordStrength = (pwd) => {
    if (!pwd || pwd.length === 0) return null

    // Character set analysis
    const hasLower = /[a-z]/.test(pwd)
    const hasUpper = /[A-Z]/.test(pwd)
    const hasNumber = /[0-9]/.test(pwd)
    const hasSpecial = /[^a-zA-Z0-9]/.test(pwd)
    
    let charsetSize = 0
    if (hasLower) charsetSize += 26
    if (hasUpper) charsetSize += 26
    if (hasNumber) charsetSize += 10
    if (hasSpecial) charsetSize += 32

    // Enhanced pattern detection - case insensitive
    const hasSequential = /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/.test(pwd.toLowerCase())
    const hasRepeating = /(.)\1{2,}/.test(pwd)
    const hasKeyboard = /qwerty|asdfg|zxcvb|qaz|wsx|edc|rfv|tgb|yhn|ujm|iko|olp/i.test(pwd)
    
    // EXPANDED common words list (case insensitive)
    const hasCommonWords = /password|passw0rd|p@ssword|admin|user|login|welcome|letmein|monkey|dragon|master|test|hello|world|love|god|jesus|ninja|mustang|michael|shadow|superman|batman|trustno|starwars|football|baseball|whatever|princess|bailey|sunshine|iloveyou|abc123|password123|welcome123|admin123|chelsea|arsenal|liverpool|manchester|charlie|thomas|andrew|daniel|robert|jessica|jennifer|melissa|ashley|nicole|emily|amanda|sarah|joshua|matthew|brandon|jacob|tyler|austin|logan|hunter|jackson|ryan|alexander|william|james|benjamin|samuel|nathan|christian|jordan|dylan|gabriel|angel|flower|summer|winter|spring|autumn|master123|test123|login123|user123|welcome1/i.test(pwd)
    
    const hasSimplePattern = /^(.)\1+$|^(01)+$|^(10)+$|^(123)+$|^(abc)+$/i.test(pwd)
    const hasDatePattern = /(?:19|20)\d{2}|(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])/.test(pwd)

    // Base entropy
    const baseEntropy = pwd.length * Math.log2(charsetSize || 1)
    
    // Track all weaknesses for proper calculation
    let criticalWeaknesses = []
    let effectiveLength = pwd.length
    
    // CRITICAL: Apply weakness detection
    if (pwd.length < 8) {
      criticalWeaknesses.push('too_short')
      effectiveLength = pwd.length * 0.3 // Treat as much shorter
    }
    
    if (hasCommonWords) {
      criticalWeaknesses.push('dictionary')
      effectiveLength = Math.max(4, effectiveLength * 0.25) // Treat as 4 chars or 25% of length
    }
    
    if (hasKeyboard) {
      criticalWeaknesses.push('keyboard')
      effectiveLength = effectiveLength * 0.4
    }
    
    if (hasSequential) {
      criticalWeaknesses.push('sequential')
      effectiveLength = effectiveLength * 0.5
    }
    
    if (hasRepeating) {
      criticalWeaknesses.push('repeating')
      effectiveLength = effectiveLength * 0.6
    }
    
    if (hasSimplePattern) {
      criticalWeaknesses.push('simple')
      effectiveLength = Math.max(2, effectiveLength * 0.2)
    }
    
    if (hasDatePattern) {
      criticalWeaknesses.push('dates')
      effectiveLength = effectiveLength * 0.7
    }

    // Calculate REALISTIC crack time based on weaknesses
    let secondsToCrack
    let attackType = 'brute-force'
    
    if (criticalWeaknesses.includes('dictionary') || criticalWeaknesses.includes('too_short')) {
      // Dictionary attack with rules: 1 million - 100 million guesses/sec
      // Common words + variations are in dictionaries of ~100 million entries
      attackType = 'dictionary'
      
      if (hasCommonWords) {
        // Common word found in top 10,000 password list
        // With numbers/special chars, add variations: ~1 million combinations
        const variations = Math.pow(100, Math.max(0, pwd.length - 6)) // Numbers at end add minimal security
        secondsToCrack = variations / 100000000 // 100M guesses/sec
      } else if (pwd.length < 8) {
        // Short password - pure brute force but small keyspace
        const combinations = Math.pow(charsetSize || 10, effectiveLength)
        secondsToCrack = combinations / 100000000000 // 100B guesses/sec (GPU)
      } else {
        // Has patterns but not in common dictionary
        const combinations = Math.pow(charsetSize || 10, effectiveLength)
        secondsToCrack = combinations / 10000000000 // 10B guesses/sec
      }
    } else if (criticalWeaknesses.length > 0) {
      // Pattern-based attack (keyboard, sequential, etc)
      attackType = 'pattern'
      const combinations = Math.pow(charsetSize || 10, effectiveLength)
      secondsToCrack = combinations / 50000000000 // 50B guesses/sec
    } else {
      // Pure brute force attack (best case for password)
      attackType = 'brute-force'
      const combinations = Math.pow(charsetSize, pwd.length)
      secondsToCrack = combinations / 100000000000 // 100B guesses/sec
    }

    // Calculate adjusted entropy for display
    const adjustedEntropy = effectiveLength * Math.log2(charsetSize || 1)

    // Strict scoring based on industry standards
    let score = 0

    // Length scoring (most important)
    if (pwd.length >= 8) score += 20
    if (pwd.length >= 12) score += 20
    if (pwd.length >= 16) score += 15
    if (pwd.length >= 20) score += 10

    // Character diversity
    if (hasLower && hasUpper) score += 15
    if (hasNumber) score += 10
    if (hasSpecial) score += 15

    // HEAVY penalties for weaknesses
    if (hasCommonWords) score -= 60 // Dictionary words are terrible
    if (hasKeyboard) score -= 35
    if (hasSequential) score -= 30
    if (hasRepeating) score -= 25
    if (hasSimplePattern) score -= 50
    if (hasDatePattern) score -= 20

    score = Math.max(0, score)

    // Determine strength (strict thresholds)
    let strength, color, percentage, strengthClass

    if (score < 15) {
      strength = 'Very Weak'
      color = '#dc2626'
      percentage = 10
      strengthClass = 'very-weak'
    } else if (score < 35) {
      strength = 'Weak'
      color = '#ef4444'
      percentage = 25
      strengthClass = 'weak'
    } else if (score < 55) {
      strength = 'Fair'
      color = '#f59e0b'
      percentage = 45
      strengthClass = 'fair'
    } else if (score < 70) {
      strength = 'Good'
      color = '#eab308'
      percentage = 65
      strengthClass = 'good'
    } else if (score < 85) {
      strength = 'Strong'
      color = '#22c55e'
      percentage = 80
      strengthClass = 'strong'
    } else {
      strength = 'Very Strong'
      color = '#10b981'
      percentage = 95
      strengthClass = 'very-strong'
    }

    // Generate suggestions
    const suggestions = []
    if (pwd.length < 8) suggestions.push('Password must be at least 8 characters long')
    if (pwd.length < 12) suggestions.push('Use 12+ characters for better security')
    if (pwd.length < 16) suggestions.push('Consider 16+ characters for critical accounts')
    if (!hasLower || !hasUpper) suggestions.push('Mix uppercase and lowercase letters')
    if (!hasNumber) suggestions.push('Add numbers for complexity')
    if (!hasSpecial) suggestions.push('Include special characters (!@#$%^&*)')
    if (hasSequential) suggestions.push('Avoid sequential patterns (abc, 123)')
    if (hasRepeating) suggestions.push('Avoid repeating characters (aaa, 111)')
    if (hasKeyboard) suggestions.push('Avoid keyboard patterns (qwerty, asdf)')
    if (hasCommonWords) suggestions.push('Avoid common words - use random characters instead!')
    if (hasSimplePattern) suggestions.push('Use a more random, complex pattern')
    if (hasDatePattern) suggestions.push('Avoid dates and years')
    
    if (suggestions.length === 0 && score >= 85) {
      suggestions.push('Excellent! Your password is very strong.')
      suggestions.push('Store it in a password manager.')
      suggestions.push('Enable two-factor authentication.')
    }

    return {
      strength,
      score,
      color,
      percentage,
      strengthClass,
      entropy: adjustedEntropy.toFixed(1),
      baseEntropy: baseEntropy.toFixed(1),
      crackTime: formatCrackTime(secondsToCrack),
      crackTimeSeconds: secondsToCrack,
      attackType,
      characteristics: {
        length: pwd.length,
        hasLower,
        hasUpper,
        hasNumber,
        hasSpecial,
        charsetSize
      },
      weaknesses: {
        hasSequential,
        hasRepeating,
        hasKeyboard,
        hasCommonWords,
        hasSimplePattern,
        hasDatePattern,
        criticalWeaknesses
      },
      suggestions
    }
  }

  const formatCrackTime = (seconds) => {
    if (seconds < 0.001) return 'Instantly'
    if (seconds < 1) return `${(seconds * 1000).toFixed(0)}ms`
    if (seconds < 60) return `${Math.round(seconds)} seconds`
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`
    if (seconds < 2592000) return `${Math.round(seconds / 86400)} days`
    if (seconds < 31536000) return `${Math.round(seconds / 2592000)} months`
    if (seconds < 3153600000) return `${Math.round(seconds / 31536000)} years`
    if (seconds < 31536000000) return `${Math.round(seconds / 31536000000)} decades`
    if (seconds < 315360000000) return `${Math.round(seconds / 3153600000)} centuries`
    return 'Billions of years'
  }

  const handleCheckPassword = () => {
    if (password.length > 0) {
      analyzePassword(password)
    }
  }

  const handleClear = () => {
    setPassword('')
    setAnalysis(null)
  }

  const getStrengthGradient = (strengthClass) => {
    const gradients = {
      'very-weak': 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
      'weak': 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      'fair': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      'good': 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
      'strong': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      'very-strong': 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    }
    return gradients[strengthClass] || gradients['weak']
  }

  return (
    <div className="strength-checker-wrapper">
      {/* Password Input Card */}
      <div className="strength-input-card">
        <div className="input-header">
          <label htmlFor="password-input" className="input-label">
            Test Your Password
          </label>
          <span className="privacy-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            100% Private
          </span>
        </div>
        
        <div className="input-wrapper">
          <input
            id="password-input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && password.length > 0) {
                handleCheckPassword()
              }
            }}
            placeholder="Enter your password..."
            autoComplete="off"
            className="password-input"
          />
          <div className="input-actions">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="icon-button"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              type="button"
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
                className="icon-button clear-button"
                aria-label="Clear password"
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        <button
          onClick={handleCheckPassword}
          disabled={!password || isAnalyzing}
          className="check-button"
          type="button"
        >
          {isAnalyzing ? (
            <>
              <div className="spinner-small"></div>
              Analyzing...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Check Password Strength
            </>
          )}
        </button>
        
        <p className="privacy-note">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          Your password is analyzed locally in your browser and never sent to any server
        </p>
      </div>

      {/* Analysis Results */}
      {analysis && !isAnalyzing && (
        <div className="analysis-results">
          {/* Strength Header */}
          <div className="strength-header" style={{ background: getStrengthGradient(analysis.strengthClass) }}>
            <div className="strength-main">
              <div className="strength-icon">
                {analysis.percentage >= 80 ? '🛡️' : analysis.percentage >= 65 ? '✅' : analysis.percentage >= 45 ? '⚠️' : '❌'}
              </div>
              <div>
                <div className="strength-label">Password Strength</div>
                <div className="strength-value">{analysis.strength}</div>
              </div>
            </div>
            <div className="strength-meter-container">
              <div className="strength-meter-bg">
                <div 
                  className="strength-meter-fill"
                  style={{ 
                    width: `${analysis.percentage}%`,
                    background: 'rgba(255, 255, 255, 0.9)'
                  }}
                />
              </div>
              <span className="strength-percentage">{analysis.percentage}%</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon" style={{ background: '#dbeafe' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <line x1="4" y1="9" x2="20" y2="9"/>
                  <line x1="4" y1="15" x2="20" y2="15"/>
                  <line x1="10" y1="3" x2="8" y2="21"/>
                  <line x1="16" y1="3" x2="14" y2="21"/>
                </svg>
              </div>
              <div className="metric-content">
                <div className="metric-label">Length</div>
                <div className="metric-value">{analysis.characteristics.length} chars</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon" style={{ background: '#fef3c7' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                  <path d="M17 7l-10 10M7 7l10 10"/>
                </svg>
              </div>
              <div className="metric-content">
                <div className="metric-label">Entropy</div>
                <div className="metric-value">{analysis.entropy} bits</div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon" style={{ background: analysis.crackTimeSeconds < 3600 ? '#fee2e2' : '#dcfce7' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={analysis.crackTimeSeconds < 3600 ? '#ef4444' : '#10b981'} strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="metric-content">
                <div className="metric-label">Crack Time</div>
                <div className="metric-value" style={{ 
                  color: analysis.crackTimeSeconds < 3600 ? '#ef4444' : '#10b981',
                  fontSize: '1.0625rem'
                }}>
                  {analysis.crackTime}
                </div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon" style={{ background: '#e0e7ff' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <div className="metric-content">
                <div className="metric-label">Pool Size</div>
                <div className="metric-value">{analysis.characteristics.charsetSize} chars</div>
              </div>
            </div>
          </div>

          {/* Character Types */}
          <div className="analysis-card">
            <h3 className="card-title">Character Types</h3>
            <div className="char-types-grid">
              {[
                { label: 'Lowercase (a-z)', value: analysis.characteristics.hasLower },
                { label: 'Uppercase (A-Z)', value: analysis.characteristics.hasUpper },
                { label: 'Numbers (0-9)', value: analysis.characteristics.hasNumber },
                { label: 'Special (!@#$)', value: analysis.characteristics.hasSpecial }
              ].map((item, idx) => (
                <div key={idx} className={`char-type-item ${item.value ? 'active' : 'inactive'}`}>
                  <span className="char-type-icon">{item.value ? '✅' : '⭕'}</span>
                  <span className="char-type-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Issues */}
          {analysis.weaknesses.criticalWeaknesses.length > 0 && (
            <div className="warning-card">
              <div className="warning-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <h3>Security Vulnerabilities Detected</h3>
              </div>
              <ul className="warning-list">
                {analysis.weaknesses.criticalWeaknesses.includes('too_short') && <li>Password is too short (minimum 8 characters required)</li>}
                {analysis.weaknesses.hasCommonWords && <li>Contains common dictionary words - easily cracked in minutes!</li>}
                {analysis.weaknesses.hasKeyboard && <li>Contains keyboard patterns (predictable)</li>}
                {analysis.weaknesses.hasSequential && <li>Contains sequential characters (low entropy)</li>}
                {analysis.weaknesses.hasRepeating && <li>Contains repeating characters (reduces strength)</li>}
                {analysis.weaknesses.hasSimplePattern && <li>Uses simple repetitive pattern (very weak)</li>}
                {analysis.weaknesses.hasDatePattern && <li>Contains dates or years (easily guessed)</li>}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          <div className="analysis-card">
            <h3 className="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Recommendations
            </h3>
            <ul className="recommendations-list">
              {analysis.suggestions.map((suggestion, idx) => (
                <li key={idx}>{suggestion}</li>
              ))}
            </ul>
          </div>

           {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            borderRadius: '20px',
            padding: '32px',
            color: 'white'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                marginBottom: '12px'
              }}>
                Need a Stronger Password?
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
                Generate a cryptographically secure password in seconds with our advanced generator.
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
              >
                Generate Secure Password
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Initial State */}
      {!analysis && !isAnalyzing && (
        <div className="empty-state">
          <div className="empty-icon">🔐</div>
          <h3>Ready to Check Your Password?</h3>
          <p>Enter a password above and click "Check Password Strength" for comprehensive security analysis</p>
        </div>
      )}

      <style jsx>{`
        .strength-checker-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .strength-input-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
          border: 2px solid var(--border-color);
        }

        .input-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .input-label {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .privacy-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #dcfce7;
          color: #16a34a;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
        }

        @media (prefers-color-scheme: dark) {
          .privacy-badge {
            background: rgba(16, 185, 129, 0.15);
            color: #10b981;
          }
        }

        .input-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .password-input {
          width: 100%;
          padding: 16px 110px 16px 16px;
          font-size: 1.0625rem;
          border: 3px solid var(--border-color);
          border-radius: 14px;
          background: var(--card-alt-bg);
          color: var(--text-primary);
          font-family: 'Courier New', monospace;
          outline: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .password-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input-actions {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 8px;
        }

        .icon-button {
          padding: 10px;
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 10px;
          cursor: pointer;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .icon-button:hover {
          background: var(--primary-blue);
          border-color: var(--primary-blue);
          color: white;
          transform: scale(1.05);
        }

        .clear-button:hover {
          background: #ef4444;
          border-color: #ef4444;
        }

        .check-button {
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.0625rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
          margin-bottom: 12px;
        }

        .check-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.4);
        }

        .check-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner-small {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .privacy-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .privacy-note svg {
          flex-shrink: 0;
          opacity: 0.6;
        }

        .analysis-results {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .strength-header {
          border-radius: 20px;
          padding: 28px;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .strength-main {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .strength-icon {
          font-size: 3rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .strength-label {
          font-size: 0.875rem;
          opacity: 0.9;
          font-weight: 600;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .strength-value {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
        }

        .strength-meter-container {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .strength-meter-bg {
          flex: 1;
          height: 14px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          overflow: hidden;
        }

        .strength-meter-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.5s ease;
          box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
        }

        .strength-percentage {
          font-size: 1.5rem;
          font-weight: 800;
          min-width: 60px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .metric-card {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.1);
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metric-content {
          flex: 1;
          min-width: 0;
        }

        .metric-label {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .metric-value {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          word-break: break-word;
        }

        .analysis-card {
          background: var(--card-bg);
          border: 2px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
        }

        .card-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .char-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }

        .char-type-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9375rem;
        }

        .char-type-item.active {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }

        .char-type-item.inactive {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          opacity: 0.7;
        }

        @media (prefers-color-scheme: dark) {
          .char-type-item.active {
            background: rgba(16, 185, 129, 0.15);
            color: #10b981;
          }
          
          .char-type-item.inactive {
            background: rgba(239, 68, 68, 0.15);
            color: #ef4444;
          }
        }

        .char-type-icon {
          font-size: 1.25rem;
        }

        .warning-card {
          background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
          border: 2px solid #ef4444;
          border-radius: 16px;
          padding: 24px;
          color: #7f1d1d;
        }

        @media (prefers-color-scheme: dark) {
          .warning-card {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%);
            border-color: #dc2626;
            color: #fca5a5;
          }
        }

        .warning-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .warning-header h3 {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0;
        }

        .warning-list {
          margin: 0;
          padding-left: 24px;
          line-height: 1.8;
        }

        .warning-list li {
          margin-bottom: 8px;
          font-weight: 600;
        }

        .recommendations-list {
          margin: 0;
          padding-left: 24px;
          line-height: 1.9;
          color: var(--text-secondary);
        }

        .recommendations-list li {
          margin-bottom: 12px;
          font-weight: 500;
        }

        .cta-card {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 20px;
          padding: 32px;
          color: white;
        }

        .cta-content {
          text-align: center;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .cta-content p {
          opacity: 0.95;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: white;
          color: #3b82f6;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          white-space: nowrap;
          min-width: 280px;
          justify-content: center;
        }

        .cta-button svg{
         display: inline-flex;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .empty-state {
          text-align: center;
          padding: 50px 20px;
          background: var(--card-alt-bg);
          border-radius: 20px;
          border: 2px dashed var(--border-color);
        }

        .empty-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          filter: grayscale(0.3);
        }

        .empty-state h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .empty-state p {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .strength-input-card {
            padding: 24px 18px;
          }

          .password-input {
            padding: 14px 100px 14px 14px;
            font-size: 1rem;
          }

          .check-button {
            padding: 14px 20px;
            font-size: 1rem;
          }

          .strength-header {
            padding: 24px 20px;
          }

          .strength-main {
            gap: 14px;
          }

          .strength-icon {
            font-size: 2.5rem;
          }

          .strength-value {
            font-size: 1.75rem;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .cta-card {
            padding: 28px 20px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }

          .char-types-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
