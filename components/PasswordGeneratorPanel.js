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
  if (entropy < 40) return { label: 'WEAK', color: '#FC5F5C' };
  if (entropy < 60) return { label: 'FAIR', color: '#F9A827' };
  if (entropy < 80) return { label: 'GOOD', color: '#49C5B6' };
  return { label: 'STRONG', color: '#59A96A' };
}
export default function PasswordGeneratorPanel() {
  const [mode, setMode] = useState('password');
  const [input, setInput] = useState('');
  const [copyText, setCopyText] = useState('Copy');
  const [options, setOptions] = useState({ uppercase: true, numbers: true, symbols: true, length: 16, pinLength: 6, passphraseWords: 4 });
  const [entropy, setEntropy] = useState(0);
  const [strength, setStrength] = useState(getStrengthLabel(0));
  const [crackTime, setCrackTime] = useState('N/A');
  const [message, setMessage] = useState('Click Generate to create a password.');
  useEffect(() => {
    setInput('');
    setMessage('Click Generate to create a password.');
  }, [mode]);
  useEffect(() => {
    let ent = 0;
    if (input && mode === 'password') ent = calculateEntropy(input, options);
    else if (input && mode === 'passphrase') ent = input.length * Math.log2(14);
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
  }
  function onCopy() {
    if (!input) return;
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
    <section style={{ marginTop: 24, padding: '0 8px', background: 'linear-gradient(120deg, #fcf6ba 0%, #f9d976 100%, #a1c4fd 100%)', borderRadius: 24 }}>
      <div style={{ maxWidth: 700, borderRadius: 24, margin: '0 auto', background: 'rgba(255,255,255,0.92)', boxShadow: '0 8px 48px #e3c9f6cc', padding: '32px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
          {GENERATION_MODES.map(tab => (
            <button key={tab.value} onClick={() => setMode(tab.value)} style={{ padding: '10px 28px', border: 'none', borderRadius: 20, background: mode === tab.value ? 'linear-gradient(90deg,#49C5B6,#F9A827)' : '#f9f5ed', color: mode === tab.value ? '#fff' : '#222', fontWeight: 700, fontSize: '1.02rem', cursor: 'pointer', letterSpacing: 0.1 }}>{tab.label}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', background: 'rgba(255,255,255,0.6)', borderRadius: 16, padding: '15px 12px' }}>
          <div style={{ flex: 1, minWidth: 0, padding: '0 8px', display: 'flex', alignItems: 'center', fontFamily: 'monospace', fontWeight: 600, fontSize: passwordFont(), color: '#1f2937', overflowX: 'auto', background: 'rgba(255,255,255,0.1)', borderRadius: 10 }}>
            <span style={{ whiteSpace: 'nowrap', flex: 1, minWidth: 0, fontSize: passwordFont(), overflow: 'auto' }}>{input || message}</span>
            <button onClick={onCopy} style={{ marginLeft: 16, background: '#49C5B6', color: '#fff', outline: 'none', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '1rem', padding: '6px 18px', cursor: 'pointer', transition: 'background 0.2s', opacity: input ? 1 : 0.55 }} disabled={!input}>{copyText}</button>
          </div>
        </div>
        <div style={{ marginTop: 24, width: '100%' }}>
          <div style={{ marginBottom: 7, fontWeight: 600, fontSize: '1.12rem', color: '#222' }}>Password Strength</div>
          <div style={{ background: '#eee', borderRadius: 8, height: '18px', position: 'relative', overflow: 'hidden', boxShadow: '0 1px 8px #eee' }}>
            <div style={{ height: '100%', width: entropy ? Math.min(1, entropy / 100) * 100 + '%' : 0, background: strength.color, borderRadius: 8, transition: 'width 0.5s' }}></div>
            <span style={{ position: 'absolute', right: 12, top: 0, height: '100%', display: 'flex', alignItems: 'center', color: strength.color, fontWeight: 800, fontSize: '1.08rem', letterSpacing: 2 }}>{strength.label}</span>
          </div>
          <div style={{marginTop:8, fontSize:'0.99rem', color:'#4e576f', display:'flex', justifyContent:'space-between'}}>
            <span>Crack Time: <strong style={{ color: strength.color }}>{crackTime}</strong></span>
            <span>Entropy: <strong>{entropy ? entropy.toFixed(1) : '--'}</strong></span>
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {mode === 'password' && (<>
              <label style={{ display: 'flex', alignItems: 'center', background: '#f4e7ef', padding: '8px 18px', borderRadius: 10, color: '#363626', fontWeight: 700, gap: 9 }}>
                <input type="checkbox" checked={options.uppercase} onChange={e => setOptions(o => ({ ...o, uppercase: e.target.checked }))} style={{ marginRight: 4 }} />
                Uppercase (A-Z)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', background: '#f4e7ef', padding: '8px 18px', borderRadius: 10, color: '#363626', fontWeight: 700, gap: 9 }}>
                <input type="checkbox" checked={options.numbers} onChange={e => setOptions(o => ({ ...o, numbers: e.target.checked }))} style={{ marginRight: 4 }} />
                Numbers (0-9)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', background: '#f4e7ef', padding: '8px 18px', borderRadius: 10, color: '#363626', fontWeight: 700, gap: 9 }}>
                <input type="checkbox" checked={options.symbols} onChange={e => setOptions(o => ({ ...o, symbols: e.target.checked }))} style={{ marginRight: 4 }} />
                Symbols (!@#$)
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f4e7ef', padding: '8px 18px', borderRadius: 10 }}>
                Length
                <input type="range" min="8" max="32" value={options.length} onChange={e => setOptions(o => ({ ...o, length: +e.target.value }))} style={{ margin: '0 5px', flex: 1 }} />
                <span style={{ fontWeight: 700 }}>{options.length}</span>
              </div>
          </>)}
          {mode === 'pin' && (<>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f4e7ef', padding: '8px 18px', borderRadius: 10 }}>
              Pin Length
              <input min={4} max={12} type="number" value={options.pinLength} onChange={e => setOptions(o => ({ ...o, pinLength: +e.target.value }))} style={{ width: 54, marginLeft: 7, borderRadius: 4, border: 'none', fontWeight: 700, padding: '3px 8px' }} />
            </div>
          </>)}
          {mode === 'passphrase' && (<>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f4e7ef', padding: '8px 18px', borderRadius: 10 }}>
              Words
              <input min={3} max={8} type="number" value={options.passphraseWords} onChange={e => setOptions(o => ({ ...o, passphraseWords: +e.target.value }))} style={{ width: 54, marginLeft: 7, borderRadius: 4, border: 'none', fontWeight: 700, padding: '3px 8px' }} />
            </div>
          </>)}
        </div>
        <div style={{ marginTop: 34, marginBottom: 16 }}>
          <button onClick={handleGenerate} style={{ display: 'block', margin: '0 auto', width: '100%', padding: '18px 0', fontSize: '1.04rem', fontWeight: 800, letterSpacing: '0.13em', borderRadius: 14, background: 'linear-gradient(90deg,#FC5F5C,#F9A827,#49C5B6,#59A96A)', color: '#fff', boxShadow: '0 4px 28px #f2aa4dcc', border: 'none', transition: 'background 0.2s', cursor: 'pointer' }}>GENERATE {mode === 'password' ? 'PASSWORD' : mode === 'passphrase' ? 'PASSPHRASE' : 'PIN'}</button>
        </div>
      </div>
    </section>
  );
}
