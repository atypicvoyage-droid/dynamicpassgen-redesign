# DynamicPassGen - Next.js Edition

## 🔐 Overview
Professional-grade password generation tool built with Next.js for optimal SEO and performance.

## ✨ Features
- **Next.js 14** with App Router
- **Server-side rendering** for better SEO
- **Cryptographically secure** password generation
- **Real-time strength analysis**
- **NIST 2025 compliant**
- **Mobile-responsive** design matching the navy blue mockup
- **AdSense-ready** architecture

## 🚀 Quick Start

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure
```
dynamicpassgen/
├── app/
│   ├── page.js                 # Homepage
│   ├── layout.js               # Root layout
│   ├── globals.css             # Global styles
│   ├── guides/
│   │   ├── page.js             # Guides listing
│   │   └── [slug]/page.js      # Individual guide
│   └── tools/
│       ├── strength-checker/
│       ├── breach-checker/
│       └── security-score/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── PasswordGenerator.js
│   └── ...
├── public/
│   └── images/
└── package.json
```

## 🌐 URL Structure
- `/` - Homepage with password generator
- `/guides` - Security guides listing
- `/guides/[slug]` - Individual guide article
- `/tools/strength-checker` - Password strength analyzer
- `/tools/breach-checker` - Breach database checker
- `/tools/security-score` - Account security auditor
- `/about` - About page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/contact` - Contact form

## 💰 AdSense Integration
1. Get approved for Google AdSense
2. Update your Publisher ID in `app/layout.js`
3. Replace `ca-pub-XXXXXXXXXX` with your client ID

## 🎨 Design
- Navy blue gradient background
- Central card-based generator
- Circular strength meter
- Modern rounded buttons
- Responsive mobile layout

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`

## 📊 SEO Features
- Automatic sitemap generation
- Meta tags for all pages
- Structured data (JSON-LD)
- Semantic HTML
- Mobile-first responsive design

## 🔒 Security
- Client-side only password generation
- Web Crypto API
- Zero server communication for passwords
- HTTPS required for production

## 📝 License
MIT License

---
Built with Next.js 14 | Optimized for AdSense | SEO-Ready | NIST Compliant
