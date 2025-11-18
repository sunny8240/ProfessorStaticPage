# ProfessorStaticPage

A concise static website for an academic profile with a developer page.

Overview
--------
This repository contains a static HTML/CSS/JavaScript website featuring pages for research, teaching, courses, a gallery, and a contact form. A developer page (`pages/developer.html`) describes the site author.

Run locally
-----------
No build tools are required. To preview the site locally:

```powershell
git clone https://github.com/sunny8240/ProfessorStaticPage.git
cd ProfessorStaticPage
python -m http.server 8000 or open with live server
# then open http://localhost:8000
```

What to edit
-----------
- Page content: `pages/` (HTML files)
- Styles: `css/` (page-specific and global styles)
- Scripts: `js/`
- Assets: `assect/` (images, PDFs) — note: folder name contains a typo; consider renaming to `assets/` if you update references.

Contact form
------------
The contact form uses a third-party email service . Do not store private API keys, secrets, or personal email addresses in this README or committed files. Keep sensitive values out of the repository and in environment variables or secure configuration.

Developer page
--------------
`pages/developer.html` contains the developer biography and public social links. Edit that file to update the bio or public links.

Security & privacy notes
------------------------
- Remove or replace any private credentials before publishing this repository publicly.
- Avoid including personal email addresses or private API keys in files tracked by Git.

Deployment
----------
The site can be hosted on GitHub Pages, Vercel, or any static hosting provider. For automated deployment, consider adding a small CI workflow (GitHub Actions) that publishes the `main` branch.

License & attribution
---------------------
Content and code are owned by their respective authors. Update attribution where appropriate.

Last updated: November 18, 2025

About the developer
-------------------
Sunny Sharma is a Cybersecurity-focused Full Stack Developer and a B.Sc. Cybersecurity student. He builds modern, secure, and scalable web applications using the MERN stack and Python, and studies penetration testing and application security. Key areas of expertise and interest include:

- Full-stack development (MongoDB, Express, React, Node.js)
- Frontend engineering, responsive UI/UX, and animations
- Python scripting for automation and data tasks
- Web security, penetration testing, and secure coding practices
- Containerization and DevOps basics (Docker, CI/CD)

The developer page is at `pages/developer.html` and can be edited to update personal details, public projects, or social links. Do not add private contact details or secrets to repository files; keep those out of version control.

Complete file structure
-----------------------
Below is the repository tree (concise but comprehensive) as it exists now. Use this as a quick reference when editing or extending the site.

```
project-root/
├── index.html
├── README.md
├── EMAILJS_SETUP.md
├── PROJECT_COMPLETION_REPORT.md
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── courses.html
│   ├── developer.html
│   ├── gallery.html
│   ├── research.html
│   └── teaching.html
├── css/
│   ├── about.css
	├── contact.css
	├── courses.css
	├── gallery.css
	├── research.css
	├── styles.css
	└── teaching.css
├── js/
│   ├── contact.js
│   ├── main.js
│   ├── research.js
│   ├── script.js
│   └── teaching.js
├── assect/                       # assets folder (name preserved)
│   ├── awards/
│   ├── campus/
│   ├── conference/
│   ├── personal/
│   │   ├── favIcon.png
│   │   ├── sir.png
│   │   └── sirImg.jpg
│   ├── research/
│   ├── teaching/
│   └── pdfs/
│       └── notes/
└── other project files (docs, notes, etc.)
```

If you'd like, I can create a `FILE_STRUCTURE.md` with this tree and brief descriptions for each file (useful for contributors). I can also convert the `assect/` folder to `assets/` and update references across the site — let me know if you want that done now.

