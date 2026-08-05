# 🎬 ItsMe — Netflix-Inspired Interactive Portfolio

A modern, cinematic, Netflix-styled interactive personal portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, **Redux Toolkit**, and **React Router v7**.

![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Vite](https://img.shields.io/badge/Vite-8-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)

---

## 🌟 Features

- **🍿 "Who's Watching?" Profile Selector**: Choose a profile tailored to your intent (*Recruiter*, *Developer*, *Reader*, or *Explorer*) for a personalized browsing experience.
- **🎬 Netflix-Style Home & UI**: Dark mode layout with hero banners, content rails, category carousels, and smooth micro-interactions.
- **⚡ Originals (Projects)**: Showcase of featured projects with detailed modal views, tech stack badges, live demos, and GitHub repository links.
- **📝 Documentary (Blog & Articles)**: Integrated Markdown reader powered by `react-markdown` and `remark-gfm` for reading blog posts and technical articles.
- **🏆 Awards & Achievements**: Interactive presentation of certifications, honors, and key milestones.
- **📬 Reach Me (Contact)**: Interactive contact section for messages and direct social connections.
- **📱 Fully Responsive**: Optimized for seamless viewing across mobile, tablet, and desktop displays.

---

## 🛠️ Tech Stack & Skills

- **Languages**: Python, JavaScript, Java, C, C++, HTML5, CSS3
- **Backend & Services**: FastAPI, Express, Node.js, MongoDB Atlas, RESTful APIs, JWT
- **Data & Scraping**: Web Scraping, Web Crawling, Data Scraping, Pandas, Matplotlib
- **Frontend & UI**: React.js (React 19), Tailwind CSS v4, Redux Toolkit, React Router v7, Vite
- **Interests & Science**: Basics of AI, Physics & Mathematics, Sketching & Creative Arts, Lifelong Learning

---

## 📁 Project Structure

```text
ItsMe/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Avatars, logos, media, and images
│   ├── blogs/             # Markdown blog files & content
│   ├── components/        # Reusable UI components (Header, Footer, Modals, Cards)
│   ├── Pages/             # Route pages (Landing, Home, Projects, Blog, AboutMe, etc.)
│   ├── store/             # Redux store & viewer state slices
│   ├── utils/             # Helper utilities & data handlers
│   ├── App.jsx            # Main App layout with header/footer outlet
│   ├── index.css          # Tailwind CSS configuration & global styles
│   └── main.jsx           # App entry point & router definitions
├── LICENSE                # MIT License file
├── package.json           # Node dependencies and scripts
├── STRUCTURE.md           # Content structure and data guide
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## 📋 Content & Data Structure Guide

For complete guidelines, schemas, and field definitions, refer to [STRUCTURE.md](./STRUCTURE.md).

### 📖 1. Adding a New Blog File (Documentary Engine)
Place new Markdown files in [`src/blogs/`](./src/blogs/). Adding a new `category:` value in the frontmatter automatically creates a new category pill in the filter bar AND a dedicated Netflix category row on the main blog page!

```markdown
---
title: "My Tech Documentary"
slug: "my-tech-documentary"
date: "2026-08-05"
readTime: "6 min read"
category: "Python & Data"
matchScore: "99% Match"
rating: "HD 4K HDR"
season: "S1"
episode: "E1"
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
synopsis: "Brief overview of what this documentary covers."
author: "Raunak"
authorRole: "Lead Architect & Developer"
authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Raunak"
tags: ["Python", "FastAPI", "Web Scraping"]
featured: false
---

# My Tech Documentary Title
Article content goes here...
```

### ⚡ 2. Adding a Project (Originals)
Edit `projectsList` in [`src/Pages/Projects.jsx`](./src/Pages/Projects.jsx):

```javascript
{
  id: "my-project-id",
  title: "Project Title Name",
  category: "Full-Stack Web Apps",
  format: "Movie",
  matchScore: "99% Match",
  badge: "NETFLIX ORIGINAL",
  coverImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop",
  synopsis: "Comprehensive overview describing what the project does.",
  techStack: ["Python", "FastAPI", "React", "MongoDB Atlas", "TailwindCSS"],
  liveDemoUrl: "https://github.com/iamgojoof6eyes/your-repo", //can be null
  githubUrl: "https://github.com/iamgojoof6eyes/your-repo",
  architectureHighlights: [
    "First key technical architectural feature.",
    "Second key technical highlight or optimization.",
  ],
}
```

### 🏆 3. Adding an Achievement / Accolade
Edit `achievementsList` in [`src/Pages/Achivements.jsx`](./src/Pages/Achivements.jsx):

```javascript
{
  id: "my-achievement-id",
  title: "Certification or Award Title",
  category: "Certifications",
  issuer: "Issuing Organization",
  year: "2026",
  matchScore: "100% Match",
  type: "Gold Trophy",
  iconColor: "text-amber-400",
  badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/50",
  coverImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
  synopsis: "Detailed description of the honor or certification.",
  skills: ["Python", "FastAPI", "Web Scraping"],
  credentialUrl: "https://github.com/iamgojoof6eyes",
}
```

### 👤 4. Adding an Episode or Skill to "Behind The Scenes"
Edit `episodes` or `techSkills` in [`src/Pages/AboutMe.jsx`](./src/Pages/AboutMe.jsx):

```javascript
{
  season: "S2",
  episode: "E6",
  title: "Title of Your Life Milestone",
  tagline: "Short 1-line tagline",
  description: "Detailed story paragraph about this milestone.",
  icon: Briefcase
}
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iamgojoof6eyes/ItsMe.git
   cd ItsMe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server with HMR:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the portfolio.

---

## 🛠️ Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs Oxlint for code quality and linting checks.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the [LICENSE](LICENSE) file for details.
