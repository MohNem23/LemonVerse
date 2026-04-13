# LemonVerse Marketing Site

Next.js 16 marketing site for LemonVerse, rebuilt from the legacy `marketing-site.html` source into a modular App Router project.

## Routes

- `/` product overview
- `/methodology` narrative acquisition methodology
- `/pricing` bundle and plan comparison
- `/faq` search-friendly product answers
- `/support` onboarding and support guidance
- `/privacy`
- `/terms`
- `/parental-controls`
- `/llms.txt`
- `/llms-full.txt`

## Structure

- `src/brand` brand tokens, fonts, and site metadata
- `src/content` route content and FAQ data
- `src/components` shared layout, page, and SEO components
- `src/app` routes plus sitemap, robots, and social image handlers
- `src/assets/fonts` local font binaries
- `public/media` localized marketing imagery

## Commands

```bash
pnpm dev
pnpm lint
pnpm build
```

## SEO Note

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, sitemap entries, Open Graph metadata, and `llms.txt` resolve to the deployed domain instead of `http://localhost:3000`.
