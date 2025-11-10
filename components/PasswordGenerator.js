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
  const [strength, setStrength] = useState({ label: 'NONE', percentage: 0 })
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz' // Always include lowercase
    if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (options.numbers) charset += '0123456789'
    if (options.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    if (charset === 'abcdefghijklmnopqrstuvwxyz') {
      alert('Please select at least one option in addition to lowercase letters')
      return
    }
    
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
    if (!pwd) return { label: 'NONE', percentage: 0 }
    
    let charsetSize = 26 // lowercase always included
    if (/[A-Z]/.test(pwd)) charsetSize += 26
    if (/[0-9]/.test(pwd)) charsetSize += 10
    if (/[^a-zA-Z0-9]/.test(pwd)) charsetSize += 32
    
    const entropy = pwd.length * Math.log2(charsetSize)
    
    if (entropy < 40) return { label: 'WEAK', percentage: 25 }
    if (entropy < 60) return { label: 'MEDIUM', percentage: 50 }
    if (entropy < 80) return { label: 'STRONG', percentage: 75 }
    return { label: 'STRONG', percentage: 100 }
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
        <input 
          type="text"
          className="password-input"
          value={password}
          readOnly
          placeholder="Generated password will appear here"
          onClick={copyToClipboard}
        />
        <div className="strength-circle">
          {strength.label}
        </div>
      </div>
      
      {copied && (
        <div style={{textAlign: 'center', color: 'var(--accent-green)', marginBottom: '16px', fontSize: '0.9rem'}}>
          ✓ Copied to clipboard!
        </div>
      )}
      
      <div className="options-row">
        <label className="option-label">
          <input 
            type="checkbox" 
            checked={options.uppercase}
            onChange={(e) => setOptions({...options, uppercase: e.target.checked})}
          />
          <span>Uppercase Letters</span>
        </label>
        
        <label className="option-label">
          <input 
            type="checkbox" 
            checked={options.numbers}
            onChange={(e) => setOptions({...options, numbers: e.target.checked})}
          />
          <span>Numbers</span>
        </label>
        
        <label className="option-label">
          <input 
            type="checkbox" 
            checked={options.symbols}
            onChange={(e) => setOptions({...options, symbols: e.target.checked})}
          />
          <span>Symbols</span>
        </label>
      </div>
      
      <div className="length-control">
        <div className="length-label">
          <span>Length</span>
          <span>{length}</span>
        </div>
        <input 
          type="range" 
          min="8" 
          max="32" 
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="length-slider"
        />
        <div className="length-label" style={{fontSize: '0.75rem', marginTop: '4px'}}>
          <span>8</span>
          <span>32</span>
        </div>
      </div>
      
      <button className="generate-btn" onClick={generatePassword}>
        Generate
      </button>
    </div>
  )
}
