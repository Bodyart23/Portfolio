# Bohdan Dehtiar — Portfolio

React + TypeScript + Vite portfolio site.

## Development

```bash
npm install
cp .env.example .env   # then fill in your values
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Netlify, Vercel, or Cloudflare Pages.

### Environment variables (host dashboard)

| Variable | Description |
|----------|-------------|
| `VITE_FORM_SUBMIT_ID` | FormSubmit form ID |
| `VITE_CONTACT_EMAIL` | Email for contact form error fallback |

### Before go-live

1. Activate FormSubmit (confirm email from first submission).
2. Set env vars on your hosting provider.
3. Update `public/sitemap.xml` — replace `https://your-domain.com/` with your real domain.
4. Update project `liveUrl` / `repoUrl` in `src/data/portfolio.ts` when you have real links.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier format |
| `npm run test` | Unit tests (form validation) |

## Project structure

```
src/
  components/     # UI sections + ContactForm
  data/           # skills, projects, social URLs
```

## Hosting notes

- **Netlify:** `public/_redirects` and `public/_headers` are included.
- **Vercel:** `vercel.json` SPA rewrite is included.
