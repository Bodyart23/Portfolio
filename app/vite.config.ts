import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, '') ?? ''

  return {
    plugins: [
      react(),
      {
        name: 'site-url-html',
        transformIndexHtml(html) {
          if (!siteUrl) return html
          return html.replace(
            'content="/og-image.webp"',
            `content="${siteUrl}/og-image.webp"`,
          )
        },
      },
    ],
  }
})
