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

  const pb = document.getElementById('progress-bar');
  if (pb) pb.setAttribute('aria-valuenow', reviewedIds.length);
}

function renderCard(letter) {
  const isReviewed = reviewedIds.includes(letter.id);
  const hasSimilar = letter.similarTo && letter.similarTo.length > 0;
  const hasAudio = audioCache[letter.audioFile] !== undefined
    ? audioCache[letter.audioFile] !== null
    : false;

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
  var reviewBtn = e.target.closest('.review-btn');
  if (reviewBtn) {
    var letterId = reviewBtn.closest('[data-letter-id]').dataset.letterId;
    toggleReviewed(letterId);
    return;
  }

  var audioBtn = e.target.closest('.audio-btn');
  if (audioBtn) {
    var letterId = audioBtn.closest('[data-letter-id]').dataset.letterId;
    var letter = letters.find(function (l) { return l.id === letterId; });
    if (letter) playAudio(letter);
    return;
  }

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
