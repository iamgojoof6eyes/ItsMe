import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code,
  ExternalLink,
  Filter,
  Globe,
  Layers,
  Play,
  Search,
  Sparkles,
  Star,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import Logo from "@/assets/R.svg";

const projectCategories = [
  "All Originals",
  "Full-Stack Web Apps",
  "Frontend Systems",
  "Developer Tools & APIs",
  "AI & Intelligent Apps",
];

const projectsList = [
  {
    id: "raunak-flix-portfolio",
    title: "Raunak Flix - Streaming Portfolio & Blog Engine",
    category: "Full-Stack Web Apps",
    season: "S1",
    episode: "E1",
    matchScore: "100% Match",
    badge: "NETFLIX ORIGINAL",
    coverImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop",
    synopsis: "A high-performance Netflix-styled portfolio application featuring dynamic glob markdown blog parsing, multi-profile state management, custom Web Audio synthesis, and glassmorphic UI tokens.",
    techStack: ["React 19", "Redux Toolkit", "TailwindCSS v4", "Vite 8", "Web Audio API", "Remark / GFM"],
    liveDemoUrl: "https://github.com/iamgojoof6eyes/ItsMe",
    githubUrl: "https://github.com/iamgojoof6eyes/ItsMe",
    architectureHighlights: [
      "Dynamic Vite Glob import loader parsing raw markdown files on mount.",
      "Redux Toolkit viewer slice with synchronized localStorage state.",
      "Synthesized dual-oscillator Web Audio API Netflix 'Ta-dum' sound effect.",
      "Strict route protection with CheckWatching component wrapper.",
    ],
  },
  {
    id: "ai-copilot-studio",
    title: "AI Agent Copilot Studio & Multi-Agent Orchestrator",
    category: "AI & Intelligent Apps",
    season: "S1",
    episode: "E2",
    matchScore: "99% Match",
    badge: "FEATURED ORIGINAL",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    synopsis: "An autonomous developer studio that delegates sub-tasks to specialized AI agents, parses tool execution logs in real-time, and renders markdown execution plans.",
    techStack: ["React", "Node.js", "Appwrite DB", "TailwindCSS", "JSON Schema", "REST APIs"],
    liveDemoUrl: "https://github.com/iamgojoof6eyes",
    githubUrl: "https://github.com/iamgojoof6eyes",
    architectureHighlights: [
      "Subagent state isolation with reactive background task notifications.",
      "Real-time JSON Lines log parser and stream viewer.",
      "Custom tool schema validation and parameter matching engine.",
    ],
  },
  {
    id: "cloud-dev-dashboard",
    title: "Cloud Dev Command Center & API Monitor",
    category: "Developer Tools & APIs",
    season: "S1",
    episode: "E3",
    matchScore: "98% Match",
    badge: "POPULAR ORIGINAL",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    synopsis: "A real-time developer dashboard tracking cloud server metrics, API response latency, database queries, and deployment pipeline health.",
    techStack: ["React 19", "Recharts", "Node.js", "Express", "Appwrite", "TailwindCSS"],
    liveDemoUrl: "https://github.com/iamgojoof6eyes",
    githubUrl: "https://github.com/iamgojoof6eyes",
    architectureHighlights: [
      "WebSocket streaming connection for sub-10ms metric updates.",
      "Custom analytics charting components with theme token hooks.",
      "Role-based access control (RBAC) with Appwrite authentication.",
    ],
  },
  {
    id: "e-commerce-cinema",
    title: "Cinematic E-Commerce Platform & Checkout Engine",
    category: "Full-Stack Web Apps",
    season: "S2",
    episode: "E1",
    matchScore: "97% Match",
    badge: "NETFLIX ORIGINAL",
    coverImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    synopsis: "A high-conversion online store with immersive video product preview cards, instant client-side cart updates, and secure payment processing flow.",
    techStack: ["React", "Redux Toolkit", "Node.js", "Stripe API", "TailwindCSS"],
    liveDemoUrl: "https://github.com/iamgojoof6eyes",
    githubUrl: "https://github.com/iamgojoof6eyes",
    architectureHighlights: [
      "Client-side optimistic cart updates with persistent storage.",
      "Lazy-loaded video backdrops for instant page load speed.",
      "Stripe payment gateway integration with webhooks.",
    ],
  },
  {
    id: "design-system-tokens",
    title: "Glassmorphism UI Component Library & Token Suite",
    category: "Frontend Systems",
    season: "S2",
    episode: "E2",
    matchScore: "99% Match",
    badge: "DESIGN SYSTEM",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    synopsis: "A production UI library containing 40+ accessible, glassmorphic React components powered by TailwindCSS v4 design tokens and ARIA compliance.",
    techStack: ["React 19", "TailwindCSS v4", "Vite", "Lucide Icons", "Accessibility (a11y)"],
    liveDemoUrl: "https://github.com/iamgojoof6eyes",
    githubUrl: "https://github.com/iamgojoof6eyes",
    architectureHighlights: [
      "Utility-first Tailwind v4 setup with custom color variables.",
      "Full keyboard navigation and ARIA compliance across modals and carousels.",
      "Tree-shakable ES module distribution.",
    ],
  },
  {
    id: "task-workflow-kanban",
    title: "Agile Task Workflow & Kanban Engine",
    category: "Frontend Systems",
    season: "S2",
    episode: "E3",
    matchScore: "96% Match",
    badge: "UTILITY APP",
    coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    synopsis: "An intuitive drag-and-drop task management board featuring real-time column sorting, task filtering, sub-task checklists, and activity feeds.",
    techStack: ["React", "HTML5 Drag & Drop", "Redux Toolkit", "TailwindCSS"],
    liveDemoUrl: "https://github.com/iamgojoof6eyes",
    githubUrl: "https://github.com/iamgojoof6eyes",
    architectureHighlights: [
      "Native HTML5 Drag and Drop API integration with smooth drop indicators.",
      "Undo/redo state stack for instant card recovery.",
      "Filter cards by tags, assignees, and priority levels.",
    ],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Originals");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter projects by category & search query
  const filteredProjects = projectsList.filter((proj) => {
    const matchesCategory =
      selectedCategory === "All Originals" || proj.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredProject = projectsList[0];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-black px-6 py-3 border-b border-zinc-800/80 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-300">
            Raunak Flix Catalogue: <strong className="text-white">{projectsList.length} Original Applications</strong>
          </span>
          <span className="hidden sm:inline-block rounded bg-red-600/20 px-2 py-0.5 text-[10px] font-bold text-red-400 border border-red-800/50">
            FULL-STACK & FRONTEND
          </span>
        </div>
      </div>

      {/* Hero Billboard */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
        <img
          src={featuredProject.coverImage}
          alt={featuredProject.title}
          className="h-full w-full object-cover transform scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute bottom-12 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-3 flex items-center gap-2">
            <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              FEATURED ORIGINAL
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight">
            {featuredProject.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="text-emerald-400 font-bold">{featuredProject.matchScore}</span>
            <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
              {featuredProject.season} {featuredProject.episode}
            </span>
            <span className="text-zinc-400">• Production-Grade Engineering</span>
          </div>

          <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg leading-relaxed">
            {featuredProject.synopsis}
          </p>

          {/* Featured Project Tech Stack Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {featuredProject.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-red-950/80 px-2.5 py-1 text-xs font-bold text-red-300 border border-red-800/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setActiveModalProject(featuredProject)}
              className="flex items-center gap-2 rounded bg-white px-7 py-3 font-bold text-black transition hover:bg-zinc-200 cursor-pointer shadow-lg"
            >
              <Play className="h-5 w-5 fill-black" />
              <span>Explore Architecture & Details</span>
            </button>
            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded bg-zinc-800/80 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
            >
              <Code className="h-5 w-5 text-emerald-400" />
              <span>Source Code</span>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-10 space-y-10">
        {/* Search & Category Filter Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer ${selectedCategory === cat
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(229,9,20,0.6)] scale-105"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Bar for Projects & Tech Stacks */}
          <div className="relative flex items-center min-w-[260px]">
            <Search className="absolute left-3 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects or tech (e.g. React, Node)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-zinc-900 pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 border border-zinc-800 focus:border-red-600 focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-zinc-500 hover:text-white cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-xl bg-zinc-900/60 p-12 text-center border border-zinc-800">
            <h3 className="text-xl font-bold text-white">No Projects Found</h3>
            <p className="text-zinc-400 text-sm mt-2">
              No original applications match your filter query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Originals");
                setSearchQuery("");
              }}
              className="mt-6 rounded bg-red-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-red-700 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-900/90 border border-zinc-800 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:border-red-600/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_25px_rgba(229,9,20,0.4)]"
              >
                {/* Cover Image & Season Badge */}
                <div className="relative aspect-video w-full overflow-hidden cursor-pointer" onClick={() => setActiveModalProject(proj)}>
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

                  {/* Top Branding Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <img src={Logo} alt="R" className="h-5 w-auto drop-shadow-[0_0_6px_rgba(229,9,20,0.9)]" />
                    <span className="rounded bg-red-600 px-2 py-0.5 text-[9px] font-black uppercase text-white shadow">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold text-zinc-300 backdrop-blur-md border border-zinc-700">
                    {proj.season} {proj.episode}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span className="text-emerald-400 font-bold">{proj.matchScore}</span>
                      <span className="text-zinc-400">{proj.category}</span>
                    </div>

                    <h3
                      onClick={() => setActiveModalProject(proj)}
                      className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug cursor-pointer line-clamp-1"
                    >
                      {proj.title}
                    </h3>

                    <p className="text-xs text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                      {proj.synopsis}
                    </p>
                  </div>

                  {/* Prominent Tech Stack Tags */}
                  <div className="pt-3 border-t border-zinc-800/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Technologies & Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-300 border border-zinc-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="bg-zinc-950 px-6 py-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="text-xs font-bold text-zinc-300 hover:text-white transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>More Info</span>
                    <ChevronRight className="h-3.5 w-3.5 text-red-500" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition"
                      title="View Source Code"
                    >
                      <Code className="h-4 w-4" />
                    </a>
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded bg-red-600 px-3 py-1 text-xs font-bold text-white hover:bg-red-700 transition cursor-pointer"
                    >
                      <span>Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Netflix Title Preview Popup Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Cover Image */}
            <div className="relative h-64 w-full flex-shrink-0 overflow-hidden">
              <img
                src={activeModalProject.coverImage}
                alt={activeModalProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-zinc-300 hover:text-white border border-zinc-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="rounded bg-red-600 px-2.5 py-1 text-xs font-extrabold uppercase text-white shadow">
                  {activeModalProject.badge}
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                  {activeModalProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body Scroll Area */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300 flex-1">
              <div className="flex items-center gap-4 text-xs font-semibold border-b border-zinc-800 pb-3">
                <span className="text-emerald-400 font-bold">{activeModalProject.matchScore}</span>
                <span className="text-zinc-300 border border-zinc-700 px-2 py-0.5 rounded">
                  {activeModalProject.season} {activeModalProject.episode}
                </span>
                <span className="text-zinc-400 font-bold">{activeModalProject.category}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
                  Synopsis & Overview
                </h4>
                <p className="leading-relaxed text-zinc-200">
                  {activeModalProject.synopsis}
                </p>
              </div>

              {/* Complete Tech Stack Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Technologies & Frameworks Used
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded bg-zinc-950 p-2.5 border border-zinc-800 text-xs font-mono text-white"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2 flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Engineering Architecture Highlights
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeModalProject.architectureHighlights.map((hi, i) => (
                    <li key={i} className="flex items-start gap-2 bg-zinc-950/60 p-2.5 rounded border border-zinc-800/80">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{hi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="bg-zinc-950 px-6 py-4 border-t border-zinc-800 flex items-center justify-between">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white transition"
              >
                <Code className="h-4 w-4 text-emerald-400" />
                <span>View Source Code</span>
              </a>

              <a
                href={activeModalProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded bg-red-600 px-6 py-2 text-xs font-bold text-white hover:bg-red-700 transition cursor-pointer shadow-md"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
