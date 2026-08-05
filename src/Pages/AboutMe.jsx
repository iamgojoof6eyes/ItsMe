import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
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
  Pause,
  Play,
  Sparkles,
  Terminal,
  Telescope,
  UserCheck,
  Zap,
  BrainCircuit,
} from "lucide-react";
import Logo from "@/assets/R.svg";
import RaunakAvatar from "@/assets/Raunak.svg";
import HeroImage from "@/assets/hero.png";

const episodes = [
  {
    season: "S1",
    episode: "E1",
    title: "The Origin & First Thought",
    tagline: "Discovered something fascinating",
    description:
      "So I remember always being a gamer, I am a gamer before I am a developer. I always loved playing games and technologies, then one random day a thought struck my mind, 'How this games are made??', this thought changed everything for me. I got to know games are developed by bunch of codes.",
    icon: Code,
  },
  {
    season: "S1",
    episode: "E2",
    title: "The Expolration",
    tagline: "A journey to the next step",
    description:
      "I started with the thought of building a masterpiece game, but then started to explore the possibilities of development, what it can achieve, what can I do with this, then I finally got to know about backend and most complex things. And how it can happen that I avoid complex things so I just jumped into it.",
    icon: Telescope,
  },
  {
    season: "S1",
    episode: "E3",
    title: "Pique Intreset In Schools",
    tagline: "Exploring things which I haven't imagined",
    description:
      "So my first ever programming language was python, I remember I was excited when I took the IP subject in high school. It had python in the syllabus so I took it and started to learn it from youtube, from documentation. I tried to write codes I failed but that never stopped me from learning something new. I kept learning, applying, failing and repeating the whole process again and again. Because every failure or bug I faced gave me something new to try and work on.",
    icon: Sparkles,
  },
  {
    season: "S1",
    episode: "E4",
    title: "A pause",
    tagline: "A comma not a full stop",
    description:
      "So after the 12th I took some break from the coding to get into a college, because to be honest enthusiasm doesn't take you anywhere, the degree does. So for that I took a break from coding. It was a pause not a full stop, so because of that my season of coding life came to a stop. See you in next season",
    icon: Pause,
  },
  {
    season: "S2",
    episode: "E1",
    title: "A New Beginning",
    tagline: "A comeback to my love life",
    description: "So when I got to a college I finally started to get back on track with my coding, as we say a skill which you learnt can't be forgotten completely, so that's what happened to me too, so I started with C and then C++ because they were in the syllabus and trust me the journey was not that easy as it sounds. I have to learn new language and that too in a limited amount of time, I managed to did that and scored good credits. I learnt various new concepts and ofcourse the famous the memory allocation in C and C++ so it was great experience!",
    icon: Play
  },
  {
    season: "S2",
    episode: "E2",
    title: "Learning New Tech Stack",
    tagline: "My journey of being a multilingualism",
    description: "So I started to learn new technologies, I started to learn new languages, I started to learn new frameworks, after learning c and c++ I jumped to learning react for frontend and FASTApi for backend, then I jumped to Java and Javascript that is what I meant by multilingualism, not as in I know multiple languages which I can speak (actually I can speak more than 2 languages).",
    icon: Layers
  },
  {
    season: "S2",
    episode: "E3",
    title: "AI, ML and New Journey",
    tagline: "Learning the skills for my rpg life",
    description: "Explore the foundations of Artificial Intelligence through intelligent agents, search strategies, logical reasoning, planning algorithms, and expert systems. From understanding how machines perceive and solve problems to learning knowledge representation and decision-making, this episode builds the core concepts behind modern AI and its real-world applications.",
    icon: BrainCircuit
  },
  {
    season: "S2",
    episode: "E4",
    title: "DSA and New Journey",
    tagline: "Testing if the sky is the limit or not",
    description: "After learning basic of java I jumped to doing DSA in java and started to learn various new things, new concepts, new approach towards solving problems. It was not easy but it was fun, I mean who else doesn't like challenges, am I right??",
    icon: Code
  },
  {
    season: "S2",
    episode: "E5",
    title: "Internship Time",
    tagline: "Time to meet some new characters",
    description: "I applied to a internship to IIT Ropar Vicharanashala and got selected for it. The internship is great and I met some amazing people and always learning something new.",
    icon: Briefcase
  }

];

const techSkills = [
  { category: "Python & Backend Systems", items: ["Python", "FastAPI", "Express", "Node.js", "MongoDB Atlas", "Java", "C / C++", "RESTful APIs", "JWT"] },
  { category: "Data & Web Intelligence", items: ["Web Scraping", "Web Crawling", "Data Scraping", "Pandas", "Matplotlib", "Data Analysis"] },
  { category: "Frontend & UI Engineering", items: ["React.js", "Tailwind CSS", "JavaScript (ESNext)", "HTML5 / CSS3", "Redux Toolkit", "Vite"] },
  { category: "AI, Science & Creative", items: ["Basics of AI", "Physics & Maths Enthusiast", "Sketching & Creative Arts", "Lifelong Learner"] },
];

export default function AboutMe() {
  const navigate = useNavigate();
  const [activeEpisode, setActiveEpisode] = useState(0);
  const [activeSeasonFilter, setActiveSeasonFilter] = useState("All");

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
          className="h-full w-full object-cover transform scale-115 opacity-80"
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
            Raunak • Python & Full-Stack Developer
          </h1>
          <span className="text-zinc-400 font-normal text-2xl md:text-3xl">Alias: Captain D Ezio</span>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="text-emerald-400 font-bold">99% Match for Tech Roles</span>
            <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
              HD 4K HDR
            </span>
            <span className="text-zinc-400">• Python & FastAPI • Web Scraping • React.js • AI & Maths</span>
          </div>

          <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
            Specialized in Python development, Web Scraping & Crawling, Data analysis (Pandas, Matplotlib), FastAPI/Express backends, and React.js frontend interfaces.
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
                className="h-full w-full object-fit"
              />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Raunak</h3>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">Python & Web Scraping Specialist | React Developer</p>
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
              I am a developer (known online as <span className="text-red-400 font-bold">Captain D Ezio</span>) specializing in Python development, FastAPI & Express backend systems, Web Scraping & Data Crawling (Pandas, Matplotlib), MongoDB Atlas databases, and React.js frontend engineering.
            </p>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Beyond software development, I have a deep curiosity for learning new things—exploring the basics of Artificial Intelligence, solving mathematical problems, diving into Physics concepts, and expressing creativity through sketching.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Starring / Alias</span>
                <span className="text-red-400 font-bold text-sm">Captain D Ezio</span>
              </div>
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Core Focus</span>
                <span className="text-white font-bold text-sm">Python & Data Scraping</span>
              </div>
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Interests</span>
                <span className="text-emerald-400 font-bold text-sm">AI, Physics & Maths</span>
              </div>
              <div className="rounded bg-zinc-950 p-3 border border-zinc-800">
                <span className="text-zinc-500 font-medium block">Creative Hobby</span>
                <span className="text-red-400 font-bold text-sm">Sketching & Art</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Episodes Section (Netflix Season & Episode Format) */}
        <div>
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="h-5 w-1 bg-red-600 rounded-full inline-block" />
                Episode Timeline: My Journey
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Select a season and episode to explore key milestones in my developer journey.
              </p>
            </div>

            {/* Season Filter Tabs */}
            <div className="flex items-center gap-2 rounded-lg bg-zinc-900 p-1 border border-zinc-800 self-start md:self-auto">
              {["All", "S1", "S2"].map((season) => (
                <button
                  key={season}
                  onClick={() => {
                    setActiveSeasonFilter(season);
                    if (season !== "All") {
                      const firstInSeasonIdx = episodes.findIndex((ep) => ep.season === season);
                      if (firstInSeasonIdx !== -1) setActiveEpisode(firstInSeasonIdx);
                    }
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                    activeSeasonFilter === season
                      ? "bg-red-600 text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {season === "All" ? "All Seasons" : season === "S1" ? "Season 1" : "Season 2"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Episode Selector List (Scrollable Container) */}
            <div className="lg:col-span-1 space-y-2.5 max-h-[440px] overflow-y-auto netflix-scrollbar pr-2">
              {episodes.map((ep, idx) => {
                if (activeSeasonFilter !== "All" && ep.season !== activeSeasonFilter) {
                  return null;
                }
                const IconComp = ep.icon;
                return (
                  <button
                    key={`${ep.season}-${ep.episode}-${ep.title}`}
                    onClick={() => setActiveEpisode(idx)}
                    className={`w-full flex items-center gap-3.5 rounded-lg p-3.5 text-left transition-all duration-300 cursor-pointer border ${
                      activeEpisode === idx
                        ? "bg-red-600/20 border-red-600 text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                        : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                      activeEpisode === idx ? "bg-red-600 text-white" : "bg-zinc-800 text-red-500"
                    }`}>
                      <IconComp className="h-4.5 w-4.5" />
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

            {/* Selected Episode Display Box (Sticky at Eye-Level) */}
            <div className="lg:col-span-2 rounded-xl bg-zinc-900/90 p-6 md:p-8 border border-zinc-800 shadow-2xl backdrop-blur-xl flex flex-col justify-between lg:sticky lg:top-24 self-start min-h-[380px]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded bg-red-600 px-2.5 py-1 text-xs font-black text-white">
                    {episodes[activeEpisode].season} {episodes[activeEpisode].episode}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    {episodes[activeEpisode].tagline}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                  {episodes[activeEpisode].title}
                </h3>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-4 bg-zinc-950/60 p-5 rounded-lg border border-zinc-800/80">
                  {episodes[activeEpisode].description}
                </p>
              </div>

              {/* Prev / Next Episode Footer Navigation Controls */}
              <div className="mt-6 border-t border-zinc-800/80 pt-4 flex items-center justify-between">
                <button
                  onClick={() => setActiveEpisode((prev) => Math.max(0, prev - 1))}
                  disabled={activeEpisode === 0}
                  className="flex items-center gap-1.5 rounded bg-zinc-800 px-3.5 py-2 text-xs font-bold text-white hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <span className="text-xs text-zinc-400 font-semibold">
                  Episode {activeEpisode + 1} of {episodes.length}
                </span>

                <button
                  onClick={() => setActiveEpisode((prev) => Math.min(episodes.length - 1, prev + 1))}
                  disabled={activeEpisode === episodes.length - 1}
                  className="flex items-center gap-1.5 rounded bg-red-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer shadow-md"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
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
