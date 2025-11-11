'use client';
import React, { useState, useEffect } from 'react';

const GENERATION_MODES = [
  { label: 'Password', value: 'password' },
  { label: 'Passphrase', value: 'passphrase' },
  { label: 'PIN', value: 'pin' }
];

function estimateCrackTime(entropy) {
  if (!entropy || isNaN(entropy)) return 'N/A';
  const guesses = Math.pow(2, entropy);
  const guessesPerSecond = 1e10;
  const seconds = guesses / guessesPerSecond;
  if (seconds < 60) return '<1 minute';
  if (seconds < 3600) return '<1 hour';
  if (seconds < 86400) return '<1 day';
  if (seconds < 31536000) return '<1 year';
  const years = Math.floor(seconds / 31536000);
  if (years < 100000) return `~${years.toLocaleString()} years`;
  return 'trillions of years';
}

function getCharset(options) {
  let charset = 'abcdefghijklmnopqrstuvwxyz';
  if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.numbers) charset += '0123456789';
  if (options.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  return charset;
}

function generateRandomPassword(options) {
  const charset = getCharset(options);
  let password = '';
  const array = new Uint8Array(options.length);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < options.length; i++) {
    password += charset[array[i] % charset.length];
  }
  return password;
}

function generatePIN(length) {
  const digits = '0123456789';
  let pin = '';
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    pin += digits[array[i] % 10];
  }
  return pin;
}

function generateRandomPassphrase(wordCount) {
  const words = ['correct', 'horse', 'battery', 'staple', 'orchid', 'runway', 'rocket', 'teleport', 'thrill', 'marble', 'smile', 'banner', 'yellow', 'lunar', 'mist', 'horizon', 'blaze', 'maroon', 'crystal', 'thunder'];
  let result = [];
  const array = new Uint8Array(wordCount);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < wordCount; i++) {
    result.push(words[array[i] % words.length]);
  }
  return result.join('-');
}

function calculateEntropy(str, options) {
  let charsetSize = 26;
  if (options.uppercase) charsetSize += 26;
  if (options.numbers) charsetSize += 10;
  if (options.symbols) charsetSize += 32;
  return str.length * Math.log2(charsetSize);
}

function getStrengthLabel(entropy) {
  if (entropy < 40) return { label: 'WEAK', color: '#ef4444', percentage: 25 };
  if (entropy < 60) return { label: 'FAIR', color: '#f59e0b', percentage: 50 };
  if (entropy < 80) return { label: 'GOOD', color: '#06b6d4', percentage: 75 };
  return { label: 'STRONG', color: '#10b981', percentage: 100 };
}

export default function PasswordGeneratorPanel() {
  const [mode, setMode] = useState('password');
  const [input, setInput] = useState('');
  const [copyText, setCopyText] = useState('Copy');
  const [options, setOptions] = useState({ 
    uppercase: true, 
    numbers: true, 
    symbols: true, 
    length: 16, 
    pinLength: 6, 
    passphraseWords: 4 
  });
  const [entropy, setEntropy] = useState(0);
  const [strength, setStrength] = useState(getStrengthLabel(0));
  const [crackTime, setCrackTime] = useState('N/A');
  const [message, setMessage] = useState('Click Generate to create a password.');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setInput('');
    setMessage(`Click Generate to create a ${mode}.`);
    setHistory([]);
  }, [mode]);

  useEffect(() => {
    let ent = 0;
    if (input && mode === 'password') ent = calculateEntropy(input, options);
    else if (input && mode === 'passphrase') ent = input.length * Math.log2(20);
    else if (input && mode === 'pin') ent = input.length * Math.log2(10);
    setEntropy(ent);
    setStrength(getStrengthLabel(ent));
    setCrackTime(estimateCrackTime(ent));
  }, [input, options, mode]);

  function handleGenerate() {
    let generated = '';
    if (mode === 'password') generated = generateRandomPassword(options);
    else if (mode === 'pin') generated = generatePIN(options.pinLength);
    else if (mode === 'passphrase') generated = generateRandomPassphrase(options.passphraseWords);
    setInput(generated);
    setMessage('');
    if (generated) {
      setHistory(prev => [{ value: generated, ts: Date.now() }, ...prev].slice(0, 5));
    }
  }

  function onCopy(text) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 1000);
  }

  return (
    <section style={{ marginTop: 24, padding: '0 0' }}>
      <div style={{ 
        maxWidth: 700, 
        borderRadius: 24, 
        margin: '0 auto', 
        background: '#ffffff', 
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)', 
        padding: '36px 12px',
        border: '1px solid #e2e8f0'
      }}>
        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
          {GENERATION_MODES.map(tab => (
            <button 
              key={tab.value} 
              onClick={() => setMode(tab.value)} 
              style={{ 
                padding: '12px 20px', 
                border: 'none', 
                borderRadius: 12, 
                background: mode === tab.value ? '#3b82f6' : '#f1f5f9', 
                color: mode === tab.value ? '#fff' : '#64748b', 
                fontWeight: 600, 
                fontSize: '1rem', 
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Password Display - Responsive with wrapping */}
        <div style={{ 
          background: '#f8fafc', 
          borderRadius: 16, 
          padding: '16px 20px', 
          marginBottom: 24,
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ 
              flex: '1 1 0',
              minWidth: 0,
              fontFamily: 'monospace', 
              fontWeight: 600, 
              fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
              color: input ? '#1e293b' : '#94a3b8',
              wordBreak: 'break-all',
              lineHeight: 1.5,
              maxWidth: '100%'
            }}>
              {input || message}
            </div>
            <button 
              onClick={() => onCopy(input)} 
              disabled={!input}
              style={{ 
                flexShrink: 0,
                background: input ? '#3b82f6' : '#e2e8f0',
                color: input ? '#fff' : '#94a3b8',
                border: 'none', 
                borderRadius: 8, 
                fontWeight: 600, 
                fontSize: '0.95rem', 
                padding: '8px 20px', 
                cursor: input ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {copyText}
            </button>
          </div>
        </div>

        {/* Strength Indicator (Only for Password/Passphrase) */}
        {mode !== 'pin' && input && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: 8,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#64748b'
            }}>
              <span>Password Strength</span>
              <span style={{ color: strength.color }}>{strength.label}</span>
            </div>
            <div style={{ 
              background: '#e2e8f0', 
              borderRadius: 8, 
              height: '12px', 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                height: '100%', 
                width: `${strength.percentage}%`,
                background: strength.color, 
                transition: 'width 0.5s ease',
                borderRadius: 8
              }}></div>
            </div>
            <div style={{ 
              marginTop: 8, 
              fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
              color: '#64748b',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8
            }}>
              <span>Crack Time: <strong style={{ color: strength.color }}>{crackTime}</strong></span>
              <span>Entropy: <strong>{entropy ? entropy.toFixed(1) : '--'} bits</strong></span>
            </div>
          </div>
        )}

        {/* Controls */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
          {mode === 'password' && (
            <>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: '#f1f5f9', 
                padding: '10px 16px', 
                borderRadius: 10, 
                fontWeight: 500,
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                cursor: 'pointer'
              }}>
                <input 
                  type="checkbox" 
                  checked={options.uppercase} 
                  onChange={e => setOptions(o => ({ ...o, uppercase: e.target.checked }))} 
                  style={{ marginRight: 8, cursor: 'pointer' }} 
                />
                Uppercase (A-Z)
              </label>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: '#f1f5f9', 
                padding: '10px 16px', 
                borderRadius: 10, 
                fontWeight: 500,
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                cursor: 'pointer'
              }}>
                <input 
                  type="checkbox" 
                  checked={options.numbers} 
                  onChange={e => setOptions(o => ({ ...o, numbers: e.target.checked }))} 
                  style={{ marginRight: 8, cursor: 'pointer' }} 
                />
                Numbers (0-9)
              </label>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: '#f1f5f9', 
                padding: '10px 16px', 
                borderRadius: 10, 
                fontWeight: 500,
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                cursor: 'pointer'
              }}>
                <input 
                  type="checkbox" 
                  checked={options.symbols} 
                  onChange={e => setOptions(o => ({ ...o, symbols: e.target.checked }))} 
                  style={{ marginRight: 8, cursor: 'pointer' }} 
                />
                Symbols (!@#$)
              </label>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12, 
                background: '#f1f5f9', 
                padding: '10px 16px', 
                borderRadius: 10,
                flex: '1 1 200px'
              }}>
                <span style={{ fontWeight: 500, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>Length</span>
                <input 
                  type="range" 
                  min="8" 
                  max="32" 
                  value={options.length} 
                  onChange={e => setOptions(o => ({ ...o, length: +e.target.value }))} 
                  style={{ flex: 1 }} 
                />
                <span style={{ fontWeight: 700, fontSize: '1rem', minWidth: '30px', textAlign: 'right' }}>{options.length}</span>
              </div>
            </>
          )}
          {mode === 'pin' && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#f1f5f9', 
              padding: '10px 16px', 
              borderRadius: 10 
            }}>
              <span style={{ fontWeight: 500, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>PIN Length</span>
              <input 
                min={4} 
                max={12} 
                type="number" 
                value={options.pinLength} 
                onChange={e => setOptions(o => ({ ...o, pinLength: +e.target.value }))} 
                style={{ 
                  width: 60, 
                  padding: '6px 10px', 
                  borderRadius: 6, 
                  border: '1px solid #e2e8f0', 
                  fontWeight: 600,
                  fontSize: '1rem'
                }} 
              />
            </div>
          )}
          {mode === 'passphrase' && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              background: '#f1f5f9', 
              padding: '10px 16px', 
              borderRadius: 10 
            }}>
              <span style={{ fontWeight: 500, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>Words</span>
              <input 
                min={3} 
                max={8} 
                type="number" 
                value={options.passphraseWords} 
                onChange={e => setOptions(o => ({ ...o, passphraseWords: +e.target.value }))} 
                style={{ 
                  width: 60, 
                  padding: '6px 10px', 
                  borderRadius: 6, 
                  border: '1px solid #e2e8f0', 
                  fontWeight: 600,
                  fontSize: '1rem'
                }} 
              />
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button 
          onClick={handleGenerate} 
          style={{ 
            width: '100%', 
            padding: '16px', 
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
            fontWeight: 700, 
            letterSpacing: '0.5px', 
            borderRadius: 12, 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: '#fff', 
            border: 'none', 
            cursor: 'pointer',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}
        >
          GENERATE {mode === 'password' ? 'PASSWORD' : mode === 'passphrase' ? 'PASSPHRASE' : 'PIN'}
        </button>

        {/* History */}
        {history.length > 0 && (
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #e2e8f0' }}>
            <div style={{ 
              marginBottom: 12, 
              fontWeight: 600, 
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              color: '#64748b'
            }}>
              Recently Generated
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {history.map(h => (
                <div 
                  key={h.ts} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#f8fafc', 
                    padding: '10px 14px', 
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', 
                    borderRadius: 8,
                    fontFamily: 'monospace',
                    border: '1px solid #e2e8f0',
                    gap: 8,
                    flexWrap: 'wrap'
                  }}
                >
                  <span style={{ 
                    flex: '1 1 0',
                    minWidth: 0,
                    wordBreak: 'break-all',
                    lineHeight: 1.4
                  }}>
                    {h.value}
                  </span>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <button 
                      onClick={() => { setInput(h.value); setMessage(''); }} 
                      style={{ 
                        background: '#3b82f6', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: 6, 
                        padding: '4px 12px', 
                        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
                        fontWeight: 600, 
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Use
                    </button>
                    <button 
                      onClick={() => onCopy(h.value)} 
                      style={{ 
                        background: '#f1f5f9', 
                        color: '#64748b', 
                        border: 'none', 
                        borderRadius: 6, 
                        padding: '4px 12px', 
                        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', 
                        fontWeight: 600, 
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
