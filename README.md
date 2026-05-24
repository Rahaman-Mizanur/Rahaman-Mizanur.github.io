# PhD Portfolio Website — Md. Mizanur Rahaman

A clean, responsive academic portfolio website for Md. Mizanur Rahaman, M.Eng. student at the University of Tokyo. Built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks, fully compatible with GitHub Pages.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository named `Rahaman-Mizanur.github.io`
2. Inside the `portfolio-website/` folder, run:

```bash
git init
git add .
git commit -m "Initial commit: PhD portfolio website"
git branch -M main
git remote add origin https://github.com/Rahaman-Mizanur/Rahaman-Mizanur.github.io.git
git push -u origin main
```

3. Go to **GitHub → Repository → Settings → Pages → Source: main branch / root**
4. Your site will be live at: `https://Rahaman-Mizanur.github.io`

---

## Before Deploying — Required Files

| File | Action |
|------|--------|
| `files/Md_Mizanur_Rahaman_CV_PhD_2026.pdf` | Export your CV `.docx` to PDF and place it here |
| `assets/images/profile.png` | Already copied from `Capture.PNG` |
| `files/publication_2020.pdf` | Already copied from the source folder |

---

## Set Up the Contact Form

1. Sign up at [formspree.io](https://formspree.io) (free tier is sufficient)
2. Create a new form and copy your Form ID
3. Open `contact.html` and replace `YOUR_FORM_ID` in the `<form action="...">` line

---

## How to Update Content

| Page | File | What to edit |
|------|------|--------------|
| Home | `index.html` | Hero text, bio, interest pills, highlight cards |
| About | `about.html` | Bio paragraphs, education timeline, skills, awards |
| Research | `research.html` | Research description, pipeline diagram, interest cards |
| Publications | `publications.html` | Add new `pub-card` blocks; update ongoing work text |
| CV | `cv.html` | CV entries under each section (education, experience, skills) |
| Contact | `contact.html` | Contact card links; form action URL |
| All pages | `assets/css/style.css` | Colors, fonts, layout |
| Nav + Footer | `assets/js/main.js` | `NAV_HTML` and `FOOTER_HTML` constants at the top |

---

## Tech Stack

- **HTML5** — semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- **CSS3** — custom properties, flexbox, grid, media queries (no Bootstrap)
- **Vanilla JavaScript** — nav/footer injection, active link detection, hamburger menu, auto copyright year
- **Google Fonts** — Inter (body) + Playfair Display (headings)
