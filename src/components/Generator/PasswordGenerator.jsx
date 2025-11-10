import React, { useState, useEffect } from 'react'
import './PasswordGenerator.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  })
  const [strength, setStrength] = useState({ score: 0, label: 'None', percentage: 0 })
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = ''
    if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (options.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (options.numbers) charset += '0123456789'
    if (options.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    if (charset === '') {
      alert('Please select at least one character type')
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
    if (!pwd) return { score: 0, label: 'None', percentage: 0 }
    
    let charsetSize = 0
    if (/[a-z]/.test(pwd)) charsetSize += 26
    if (/[A-Z]/.test(pwd)) charsetSize += 26
    if (/[0-9]/.test(pwd)) charsetSize += 10
    if (/[^a-zA-Z0-9]/.test(pwd)) charsetSize += 32
    
    const entropy = pwd.length * Math.log2(charsetSize)
    
    let score, label, percentage
    if (entropy < 40) {
      score = 1
      label = 'Weak'
      percentage = 25
    } else if (entropy < 60) {
      score = 2
      label = 'Medium'
      percentage = 50
    } else if (entropy < 80) {
      score = 3
      label = 'Strong'
      percentage = 75
    } else {
      score = 4
      label = 'Very Strong'
      percentage = 100
    }
    
    return { score, label, percentage }
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

  const getStrengthClass = () => {
    switch (strength.score) {
      case 1: return 'strength-weak'
      case 2: return 'strength-medium'
      case 3: return 'strength-strong'
      case 4: return 'strength-very-strong'
      default: return ''
    }
  }

  return (
    <div className="password-generator card">
      <div className="password-output">
        <div className="password-display">
          {password || 'Click Generate to create password'}
        </div>
        {password && (
          <button 
            className="btn-copy" 
            onClick={copyToClipboard}
            title="Copy to clipboard"
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
        )}
      </div>
      
      {password && (
        <div className="strength-indicator">
          <div className="strength-meter">
            <div 
              className={`strength-meter-fill ${getStrengthClass()}`}
              style={{ width: `${strength.percentage}%` }}
            />
          </div>
          <div className="strength-label">
            Password Strength: <strong>{strength.label}</strong>
          </div>
        </div>
      )}
      
      <div className="form-group">
        <div className="length-control">
          <label className="form-label">Password Length: {length}</label>
          <input 
            type="range" 
            min="8" 
            max="32" 
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="slider"
          />
          <div className="length-labels">
            <span>8</span>
            <span>32</span>
          </div>
        </div>
      </div>
      
      <div className="options-grid">
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="uppercase"
            checked={options.uppercase} 
            onChange={(e) => setOptions({...options, uppercase: e.target.checked})}
          />
          <label htmlFor="uppercase">Uppercase Letters (A-Z)</label>
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="lowercase"
            checked={options.lowercase}
            onChange={(e) => setOptions({...options, lowercase: e.target.checked})}
          />
          <label htmlFor="lowercase">Lowercase Letters (a-z)</label>
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="numbers"
            checked={options.numbers}
            onChange={(e) => setOptions({...options, numbers: e.target.checked})}
          />
          <label htmlFor="numbers">Numbers (0-9)</label>
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="symbols"
            checked={options.symbols}
            onChange={(e) => setOptions({...options, symbols: e.target.checked})}
          />
          <label htmlFor="symbols">Symbols (!@#$%...)</label>
        </div>
      </div>
      
      <button className="btn btn-large btn-block" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
