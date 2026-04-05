# Arabic Alphabet Interactive Guide — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully functional single-file Arabic alphabet reference guide that works offline via `file://`, with 28 letter cards, audio playback, search, progress tracking, and light/dark mode.

**Architecture:** Vanilla HTML/CSS/JS with no modules (for `file://` compatibility). `data/letters.js` assigns a global `const letters`, loaded before `app.js` via script tags. All state in localStorage; audio URLs resolved at runtime from Wikimedia Commons API.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla ES6 JS, Google Fonts (Noto Naskh Arabic), Wikimedia Commons REST API

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | App shell, loads fonts, CSS, data, JS |
| `style.css` | All layout, typography, theming (light/dark via `[data-theme]`) |
| `data/letters.js` | Global `const letters` — 28 letter objects, no import/export |
| `app.js` | Render cards, search, progress, audio, theme, localStorage |
| `audio/README.md` | Wikimedia Commons attribution notes |
| `README.md` | Project docs |

---

## Task 1: File and folder stubs

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `app.js`
- Create: `data/letters.js`
- Create: `audio/README.md`
- Create: `.github/FUNDING.yml`

- [ ] **Step 1: Create all files**

```bash
touch index.html style.css app.js
mkdir -p data audio .github
touch data/letters.js audio/README.md .github/FUNDING.yml
```

- [ ] **Step 2: Add stubs**

`index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Arabic Alphabet Guide</title></head>
<body><p>Coming soon</p></body>
</html>
```

`data/letters.js`:
```js
// Letter data — populated in Task 2
const letters = [];
```

`app.js`:
```js
// App logic — populated in Task 5
```

`style.css`:
```css
/* Styles — populated in Task 4 */
```

`.github/FUNDING.yml`:
```yaml
# Funding configuration (add when ready)
```

`audio/README.md` — leave for Task 6.

- [ ] **Step 3: Commit**

```bash
git add index.html style.css app.js data/letters.js audio/README.md .github/FUNDING.yml
git commit -m "chore: scaffold all files and folders"
```

---

## Task 2: Populate data/letters.js — all 28 Arabic letters

> **PAUSE AFTER THIS TASK** — show 3 sample letters and ask for review before continuing.

**Files:**
- Modify: `data/letters.js`

**Notes:**
- Non-joining letters (ا و ر ز د ذ) only connect on the right — their `initial` = `isolated` and `medial` = `final`
- All other letters are dual-joining — use tatweel character (ـ, U+0640) in forms
- IPA is MSA throughout; regional variants go in `ipaNote` only
- `audioFile` is a Wikimedia Commons filename resolved at runtime — it may not exist for every letter

- [ ] **Step 1: Write the full 28-letter array into `data/letters.js`**

```js
const letters = [
  {
    id: "alef",
    arabic: "ا",
    name: "Alef",
    transliteration: "ā",
    ipa: "/ʔ/",
    ipaNote: "Functions as a glottal stop or long vowel seat; context-dependent",
    forms: { isolated: "ا", initial: "ا", medial: "ـا", final: "ـا" },
    audioFile: "Ar-alef.ogg",
    similarTo: [],
    examples: [
      { arabic: "أَسَد", transliteration: "asad", meaning: "lion" },
      { arabic: "أُمّ", transliteration: "umm", meaning: "mother" },
      { arabic: "أَرْض", transliteration: "arḍ", meaning: "earth" }
    ]
  },
  {
    id: "ba",
    arabic: "ب",
    name: "Baa",
    transliteration: "b",
    ipa: "/b/",
    ipaNote: null,
    forms: { isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب" },
    audioFile: "Ar-ba.ogg",
    similarTo: ["fa"],
    examples: [
      { arabic: "بَاب", transliteration: "baab", meaning: "door" },
      { arabic: "بَيْت", transliteration: "bayt", meaning: "house" },
      { arabic: "كِتَاب", transliteration: "kitaab", meaning: "book" }
    ]
  },
  {
    id: "ta",
    arabic: "ت",
    name: "Taa",
    transliteration: "t",
    ipa: "/t/",
    ipaNote: null,
    forms: { isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت" },
    audioFile: "Ar-ta.ogg",
    similarTo: ["tha", "ta2"],
    examples: [
      { arabic: "تُفَّاح", transliteration: "tuffāḥ", meaning: "apple" },
      { arabic: "تَمْر", transliteration: "tamr", meaning: "dates (fruit)" },
      { arabic: "بِنْت", transliteration: "bint", meaning: "girl" }
    ]
  },
  {
    id: "tha",
    arabic: "ث",
    name: "Thaa",
    transliteration: "th",
    ipa: "/θ/",
    ipaNote: "Pronounced /s/ or /t/ in many colloquial dialects",
    forms: { isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث" },
    audioFile: "Ar-tha.ogg",
    similarTo: ["ta", "sin"],
    examples: [
      { arabic: "ثَعْلَب", transliteration: "thaʿlab", meaning: "fox" },
      { arabic: "ثَلَاثَة", transliteration: "thalātha", meaning: "three" },
      { arabic: "ثَوْب", transliteration: "thawb", meaning: "robe/garment" }
    ]
  },
  {
    id: "jim",
    arabic: "ج",
    name: "Jim",
    transliteration: "j",
    ipa: "/dʒ/",
    ipaNote: "/ɡ/ in Egypt; /ʒ/ in Morocco and parts of the Levant",
    forms: { isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج" },
    audioFile: "Ar-jim.ogg",
    similarTo: ["ha", "kha"],
    examples: [
      { arabic: "جَمَل", transliteration: "jamal", meaning: "camel" },
      { arabic: "جَبَل", transliteration: "jabal", meaning: "mountain" },
      { arabic: "رَجُل", transliteration: "rajul", meaning: "man" }
    ]
  },
  {
    id: "ha",
    arabic: "ح",
    name: "Haa",
    transliteration: "ḥ",
    ipa: "/ħ/",
    ipaNote: "Pharyngeal — a strong, breathy H; distinct from ه (heh)",
    forms: { isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح" },
    audioFile: "Ar-ha.ogg",
    similarTo: ["jim", "kha", "ha2"],
    examples: [
      { arabic: "حِمَار", transliteration: "ḥimār", meaning: "donkey" },
      { arabic: "حَيَاة", transliteration: "ḥayāh", meaning: "life" },
      { arabic: "بَحْر", transliteration: "baḥr", meaning: "sea" }
    ]
  },
  {
    id: "kha",
    arabic: "خ",
    name: "Khaa",
    transliteration: "kh",
    ipa: "/x/",
    ipaNote: "Like 'ch' in Scottish 'loch' or German 'Bach'",
    forms: { isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ" },
    audioFile: "Ar-kha.ogg",
    similarTo: ["jim", "ha"],
    examples: [
      { arabic: "خُبْز", transliteration: "khubz", meaning: "bread" },
      { arabic: "خَيْل", transliteration: "khayl", meaning: "horses" },
      { arabic: "أَخ", transliteration: "akh", meaning: "brother" }
    ]
  },
  {
    id: "dal",
    arabic: "د",
    name: "Dal",
    transliteration: "d",
    ipa: "/d/",
    ipaNote: null,
    forms: { isolated: "د", initial: "د", medial: "ـد", final: "ـد" },
    audioFile: "Ar-dal.ogg",
    similarTo: ["dhal", "dad"],
    examples: [
      { arabic: "دَرْس", transliteration: "dars", meaning: "lesson" },
      { arabic: "دَار", transliteration: "dār", meaning: "home/house" },
      { arabic: "وَلَد", transliteration: "walad", meaning: "boy/child" }
    ]
  },
  {
    id: "dhal",
    arabic: "ذ",
    name: "Dhal",
    transliteration: "dh",
    ipa: "/ð/",
    ipaNote: "Like 'th' in 'this'; often /d/ or /z/ in colloquial speech",
    forms: { isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ" },
    audioFile: "Ar-dhal.ogg",
    similarTo: ["dal", "dha"],
    examples: [
      { arabic: "ذِئْب", transliteration: "dhiʾb", meaning: "wolf" },
      { arabic: "ذَهَب", transliteration: "dhahab", meaning: "gold" },
      { arabic: "أُذُن", transliteration: "udhun", meaning: "ear" }
    ]
  },
  {
    id: "ra",
    arabic: "ر",
    name: "Ra",
    transliteration: "r",
    ipa: "/r/",
    ipaNote: "A tapped or trilled R — similar to Spanish 'r'",
    forms: { isolated: "ر", initial: "ر", medial: "ـر", final: "ـر" },
    audioFile: "Ar-ra.ogg",
    similarTo: ["zay"],
    examples: [
      { arabic: "رَأْس", transliteration: "raʾs", meaning: "head" },
      { arabic: "رَجُل", transliteration: "rajul", meaning: "man" },
      { arabic: "كُرْسِيّ", transliteration: "kursiyy", meaning: "chair" }
    ]
  },
  {
    id: "zay",
    arabic: "ز",
    name: "Zay",
    transliteration: "z",
    ipa: "/z/",
    ipaNote: null,
    forms: { isolated: "ز", initial: "ز", medial: "ـز", final: "ـز" },
    audioFile: "Ar-zay.ogg",
    similarTo: ["ra"],
    examples: [
      { arabic: "زَهْرَة", transliteration: "zahra", meaning: "flower" },
      { arabic: "زَيْت", transliteration: "zayt", meaning: "oil" },
      { arabic: "لُغَة", transliteration: "lugha", meaning: "language" }
    ]
  },
  {
    id: "sin",
    arabic: "س",
    name: "Sin",
    transliteration: "s",
    ipa: "/s/",
    ipaNote: null,
    forms: { isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس" },
    audioFile: "Ar-sin.ogg",
    similarTo: ["shin", "sad", "tha"],
    examples: [
      { arabic: "سَمَك", transliteration: "samak", meaning: "fish" },
      { arabic: "سَيَّارَة", transliteration: "sayyāra", meaning: "car" },
      { arabic: "مَدْرَسَة", transliteration: "madrasa", meaning: "school" }
    ]
  },
  {
    id: "shin",
    arabic: "ش",
    name: "Shin",
    transliteration: "sh",
    ipa: "/ʃ/",
    ipaNote: "Like 'sh' in 'shoe'",
    forms: { isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش" },
    audioFile: "Ar-shin.ogg",
    similarTo: ["sin"],
    examples: [
      { arabic: "شَمْس", transliteration: "shams", meaning: "sun" },
      { arabic: "شَجَرَة", transliteration: "shajara", meaning: "tree" },
      { arabic: "شَارِع", transliteration: "shāriʿ", meaning: "street" }
    ]
  },
  {
    id: "sad",
    arabic: "ص",
    name: "Sad",
    transliteration: "ṣ",
    ipa: "/sˤ/",
    ipaNote: "Emphatic S — produced with tongue root retracted, deepening the sound",
    forms: { isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص" },
    audioFile: "Ar-sad.ogg",
    similarTo: ["sin", "dad", "ta2"],
    examples: [
      { arabic: "صَابُون", transliteration: "ṣābūn", meaning: "soap" },
      { arabic: "صَدِيق", transliteration: "ṣadīq", meaning: "friend" },
      { arabic: "مِصْر", transliteration: "Miṣr", meaning: "Egypt" }
    ]
  },
  {
    id: "dad",
    arabic: "ض",
    name: "Dad",
    transliteration: "ḍ",
    ipa: "/dˤ/",
    ipaNote: "Emphatic D — unique to Arabic; historically a lateral emphatic",
    forms: { isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض" },
    audioFile: "Ar-dad.ogg",
    similarTo: ["dal", "sad", "ta2"],
    examples: [
      { arabic: "ضَوْء", transliteration: "ḍawʾ", meaning: "light" },
      { arabic: "مَرِيض", transliteration: "marīḍ", meaning: "sick/patient" },
      { arabic: "أَرْض", transliteration: "arḍ", meaning: "earth/land" }
    ]
  },
  {
    id: "ta2",
    arabic: "ط",
    name: "Tah",
    transliteration: "ṭ",
    ipa: "/tˤ/",
    ipaNote: "Emphatic T — heavier than ت (taa), with tongue root retraction",
    forms: { isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط" },
    audioFile: "Ar-tah.ogg",
    similarTo: ["ta", "sad", "dad"],
    examples: [
      { arabic: "طَائِر", transliteration: "ṭāʾir", meaning: "bird" },
      { arabic: "طَاوِلَة", transliteration: "ṭāwila", meaning: "table" },
      { arabic: "قِطّ", transliteration: "qiṭṭ", meaning: "cat" }
    ]
  },
  {
    id: "dha",
    arabic: "ظ",
    name: "Dhah",
    transliteration: "ẓ",
    ipa: "/ðˤ/",
    ipaNote: "Emphatic Dh — like ذ but with tongue root retraction; often /zˤ/ in modern speech",
    forms: { isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ" },
    audioFile: "Ar-dhah.ogg",
    similarTo: ["dhal", "dad"],
    examples: [
      { arabic: "ظَرِيف", transliteration: "ẓarīf", meaning: "witty/elegant" },
      { arabic: "ظَلَام", transliteration: "ẓalām", meaning: "darkness" },
      { arabic: "حَظّ", transliteration: "ḥaẓẓ", meaning: "luck" }
    ]
  },
  {
    id: "ain",
    arabic: "ع",
    name: "Ain",
    transliteration: "ʿ",
    ipa: "/ʕ/",
    ipaNote: "Pharyngeal voiced fricative — no equivalent in English; a constricted, voiced sound from the throat",
    forms: { isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع" },
    audioFile: "Ar-ain.ogg",
    similarTo: ["ghayn"],
    examples: [
      { arabic: "عَيْن", transliteration: "ʿayn", meaning: "eye / spring" },
      { arabic: "عِلْم", transliteration: "ʿilm", meaning: "knowledge" },
      { arabic: "سَاعَة", transliteration: "sāʿa", meaning: "hour / clock" }
    ]
  },
  {
    id: "ghayn",
    arabic: "غ",
    name: "Ghayn",
    transliteration: "gh",
    ipa: "/ɣ/",
    ipaNote: "Like a French R — a voiced uvular/velar fricative",
    forms: { isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ" },
    audioFile: "Ar-ghayn.ogg",
    similarTo: ["ain"],
    examples: [
      { arabic: "غُرْفَة", transliteration: "ghurfa", meaning: "room" },
      { arabic: "غَابَة", transliteration: "ghāba", meaning: "forest" },
      { arabic: "لُغَة", transliteration: "lugha", meaning: "language" }
    ]
  },
  {
    id: "fa",
    arabic: "ف",
    name: "Fa",
    transliteration: "f",
    ipa: "/f/",
    ipaNote: null,
    forms: { isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف" },
    audioFile: "Ar-fa.ogg",
    similarTo: ["qaf", "ba"],
    examples: [
      { arabic: "فِيل", transliteration: "fīl", meaning: "elephant" },
      { arabic: "فَاكِهَة", transliteration: "fākiha", meaning: "fruit" },
      { arabic: "صَفّ", transliteration: "ṣaff", meaning: "class/row" }
    ]
  },
  {
    id: "qaf",
    arabic: "ق",
    name: "Qaf",
    transliteration: "q",
    ipa: "/q/",
    ipaNote: "Uvular stop — deeper than /k/; pronounced /ʔ/ (glottal stop) in Egyptian and Levantine colloquial Arabic",
    forms: { isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق" },
    audioFile: "Ar-qaf.ogg",
    similarTo: ["fa", "kaf"],
    examples: [
      { arabic: "قَلَم", transliteration: "qalam", meaning: "pen" },
      { arabic: "قَمَر", transliteration: "qamar", meaning: "moon" },
      { arabic: "طَرِيق", transliteration: "ṭarīq", meaning: "road" }
    ]
  },
  {
    id: "kaf",
    arabic: "ك",
    name: "Kaf",
    transliteration: "k",
    ipa: "/k/",
    ipaNote: null,
    forms: { isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك" },
    audioFile: "Ar-kaf.ogg",
    similarTo: ["qaf"],
    examples: [
      { arabic: "كَلْب", transliteration: "kalb", meaning: "dog" },
      { arabic: "كُرْسِيّ", transliteration: "kursiyy", meaning: "chair" },
      { arabic: "سَمَكَة", transliteration: "samaka", meaning: "a fish" }
    ]
  },
  {
    id: "lam",
    arabic: "ل",
    name: "Lam",
    transliteration: "l",
    ipa: "/l/",
    ipaNote: "Pronounced as emphatic /lˤ/ in the word اللّٰه (Allah)",
    forms: { isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل" },
    audioFile: "Ar-lam.ogg",
    similarTo: [],
    examples: [
      { arabic: "لَيْل", transliteration: "layl", meaning: "night" },
      { arabic: "لِسَان", transliteration: "lisān", meaning: "tongue / language" },
      { arabic: "وَلَد", transliteration: "walad", meaning: "boy / child" }
    ]
  },
  {
    id: "mim",
    arabic: "م",
    name: "Mim",
    transliteration: "m",
    ipa: "/m/",
    ipaNote: null,
    forms: { isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم" },
    audioFile: "Ar-mim.ogg",
    similarTo: [],
    examples: [
      { arabic: "مَاء", transliteration: "māʾ", meaning: "water" },
      { arabic: "مَدِينَة", transliteration: "madīna", meaning: "city" },
      { arabic: "أُمّ", transliteration: "umm", meaning: "mother" }
    ]
  },
  {
    id: "nun",
    arabic: "ن",
    name: "Nun",
    transliteration: "n",
    ipa: "/n/",
    ipaNote: null,
    forms: { isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن" },
    audioFile: "Ar-nun.ogg",
    similarTo: ["ba"],
    examples: [
      { arabic: "نَهْر", transliteration: "nahr", meaning: "river" },
      { arabic: "نَافِذَة", transliteration: "nāfidha", meaning: "window" },
      { arabic: "سَنَة", transliteration: "sana", meaning: "year" }
    ]
  },
  {
    id: "ha2",
    arabic: "ه",
    name: "Heh",
    transliteration: "h",
    ipa: "/h/",
    ipaNote: "A soft H like English 'h'; distinct from ح (ḥaa) which is pharyngeal",
    forms: { isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه" },
    audioFile: "Ar-ha2.ogg",
    similarTo: ["ha"],
    examples: [
      { arabic: "هَوَاء", transliteration: "hawāʾ", meaning: "air / wind" },
      { arabic: "وَجْه", transliteration: "wajh", meaning: "face" },
      { arabic: "شَهْر", transliteration: "shahr", meaning: "month" }
    ]
  },
  {
    id: "waw",
    arabic: "و",
    name: "Waw",
    transliteration: "w",
    ipa: "/w/",
    ipaNote: "Also serves as long vowel /uː/ and the conjunction 'and'",
    forms: { isolated: "و", initial: "و", medial: "ـو", final: "ـو" },
    audioFile: "Ar-waw.ogg",
    similarTo: ["ya"],
    examples: [
      { arabic: "وَرْد", transliteration: "ward", meaning: "roses / flowers" },
      { arabic: "وَقْت", transliteration: "waqt", meaning: "time" },
      { arabic: "أَوّل", transliteration: "awwal", meaning: "first" }
    ]
  },
  {
    id: "ya",
    arabic: "ي",
    name: "Ya",
    transliteration: "y",
    ipa: "/j/",
    ipaNote: "Also serves as long vowel /iː/",
    forms: { isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي" },
    audioFile: "Ar-ya.ogg",
    similarTo: ["waw"],
    examples: [
      { arabic: "يَد", transliteration: "yad", meaning: "hand" },
      { arabic: "يَوْم", transliteration: "yawm", meaning: "day" },
      { arabic: "بَيْت", transliteration: "bayt", meaning: "house" }
    ]
  }
];
```

- [ ] **Step 2: Verify the data**

Open browser console and run:
```js
// After loading data/letters.js as a script:
console.log(letters.length); // must be 28
console.log(letters.map(l => l.arabic).join(' ')); // should show all 28 glyphs
letters.forEach(l => {
  if (!l.id || !l.arabic || !l.name || !l.ipa) console.warn('Missing field:', l.id);
  if (l.examples.length !== 3) console.warn('Wrong example count:', l.id);
});
```

> **PAUSE** — Show the user the first 3 letters (alef, ba, ta) and ask for review before continuing.

- [ ] **Step 3: Commit**

```bash
git add data/letters.js
git commit -m "feat: add all 28 Arabic letters with complete data"
```

---

## Task 3: Build index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write the full HTML structure**

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arabic Alphabet Guide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="site-header">
    <div class="header-inner">
      <h1 class="site-title">
        <span lang="ar" dir="rtl">أ ب ت</span>
        Arabic Alphabet Guide
      </h1>
      <button id="theme-toggle" class="btn btn-ghost" aria-label="Toggle dark mode">
        ☾ Dark mode
      </button>
    </div>
  </header>

  <main class="main-content">

    <section class="controls-bar" aria-label="Search and filter">
      <div class="search-wrapper">
        <label for="search-input" class="sr-only">Search letters</label>
        <input
          type="search"
          id="search-input"
          class="search-input"
          placeholder="Search by name or transliteration…"
          autocomplete="off"
        >
        <button id="search-clear" class="search-clear" style="display:none" aria-label="Clear search">✕</button>
      </div>
    </section>

    <section class="progress-section" aria-label="Progress">
      <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="28" aria-valuenow="0" id="progress-bar">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
      <div class="progress-meta">
        <span id="progress-count">0 of 28 letters reviewed</span>
        <button id="progress-reset" class="btn btn-ghost btn-sm">Reset progress</button>
      </div>
    </section>

    <div id="no-results" class="no-results" hidden>
      No letters match your search.
    </div>

    <section id="cards-container" class="cards-grid" aria-label="Arabic letters">
      <!-- Letter cards rendered by app.js -->
    </section>

  </main>

  <footer class="site-footer">
    <p>Audio from <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA) · Font: Noto Naskh Arabic (SIL OFL)</p>
  </footer>

  <script src="data/letters.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify**

Open `index.html` in browser. You should see: a header, a search input, a progress bar area, an empty cards section, and a footer. No JS errors in console.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add index.html shell with header, search, progress, and cards grid"
```

---

## Task 4: Build style.css

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Write the full stylesheet**

```css
/* ============================================================
   Google Font
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap');

/* ============================================================
   Design tokens — light mode
   ============================================================ */
:root {
  --bg: #f5f5f5;
  --surface: #ffffff;
  --border: #dde1e7;
  --text: #1a1a2e;
  --text-muted: #5a6270;
  --accent: #1a6fc4;
  --accent-hover: #145da8;
  --accent-text: #ffffff;
  --reviewed-bg: #e8f5e9;
  --reviewed-border: #a5d6a7;
  --progress-track: #dde1e7;
  --progress-fill: #1a6fc4;
  --badge-bg: #e8f0fb;
  --badge-text: #1a6fc4;
  --badge-border: #b3caf5;
  --shadow: 0 2px 8px rgba(0,0,0,0.08);
  --radius: 12px;
  --font-arabic: 'Noto Naskh Arabic', serif;
  --font-ui: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ============================================================
   Dark mode tokens
   ============================================================ */
[data-theme="dark"] {
  --bg: #111318;
  --surface: #1e2128;
  --border: #2e3340;
  --text: #e8eaf0;
  --text-muted: #8a90a0;
  --accent: #5b9cf6;
  --accent-hover: #7ab0f8;
  --accent-text: #111318;
  --reviewed-bg: #1a2e1c;
  --reviewed-border: #2e5c34;
  --progress-track: #2e3340;
  --progress-fill: #5b9cf6;
  --badge-bg: #1c2540;
  --badge-text: #5b9cf6;
  --badge-border: #2e3e70;
  --shadow: 0 2px 8px rgba(0,0,0,0.3);
}

/* ============================================================
   Reset + base
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font-ui);
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
  min-height: 100vh;
  transition: background 0.2s, color 0.2s;
}

/* Screen-reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* ============================================================
   Header
   ============================================================ */
.site-header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.site-title [lang="ar"] {
  font-family: var(--font-arabic);
  font-size: 1.4rem;
  color: var(--accent);
}

/* ============================================================
   Buttons
   ============================================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-family: var(--font-ui);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  min-height: 44px;
  min-width: 44px;
}

.btn:hover { background: var(--bg); border-color: var(--accent); }
.btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

.btn-ghost { background: transparent; border-color: transparent; }
.btn-ghost:hover { background: var(--bg); border-color: var(--border); }

.btn-sm { min-height: 36px; padding: 0.375rem 0.75rem; font-size: 0.8125rem; }

/* ============================================================
   Main layout
   ============================================================ */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 3rem;
}

/* ============================================================
   Controls bar (search)
   ============================================================ */
.controls-bar { margin-bottom: 1.25rem; }

.search-wrapper {
  position: relative;
  max-width: 480px;
}

.search-input {
  width: 100%;
  padding: 0.625rem 2.5rem 0.625rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-family: var(--font-ui);
  font-size: 1rem;
  min-height: 44px;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.search-input::placeholder { color: var(--text-muted); }
.search-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(91,156,246,0.2); }

.search-clear {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.search-clear:hover { color: var(--text); background: var(--bg); }

/* ============================================================
   Progress
   ============================================================ */
.progress-section { margin-bottom: 2rem; }

.progress-track {
  height: 8px;
  background: var(--progress-track);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: var(--progress-fill);
  border-radius: 4px;
  width: 0%;
  transition: width 0.3s ease;
}

.progress-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* ============================================================
   No results
   ============================================================ */
.no-results {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* ============================================================
   Cards grid
   ============================================================ */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  .cards-grid { grid-template-columns: repeat(4, 1fr); }
}

/* ============================================================
   Letter card
   ============================================================ */
.letter-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s, background 0.2s;
}

.letter-card.is-reviewed {
  background: var(--reviewed-bg);
  border-color: var(--reviewed-border);
}

/* Large Arabic glyph */
.card-arabic {
  font-family: var(--font-arabic);
  font-size: 3.5rem;
  line-height: 1.2;
  text-align: center;
  color: var(--accent);
  padding: 0.5rem 0;
}

/* Name + transliteration */
.card-name {
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: var(--text);
}

/* IPA */
.card-ipa {
  font-size: 0.9rem;
  text-align: center;
  color: var(--text-muted);
  font-style: italic;
}

.card-ipa-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.4;
}

/* Forms grid */
.card-forms {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.form-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0.25rem;
  border-right: 1px solid var(--border);
  gap: 0.2rem;
}

.form-item:last-child { border-right: none; }

.form-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.form-glyph {
  font-family: var(--font-arabic);
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--text);
}

/* Audio button */
.audio-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: transparent;
  color: var(--accent);
  font-family: var(--font-ui);
  font-size: 0.85rem;
  cursor: pointer;
  align-self: center;
  min-height: 44px;
  min-width: 44px;
  transition: background 0.15s, color 0.15s;
}

.audio-btn:hover { background: var(--accent); color: var(--accent-text); }
.audio-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.audio-btn.audio-error { border-color: #e53935; color: #e53935; }

/* Examples */
.card-examples {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.85rem;
}

.example-item {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.ex-arabic {
  font-family: var(--font-arabic);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  flex-shrink: 0;
}

.ex-trans {
  color: var(--text-muted);
  font-style: italic;
  flex-shrink: 0;
}

.ex-meaning {
  color: var(--text-muted);
}

.ex-meaning::before { content: "— "; }

/* Similar sounds */
.similar-sounds {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
}

.similar-label {
  color: var(--text-muted);
  flex-shrink: 0;
}

.similar-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.6rem;
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  border-radius: 999px;
  color: var(--badge-text);
  font-family: var(--font-ui);
  font-size: 0.8rem;
  cursor: pointer;
  min-height: 44px;
  transition: background 0.15s;
}

.similar-badge:hover { background: var(--accent); color: var(--accent-text); border-color: var(--accent); }

.similar-badge [lang="ar"] {
  font-family: var(--font-arabic);
  font-size: 1rem;
}

/* Review button */
.review-btn {
  margin-top: auto;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-family: var(--font-ui);
  font-size: 0.875rem;
  cursor: pointer;
  min-height: 44px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  width: 100%;
}

.review-btn:hover { border-color: var(--accent); }

.review-btn.reviewed {
  background: var(--reviewed-border);
  border-color: var(--reviewed-border);
  color: #1a3d1f;
  font-weight: 600;
}

[data-theme="dark"] .review-btn.reviewed {
  color: #b9f0be;
}

.review-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

/* ============================================================
   Footer
   ============================================================ */
.site-footer {
  text-align: center;
  padding: 1.5rem 1.25rem;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.site-footer a { color: var(--accent); text-decoration: none; }
.site-footer a:hover { text-decoration: underline; }
```

- [ ] **Step 2: Verify layout**

Open `index.html` in browser. Should see: themed header, search bar, empty progress bar, empty grid. Toggle `data-theme="dark"` on `<html>` in DevTools and verify colours change.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add complete stylesheet with light/dark mode CSS variables"
```

---

## Task 5: Build app.js — full application logic

**Files:**
- Modify: `app.js`

This task writes the complete `app.js` in one pass. It covers: rendering, search, progress tracking, localStorage, audio resolution, theme toggle, and all event handling.

- [ ] **Step 1: Write the complete app.js**

```js
/* ============================================================
   State
   ============================================================ */
let reviewedIds = [];
let currentTheme = 'light';
let searchQuery = '';
const audioCache = {};   // filename → resolved URL string | null
let cardsListenerAttached = false;

/* ============================================================
   Entry point
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  loadTheme();
  loadReviewed();
  renderCards();
  updateProgress();
  setupSearch();
  setupProgressReset();
  setupThemeToggle();
  resolveAllAudio();
});

/* ============================================================
   Rendering
   ============================================================ */
function renderCards() {
  const container = document.getElementById('cards-container');
  const noResults = document.getElementById('no-results');
  const filtered = filterLetters(searchQuery);

  if (filtered.length === 0) {
    container.innerHTML = '';
    noResults.hidden = false;
  } else {
    noResults.hidden = true;
    container.innerHTML = filtered.map(renderCard).join('');
  }

  if (!cardsListenerAttached) {
    container.addEventListener('click', handleCardClick);
    cardsListenerAttached = true;
  }

  // Update aria-valuenow on progress bar to reflect reviewed count
  const pb = document.getElementById('progress-bar');
  if (pb) pb.setAttribute('aria-valuenow', reviewedIds.length);
}

function renderCard(letter) {
  const isReviewed = reviewedIds.includes(letter.id);
  const hasSimilar = letter.similarTo && letter.similarTo.length > 0;
  const hasAudio = audioCache[letter.audioFile] !== undefined
    ? audioCache[letter.audioFile] !== null
    : false; // not yet resolved — button stays hidden

  return '<article class="letter-card' + (isReviewed ? ' is-reviewed' : '') + '" data-letter-id="' + letter.id + '">' +
    '<div class="card-arabic" dir="rtl" lang="ar">' + letter.arabic + '</div>' +
    '<div class="card-name">' + escHtml(letter.name) + ' &mdash; ' + escHtml(letter.transliteration) + '</div>' +
    '<div class="card-ipa">' + escHtml(letter.ipa) + '</div>' +
    (letter.ipaNote ? '<div class="card-ipa-note">' + escHtml(letter.ipaNote) + '</div>' : '') +
    '<div class="card-forms" dir="rtl" lang="ar">' +
      formItem('Isolated', letter.forms.isolated) +
      formItem('Initial', letter.forms.initial) +
      formItem('Medial', letter.forms.medial) +
      formItem('Final', letter.forms.final) +
    '</div>' +
    '<button class="audio-btn" style="' + (hasAudio ? '' : 'display:none') + '" ' +
      'aria-label="Play pronunciation of ' + escHtml(letter.name) + '">' +
      '&#9654; Play' +
    '</button>' +
    '<ul class="card-examples">' +
      letter.examples.map(function (ex) {
        return '<li class="example-item">' +
          '<span class="ex-arabic" dir="rtl" lang="ar">' + ex.arabic + '</span>' +
          '<span class="ex-trans">' + escHtml(ex.transliteration) + '</span>' +
          '<span class="ex-meaning">' + escHtml(ex.meaning) + '</span>' +
          '</li>';
      }).join('') +
    '</ul>' +
    (hasSimilar ? renderSimilarBadges(letter) : '') +
    '<button class="review-btn' + (isReviewed ? ' reviewed' : '') + '">' +
      (isReviewed ? 'Reviewed &#10003;' : 'Mark as reviewed') +
    '</button>' +
    '</article>';
}

function formItem(label, glyph) {
  return '<div class="form-item">' +
    '<span class="form-label">' + label + '</span>' +
    '<span class="form-glyph">' + glyph + '</span>' +
    '</div>';
}

function renderSimilarBadges(letter) {
  var badges = letter.similarTo.map(function (targetId) {
    var target = letters.find(function (l) { return l.id === targetId; });
    if (!target) return '';
    return '<button class="similar-badge" data-target-id="' + targetId + '">' +
      '<span lang="ar" dir="rtl">' + target.arabic + '</span> ' +
      escHtml(target.name) +
      '</button>';
  }).join('');
  return '<div class="similar-sounds">' +
    '<span class="similar-label">Similar sounds:</span>' +
    badges +
    '</div>';
}

/* ============================================================
   Search
   ============================================================ */
function filterLetters(query) {
  if (!query) return letters;
  var q = query.toLowerCase();
  return letters.filter(function (l) {
    return l.name.toLowerCase().includes(q) ||
           l.transliteration.toLowerCase().includes(q);
  });
}

function setupSearch() {
  var input = document.getElementById('search-input');
  var clearBtn = document.getElementById('search-clear');

  input.addEventListener('input', function () {
    searchQuery = input.value;
    clearBtn.style.display = searchQuery ? 'flex' : 'none';
    renderCards();
  });

  clearBtn.addEventListener('click', function () {
    searchQuery = '';
    input.value = '';
    clearBtn.style.display = 'none';
    renderCards();
    input.focus();
  });
}

/* ============================================================
   Progress
   ============================================================ */
function updateProgress() {
  var count = reviewedIds.length;
  var countEl = document.getElementById('progress-count');
  var fillEl = document.getElementById('progress-fill');
  var pb = document.getElementById('progress-bar');
  if (countEl) countEl.textContent = count + ' of 28 letters reviewed';
  if (fillEl) fillEl.style.width = ((count / 28) * 100) + '%';
  if (pb) pb.setAttribute('aria-valuenow', count);
}

function setupProgressReset() {
  var btn = document.getElementById('progress-reset');
  btn.addEventListener('click', function () {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    reviewedIds = [];
    saveReviewed();
    renderCards();
    updateProgress();
  });
}

/* ============================================================
   localStorage
   ============================================================ */
function loadReviewed() {
  try {
    var stored = localStorage.getItem('arabic-guide-reviewed');
    reviewedIds = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(reviewedIds)) reviewedIds = [];
  } catch (e) {
    reviewedIds = [];
  }
}

function saveReviewed() {
  try {
    localStorage.setItem('arabic-guide-reviewed', JSON.stringify(reviewedIds));
  } catch (e) { /* localStorage unavailable — silently continue */ }
}

function loadTheme() {
  try {
    var stored = localStorage.getItem('arabic-guide-theme');
    if (stored === 'dark' || stored === 'light') {
      currentTheme = stored;
    } else {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  } catch (e) {
    currentTheme = 'light';
  }
  applyTheme(currentTheme);
}

/* ============================================================
   Theme
   ============================================================ */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  var btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀ Light mode' : '☾ Dark mode';
}

function setupThemeToggle() {
  var btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', function () {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    try {
      localStorage.setItem('arabic-guide-theme', currentTheme);
    } catch (e) { /* silently continue */ }
  });
}

/* ============================================================
   Audio — Wikimedia Commons API resolution
   ============================================================ */
function resolveAllAudio() {
  letters.forEach(function (letter) {
    if (!letter.audioFile) return;
    resolveAudio(letter).then(function () {
      // Show audio button if resolution succeeded
      if (letter.resolvedAudioUrl) {
        var btn = document.querySelector('[data-letter-id="' + letter.id + '"] .audio-btn');
        if (btn) btn.style.display = 'inline-flex';
      }
    });
  });
}

function resolveAudio(letter) {
  if (!letter.audioFile) {
    letter.resolvedAudioUrl = null;
    return Promise.resolve();
  }

  // Return cached result if available
  if (audioCache[letter.audioFile] !== undefined) {
    letter.resolvedAudioUrl = audioCache[letter.audioFile];
    return Promise.resolve();
  }

  var apiUrl = 'https://commons.wikimedia.org/w/api.php' +
    '?action=query' +
    '&titles=File:' + encodeURIComponent(letter.audioFile) +
    '&prop=imageinfo' +
    '&iiprop=url' +
    '&format=json' +
    '&origin=*';

  return fetch(apiUrl)
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (data) {
      var pages = Object.values(data.query.pages);
      var page = pages[0];
      if (page.missing !== undefined || !page.imageinfo || !page.imageinfo[0]) {
        audioCache[letter.audioFile] = null;
      } else {
        audioCache[letter.audioFile] = page.imageinfo[0].url;
      }
      letter.resolvedAudioUrl = audioCache[letter.audioFile];
    })
    .catch(function () {
      audioCache[letter.audioFile] = null;
      letter.resolvedAudioUrl = null;
    });
}

function playAudio(letter) {
  if (!letter.resolvedAudioUrl) return;
  var audio = new Audio(letter.resolvedAudioUrl);
  audio.play().catch(function () {
    showAudioError(letter.id);
  });
}

function showAudioError(letterId) {
  var btn = document.querySelector('[data-letter-id="' + letterId + '"] .audio-btn');
  if (!btn) return;
  var original = btn.textContent;
  btn.textContent = 'Audio unavailable';
  btn.classList.add('audio-error');
  setTimeout(function () {
    btn.textContent = original;
    btn.classList.remove('audio-error');
  }, 2500);
}

/* ============================================================
   Event delegation — all card interactions
   ============================================================ */
function handleCardClick(e) {
  // Review toggle
  var reviewBtn = e.target.closest('.review-btn');
  if (reviewBtn) {
    var letterId = reviewBtn.closest('[data-letter-id]').dataset.letterId;
    toggleReviewed(letterId);
    return;
  }

  // Audio play
  var audioBtn = e.target.closest('.audio-btn');
  if (audioBtn) {
    var letterId = audioBtn.closest('[data-letter-id]').dataset.letterId;
    var letter = letters.find(function (l) { return l.id === letterId; });
    if (letter) playAudio(letter);
    return;
  }

  // Similar-sounds badge — scroll to target card
  var badge = e.target.closest('.similar-badge');
  if (badge) {
    var targetId = badge.dataset.targetId;
    var target = document.querySelector('[data-letter-id="' + targetId + '"]');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
}

function toggleReviewed(letterId) {
  var idx = reviewedIds.indexOf(letterId);
  if (idx === -1) {
    reviewedIds.push(letterId);
  } else {
    reviewedIds.splice(idx, 1);
  }
  saveReviewed();

  // Update just the affected card in-place (no full re-render)
  var card = document.querySelector('[data-letter-id="' + letterId + '"]');
  if (card) {
    var isNowReviewed = reviewedIds.includes(letterId);
    card.classList.toggle('is-reviewed', isNowReviewed);
    var btn = card.querySelector('.review-btn');
    if (btn) {
      btn.innerHTML = isNowReviewed ? 'Reviewed &#10003;' : 'Mark as reviewed';
      btn.classList.toggle('reviewed', isNowReviewed);
    }
  }

  updateProgress();
}

/* ============================================================
   Utility
   ============================================================ */
function escHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
```

- [ ] **Step 2: Verify all core features**

Open `index.html` in browser and check:
1. All 28 cards render — each has the large Arabic glyph, name, IPA, 4 forms, 3 examples
2. Type "ba" in search — only Baa card appears; clear button appears and resets when clicked
3. Type "xyz" — "No letters match your search" state appears
4. Click "Mark as reviewed" on any card — it changes to "Reviewed ✓" and progress bar updates
5. Refresh page — reviewed cards remain reviewed (localStorage working)
6. Dark mode toggle switches theme and preference survives refresh
7. After ~5 seconds, some audio play buttons may appear (Wikimedia API resolving)

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: add complete app.js with rendering, search, progress, audio, and theme"
```

---

## Task 6: Write README.md and audio/README.md

**Files:**
- Modify: `README.md`
- Modify: `audio/README.md`

- [ ] **Step 1: Write README.md**

```markdown
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
```

- [ ] **Step 2: Write audio/README.md**

```markdown
# Audio Files

Audio pronunciation files are **not bundled** with this project.

They are sourced from [Wikimedia Commons](https://commons.wikimedia.org/) and
resolved at runtime via the Wikimedia Commons API.

## Source

Each letter's audio is identified by a filename stored in `data/letters.js`
(the `audioFile` field). The app fetches the actual CDN URL at page load using:

```
https://commons.wikimedia.org/w/api.php?action=query&titles=File:{filename}&prop=imageinfo&iiprop=url&format=json&origin=*
```

If a file does not exist or the API is unreachable, the play button for that
letter is hidden silently.

## License

All audio files from Wikimedia Commons are licensed under
[Creative Commons Attribution-ShareAlike (CC BY-SA)](https://creativecommons.org/licenses/by-sa/3.0/).

When using or redistributing audio, credit the original Wikimedia Commons
contributors and link to the CC BY-SA license.

## Adding Audio

To add or update audio for a letter:

1. Find or upload the file on Wikimedia Commons
2. Update the `audioFile` field in `data/letters.js` with the exact filename
   (e.g. `Ar-ba.ogg`)
3. The app will resolve the URL automatically at runtime
```

- [ ] **Step 3: Commit**

```bash
git add README.md audio/README.md
git commit -m "docs: add README and audio attribution notes"
```

---

## Task 7: Final verification

- [ ] **Step 1: Open `index.html` and verify all acceptance criteria**

Work through this checklist:

| # | Check | Pass? |
|---|-------|-------|
| 1 | All 28 letters display with correct Arabic Unicode | |
| 2 | All 4 forms render for every letter | |
| 3 | Arabic text flows right-to-left | |
| 4 | Noto Naskh Arabic font applies to Arabic glyphs | |
| 5 | Clicking play (once audio resolves) plays audio | |
| 6 | Letters with no audio show no play button | |
| 7 | Reviewing a letter and refreshing keeps it marked | |
| 8 | Progress bar updates immediately on toggle | |
| 9 | Search filters in real time; clear resets | |
| 10 | Dark mode toggles; preference survives refresh | |
| 11 | Layout is usable at 375px viewport width | |
| 12 | `index.html` opens correctly on `file://` protocol | |

- [ ] **Step 2: Fix any failures found in Step 1**

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final verification pass — all acceptance criteria met"
```

---

## Self-review notes

**Spec coverage:**
- All 28 letters ✓ (Task 2)
- Audio via Wikimedia API ✓ (Task 5 — `resolveAllAudio`, `resolveAudio`)
- Progress + localStorage ✓ (Task 5 — `loadReviewed`, `saveReviewed`, `updateProgress`)
- Search/filter ✓ (Task 5 — `filterLetters`, `setupSearch`)
- Similar-sounds badges ✓ (Task 5 — `renderSimilarBadges`)
- Light/dark mode ✓ (Task 4/5 — CSS vars + `applyTheme`)
- Responsive layout ✓ (Task 4 — grid breakpoints at 640/1024/1280px)
- RTL ✓ (Task 4/5 — `dir="rtl" lang="ar"` on all Arabic elements)
- Error handling ✓ (Task 5 — audio failure shows tooltip, localStorage try/catch)
- README ✓ (Task 6)

**No placeholders present in this plan.**

**Type consistency:** `letter.resolvedAudioUrl` set in `resolveAudio()` and read in `resolveAllAudio()` and `playAudio()` — consistent throughout.
