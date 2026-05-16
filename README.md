# Ahmad Raza — Mechatronics Engineer Portfolio

A professional portfolio website built with **Next.js 14**, featuring an industrial/blueprint dark aesthetic with animated particle network, skill progress bars, project showcase, timeline experience, and contact integration.

## Tech Stack

- **Next.js 14** (Pages Router, Static Export)
- **CSS Modules** (no external CSS frameworks)
- **Google Fonts**: Orbitron + Rajdhani + Share Tech Mono
- **Canvas API** for animated particle background
- Zero runtime dependencies beyond Next.js + React

---

## 🚀 Deploy to GitHub + Vercel (Step-by-Step)

### Step 1 — Install dependencies locally

```bash
npm install
npm run dev
# Open http://localhost:3000 to preview
```

### Step 2 — Push to GitHub

1. Go to **https://github.com/new**
2. Create a new repository named `ahmad-portfolio` (Public or Private)
3. Copy the repository URL (e.g. `https://github.com/YOUR_USERNAME/ahmad-portfolio.git`)
4. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ahmad-portfolio.git
git push -u origin main
```

### Step 3 — Deploy on Vercel

**Option A — Via Vercel Dashboard (Easiest)**

1. Go to **https://vercel.com** → Sign up / Login with GitHub
2. Click **"Add New Project"**
3. Click **"Import"** next to your `ahmad-portfolio` repo
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site goes live at: `https://ahmad-portfolio.vercel.app`

**Option B — Via Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Customization

| What to change | File |
|---|---|
| Your name, bio, social links | `components/Hero.jsx`, `components/Contact.jsx` |
| Skills & percentages | `components/Skills.jsx` |
| Projects list | `components/Projects.jsx` |
| Work experience | `components/Experience.jsx` |
| Colors / theme | `styles/globals.css` (CSS variables) |
| SEO title & description | `pages/index.js` (Head section) |

### Color Variables (`styles/globals.css`)

```css
--accent: #00d4ff;     /* Cyan — primary accent */
--accent2: #ff6b00;    /* Orange — secondary */
--accent3: #00ff88;    /* Green — success/available */
--bg: #050a0f;         /* Near-black background */
```

---

## Local Development

```bash
npm run dev    # Development server at localhost:3000
npm run build  # Build for production
npm run start  # Preview production build
```

---

## Project Structure

```
ahmad-portfolio/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── Experience.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── public/            ← Add your favicon.ico here
├── next.config.js
├── vercel.json
└── package.json
```

---

**Live Demo:** After deploying, your URL will be `https://ahmad-portfolio.vercel.app` (or custom domain if configured in Vercel dashboard)
