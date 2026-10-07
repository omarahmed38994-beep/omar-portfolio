# Omar Ahmed El-Banna – Portfolio
React + TypeScript + Vite + Tailwind. Content lives in `src/data.ts`; certificate images go in `public/certificates/`.

## Run
`npm install` · `npm run dev` (local) · `npm run build` (output in `dist/`)

## Deploy to GitHub Pages
1. Create a GitHub repo, then `git init && git add . && git commit -m "init" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` builds and publishes on each push to `main`. Check the **Actions** tab, then open `https://<user>.github.io/<repo>/`.

`vite.config.ts` uses `base: './'`, so assets work at a repository URL (`/repo/`) and on a custom domain (root `/`) with no change. For a custom domain, add it under Settings → Pages and configure DNS.

## Contact form
No backend: it opens a prefilled `mailto:`. To send directly, connect a form service (e.g. Formspree) later.

## To confirm / add
Real GitHub/demo links, certificate images, testimonials, housing-score metric, custom per-project illustrations.
