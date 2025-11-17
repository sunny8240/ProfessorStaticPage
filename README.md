# Professor Aditya Katkar - Academic Portfolio Website

A modern, responsive academic portfolio website showcasing Professor Aditya Katkar's research, teaching experience, and academic achievements.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Technology Stack](#technology-stack)
- [Pages & Content](#pages--content)
- [Getting Started](#getting-started)
- [File Descriptions](#file-descriptions)
- [Contact & Social Links](#contact--social-links)

---

## 🎯 Project Overview

This is a professional academic website for **Professor Aditya H. Katkar**, Assistant Professor in the Computer Science Department at Pimpri Chinchwad University. The website serves as a digital presence showcasing:

- **16+ years** of teaching and research experience
- **4+ academic publications**
- **9+ courses taught**
- **2+ research projects**
- Research interests in Cybersecurity, E-Governance, and Emerging Technologies

**Key Purpose:** Provide a centralized platform for students, colleagues, and researchers to learn about the professor's work, courses, research, and get in touch.

---

## ✨ Features

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
✅ **Modern UI** - Clean, professional interface with smooth animations
✅ **Mobile Menu** - Hamburger menu toggle for mobile navigation
✅ **Gallery Section** - Image gallery with filtering and lightbox views
✅ **Accordion Layout** - Organized course information with expandable sections
✅ **Tab Navigation** - Research projects organized in tabbed interface
✅ **Contact Form** - Get in touch functionality with validation
✅ **Social Integration** - Links to Google Scholar, ORCID, LinkedIn, and more
✅ **Smooth Scrolling** - Enhanced navigation experience with smooth scroll effects

---

## 📁 File Structure

```
pro/
│
├── index.html                          # Main landing page
│
├── pages/                              # Additional content pages
│   ├── about.html                      # About Professor
│   ├── research.html                   # Research projects & interests
│   ├── teaching.html                   # Teaching experience & philosophy
│   ├── courses.html                    # Courses offered
│   ├── gallery.html                    # Photo gallery
│   └── contact.html                    # Contact form
│
├── css/                                # Stylesheets
│   ├── styles.css                      # Main global styles
│   ├── about.css                       # About page specific styles
│   ├── contact.css                     # Contact page specific styles
│   ├── courses.css                     # Courses page specific styles
│   ├── gallery.css                     # Gallery page specific styles
│   ├── research.css                    # Research page specific styles
│   └── teaching.css                    # Teaching page specific styles
│
├── js/                                 # JavaScript files
│   ├── main.js                         # Main JavaScript (navigation, forms, etc.)
│   ├── script.js                       # Additional general scripts
│   ├── research.js                     # Research page specific logic
│   └── teaching.js                     # Teaching page specific logic
│
├── assect/                             # Assets (note: folder name has typo "assect")
│   ├── personal/                       # Personal images
│   │   ├── favIcon.png                 # Favicon
│   │   ├── sir.png                     # Profile portrait
│   │   └── sirImg.jpg                  # Alternative profile image
│   ├── awards/                         # Award images
│   ├── campus/                         # Campus photos
│   ├── conference/                     # Conference photos
│   ├── research/                       # Research-related images
│   ├── teaching/                       # Teaching-related images
│   └── pdfs/                           # PDF documents
│       └── notes/                      # Lecture notes
│
└── README.md                           # This file
```

---

## 🛠 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup & structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (Vanilla)** | Interactivity, form handling, DOM manipulation |
| **Font Awesome 6.5.0** | Icons (social links, UI elements) |
| **Responsive Design** | Mobile-first approach |

---

## 📄 Pages & Content

### 1. **Home (index.html)**
- Hero section with introduction
- Quick stats (publications, experience, courses, projects)
- Research highlights
- Call-to-action buttons
- Navigation to all major sections

### 2. **About (about.html)**
- Detailed biography
- Academic background
- Professional achievements
- Teaching philosophy

### 3. **Research (research.html)**
- Research interests & projects
- Tabbed interface for different research areas:
  - Cybersecurity & Privacy
  - E-Governance
  - Emerging Technologies in Communication
- Publications and links

### 4. **Teaching (teaching.html)**
- Teaching experience (16+ years)
- Course list
- Pedagogical approach
- Student mentoring information

### 5. **Courses (courses.html)**
- Accordion-style course listings
- Course descriptions
- Prerequisites and outcomes
- Expandable course details

### 6. **Gallery (gallery.html)**
- Photo gallery with filtering
- Categories: Awards, Campus, Conference, Research, Teaching
- Lightbox view for images
- Interactive filter buttons

### 7. **Contact (contact.html)**
- Contact form with validation
- Email notification system
- Social media links
- Institution details

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs as static HTML

### Installation

1. **Clone or download the project:**
   ```bash
   git clone https://github.com/sunny8240/ProfessorStaticPage.git
   cd pro
   ```

<!-- 2. **Open in browser:**
   - Double-click `index.html` OR
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server package)
     npx http-server
     ```

3. **Access the site:**
   - Open browser and navigate to `http://localhost:8000`

## Admin / Upload Functionality

The optional admin/upload functionality has been removed from this repository. There is no active admin UI or upload API in this copy of the site. If you previously used `pages/admin_upload.html` or the `upload_server/` service, those components have been neutralized or disabled.

If you want the admin/upload features restored later, I can re-add a secure implementation (server-side protected admin UI and uploads to object storage).

## 📋 File Descriptions

### HTML Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page with hero, stats, and research highlights |
| `about.html` | Detailed biographical information |
| `research.html` | Research projects with tabbed navigation |
| `teaching.html` | Teaching experience and philosophy |
| `courses.html` | Course catalog with accordion layout |
| `gallery.html` | Image gallery with filtering |
| `contact.html` | Contact form and social links |

### CSS Files

| File | Purpose |
|------|---------|
| `styles.css` | Global styles, variables, layout, animations |
| `about.css` | About page specific styling |
| `research.css` | Research page layout |
| `teaching.css` | Teaching page styling |
| `courses.css` | Courses accordion and layout |
| `gallery.css` | Gallery grid, filters, lightbox |
| `contact.css` | Contact form styling |

### JavaScript Files

| File | Purpose |
|------|---------|
| `main.js` | Core functionality: mobile menu, navbar scroll, form validation, lightbox, tabs, accordions, animations |
| `script.js` | General utilities and helper functions |
| `research.js` | Research page specific interactions |
| `teaching.js` | Teaching page specific interactions |

### Assets

| Folder | Contents |
|--------|----------|
| `assect/personal/` | Profile images and favicon |
| `assect/awards/` | Award and recognition images |
| `assect/campus/` | Campus and facility photos |
| `assect/conference/` | Conference and event photos |
| `assect/research/` | Research-related visuals |
| `assect/teaching/` | Teaching and classroom photos |
| `assect/pdfs/notes/` | Lecture notes and study materials |

---

## 🎨 Key Features & Functionality

### Responsive Navigation
- Sticky navbar with scroll detection
- Mobile hamburger menu
- Active link highlighting
- Smooth navigation transitions

### Interactive Elements
- **Lightbox Gallery** - Click images to view in modal
- **Filter Buttons** - Filter gallery by category
- **Accordion Menu** - Expandable course details
- **Tab Navigation** - Switch between research topics
- **Form Validation** - Contact form with error checking
- **Toast Notifications** - Success/error messages

### Animations & Effects
- Fade-in animations on page load
- Smooth scroll behavior
- Hover effects on buttons and links
- Intersection observer for scroll animations
- Float animation on hero image

---

## 🔧 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --blue-900: #1e3a8a;
    --blue-800: #1e40af;
    --gray-900: #111827;
    /* ... more colors */
}
```

### Content
1. Update text in HTML files
2. Replace images in `assect/` folders
3. Update social links in footer (index.html)
4. Modify course details in `courses.html`

### Styling
- Each page has dedicated CSS file for easy customization
- Global styles in `styles.css`
- Mobile-first responsive design

---

## 📱 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚠️ Known Issues & Notes

1. **Asset Folder Typo**: The folder is named `assect` instead of `asset` - consider renaming for consistency
2. **Form Handling**: Contact form uses client-side validation only. For production, integrate with a backend service (Formspree, EmailJS, etc.)
3. **PDF Notes**: PDFs in `assect/pdfs/notes/` folder are not yet linked in the UI

---

## 🚀 Improvement Suggestions

1. **Backend Integration**
   - Add email sending for contact form
   - Implement database for courses/publications

2. **SEO & Performance**
   - Add meta descriptions and keywords
   - Optimize images (use WebP format)
   - Minify CSS/JS files
   - Add Open Graph tags

3. **Accessibility**
   - Add ARIA labels
   - Improve color contrast
   - Add keyboard navigation

4. **Features**
   - Blog section for academic articles
   - PDF download for CV/Publications
   - Event calendar
   - Student testimonials

5. **Build Process**
   - Set up with npm/package.json
   - Add build tools (Webpack, Gulp)
   - Version control with Git

---

## 📞 Contact & Social Links

- **Email**: adityakatkar@gmail.com
- **Google Scholar**: [View Profile](https://scholar.google.co.in/citations?view_op=list_works&hl=en&user=md88NjUAAAAJ&gmla)
- **ORCID**: [View Profile](https://orcid.org/0009-0000-3031-9651)
- **Vidwan**: [View Profile](https://vidwan.inflibnet.ac.in/profile/536650)
- **LinkedIn**: [Connect](https://www.linkedin.com/in/aditya-katkar-11470018/)

---

## 📜 License

All content © 2025 Professor Aditya Katkar. All rights reserved.

---

## 👨‍💼 About the Professor

**Prof. Aditya H. Katkar**  
Assistant Professor, Computer Science Department  
Pimpri Chinchwad University

With over 16 years of experience in academia, Prof. Katkar is dedicated to advancing knowledge through innovative teaching, cutting-edge research, and mentoring the next generation of computer scientists.

---

**Last Updated**: November 2025  
**Version**: 1.0
