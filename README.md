# Maria Sameen — Academic Portfolio Website

Professional portfolio for Dr. Maria Sameen, hosted at `mariasameen.github.io`.

## Quick Start

### Preview locally
Open `index.html` directly in any modern browser — no build step, no server required.

For a slightly better experience (avoids some file:// quirks), use a local server:
```bash
# Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

---

## Deploy to GitHub Pages

1. Make sure your repository is named **`<username>.github.io`** (e.g. `mariasameen.github.io`).
2. Push all files to the **`main`** branch.
3. In the repo settings → **Pages** → set Source to `Deploy from a branch` → branch: `main`, folder: `/ (root)`.
4. The site will be live at `https://mariasameen.github.io/` within a minute or two.

---

## Updating Content

### Swap in your profile photo
1. Save your photo as **`assets/img/profile.jpg`** (square, at least 400×400 px recommended).
2. In `index.html`, find the `<div class="photo-wrap">` block and replace:
   ```html
   <div class="photo-placeholder" aria-label="Profile photo placeholder">MS</div>
   ```
   with:
   ```html
   <img src="assets/img/profile.jpg" alt="Portrait of Maria Sameen" width="180" height="180">
   ```

### Add your CV PDF
1. Save your CV as **`assets/cv/Maria_Sameen_CV.pdf`**.
2. The "Download CV" button in the hero and contact sections will automatically link to it.

### Set your email (obfuscated)
The email is stored as a Base64-encoded string to deter scrapers.
1. Encode your address: in a browser console run `btoa("you@example.com")`.
2. Find every `data-email="..."` attribute in `index.html` and replace the value with your encoded string.

### Set your LinkedIn and GitHub URLs
Search `index.html` for `[LINKEDIN_URL]` and `[GITHUB_URL]` and replace with your profile URLs.

### Update the sitemap
In `sitemap.xml`, update the `<lastmod>` date whenever you make significant changes.

---

## Add a Publication

Open **`assets/data/publications.js`** and add an entry to the appropriate array
(`patent`, `journals`, `conferences`, `magazine`, `talks`, or `posters`).

Each entry follows this shape:

```js
{
  authors: "Sameen M, Collaborator A",
  title:   "My New Paper Title",
  venue:   "Journal Name, vol. X, pp. Y–Z",
  year:    2026,
  doi:     "10.xxxx/xxxxx",   // or null
  url:     null,              // fallback link if no DOI
  note:    null,              // e.g. "Under Review" or "Best Paper Award"
  bibtex:  `@article{...}`   // or null to hide the BibTeX button
}
```

The site renders publications automatically from this file — no HTML editing needed.

---

## Change the Accent Colour / Theme

Open **`assets/css/style.css`** and edit the CSS custom properties at the top of `:root`:

```css
:root {
  --accent:   #0d6e6e;   /* deep teal — change this */
  --accent-h: #0a5555;   /* darker hover state */
  --accent-pale: #e4f3f3; /* very light tint for backgrounds */
}
```

Repeat the same values in `[data-theme="dark"]` and the `@media (prefers-color-scheme: dark)` block.

---

## File Structure

```
mariasameen.github.io/
├── index.html                  Main single-page site
├── 404.html                    Custom 404 page
├── sitemap.xml
├── robots.txt
├── README.md                   ← You are here
├── assets/
│   ├── css/
│   │   └── style.css           All styles (CSS variables for easy theming)
│   ├── js/
│   │   └── main.js             Nav, dark mode, publications render, BibTeX copy
│   ├── data/
│   │   └── publications.js     ← Edit this to add/update publications
│   ├── img/
│   │   ├── profile.jpg         ← Add your photo here
│   │   ├── og-image.jpg        ← Add a 1200×630 Open Graph image here
│   │   └── profile-placeholder.svg
│   └── cv/
│       └── Maria_Sameen_CV.pdf ← Add your CV here
```

---

## Accessibility & SEO

- Passes WCAG 2.1 AA colour contrast requirements (both light and dark mode).
- Semantic HTML with proper heading hierarchy and ARIA labels.
- JSON-LD structured data, Open Graph, Twitter Card, Dublin Core, and Highwire Press meta tags included.
- Fully keyboard-navigable; skip link present.
- `prefers-reduced-motion` respected for all transitions.
- Lighthouse: target ≥ 90 for Accessibility, SEO, and Best Practices.

---

## Licence

All site code is available for personal use and adaptation.
Publication content and biographical text are © Maria Sameen.
