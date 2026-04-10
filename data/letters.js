const letters = [
  {
    id: "alef",
    arabic: "ا",
    name: "Alef",
    transliteration: "ā",
    ipa: "/ʔ/",
    ipaNote: "Functions as a glottal stop or long vowel seat; context-dependent",
    forms: { isolated: "ا", initial: "ا", medial: "ـا", final: "ـا" },
    audioFile: "audio/pronunciation_ar_ا.mp3",
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
    audioFile: "audio/pronunciation_ar_ب.mp3",
    similarTo: ["fa", "nun"],
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
    audioFile: "audio/pronunciation_ar_ت.mp3",
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
    audioFile: "audio/pronunciation_ar_ث.mp3",
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
    audioFile: "audio/pronunciation_ar_ج.mp3",
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
    audioFile: "audio/pronunciation_ar_ح.mp3",
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
    audioFile: "audio/pronunciation_ar_خ.mp3",
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
    audioFile: "audio/pronunciation_ar_د.mp3",
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
    audioFile: "audio/pronunciation_ar_ذ.mp3",
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
    audioFile: "audio/pronunciation_ar_ر.mp3",
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
    audioFile: "audio/pronunciation_ar_ز.mp3",
    similarTo: ["ra"],
    examples: [
      { arabic: "زَهْرَة", transliteration: "zahra", meaning: "flower" },
      { arabic: "زَيْت", transliteration: "zayt", meaning: "oil" },
      { arabic: "زَرَافَة", transliteration: "zarāfa", meaning: "giraffe" }
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
    audioFile: "audio/pronunciation_ar_س.mp3",
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
    audioFile: "audio/pronunciation_ar_ش.mp3",
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
    audioFile: "audio/pronunciation_ar_ص.mp3",
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
    audioFile: "audio/pronunciation_ar_ض.mp3",
    similarTo: ["dal", "sad", "ta2", "dha"],
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
    audioFile: "audio/pronunciation_ar_ط.mp3",
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
    audioFile: "audio/pronunciation_ar_ظ.mp3",
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
    audioFile: "audio/pronunciation_ar_ع.mp3",
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
    audioFile: "audio/pronunciation_ar_غ.mp3",
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
    audioFile: "audio/pronunciation_ar_ف.mp3",
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
    audioFile: "audio/pronunciation_ar_ق.mp3",
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
    audioFile: "audio/pronunciation_ar_ك.mp3",
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
    audioFile: "audio/pronunciation_ar_ل.mp3",
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
    audioFile: "audio/pronunciation_ar_م.mp3",
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
    audioFile: "audio/pronunciation_ar_ن.mp3",
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
    audioFile: "audio/pronunciation_ar_ه.mp3",
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
    audioFile: "audio/pronunciation_ar_و.mp3",
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
    audioFile: "audio/pronunciation_ar_ي.mp3",
    similarTo: ["waw"],
    examples: [
      { arabic: "يَد", transliteration: "yad", meaning: "hand" },
      { arabic: "يَوْم", transliteration: "yawm", meaning: "day" },
      { arabic: "بَيْت", transliteration: "bayt", meaning: "house" }
    ]
  }
];
