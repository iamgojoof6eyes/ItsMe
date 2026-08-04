import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Code,
  Compass,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Film,
  Globe,
  Heart,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Play,
  Sparkles,
  Terminal,
  UserCheck,
  Zap,
} from "lucide-react";
import Logo from "@/assets/R.svg";
import RaunakAvatar from "@/assets/Raunak.svg";
import HeroImage from "@/assets/hero.png";

const episodes = [
  {
    season: "S1",
    episode: "E1",
    title: "The Origin & First Lines of Code",
    tagline: "Discovering Web Engineering",
    description:
      "My journey began with a curiosity about how the web functions under the hood. From crafting simple HTML pages to discovering JavaScript reactivity, I fell in love with turning complex ideas into functional web apps.",
    icon: Code,
  },
  {
    season: "S1",
    episode: "E2",
    title: "Full-Stack Architecture & State Machines",
    tagline: "Mastering React, Node & Redux",
    description:
      "Deep diving into modern frontend frameworks, global state management (Redux Toolkit), component isolation, and backend services (Node.js, Appwrite). Building scalable systems with clean abstractions.",
    icon: Layers,
  },
  {
    season: "S1",
    episode: "E3",
    title: "Streaming-Grade UI & Craftsmanship",
    tagline: "Designing Experiences That Wow",
    description:
      "Obsessing over UI aesthetics, glassmorphism, micro-animations, and TailwindCSS design tokens. Believing that software should not only work flawlessly but also feel premium and delightful to use.",
    icon: Sparkles,
  },
  {
    season: "S1",
    episode: "E4",
    title: "Autonomous AI & The Future of Engineering",
    tagline: "Orchestrating Next-Gen Workflows",
    description:
      "Exploring the frontier of AI pair-programmers, autonomous coding agents, prompt engineering, and intelligent application design to multiply developer velocity tenfold.",
    icon: Cpu,
  },
];

const techSkills = [
  { category: "Frontend", items: ["React 19", "Redux Toolkit", "TailwindCSS v4", "Vite", "JavaScript (ESNext)", "HTML5 / CSS3"] },
  { category: "Backend & Services", items: ["Node.js", "Appwrite", "RESTful APIs", "JSON Schemas", "Authentication"] },
  { category: "Tools & DevOps", items: ["Git / GitHub", "Oxlint / ESLint", "Antigravity AI", "Vite Bundler", "Web Audio API"] },
  { category: "Design Principles", items: ["Glassmorphism", "Micro-Animations", "Responsive Layouts", "Dark Mode Aesthetics"] },
];

export default function AboutMe() {
  const navigate = useNavigate();
  const [activeEpisode, setActiveEpisode] = useState(0);

  const resumeUrl = "https://drive.google.com"; // Replace with direct resume PDF or Google Drive URL if desired

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-black px-6 py-3 border-b border-zinc-800/80 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-300">
            Documentary Series: <strong className="text-white">Behind The Scenes with Raunak</strong>
          </span>
          <span className="hidden sm:inline-block rounded bg-red-600/20 px-2 py-0.5 text-[10px] font-bold text-red-400 border border-red-800/50">
            SPECIAL EDITION
          </span>
        </div>
      </div>

      {/* Hero Billboard */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
        <img
          src={HeroImage || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"}
          alt="Behind The Scenes"
          className="h-full w-full object-cover transform scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute bottom-12 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-3 flex items-center gap-2">
            <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              BEHIND THE SCENES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            Raunak • Full-Stack Architect
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
            <span className="text-emerald-400 font-bold">99% Match for Engineering Roles</span>
            <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
              HD 4K HDR
            </span>
            <span className="text-zinc-400">• Developer • Designer • Creator</span>
          </div>

          <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
            An inside look into my engineering principles, technology stack, career timeline, and passion for building high-performance web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Prominent External Resume Link */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-[0_0_25px_rgba(229,9,20,0.6)]"
            >
              <FileText className="h-5 w-5" />
              <span>View Resume (CV)</span>
              <ExternalLink className="h-4 w-4 opacity-80" />
            </a>
            <button
              onClick={() => navigate("/documentary")}
              className="flex items-center gap-2 rounded bg-white px-7 py-3 font-bold text-black transition hover:bg-zinc-200 cursor-pointer shadow-lg"
            >
              <BookOpen className="h-5 w-5" />
              <span>Read Documentaries</span>
            </button>
            <button
              onClick={() => navigate("/originals")}
              className="flex items-center gap-2 rounded bg-zinc-800/80 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
            >
              <Briefcase className="h-5 w-5 text-red-500" />
              <span>View Original Projects</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-12 space-y-16">
        {/* Quick Bio & Profile Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-zinc-900/60 p-8 rounded-xl border border-zinc-800 backdrop-blur-xl">
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-red-600 shadow-[0_0_30px_rgba(229,9,20,0.5)]">
              <img
                src={RaunakAvatar}
                alt="Raunak"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Raunak</h3>
            <p className="text-xs text-red-500 font-semibold mt-0.5">Software Architect & Frontend Specialist</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="h-3.5 w-3.5 text-zinc-500" />
              <span>India (Remote Available)</span>
            </div>

            {/* Direct Resume Link Button inside Bio Card */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-zinc-800 py-2.5 text-xs font-bold text-white border border-zinc-700 transition hover:bg-zinc-700 hover:border-red-600 cursor-pointer shadow-md"
            >
              <FileText className="h-4 w-4 text-red-500" />
              <span>Open External Resume (PDF)</span>
              <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
            </a>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <UserCheck className="h-6 w-6 text-red-600" />
              Bio & Engineering Philosophy
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              I am a software engineer passionate about building clean, high-performance, and visually captivating web applications. I bridge the gap between complex technical architecture and seamless user experiences.
            </p>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              My philosophy centers around modular design, strict control flow scoping, state machine isolation, and leveraging modern AI agent tools to deliver production-ready software efficiently.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Experience</span>
                <span className="text-white font-bold text-sm">Full-Stack & Web</span>
              </div>
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Code Quality</span>
                <span className="text-emerald-400 font-bold text-sm">Clean & Scalable</span>
              </div>
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Resume</span>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 font-bold text-sm hover:underline flex items-center gap-1">
                  <span>Available PDF</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Episodes Section (Netflix Season & Episode Format) */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="h-5 w-1 bg-red-600 rounded-full inline-block" />
              Episode Timeline: My Journey
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Select an episode below to explore key milestones in my developer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Episode Selector List */}
            <div className="space-y-3 lg:col-span-1">
              {episodes.map((ep, idx) => {
                const IconComp = ep.icon;
                return (
                  <button
                    key={ep.title}
                    onClick={() => setActiveEpisode(idx)}
                    className={`w-full flex items-center gap-4 rounded-lg p-4 text-left transition-all duration-300 cursor-pointer border ${
                      activeEpisode === idx
                        ? "bg-red-600/20 border-red-600 text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                        : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-white">
                      <IconComp className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                        {ep.season} {ep.episode}
                      </span>
                      <h4 className="text-xs font-bold text-white line-clamp-1">{ep.title}</h4>
                      <p className="text-[11px] text-zinc-400 line-clamp-1">{ep.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Episode Display Box */}
            <div className="lg:col-span-2 rounded-xl bg-zinc-900/90 p-8 border border-zinc-800 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded bg-red-600 px-2.5 py-1 text-xs font-black text-white">
                    {episodes[activeEpisode].season} {episodes[activeEpisode].episode}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {episodes[activeEpisode].tagline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-4">
                  {episodes[activeEpisode].title}
                </h3>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-4">
                  {episodes[activeEpisode].description}
                </p>
              </div>

              <div className="mt-8 border-t border-zinc-800/80 pt-4 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-semibold">
                  Episode {activeEpisode + 1} of {episodes.length}
                </span>
                <button
                  onClick={() => navigate("/documentary")}
                  className="flex items-center gap-2 rounded bg-zinc-800 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-700 transition cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5 text-red-500" />
                  <span>Read Related Documentaries</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Arsenal & Skill Matrix */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="h-5 w-1 bg-red-600 rounded-full inline-block" />
              Technical Arsenal & Tools
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Core technologies, libraries, and design patterns utilized in production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSkills.map((grp) => (
              <div
                key={grp.category}
                className="rounded-xl bg-zinc-900/80 p-6 border border-zinc-800 shadow-xl space-y-3 hover:border-red-600/60 transition duration-300"
              >
                <h4 className="text-sm font-bold text-white border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-red-500" />
                  {grp.category}
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {grp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
