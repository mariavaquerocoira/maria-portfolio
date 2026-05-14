# Maria Vaquero Coira — Portfolio

Next.js (pages router) · MUI v5 · React 18

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

---

## Project structure

```
maria-portfolio/
├── data/
│   ├── bio.js           # Bio text and contact email
│   └── projects.js      # All portfolio items + sortForMasonry helper
│
├── components/
│   ├── BioHeader.jsx    # Introductory text shown above the grid
│   ├── MasonryGrid.jsx  # CSS column-count masonry wrapper
│   ├── GridItem.jsx     # Single card (image / mp4 / gif / vimeo)
│   └── Lightbox.jsx     # Full-screen media viewer with navigation
│
├── pages/
│   ├── _app.jsx         # MUI ThemeProvider + Emotion cache
│   ├── _document.jsx    # SSR Emotion style injection
│   └── index.jsx        # Home page
│
├── styles/
│   └── theme.js         # MUI theme (colours, typography, global overrides)
│
├── public/
│   └── assets/          # ← Place your local images and videos here
│
├── next.config.js       # Cloudinary remote image pattern
└── package.json
```

---

## Using local assets

The project currently loads all media from Cloudinary URLs.
To switch to local files:

1. Copy your images / videos into `public/assets/`.
2. In `data/projects.js`, update the `src` values to relative paths, e.g.:

```js
{ type: 'image', src: '/assets/my-image.jpg', label: '…', ratio: '16/9' }
```

Next.js serves everything inside `public/` at the root path automatically.

---

## Adding or removing projects

Edit `data/projects.js`. Each entry supports these fields:

| Field     | Type    | Required | Description                                      |
|-----------|---------|----------|--------------------------------------------------|
| `type`    | string  | ✓        | `'image'` · `'mp4'` · `'gif'` · `'vimeo'`       |
| `src`     | string  | *        | URL or `/assets/…` path (not needed for vimeo)   |
| `vimeoId` | string  | *        | Vimeo video ID (only for `type:'vimeo'`)         |
| `sound`   | boolean |          | `true` = show mute button in lightbox            |
| `label`   | string  | ✓        | Caption shown in grid and lightbox               |
| `client`  | string  |          | Client name (available for future filtering)     |
| `ratio`   | string  | ✓        | CSS aspect-ratio, e.g. `'16/9'` or `'3/4'`      |

---

## Updating bio text

Edit `data/bio.js`. The `paragraphs` array maps 1-to-1 with `<p>` tags.

---

## Grid column layout

The masonry grid reads left-to-right in a 4-column layout on desktop.
`sortForMasonry()` in `data/projects.js` reorders the array so that
CSS `column-count` columns fill in the intended sequence.

If you add or remove projects, the sort runs automatically on every import.
