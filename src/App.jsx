import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import ScrollToTop from './components/Common/ScrollToTop'
import HomePage from './pages/HomePage'
import GuidesPage from './pages/GuidesPage'
import GuideDetailPage from './pages/GuideDetailPage'
import StrengthCheckerPage from './pages/StrengthCheckerPage'
import BreachCheckerPage from './pages/BreachCheckerPage'
import SecurityScorePage from './pages/SecurityScorePage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:slug" element={<GuideDetailPage />} />
          <Route path="/tools/strength-checker" element={<StrengthCheckerPage />} />
          <Route path="/tools/breach-checker" element={<BreachCheckerPage />} />
          <Route path="/tools/security-score" element={<SecurityScorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
