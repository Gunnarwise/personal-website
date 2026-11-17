# gunnarwise.com

Personal website draft built with React, TypeScript, and Vite.

## Run locally

Use Node.js 22, then run:

```sh
npm ci
npm run dev
```

Open the local URL Vite prints. Run `npm run build` to type-check and create the production site in `dist/`, or run `npm run preview` to review that build.

## Content review

- Homepage, About, and Life copy are in `src/main.tsx`.
- Draft case studies, photography labels, and approved public contact links go in `src/content.ts`.
- Replace the generated placeholders in `public/media/` with approved originals. The sample MP4 demonstrates inline playback. Replace it with an approved climbing clip.
- Confirm the introduction, featured projects, photography, and public contact links before releasing.

## Cloudflare Pages

When publication is approved, connect the GitHub repository to Cloudflare Pages. Set the build command to `npm run build` and the output directory to `dist`. Use Node.js 22. This app uses Pages' default SPA handling for direct links to internal routes. Connect the custom domain after reviewing the deployment.
