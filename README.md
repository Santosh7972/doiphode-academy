# Doiphode Academy website (Vue 3 + Vite)

## Run locally (Windows)
1. Install Node.js LTS from nodejs.org.
2. Open the project folder in a terminal (PowerShell or Command Prompt).
3. Run:
```
npm install
npm run dev
```
4. Open the address shown (usually http://localhost:5173) in your browser.
5. For production: `npm run build` (output goes to `dist`).

## Put it on GitHub
1. Create an empty repository on github.com (for example `doiphode-academy`).
2. In the project folder run:
```
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/doiphode-academy.git
git push -u origin main
```

## Deploy on Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Select the repository.
3. Framework preset: Vue (or None). Build command: `npm run build`. Output directory: `dist`.
4. Save and deploy.
5. Open the live URL and test /about, /courses and /contact directly and after refresh. `public/_redirects` handles the SPA fallback.

## Updating details
Phone numbers, WhatsApp number, teacher name and map link: `src/data/academy.js`.
All text in English and Marathi: `src/data/translations.js`.
The map link is the general Ranisawargaon location; replace it with the exact Shinde Complex link once you have it.
