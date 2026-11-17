# gunnarwise.com

**[Visit the live website](https://gunnarwise.com/)**

My personal website brings together the software and hardware projects I build and the things I enjoy away from the computer.

- **[About Me](https://gunnarwise.com/about)** — my background, experience, and technical interests.
- **[Projects](https://gunnarwise.com/projects)** — Raspberry Pi laser tracking, a Pico 2 maze-solving robot, Crossy Street, and smaller projects.
- **[Play Crossy Street](https://gunnarwise.com/projects/crossy-street#play)** — play my Unity game right on the site.
- **[Life & Interests](https://gunnarwise.com/life)** — bouldering photos and videos, plus a gallery of my photography.
- **[Contact](https://gunnarwise.com/contact)** — ways to get in touch.

## Development

Built with React, TypeScript, and Vite, and hosted on Cloudflare Workers.

To work on the site locally, use Node.js 22:

```sh
npm ci
npm run dev
```

Run `npm run build` to type-check and generate the production output in `dist/`. Cloudflare serves that output using the settings in `wrangler.json`.

Page layouts are in `src/main.tsx`, project and gallery data are in `src/content.ts`, and site styles are in `src/style.css`. Photos and videos are in `public/media/`, and the Crossy Street WebGL export is in `public/games/`.
