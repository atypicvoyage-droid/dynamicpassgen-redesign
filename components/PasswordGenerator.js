'use client'

import { useState, useEffect } from 'react'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState({
    uppercase: true,
    numbers: true,
    symbols: true
  })
  const [strength, setStrength] = useState({ label: 'NONE', percentage: 0, color: '#64748b' })
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz'
    if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (options.numbers) charset += '0123456789'
    if (options.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    const array = new Uint8Array(length)
    window.crypto.getRandomValues(array)
    
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset[array[i] % charset.length]
    }
    
    setPassword(newPassword)
    setCopied(false)
  }

  const calculateStrength = (pwd) => {
    if (!pwd) return { label: 'NONE', percentage: 0, color: '#64748b' }
    
    let charsetSize = 26
    if (/[A-Z]/.test(pwd)) charsetSize += 26
    if (/[0-9]/.test(pwd)) charsetSize += 10
    if (/[^a-zA-Z0-9]/.test(pwd)) charsetSize += 32
    
    const entropy = pwd.length * Math.log2(charsetSize)
    
    if (entropy < 40) return { label: 'WEAK', percentage: 25, color: '#ef4444' }
    if (entropy < 60) return { label: 'FAIR', percentage: 50, color: '#f59e0b' }
    if (entropy < 80) return { label: 'GOOD', percentage: 75, color: '#10b981' }
    return { label: 'STRONG', percentage: 100, color: '#10b981' }
  }

  useEffect(() => {
    setStrength(calculateStrength(password))
  }, [password])

  const copyToClipboard = () => {
    if (!password) return
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="central-card">
      <div className="password-display-row">
        <div style={{position: 'relative', flex: 1}}>
          <input 
            type="text"
            className="password-input"
            value={password}
            readOnly
            placeholder="Click Generate to create password"
            style={{paddingRight: '60px'}}
          />
          {password && (
            <button
              onClick={copyToClipboard}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: copied ? '#10b981' : 'rgba(59, 130, 246, 0.8)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          )}
        </div>
        <div className="strength-circle" style={{
          boxShadow: `0 0 30px ${strength.color}80, inset 0 0 20px ${strength.color}20`,
          color: strength.color
        }}>
          {strength.label}
        </div>
      </div>
      
      {password && (
        <div style={{
          marginBottom: '24px',
          padding: '12px',
          background: `${strength.color}15`,
          border: `1px solid ${strength.color}30`,
          borderRadius: '12px',
          fontSize: '0.9rem',
          color: 'var(--text-lighter)'
        }}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
            <span>Password Strength</span>
            <span style={{fontWeight: '700', color: strength.color}}>{strength.percentage}%</span>
          </div>
          <div style={{height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden'}}>
            <div style={{
              height: '100%',
              width: `${strength.percentage}%`,
              background: strength.color,
              transition: 'all 0.5s ease',
              borderRadius: '3px'
            }} />
          </div>
        </div>
      )}
      
      <div className="options-row">
        <label className="option-label">
          <input 
            type="checkbox" 
            checked={options.uppercase}
            onChange={(e) => setOptions({...options, uppercase: e.target.checked})}
          />
          <span>Uppercase (A-Z)</span>
        </label>
        
        <label className="option-label">
          <input 
            type="checkbox" 
            checked={options.numbers}
            onChange={(e) => setOptions({...options, numbers: e.target.checked})}
          />
          <span>Numbers (0-9)</span>
        </label>
        
        <label className="option-label">
          <input 
            type="checkbox" 
            checked={options.symbols}
            onChange={(e) => setOptions({...options, symbols: e.target.checked})}
          />
          <span>Symbols (!@#$)</span>
        </label>
      </div>
      
      <div className="length-control">
        <div className="length-label">
          <span>Password Length</span>
          <span style={{color: 'white', fontSize: '1.1rem', fontWeight: '700'}}>{length}</span>
        </div>
        <input 
          type="range" 
          min="8" 
          max="32" 
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="length-slider"
        />
        <div className="length-label" style={{fontSize: '0.75rem', marginTop: '8px', opacity: 0.6}}>
          <span>8</span>
          <span>32</span>
        </div>
      </div>
      
      <button className="generate-btn" onClick={generatePassword}>
        <span style={{position: 'relative', zIndex: 1}}>Generate Secure Password</span>
      </button>
      
      <div style={{marginTop: '24px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)'}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{display: 'inline-block', marginRight: '8px', verticalAlign: 'middle'}}>
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" fill="#10b981"/>
        </svg>
        100% client-side generation - your password never touches our servers
      </div>
    </div>
  )
}
