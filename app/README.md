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
| `VITE_FORM_SUBMIT_ID` | FormSubmit form ID (**required** for contact form) |
| `VITE_CONTACT_EMAIL` | Email for contact form error fallback |
| `VITE_SITE_URL` | Production URL, e.g. `https://your-domain.com` (sitemap + social preview) |

### Before go-live

1. Activate FormSubmit (confirm email from first submission).
2. Set all env vars in your hosting provider (Vite inlines them at **build** time).
3. Update project `liveUrl` / `repoUrl` in `src/data/portfolio.ts` when you have real links.

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
- **Vercel:** Deploy from the repo root — root `vercel.json` builds the `app/` folder automatically. Security headers and SPA rewrites are configured in both root and `app/vercel.json`. Alternatively, set Vercel **Root Directory** to `app` and use `app/vercel.json` only.
