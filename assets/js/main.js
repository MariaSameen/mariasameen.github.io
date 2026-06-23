/* ============================================================
   main.js — Maria Sameen Academic Portfolio
   ============================================================ */

/* ── THEME ──────────────────────────────────────────────────── */
(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', function () {

  /* ── THEME TOGGLE ─────────────────────────────────────────── */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeBtn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  /* ── MOBILE NAV ───────────────────────────────────────────── */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open', !expanded);
    });
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      }
    });
  }

  /* ── SCROLLSPY ────────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;

  function updateActive () {
    let current = '';
    sections.forEach(function (sec) {
      const top = sec.getBoundingClientRect().top;
      if (top <= navHeight + 40) current = sec.id;
    });
    navItems.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  /* ── BACK TO TOP ──────────────────────────────────────────── */
  const btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
  }

  /* ── EXPAND EARLIER ROLES ─────────────────────────────────── */
  document.querySelectorAll('.timeline-expand-btn').forEach(function (btn) {
    const targetId = btn.getAttribute('aria-controls');
    const target   = targetId ? document.getElementById(targetId) : null;
    if (!target) return;
    btn.addEventListener('click', function () {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      target.classList.toggle('open', !expanded);
      btn.querySelector('.expand-label').textContent = !expanded ? 'Hide earlier roles' : 'Show earlier roles';
    });
  });

  /* ── PUBLICATIONS RENDER ──────────────────────────────────── */
  if (typeof PUBLICATIONS_DATA !== 'undefined') {
    renderPublications();
  }

  /* ── BIBTEX COPY ──────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn-bibtex');
    if (!btn) return;
    const raw = btn.getAttribute('data-bibtex');
    if (!raw) return;
    navigator.clipboard.writeText(raw).then(function () {
      const orig = btn.textContent.trim();
      btn.textContent = 'Copied!';
      btn.classList.add('btn-bibtex--copied');
      setTimeout(function () {
        btn.textContent = orig;
        btn.classList.remove('btn-bibtex--copied');
      }, 2000);
    }).catch(function () {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = raw;
      ta.style.position = 'fixed';
      ta.style.opacity  = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = 'BibTeX'; }, 2000);
    });
  });

  /* ── EMAIL OBFUSCATION ────────────────────────────────────── */
  document.querySelectorAll('[data-email]').forEach(function (el) {
    el.addEventListener('click', function () {
      const raw = el.getAttribute('data-email');
      // Simple ROT13 + reverse decode; encoded in HTML with data-email
      const decoded = atob(raw);
      window.location.href = 'mailto:' + decoded;
    });
    el.setAttribute('role', 'link');
    el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') el.click();
    });
  });

});

/* ── RENDER PUBLICATIONS ──────────────────────────────────────── */
function renderPublications () {
  const container = document.getElementById('pub-container');
  if (!container) return;

  const groups = [
    { key: 'patent',      label: 'Patent' },
    { key: 'journals',    label: 'Journal Articles' },
    { key: 'conferences', label: 'Conference & Workshop Papers' },
    { key: 'magazine',    label: 'Magazine' },
    { key: 'talks',       label: 'Invited Talks' },
    { key: 'posters',     label: 'Posters' },
  ];

  let html = '';

  groups.forEach(function (group) {
    const items = PUBLICATIONS_DATA[group.key];
    if (!items || items.length === 0) return;

    html += '<div class="pub-group">';
    html += '<p class="pub-group-title">' + group.label + '</p>';
    html += '<ul class="pub-list">';

    items.forEach(function (pub) {
      let noteHtml = '';
      if (pub.note === 'Under Review') {
        noteHtml = '<span class="pub-badge pub-badge--review">Under Review</span>';
      } else if (pub.note && pub.note.toLowerCase().includes('award')) {
        noteHtml = '<span class="pub-badge pub-badge--award">&#9733; ' + escHtml(pub.note) + '</span>';
      } else if (pub.note) {
        noteHtml = '<span class="pub-badge pub-badge--patent">' + escHtml(pub.note) + '</span>';
      }

      let doiHtml = '';
      if (pub.doi) {
        doiHtml = '<a class="pub-doi-link" href="https://doi.org/' + escHtml(pub.doi) + '" target="_blank" rel="noopener" aria-label="DOI link">'
                + 'DOI: ' + escHtml(pub.doi) + '</a>';
      } else if (pub.url) {
        doiHtml = '<a class="pub-doi-link" href="' + escHtml(pub.url) + '" target="_blank" rel="noopener">Link &rarr;</a>';
      }

      let bibtexHtml = '';
      if (pub.bibtex) {
        const encoded = pub.bibtex.replace(/"/g, '&quot;');
        bibtexHtml = '<button class="btn-bibtex" data-bibtex="' + encoded + '" aria-label="Copy BibTeX to clipboard">BibTeX</button>';
      }

      const metaHtml = (doiHtml || noteHtml || bibtexHtml)
        ? '<div class="pub-meta">' + noteHtml + doiHtml + bibtexHtml + '</div>'
        : '';

      html += '<li class="pub-item">'
            + '<p class="pub-authors">' + escHtml(pub.authors) + ' (' + pub.year + ')</p>'
            + '<p class="pub-title">' + escHtml(pub.title) + '</p>'
            + '<p class="pub-venue">' + pub.venue + '</p>'
            + metaHtml
            + '</li>';
    });

    html += '</ul></div>';
  });

  container.innerHTML = html;
}

function escHtml (str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
