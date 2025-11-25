'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export default function SecurityScore() {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const topRef = useRef(null)

  const questions = [
    {
      id: 'password_length',
      question: 'How long are most of your passwords?',
      options: [
        { text: 'Less than 8 characters', value: 0, points: 0 },
        { text: '8-11 characters', value: 1, points: 15 },
        { text: '12-15 characters', value: 2, points: 25 },
        { text: '16+ characters', value: 3, points: 35 }
      ]
    },
    {
      id: 'password_reuse',
      question: 'Do you reuse passwords across multiple accounts?',
      options: [
        { text: 'Yes, I use the same password everywhere', value: 0, points: 0 },
        { text: 'Yes, I reuse a few passwords', value: 1, points: 5 },
        { text: 'Rarely, only for unimportant accounts', value: 2, points: 15 },
        { text: 'Never, every account has a unique password', value: 3, points: 25 }
      ]
    },
    {
      id: 'two_factor',
      question: 'Do you use two-factor authentication (2FA)?',
      options: [
        { text: 'No, never', value: 0, points: 0 },
        { text: 'Only on one or two accounts', value: 1, points: 8 },
        { text: 'On most important accounts', value: 2, points: 15 },
        { text: 'Yes, on all important accounts', value: 3, points: 20 }
      ]
    },
    {
      id: 'password_manager',
      question: 'Do you use a password manager?',
      options: [
        { text: 'No, I remember all my passwords', value: 0, points: 0 },
        { text: 'No, I write them down', value: 1, points: 3 },
        { text: 'Sometimes, for some accounts', value: 2, points: 8 },
        { text: 'Yes, for all my passwords', value: 3, points: 15 }
      ]
    },
    {
      id: 'password_update',
      question: 'How often do you change your passwords?',
      options: [
        { text: 'Never or only when forced', value: 0, points: 0 },
        { text: 'Once every few years', value: 1, points: 3 },
        { text: 'Once a year', value: 2, points: 8 },
        { text: 'Every 3-6 months for important accounts', value: 3, points: 10 }
      ]
    },
    {
      id: 'phishing_awareness',
      question: 'How do you handle suspicious emails or links?',
      options: [
        { text: 'I usually click and check', value: 0, points: 0 },
        { text: 'I sometimes click if they look real', value: 1, points: 3 },
        { text: 'I verify the sender before clicking', value: 2, points: 8 },
        { text: 'I never click suspicious links and report them', value: 3, points: 10 }
      ]
    },
    {
      id: 'public_wifi',
      question: 'Do you use public WiFi for sensitive activities?',
      options: [
        { text: 'Yes, I always use it for everything', value: 0, points: 0 },
        { text: 'Yes, but only for browsing', value: 1, points: 3 },
        { text: 'Rarely, and only with VPN', value: 2, points: 8 },
        { text: 'Never for banking/sensitive activities', value: 3, points: 10 }
      ]
    },
    {
      id: 'software_updates',
      question: 'How do you handle software and security updates?',
      options: [
        { text: 'I ignore them or delay as long as possible', value: 0, points: 0 },
        { text: 'I update occasionally when convenient', value: 1, points: 3 },
        { text: 'I update within a week or two', value: 2, points: 8 },
        { text: 'I install updates immediately', value: 3, points: 10 }
      ]
    }
  ]

  const handleAnswer = (questionId, optionValue, points) => {
    setAnswers({
      ...answers,
      [questionId]: { value: optionValue, points }
    })
  }

  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0)
    const maxPoints = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.points)), 0)
    const percentage = Math.round((totalPoints / maxPoints) * 100)
    
    let rating, color, emoji, message, recommendations
    
    if (percentage >= 90) {
      rating = 'Excellent'
      color = '#10b981'
      emoji = '🛡️'
      message = 'Outstanding! You have excellent security practices.'
      recommendations = [
        'Keep up the great work with your security habits',
        'Stay informed about new security threats',
        'Consider sharing your knowledge with friends and family',
        'Periodically review and audit your security setup'
      ]
    } else if (percentage >= 75) {
      rating = 'Very Good'
      color = '#22c55e'
      emoji = '✅'
      message = 'Great job! Your security practices are strong.'
      recommendations = [
        'Enable 2FA on any remaining accounts',
        'Consider using a password manager if you aren\'t already',
        'Review passwords for your most sensitive accounts',
        'Stay vigilant against phishing attempts'
      ]
    } else if (percentage >= 60) {
      rating = 'Good'
      color = '#eab308'
      emoji = '👍'
      message = 'You\'re doing well, but there\'s room for improvement.'
      recommendations = [
        'Enable two-factor authentication on all important accounts',
        'Start using unique passwords for each account',
        'Consider adopting a password manager',
        'Update passwords for your most important accounts',
        'Be more cautious with public WiFi'
      ]
    } else if (percentage >= 40) {
      rating = 'Fair'
      color = '#f59e0b'
      emoji = '⚠️'
      message = 'Your security needs significant improvement.'
      recommendations = [
        'Immediately enable 2FA on banking and email accounts',
        'Stop reusing passwords across accounts',
        'Start using a password manager today',
        'Update all passwords to be 12+ characters',
        'Never use public WiFi for sensitive activities',
        'Install security updates promptly'
      ]
    } else {
      rating = 'Poor'
      color = '#ef4444'
      emoji = '❌'
      message = 'Critical: Your security practices need urgent attention!'
      recommendations = [
        'URGENT: Enable 2FA on all accounts immediately',
        'Change all passwords to strong, unique ones',
        'Install a password manager and use it',
        'Never reuse passwords',
        'Avoid public WiFi entirely for sensitive activities',
        'Enable automatic security updates',
        'Learn to identify phishing attempts',
        'Consider professional security advice'
      ]
    }

    setScore({
      percentage,
      rating,
      color,
      emoji,
      message,
      recommendations,
      totalPoints,
      maxPoints
    })
    setShowResults(true)
    
    // Scroll to top smoothly
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const resetQuiz = () => {
    setAnswers({})
    setScore(null)
    setShowResults(false)
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const allQuestionsAnswered = Object.keys(answers).length === questions.length

  return (
    <div ref={topRef} style={{ maxWidth: '900px', margin: '0 auto', scrollMarginTop: '100px' }}>
      {!showResults ? (
        <>
          {/* Quiz Questions */}
          <div style={{
            background: 'var(--card-bg)',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '2px solid var(--border-color)',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '2px solid var(--border-color)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                margin: 0
              }}>
                Security Assessment Quiz
              </h3>
              <span style={{
                padding: '8px 16px',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '700'
              }}>
                {Object.keys(answers).length} / {questions.length}
              </span>
            </div>

            {questions.map((q, qIndex) => (
              <div key={q.id} style={{
                marginBottom: '32px',
                paddingBottom: qIndex === questions.length - 1 ? 0 : '32px',
                borderBottom: qIndex === questions.length - 1 ? 'none' : '1px solid var(--border-color)'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{
                    background: answers[q.id] ? 'var(--accent)' : 'var(--border-color)',
                    color: answers[q.id] ? 'white' : 'var(--text-secondary)',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    {qIndex + 1}
                  </span>
                  <span>{q.question}</span>
                </h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginLeft: '40px'
                }}>
                  {q.options.map((option) => {
                    const isSelected = answers[q.id]?.value === option.value
                    const isAnswered = answers[q.id] !== undefined
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(q.id, option.value, option.points)}
                        type="button"
                        style={{
                          padding: '16px 20px',
                          background: isSelected 
                            ? 'var(--accent)' 
                            : (isAnswered ? 'var(--card-bg)' : 'var(--card-alt-bg)'),
                          color: isSelected 
                            ? 'white' 
                            : (isAnswered ? 'var(--text-secondary)' : 'var(--text-primary)'),
                          border: isSelected 
                            ? 'none' 
                            : `2px solid var(--border-color)`,
                          borderRadius: '12px',
                          fontSize: '1rem',
                          fontWeight: isSelected ? '700' : '600',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          width: '100%',
                          opacity: isAnswered && !isSelected ? 0.5 : 1
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = 'var(--accent)'
                            e.currentTarget.style.transform = 'translateX(4px)'
                            e.currentTarget.style.opacity = '1'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = 'var(--border-color)'
                            e.currentTarget.style.transform = 'translateX(0)'
                            e.currentTarget.style.opacity = isAnswered && !isSelected ? '0.5' : '1'
                          }
                        }}
                      >
                        {option.text}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateScore}
            disabled={!allQuestionsAnswered}
            type="button"
            style={{
              width: '100%',
              padding: '18px 24px',
              background: allQuestionsAnswered ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'var(--border-color)',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              fontSize: '1.125rem',
              fontWeight: '700',
              cursor: allQuestionsAnswered ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              boxShadow: allQuestionsAnswered ? '0 4px 16px rgba(59, 130, 246, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (allQuestionsAnswered) {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(59, 130, 246, 0.4)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = allQuestionsAnswered ? '0 4px 16px rgba(59, 130, 246, 0.3)' : 'none'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Calculate My Security Score
          </button>

          {!allQuestionsAnswered && (
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.9375rem',
              marginTop: '16px',
              fontWeight: '600'
            }}>
              Please answer all {questions.length} questions to calculate your score
            </p>
          )}
        </>
      ) : (
        <>
          {/* Results */}
          <div style={{
            background: `linear-gradient(135deg, ${score.color}15 0%, ${score.color}25 100%)`,
            border: `3px solid ${score.color}`,
            borderRadius: '24px',
            padding: '40px',
            marginBottom: '32px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '24px'
            }}>
              <div style={{ fontSize: '4rem' }}>{score.emoji}</div>
              <div style={{ flex: 1 }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: score.color,
                  marginBottom: '8px',
                  lineHeight: '1.2'
                }}>
                  {score.percentage}%
                </h2>
                <p style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: score.color,
                  marginBottom: '8px'
                }}>
                  {score.rating}
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '600'
                }}>
                  {score.totalPoints} out of {score.maxPoints} points
                </p>
              </div>
            </div>

            <div style={{
              background: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px'
            }}>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--text-primary)',
                fontWeight: '600',
                lineHeight: '1.6',
                margin: 0
              }}>
                {score.message}
              </p>
            </div>

            {/* Progress Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '12px',
              height: '24px',
              overflow: 'hidden',
              marginBottom: '24px'
            }}>
              <div style={{
                width: `${score.percentage}%`,
                height: '100%',
                background: score.color,
                borderRadius: '12px',
                transition: 'width 1s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '12px'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '700'
                }}>
                  {score.percentage}%
                </span>
              </div>
            </div>

            {/* Recommendations */}
            <div style={{
              background: 'var(--card-bg)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={score.color} strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                Personalized Recommendations
              </h3>
              <ul style={{
                margin: 0,
                paddingLeft: '24px',
                lineHeight: '2',
                color: 'var(--text-secondary)'
              }}>
                {score.recommendations.map((rec, idx) => (
                  <li key={idx} style={{
                    marginBottom: '12px',
                    fontWeight: '600',
                    fontSize: '0.9375rem'
                  }}>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <button
              onClick={resetQuiz}
              type="button"
              style={{
                padding: '16px 24px',
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                border: '2px solid var(--accent)',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'var(--card-bg)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              Retake Assessment
            </button>
            <Link
              href="/"
              style={{
                padding: '16px 24px',
                background: 'var(--accent)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(59, 130, 246, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Generate Secure Password
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          {/* Security Tips */}
          <div style={{
            background: 'var(--card-bg)',
            borderRadius: '20px',
            padding: '32px',
            border: '2px solid var(--border-color)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}>
              Essential Security Tips
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {[
                { emoji: '🔐', title: 'Use Password Managers', text: 'Store all passwords securely and generate strong ones automatically' },
                { emoji: '📱', title: 'Enable 2FA', text: 'Add an extra layer of security to all your important accounts' },
                { emoji: '🔄', title: 'Regular Updates', text: 'Keep all software and apps updated with latest security patches' },
                { emoji: '🎣', title: 'Avoid Phishing', text: 'Always verify sender identity before clicking links or attachments' }
              ].map((tip, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: 'var(--card-alt-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{tip.emoji}</div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px'
                  }}>
                    {tip.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
