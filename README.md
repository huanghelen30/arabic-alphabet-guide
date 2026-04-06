# Arabic Alphabet Interactive Guide

An open-source, browser-based interactive reference tool for Arabic alphabet learners.
All 28 letters with pronunciations, positional forms, example words, and audio.

**No installation. No server. Just open `index.html`.**

---

## Demo

![Screenshot placeholder — add a screenshot here](docs/screenshot.png)

---

## How to Run Locally

1. Clone or download this repository
2. Double-click `index.html`
3. It opens in your browser — no server, no build step needed

> Note: Audio playback requires an internet connection (audio files load from Wikimedia Commons).

---

## Features

- All 28 Arabic letters with correct Unicode characters
- IPA pronunciation (Modern Standard Arabic)
- All 4 positional forms per letter: isolated, initial, medial, final
- Audio playback via Wikimedia Commons (resolved at runtime)
- 3 example words per letter (Arabic + transliteration + English)
- Similar-sounds badges linking related letters
- Real-time search by letter name or transliteration
- Progress tracking — mark letters as reviewed (saved across sessions)
- Light/dark mode (respects system preference on first load)
- Fully responsive: works on mobile, tablet, and desktop
- Right-to-left (RTL) rendering throughout

---

## How to Contribute

### Correcting letter data

Edit `data/letters.js`. Each letter object contains:
- `ipa` — IPA for Modern Standard Arabic
- `ipaNote` — optional note on regional variants
- `transliteration` — romanisation of the letter name
- `examples` — three Arabic words using the letter
- `forms` — isolated, initial, medial, final

Please cite your source when correcting IPA or adding dialect notes.
IPA reference: [Wikipedia Help:IPA/Arabic](https://en.wikipedia.org/wiki/Help:IPA/Arabic)

### Adding or correcting audio

Audio files are sourced from Wikimedia Commons. The app resolves URLs at runtime
using the Wikimedia Commons API. To change the audio file for a letter, update
the `audioFile` field in `data/letters.js` with a valid Wikimedia Commons filename
(e.g. `Ar-ba.ogg`).

See `audio/README.md` for attribution details.

### Reporting incorrect IPA

Open an issue and include:
- The letter ID (e.g. `jim`)
- The incorrect value
- The correct MSA IPA with a citation

---

## Audio Licensing

All audio files are from [Wikimedia Commons](https://commons.wikimedia.org/) and
licensed under [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/).

Audio URLs are resolved at runtime via the Wikimedia Commons API. No audio files
are bundled with this project.

---

## Font Licensing

Arabic text uses [Noto Naskh Arabic](https://fonts.google.com/noto/specimen/Noto+Naskh+Arabic)
by Google, licensed under the [SIL Open Font License](https://scripts.sil.org/OFL).

---

## Credits

- Arabic letter data compiled from Wikipedia and standard MSA references
- Audio: Wikimedia Commons contributors
- Font: Google Fonts / Noto project
- IPA reference: [Wikipedia Help:IPA/Arabic](https://en.wikipedia.org/wiki/Help:IPA/Arabic)

---

## Links

- [IPA for Arabic (Wikipedia)](https://en.wikipedia.org/wiki/Help:IPA/Arabic)
- [Noto Naskh Arabic on Google Fonts](https://fonts.google.com/noto/specimen/Noto+Naskh+Arabic)
- [Wikimedia Commons](https://commons.wikimedia.org/)
