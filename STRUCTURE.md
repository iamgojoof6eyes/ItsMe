# 📋 Project Data & Content Structure Guide

This document contains the exact schemas, templates, and conventions to follow whenever you create a **new Blog post**, add a **Project**, record an **Achievement**, or update your **Behind The Scenes** timeline.

---

## 📖 1. Adding a New Blog File (Documentary Engine)

📁 **Location**: Place your new Markdown file in [`src/blogs/`](./src/blogs/) (e.g. `src/blogs/my-new-post.md`).

> 💡 **Dynamic Feature**: Adding a new `category:` value automatically creates a new category pill in the filter bar AND a dedicated Netflix category row on the main blog page!

### 📝 Markdown Template (`src/blogs/example-post.md`):

```markdown
---
title: "My New Tech Documentary Title"
slug: "my-new-tech-documentary"
date: "2026-08-05"
readTime: "6 min read"
category: "Python & Data"
matchScore: "99% Match"
rating: "HD 4K HDR"
season: "S1"
episode: "E1"
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
synopsis: "A brief 1-2 sentence overview of what this documentary covers."
author: "Raunak"
authorRole: "Lead Architect & Developer"
authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Raunak"
tags: ["Python", "FastAPI", "Web Scraping"]
featured: false
---

# My New Tech Documentary Title

Write your full Markdown article body here using standard markdown syntax.

## Section 1: Overview
You can use code blocks, lists, quotes, and links:

```python
def scrape_data(url):
    response = requests.get(url)
    return response.text
```

## Section 2: Key Learnings
- Point 1
- Point 2


### 🔑 Frontmatter Field Definitions:
| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The main title displayed on cards and hero reader. |
| `slug` | `string` | URL identifier (e.g., `dsa-and-life` -> `/documentary/dsa-and-life`). |
| `date` | `string` | Date string formatted `YYYY-MM-DD`. |
| `readTime` | `string` | Estimated reading duration (e.g. `"5 min read"`). |
| `category` | `string` | **Category Name**. Dynamically creates a new category pill & Netflix blog row! |
| `matchScore` | `string` | Netflix match percentage badge (e.g. `"98% Match"`). |
| `rating` | `string` | Badge tag (e.g. `"HD 4K HDR"`). |
| `season` | `string` | Season number tag (e.g. `"S1"`). |
| `episode` | `string` | Episode number tag (e.g. `"E1"`). |
| `coverImage` | `string` | Image URL for card backdrop and hero billboard. |
| `synopsis` | `string` | Short preview text shown on cards and modals. |
| `author` | `string` | Author name (`"Raunak"`). |
| `authorRole` | `string` | Author role subtitle (`"Python & Web Developer"`). |
| `authorAvatar`| `string` | Avatar image URL. |
| `tags` | `array` | List of tag strings e.g. `["Python", "Scraping"]`. |
| `featured` | `boolean` | Set `true` to showcase this blog on the main billboard. |

---


## ⚡ 2. Adding a Project (Originals)

📁 **Location**: Edit [`src/Pages/Projects.jsx`](./src/Pages/Projects.jsx) and add your new object to the `projectsList` array.

### 📝 Project Object Template:

```javascript
{
  id: "my-unique-project-id",
  title: "Project Title Name",
  category: "Full-Stack Web Apps", // Categories: "Full-Stack Web Apps", "Frontend Systems", "Developer Tools & APIs", "AI & Intelligent Apps", "Others"
  format: "Movie", // Independent standalone project format
  matchScore: "99% Match",
  badge: "NETFLIX ORIGINAL",
  coverImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop",
  synopsis: "Comprehensive overview describing what the project does and the problem it solves.",
  techStack: ["Python", "FastAPI", "React", "MongoDB Atlas", "TailwindCSS"],
  liveDemoUrl: "https://github.com/iamgojoof6eyes/your-repo", // can be null if no live demo exists
  githubUrl: "https://github.com/iamgojoof6eyes/your-repo",
  architectureHighlights: [
    "First key technical architectural feature.",
    "Second key technical highlight or optimization.",
    "Third key highlight.",
  ],
},
```

---

## 🏆 3. Adding an Achievement / Accolade

📁 **Location**: Edit [`src/Pages/Achivements.jsx`](./src/Pages/Achivements.jsx) and add your new object to the `achievementsList` array.

### 📝 Achievement Object Template:

```javascript
{
  id: "my-unique-achievement-id",
  title: "Certification or Award Title",
  category: "Certifications", // Categories: "Hackathons & Contests", "Certifications", "Recognition & Awards", "Academic Honors"
  issuer: "Issuing Organization / Academy",
  year: "2026",
  matchScore: "100% Match",
  type: "Gold Trophy", // e.g. "Gold Trophy", "Silver Medal", "Professional Cert", "Excellence Award"
  iconColor: "text-amber-400", // Tailwind color class e.g. text-amber-400, text-blue-400, text-cyan-400
  badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/50", // Badge border & background class
  coverImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
  synopsis: "Detailed description of the honor, score achieved, or hackathon project.",
  skills: ["Python", "FastAPI", "Web Scraping"],
  credentialUrl: "https://github.com/iamgojoof6eyes",
},
```

---

## 👤 4. Adding an Episode or Skill to "Behind The Scenes" (About Me)

📁 **Location**: Edit [`src/Pages/AboutMe.jsx`](./src/Pages/AboutMe.jsx).

### 🎬 A. Adding a New Episode to `episodes` Array:

```javascript
import { Code, Telescope, Sparkles, Pause, Play, Layers, BrainCircuit, Briefcase } from "lucide-react";

// Inside the episodes array in AboutMe.jsx:
{
  season: "S2",
  episode: "E6",
  title: "Title of Your Life Milestone",
  tagline: "Short 1-line catchy tagline",
  description: "Detailed story paragraph about this milestone or phase in your developer journey.",
  icon: Briefcase // Pass a Lucide icon component e.g. Code, Play, Layers, Briefcase, BrainCircuit
},
```

### 🛠️ B. Updating Skills in `techSkills` Array:

```javascript
// Inside the techSkills array in AboutMe.jsx:
{ 
  category: "Python & Backend Systems", 
  items: ["Python", "FastAPI", "Express", "Node.js", "MongoDB Atlas", "Java", "C / C++", "RESTful APIs", "JWT"] 
},
```
