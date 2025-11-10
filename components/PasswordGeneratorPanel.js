'use client';
import React, { useState, useEffect } from 'react';

const PRESETS = [
  { name: 'Banking', config: { uppercase: true, numbers: true, symbols: true, length: 18 } },
  { name: 'Social', config: { uppercase: true, numbers: true, symbols: false, length: 14 } },
  { name: 'Memorable', config: { uppercase: true, numbers: false, symbols: false, length: 12 } },
  { name: 'Max', config: { uppercase: true, numbers: true, symbols: true, length: 32 } }
];

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
  const words = ['orchid', 'runway', 'rocket', 'teleport', 'thrill', 'marble', 'smile', 'banner', 'yellow', 'lunar', 'mist', 'horizon', 'blaze', 'maroon'];
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
  if (entropy < 40) return { label: 'WEAK', color: '#ef4444' };
  if (entropy < 60) return { label: 'FAIR', color: '#f59e0b' };
  if (entropy < 80) return { label: 'GOOD', color: '#2dd4bf' };
  return { label: 'STRONG', color: '#10b981' };
}

function StrengthCircle({ label = 'NONE', color = '#64748b' }) {
  const radius = 36, stroke = 6;
  const normalized = radius - stroke / 2;
  const circ = 2 * Math.PI * normalized;
  return (
    <svg width="80" height="80" style={{ position: 'relative', zIndex: 1 }}>
      <circle cx="40" cy="40" r={normalized} fill="rgba(20,22,40,0.93)" stroke="#334155" strokeWidth={stroke} />
      <circle cx="40" cy="40" r={normalized} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={0} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.6s', filter: 'drop-shadow(0 0 6px ' + color + '99)' }} />
      <text x="50%" y="53%" dominantBaseline="central" textAnchor="middle" fontSize="16" fontWeight="bold" fill={color} letterSpacing="2px">{label}</text>
    </svg>
  );
}

export default function PasswordGeneratorPanel() {
  const [mode, setMode] = useState('password');
  const [input, setInput] = useState('');
  const [copyText, setCopyText] = useState('Copy');
  const [options, setOptions] = useState({ uppercase: true, numbers: true, symbols: true, length: 16, pinLength: 6, passphraseWords: 4 });
  const [history, setHistory] = useState([]);
  const [strength, setStrength] = useState(getStrengthLabel(0));
  const [entropy, setEntropy] = useState(0);
  const [crackTime, setCrackTime] = useState('N/A');

  function handleGenerate() {
    let generated = '';
    if (mode === 'password') generated = generateRandomPassword(options);
    else if (mode === 'pin') generated = generatePIN(options.pinLength);
    else if (mode === 'passphrase') generated = generateRandomPassphrase(options.passphraseWords);
    setInput(generated);
    if (generated) setHistory(prev => [{ value: generated, ts: Date.now() }, ...prev].slice(0, 5));
  }

  useEffect(() => {
    let ent = 0;
    if (input && mode === 'password') ent = calculateEntropy(input, options);
    else if (input && mode === 'passphrase') ent = input.length * Math.log2(14);
    else if (input && mode === 'pin') ent = input.length * Math.log2(10);
    setEntropy(ent);
    setStrength(getStrengthLabel(ent));
    setCrackTime(estimateCrackTime(ent));
  }, [input, options, mode]);

  function handlePreset(preset) {
    setOptions(opts => ({ ...opts, ...preset }));
    setTimeout(handleGenerate, 100);
  }

  function onCopy() {
    navigator.clipboard.writeText(input);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 1000);
  }

  function passwordFont() {
    if (input.length <= 18) return '1.23rem';
    if (input.length <= 32) return '1rem';
    return '0.85rem';
  }

  return (
    <section style={{ marginTop: '24px', padding: '0 8px' }}>
      <div style={{ maxWidth: 700, borderRadius: 24, margin: '0 auto', background: 'rgba(24,28,48,0.96)', boxShadow: '0 8px 48px #282C53cc', padding: '32px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
          {GENERATION_MODES.map(tab => (
            <button key={tab.value} onClick={() => setMode(tab.value)} style={{ padding: '10px 28px', border: 'none', borderRadius: 20, background: mode === tab.value ? 'linear-gradient(90deg,#6366f1,#0ea5e9)' : '#22284c', color: mode === tab.value ? '#fff' : '#cdd7eb', fontWeight: 600, fontSize: '1.02rem', cursor: 'pointer', letterSpacing: 0.1 }}>{tab.label}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 0, background: '#181c2a', borderRadius: 16, padding: '14px 12px 14px 18px', display: 'flex', alignItems: 'center', fontFamily: 'monospace', fontWeight: 600, fontSize: passwordFont(), color: '#fff', overflowX: 'auto' }}>
            <span style={{ whiteSpace: 'nowrap', flex: 1, minWidth: 0, fontSize: passwordFont(), overflow: 'auto' }}>{input || ''}</span>
            <button onClick={onCopy} style={{ marginLeft: 12, background: '#2563eb', color: '#fff', outline: 'none', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: '1rem', padding: '6px 16px', cursor: 'pointer', transition: 'background 0.2s' }}>{copyText}</button>
          </div>
          <div style={{ flexShrink: 0 }}><StrengthCircle label={strength.label} color={strength.color} /></div>
        </div>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', fontSize: '1rem' }}>
          <div style={{ flex: '1 1', maxWidth: '380px' }}>
            <div style={{ marginBottom: 6, color: '#b5bccf', fontSize: '0.85em', fontWeight: 400 }}>Password Strength</div>
            <div style={{ background: '#23284a', borderRadius: '7px', height: '9px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: entropy ? Math.min(1, entropy / 100) * 100 + '%' : 0, background: strength.color, borderRadius: 7, boxShadow: '0 0 8px ' + strength.color + '80', transition: 'width 0.5s' }}></div>
            </div>
          </div>
          <div style={{ color: '#b5bccf', fontSize: '0.95em', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span>Crack Time: <span style={{ color: strength.color, fontWeight: 600 }}>{crackTime}</span></span>
            <span>Entropy: <span style={{ color: '#fff', fontWeight: 600 }}>{entropy ? entropy.toFixed(1) : '--'}</span></span>
          </div>
        </div>
        <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {PRESETS.map(p => (
            <button key={p.name} onClick={() => handlePreset(p.config)} style={{ background: '#23284a', color: '#9ce7ff', border: 'none', borderRadius: 8, padding: '7px 20px', fontWeight: 500, fontSize: '0.98rem', cursor: 'pointer', transition: 'background 0.2s' }}>{p.name}</button>
          ))}
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {mode === 'password' && (
            <>
              <label style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center', background: '#23284a', padding: '6px 16px', borderRadius: 8, color: '#fff', fontWeight: 500, gap: 9 }}>
                <input type="checkbox" checked={options.uppercase} onChange={e => setOptions(o => ({ ...o, uppercase: e.target.checked }))} style={{ marginRight: 4 }} />
                Uppercase (A-Z)
              </label>
              <label style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center', background: '#23284a', padding: '6px 16px', borderRadius: 8, color: '#fff', fontWeight: 500, gap: 9 }}>
                <input type="checkbox" checked={options.numbers} onChange={e => setOptions(o => ({ ...o, numbers: e.target.checked }))} style={{ marginRight: 4 }} />
                Numbers (0-9)
              </label>
              <label style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center', background: '#23284a', padding: '6px 16px', borderRadius: 8, color: '#fff', fontWeight: 500, gap: 9 }}>
                <input type="checkbox" checked={options.symbols} onChange={e => setOptions(o => ({ ...o, symbols: e.target.checked }))} style={{ marginRight: 4 }} />
                Symbols (!@#$)
              </label>
            </>
          )}
          {mode === 'password' && (
            <div style={{ flex: '1 1 180px', maxWidth: 220, display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: '#c2c7db', fontWeight: 400, fontSize: '1rem', marginRight: 3 }}>Length</span>
              <input type="range" min="8" max="32" value={options.length} onChange={e => setOptions(o => ({ ...o, length: +e.target.value }))} style={{ flex: 1, margin: '0 4px' }} />
              <span style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 700 }}>{options.length}</span>
            </div>
          )}
          {mode === 'passphrase' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#23284a', padding: '7px 16px', borderRadius: 8 }}>
              Words:
              <input min={3} max={8} type="number" value={options.passphraseWords} onChange={e => setOptions(o => ({ ...o, passphraseWords: +e.target.value }))} style={{ width: 54, marginLeft: 7, borderRadius: 4, border: 'none', fontWeight: 600, padding: '2px 8px' }} />
            </div>
          )}
          {mode === 'pin' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#23284a', padding: '7px 16px', borderRadius: 8 }}>
              Pin Length:
              <input min={4} max={12} type="number" value={options.pinLength} onChange={e => setOptions(o => ({ ...o, pinLength: +e.target.value }))} style={{ width: 54, marginLeft: 7, borderRadius: 4, border: 'none', fontWeight: 600, padding: '2px 8px' }} />
            </div>
          )}
        </div>
        <div style={{ marginTop: 30, marginBottom: 18 }}>
          <button onClick={handleGenerate} style={{ display: 'block', margin: '0 auto', width: '100%', padding: '18px 0', fontSize: '1.0rem', fontWeight: 800, letterSpacing: '0.13em', borderRadius: 14, background: 'linear-gradient(90deg,#6366f1,#0ea5e9)', color: '#fff', boxShadow: '0 4px 28px #24328933', border: 'none', transition: 'background 0.2s', cursor: 'pointer' }}>GENERATE {mode === 'password' ? 'PASSWORD' : mode === 'passphrase' ? 'PASSPHRASE' : 'PIN'}</button>
        </div>
        {history.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <div style={{ marginBottom: 7, color: '#a3aed8', fontWeight: 600 }}>Recently Generated</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {history.map(h => (
                <div key={h.ts} style={{ background: '#1e2338', padding: '5px 14px', fontSize: '0.98em', borderRadius: 7, fontFamily: 'monospace', color: '#fff', display: 'flex', alignItems: 'center', gap: 7, border: '1.5px solid #181c2a' }}>
                  <span>{h.value}</span>
                  <button onClick={() => { setInput(h.value); }} style={{ marginLeft: 1, background: '#22284c', color: '#9ce7ff', border: 'none', borderRadius: 7, padding: '1px 9px', fontSize: '0.92em', fontWeight: 600, cursor: 'pointer' }}>Use</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
