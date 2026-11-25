# Personal portfolio starter (React + Vite)

A responsive editorial-style starting point for a personal/research portfolio. It includes About, Selected Work, Notes, and Contact sections, a project filter, mobile navigation, and a GitHub Pages deployment workflow.

## 1. Run locally

Install Node.js (LTS) from https://nodejs.org/ then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## 2. Personalize before publishing

Search the project for `YOUR NAME`, `YOUR_EMAIL@example.com`, and the starter copy. Update:
- `index.html`: browser tab title and description
- `src/App.jsx`: name, introduction, project descriptions, notes, email and links
- `public/`: add your portrait and CV (the CV link expects `public/cv.pdf`)
- `src/styles.css`: colors, typography, spacing and layout

The project descriptions are deliberately draft copy. Verify every statement against your actual contribution and only include work you are allowed to discuss publicly. The portrait placeholder can be replaced with an image once you choose one.

## 3. Create a GitHub repository

Create a public repository on GitHub. Recommended name: `YOUR_GITHUB_USERNAME.github.io`.

If you use that exact repository name, the Vite `base` setting in `vite.config.js` should remain `/`.

If you use a different repository name such as `mit-mas-portfolio`, change the base to `/mit-mas-portfolio/` before deploying.

## 4. Push the code

Create an empty GitHub repository, then from this project folder run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## 5. Enable GitHub Pages

In the GitHub repository:
1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will build and publish the site after you push to `main`.
4. Wait for the workflow to finish. Your site will be at `https://YOUR_GITHUB_USERNAME.github.io/` for a `username.github.io` repository, or `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/` for a project repository.

## Notes

- GitHub Pages is static hosting. This starter does not need a backend.
- The included workflow uses GitHub Actions to build the Vite app and publish `dist/`.
- If you later add React Router, configure a fallback/404 strategy or use hash-based routing for GitHub Pages.
