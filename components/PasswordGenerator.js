'use client'

import { useState, useEffect } from 'react'

// SVG Circular Progress Helper
function StrengthCircle({ percentage = 0, label = 'NONE', color = '#64748b' }) {
  const radius = 36;
  const stroke = 6;
  const normalized = radius - stroke / 2;
  const circ = 2 * Math.PI * normalized;
  const pct = Math.max(0, Math.min(100, percentage));
  const dash = circ * (1 - pct / 100);

  return (
    <svg width="80" height="80" style={{position:'relative', zIndex:1, display:'block'}}>
      <circle
        cx="40"
        cy="40"
        r={normalized}
        fill="rgba(15,23,42,0.8)"
        stroke="#21294d"
        strokeWidth={stroke}
      />
      <circle
        cx="40"
        cy="40"
        r={normalized}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={circ}
        strokeDashoffset={dash}
        strokeLinecap="round"
        style={{transition:'stroke-dashoffset 0.6s cubic-bezier(.6,0,.35,1)', filter:'drop-shadow(0 0 6px '+color+'99)'}}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill={color}
        style={{letterSpacing: '2px', textShadow:'0 1px 8px #09131e'}}
      >
        {label}
      </text>
      <text
        x="50%"
        y="66%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="12"
        fill={color}
        fontWeight={600}
        style={{opacity: 0.8, letterSpacing: '1px'}}
      >
        {percentage}%
      </text>
    </svg>
  );
}

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
        <div style={{marginLeft: '12px'}}>
          <StrengthCircle label={strength.label} percentage={strength.percentage} color={strength.color} />
        </div>
      </div>
      
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
  );
}

