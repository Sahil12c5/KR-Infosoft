# KR Infosoft - Official Marketing Website
> **Software • Web • Mobile • AI Solutions**  
> High-performance, conversion-optimized frontend marketing website for KR Infosoft.

Built with **React (Vite)**, **Bootstrap 5**, and a bespoke CSS design system inspired directly by the KR Infosoft brand identity, color palette, and geometric blade wing motif.

---

## 🚀 Key Highlights & Features

- **Brand Design System**:
  - Primary colors: `--primary: #0B63E5`, `--primary-light: #1EA7FF`, `--primary-dark: #0A3D91`, `--navy: #071A3D`
  - Typography: **Montserrat** (headings) & **Inter** (body) via Google Fonts
  - Modern glassmorphism cards, soft blue shadows, and angular blade decorative motifs
  - **Light/Dark Mode Toggle** with automatic persistence in `localStorage`
- **100% Frontend Only**:
  - No backend, no database, zero server maintenance
  - Fast static delivery, lightweight bundle, Lighthouse 95+ score target
- **Conversion-Driven Contact System**:
  - Configurable in a single file (`src/config/siteConfig.js`)
  - **Option A (Default)**: Direct browser email sending via **EmailJS**
  - **Option B**: Instant zero-backend submission via **Web3Forms**
  - Anti-spam honeypot trap (`botcheck`)
  - Inline real-time field validation
  - In-place celebratory thank-you state (with confetti) without navigating away
  - Google Analytics 4 (`generate_lead`) & Meta Pixel (`Lead`) conversion event triggers
- **Lead Capture & Direct Contact**:
  - Floating WhatsApp click-to-chat button with pulsing beacon on desktop
  - Sticky mobile quick-action bar with one-tap "Call Now" and "WhatsApp" triggers
  - Office address in Mumbai, India, Google Maps embed, and business hours
- **Comprehensive Sections**:
  - **Sticky Navbar** with scroll spy & mobile drawer
  - **Hero** with compelling copy and animated high-tech mockup
  - **Trust Strip** with animated count-up metrics (Projects, Clients, Experience, Support)
  - **4 Core Services**: Software Dev, Web Dev, Mobile Apps, AI Solutions
  - **Why Choose Us**: 5 differentiators in dark navy glass cards
  - **7-Step Process**: Discover → Plan → Design → Develop → Test → Deploy → Support (horizontal on desktop, vertical on mobile)
  - **Tech Stack**: Categorized interactive badges (React, Java, Node, Python, Flutter, OpenAI, AWS, etc.)
  - **Portfolio / Case Studies**: 6 projects with category filter (All, Software, Web, Mobile, AI) & metrics tags
  - **Industries We Serve**: 8 industry verticals with tailored value propositions
  - **Testimonials**: Interactive client endorsement carousel with ratings
  - **Final CTA Banner**: High-contrast gradient push to quote page
  - **Custom 404 Page**: Branded fallback route linking back home

---

## 📁 Project Structure

```
kr-infosoft/
├── public/
│   ├── favicon.svg          # Custom SVG brand favicon
│   ├── logo.png             # KR Infosoft official logo
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── assets/              # Graphics, illustrations, badges
│   ├── components/
│   │   ├── BrandLogo.jsx          # SVG blade icon + brand typography
│   │   ├── ContactForm.jsx        # Validation, honeypot & EmailJS/Web3Forms
│   │   ├── CtaBanner.jsx          # High-impact gradient call-to-action
│   │   ├── FloatingActions.jsx    # WhatsApp floating button & mobile call bar
│   │   ├── Footer.jsx             # Comprehensive footer with links & socials
│   │   ├── HeroSection.jsx        # Hero headline, CTAs & code card mockup
│   │   ├── IndustriesSection.jsx  # 8 industry domain cards
│   │   ├── Navbar.jsx             # Sticky glass navbar with hash-scroll
│   │   ├── PortfolioSection.jsx   # Filterable 6 project showcase cards
│   │   ├── ProcessSection.jsx     # 7-step horizontal/vertical roadmap
│   │   ├── SectionHeading.jsx     # Reusable section heading with blade badges
│   │   ├── ServicesSection.jsx    # 4 interactive service feature cards
│   │   ├── TechStackSection.jsx   # Filterable technology badges
│   │   ├── TestimonialsSection.jsx# Client reviews carousel with ratings
│   │   ├── ThemeToggle.jsx        # Dark/light mode switcher
│   │   └── WhyChooseUs.jsx        # 5 company differentiators
│   ├── config/
│   │   └── siteConfig.js          # CENTRAL CONFIG: phone, email, WhatsApp, stats, address
│   ├── data/
│   │   ├── industries.js          # Industry verticals
│   │   ├── process.js             # 7-step process details
│   │   ├── projects.js            # 6 portfolio case studies
│   │   ├── services.js            # 4 core service specifications
│   │   ├── technologies.js        # Tech stacks
│   │   └── testimonials.js        # Client testimonials
│   ├── pages/
│   │   ├── Home.jsx               # Single long scrolling homepage
│   │   ├── Contact.jsx            # Conversion page with map & form
│   │   └── NotFound.jsx           # Custom 404 error page
│   ├── styles/
│   │   ├── variables.css          # Design tokens & dark mode variables
│   │   └── global.css             # Glassmorphism, blade cuts, utilities
│   ├── App.jsx                    # React Router routes & layout wrapper
│   └── main.jsx                   # React root entry point
├── .env.example                   # Environment variable template
├── index.html                     # SEO tags, Google Fonts, Analytics hooks
├── package.json
└── vite.config.js
```

---

## 🛠️ Quick Start & Local Development

### 1. Prerequisites
Ensure **Node.js (v18+)** and **npm** are installed.

### 2. Installation
```bash
# Clone or navigate to the project directory
cd "Kr info solutions"

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000/`. The site supports full hot-module reloading (HMR).

### 4. Build for Production
```bash
npm run build
```
The optimized, minified production assets will be generated in the `/dist` directory.

---

## ⚙️ How to Customize Company Content

All company details can be modified in **one single file**: [`src/config/siteConfig.js`](src/config/siteConfig.js).

```javascript
// src/config/siteConfig.js
export const siteConfig = {
  companyName: "KR Infosoft",
  tagline: "Software • Web • Mobile • AI Solutions",
  
  contact: {
    email: "contact@krinfosoft.com",
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",          // for tel: links
    whatsapp: "+91 98765 43210",
    whatsappRaw: "919876543210",        // for wa.me/ links
    address: {
      fullAddress: "Level 5, Mindspace Tech Park, Malad West, Mumbai, Maharashtra 400064, India"
    },
    workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
    googleMapEmbedUrl: "..."
  },
  
  stats: [
    { targetNumber: 150, suffix: "+", label: "Projects Delivered" },
    ...
  ]
};
```

---

## ✉️ Contact Form Setup (Frontend Only)

You can choose either **EmailJS** (default) or **Web3Forms**. Both require **no backend server**.

### Option A: EmailJS (Default)
1. Sign up for a free account at [EmailJS.com](https://www.emailjs.com/).
2. Create an **Email Service** (e.g., Gmail or Outlook) and note the `Service ID`.
3. Create an **Email Template** with these template parameters:
   - `{{from_name}}`
   - `{{reply_to}}`
   - `{{phone_number}}`
   - `{{company_name}}`
   - `{{service_name}}`
   - `{{budget_range}}`
   - `{{message}}`
4. Copy your **Public Key** from `Account > API Keys`.
5. Create a `.env` file in the project root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Verify in `src/config/siteConfig.js` that `formService.provider = "emailjs"`.

### Option B: Web3Forms (Zero-Configuration Alternative)
1. Go to [Web3Forms.com](https://web3forms.com/) and enter your destination email to get an instant free Access Key.
2. In `src/config/siteConfig.js`, set `formService.provider = "web3forms"`.
3. Add your key to `.env`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

---

## 📈 Analytics & Ad Tracking Setup

In [`index.html`](index.html), uncomment and replace the placeholder IDs:
- **Google Analytics 4**: Replace `G-XXXXXXXXXX` with your Measurement ID.
- **Meta (Facebook) Pixel**: Replace `YOUR_PIXEL_ID_HERE` with your Pixel ID.

When a visitor submits the contact form, KR Infosoft automatically dispatches:
- `gtag('event', 'generate_lead', ...)`
- `fbq('track', 'Lead', ...)`

---

## 🌐 Free Deployment Guides

### Deploy to Render (Static Site)
1. Go to [dashboard.render.com](https://dashboard.render.com/) and click **"New +" > "Static Site"**.
2. Connect your GitHub repository `https://github.com/Sahil12c5/KR-Infosoft`.
3. Render automatically reads `render.yaml` with:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **SPA Rewrite Rule**: `/*` → `/index.html`
4. Under **Environment Variables**, add any `VITE_EMAILJS_*` keys if configured.
5. Click **Create Static Site** — your site will be live on Render in ~1 minute!

### Deploy to Vercel (Alternative)
1. Push this project to GitHub.
2. Go to [Vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Under **Environment Variables**, add your `VITE_EMAILJS_*` or `VITE_WEB3FORMS_*` keys.
6. Click **Deploy**. Done!

### Deploy to Netlify
1. Create a free account on [Netlify.com](https://www.netlify.com/).
2. Click **"Add new site" > "Import an existing project"**.
3. Link your Git repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Under Site configuration > Environment variables, add your `.env` keys.
6. Click **Deploy Site**.

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. In `vite.config.js`, set `base: '/<repository-name>/'`.
3. In `package.json`, add `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## 📄 License
© 2026 KR Infosoft Solutions Pvt. Ltd. All rights reserved.
