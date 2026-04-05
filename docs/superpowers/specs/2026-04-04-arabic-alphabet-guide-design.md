# Design: Arabic Alphabet Interactive Guide

**Date:** 2026-04-04  
**Status:** Approved

---

## Overview

A browser-based interactive reference tool for Arabic alphabet learners. Opens by double-clicking `index.html`. No framework, no build step, no backend. Deployable to GitHub Pages.

---

## Architecture

Single-page application using vanilla HTML, CSS, and ES6 JavaScript modules. Four core files plus a data module:

```
arabic-alphabet-guide/
├── index.html          ← app shell, loads CSS and app.js as module
├── style.css           ← all styles, CSS custom properties for theming
├── app.js              ← rendering, search, audio, localStorage logic
├── data/
│   └── letters.js      ← ES6 export of 28 letter objects
├── audio/
│   └── README.md       ← Wikimedia Commons sources and CC license notes
├── README.md
└── CLAUDE.md
```

No dependencies. No CDN. No build step. Works on `file://` protocol.

---

## Data Layer

`data/letters.js` exports a single array of 28 letter objects. Every field populated — no nulls except `audioFile` (null if Wikimedia file unavailable). Schema:

```js
{
  id: "ba",
  arabic: "ب",
  name: "Baa",
  transliteration: "b",
  ipa: "/b/",
  ipaNote: null,           // optional regional variant string
  forms: {
    isolated: "ب",
    initial: "بـ",
    medial: "ـبـ",
    final: "ـب"
  },
  audioFile: "Ar-ba.ogg", // Wikimedia filename only — URL resolved at runtime
  similarTo: ["fa", "tha"],
  examples: [
    { arabic: "بَاب", transliteration: "baab", meaning: "door" }
  ]
}
```

IPA uses Modern Standard Arabic (MSA) throughout. Regional variants stored in `ipaNote` for future use, not displayed in v1.

---

## Audio Strategy

Filenames only in data. At runtime, `app.js` calls the Wikimedia Commons API to resolve the actual CDN URL:

```
https://commons.wikimedia.org/w/api.php?action=query&titles=File:{filename}&prop=imageinfo&iiprop=url&format=json&origin=*
```

Resolved URLs cached in memory (on the letter object) for the session. If resolution fails for any reason, `audioUrl` stays null and the play button is not rendered. No error shown to the user.

---

## UI Components

### Letter Cards
Each card displays:
- Large isolated Arabic character (Noto Naskh Arabic, min 48px, `dir="rtl"`)
- Letter name + transliteration (e.g. "Baa — b")
- IPA (e.g. `/b/`)
- Four positional forms: isolated, initial, medial, final
- Audio play button (hidden if no audio)
- Three example words (Arabic + transliteration + English)
- Similar-sounds badges (click to scroll to that letter)
- "Mark as reviewed" toggle button

### Search/Filter
- Single text input at top of page
- Filters cards in real time by `name` or `transliteration` (case-insensitive)
- Clear button resets filter
- "No letters match" empty state when no results

### Progress Bar
- "X of 28 letters reviewed"
- Updates immediately on toggle
- Persists across sessions via localStorage
- Reset button with confirmation dialog

### Light/Dark Mode
- Toggle button in header
- Preference saved to localStorage key `arabic-guide-theme`
- On first load: respects `prefers-color-scheme` media query

---

## State / Persistence

Two localStorage keys:

| Key | Value |
|-----|-------|
| `arabic-guide-reviewed` | JSON array of reviewed letter ids |
| `arabic-guide-theme` | `"light"` or `"dark"` |

If localStorage is unavailable, the app works normally — progress just doesn't persist.

---

## Responsive Layout

| Breakpoint | Columns |
|---|---|
| < 640px (mobile) | 1 |
| 640–1023px (tablet) | 2 |
| 1024px+ (desktop) | 3–4 |

All interactive elements minimum 44×44px tap target. Arabic text uses `dir="rtl"` and `lang="ar"` throughout.

---

## Error Handling

| Scenario | Behaviour |
|---|---|
| Wikimedia audio API fails | Hide play button silently |
| Audio file missing on Wikimedia | Hide play button silently |
| Audio playback fails | Show brief "Audio unavailable" tooltip |
| localStorage unavailable | App works, no persistence |
| No search results | "No letters match" empty state |

---

## Fonts

- Arabic: Noto Naskh Arabic via Google Fonts
- UI: system font stack

---

## Build Order

1. Create all file/folder stubs
2. Populate `data/letters.js` with all 28 letters — **pause for review of 3 sample letters**
3. Build `index.html` structure
4. Build `style.css` (layout, typography, theming variables)
5. Build `app.js` (render, search, progress, audio, theme)
6. Implement Wikimedia API audio resolution
7. Wire up localStorage persistence
8. Write README.md and audio/README.md
