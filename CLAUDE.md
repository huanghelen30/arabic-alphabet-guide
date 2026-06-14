# Arabic Alphabet Interactive Guide

Vanilla HTML/CSS/JS only. No framework, no npm, no build step.
Opens via file:// — double-click index.html, no server needed.
Deployable to GitHub Pages.

## Hard Rules

- No React, no Vue, no bundler, no npm
- Arabic text: dir="rtl" and lang="ar" on all Arabic elements
- Font: Noto Naskh Arabic via Google Fonts
- All 28 letters fully populated — no placeholders ever
- Audio: store filenames only (e.g. Ar-ba.ogg), resolve via
  Wikimedia Commons API at runtime, cache in memory,
  hide button silently if resolution fails

## File Structure

arabic-alphabet-guide/
├── index.html
├── style.css
├── app.js
├── data/letters.js
├── audio/README.md
├── CLAUDE.md
└── README.md

## localStorage Keys

- arabic-guide-reviewed — array of reviewed letter ids
- arabic-guide-theme — "light" or "dark"

## Code Style

- ES6 modules, semantic HTML
- aria labels on all interactive elements
- Mobile-first, min tap target 44x44px
- Comments on non-obvious decisions only