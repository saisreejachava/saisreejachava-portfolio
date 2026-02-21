# Sai Sreeja Chava — Portfolio

A sleek, animated portfolio built with **Vite** (vanilla HTML/CSS/JS).

---

## 🚀 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### Steps

```bash
# 1. Unzip the project folder and navigate into it
cd sai-sreeja-portfolio

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Then open your browser at **http://localhost:5173**

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy (run from inside the project folder)
vercel

# Follow the prompts:
#   - Set up and deploy? → Y
#   - Which scope? → your username
#   - Link to existing project? → N
#   - Project name → sai-sreeja-portfolio (or any name)
#   - Directory → ./  (press Enter)

# 4. For production deployment:
vercel --prod
```

Your live URL will be printed in the terminal (e.g. `https://sai-sreeja-portfolio.vercel.app`)

---

### Option B — GitHub + Vercel Dashboard (Zero CLI)

1. Push this folder to a **GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**

3. Import your GitHub repository

4. Vercel auto-detects Vite — just click **Deploy**

5. Your site is live! Every `git push` will auto-redeploy.

---

## ✏️ Customization

All content is in `index.html`. To update:

- **LinkedIn/GitHub URLs** — search for `href="https://linkedin.com"` and `href="https://github.com"` and replace with your actual profile URLs
- **Colors** — edit CSS variables at the top of the `<style>` block (`:root { ... }`)
- **Content** — find any section by its `id` (e.g. `#experience`, `#projects`) and edit directly
