# oizzoo.github.io: personal portfolio

Portfolio of **Jakub Stożek**, junior full-stack developer.
Live at **[oizzoo.github.io](https://oizzoo.github.io/)**.

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- Plain CSS per component (no framework)
- Deployed to GitHub Pages via `gh-pages`

## Structure

- `src/components/`: one folder per section (`navbar`, `hero`, `about`, `work`, `projects`, `contact`)
- `src/data/`: content data: `Professional.jsx` (commercial work) and `Projects.jsx` (personal projects)
- `public/videos/`: project demo recordings

## Development

```bash
npm ci          # install dependencies
npm run dev     # dev server at http://localhost:5173
npm run lint    # ESLint
npm run build   # production build to dist/
npm run deploy  # build + publish to the gh-pages branch
```
