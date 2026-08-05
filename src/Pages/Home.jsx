import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearViewer } from "@/store/viewer";
import {
  Award,
  BookOpen,
  Briefcase,
  Code,
  Compass,
  FileText,
  Mail,
  Play,
  Sparkles,
  Terminal,
  UserCheck,
  Users,
} from "lucide-react";
import Logo from "@/assets/R.svg";
import { getAllBlogs, getBlogsByProfile } from "@/utils/blogLoader";
import BlogCard from "@/components/Blog/BlogCard";
import BlogPreviewModal from "@/components/Blog/BlogPreviewModal";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentViewer = useSelector((state) => state.viewer.currentViewer);
  const profileId = (currentViewer?.id || currentViewer?.name || "explorer").toLowerCase();
  const blogs = getBlogsByProfile(profileId);
  const [previewBlog, setPreviewBlog] = useState(null);

  const handleSwitchProfile = () => {
    dispatch(clearViewer());
    navigate("/", { replace: true });
  };

  const renderNoBlogsCard = (profileName = "Profile") => (
    <div
      onClick={() => navigate("/introduction")}
      className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-red-950/40 p-8 border border-zinc-800 transition-all duration-300 hover:scale-[1.01] hover:border-red-600 hover:shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_20px_rgba(229,9,20,0.4)] flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-500 border border-red-600/40 group-hover:scale-110 transition-transform flex-shrink-0">
          <UserCheck className="h-6 w-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            {profileName.toUpperCase()} SPOTLIGHT
          </span>
          <h3 className="text-xl font-bold text-white mt-1 group-hover:text-red-400 transition-colors">
            No Documentaries for {profileName} Profile Yet
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm mt-1">
            Discover Raunak's complete background, core principles, engineering journey, and creative story in the About Me section.
          </p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate("/introduction");
        }}
        className="rounded-lg bg-red-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg flex items-center gap-2"
      >
        <span>Behind The Scenes / About Me →</span>
      </button>
    </div>
  );

  // Helper to render custom cards for skills / projects
  const renderSimpleCard = (title, category, subtitle, image, onClick, match = "98% Match") => (
    <div
      onClick={onClick}
      className="group relative aspect-video w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-md bg-zinc-900 border border-zinc-800 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_20px_rgba(229,9,20,0.5)]"
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5">
        <img src={Logo} alt="R" className="h-5 w-auto drop-shadow-[0_0_6px_rgba(229,9,20,0.9)]" />
        <span className="rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-zinc-300 backdrop-blur-md border border-zinc-700/50">
          {category}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-8">
        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-400">
          <span className="font-semibold text-emerald-400">{match}</span>
          <span className="truncate max-w-[120px]">{subtitle}</span>
        </div>
      </div>
    </div>
  );

  // -------------------------------------------------------------
  // RECRUITER VIEW
  // -------------------------------------------------------------
  if (profileId.includes("recruiter")) {
    return (
      <div className="min-h-screen bg-black text-white pb-24">
        {/* Recruiter Active Profile Bar */}
        <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-black px-6 py-3 border-b border-red-900/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-300">
              Viewing Profile: <strong className="text-white">Recruiter Mode</strong>
            </span>
            <span className="hidden sm:inline-block rounded bg-red-600/20 px-2 py-0.5 text-[10px] font-bold text-red-400 border border-red-800/50">
              CANDIDATE REEL
            </span>
          </div>
          <button
            onClick={handleSwitchProfile}
            className="text-xs font-semibold text-zinc-400 hover:text-white transition cursor-pointer"
          >
            Switch Profile →
          </button>
        </div>

        {/* Hero Billboard */}
        <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Recruiter View"
            className="h-full w-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-3 flex items-center gap-2">
              <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
              <span className="text-xs font-bold uppercase tracking-[0.2e] text-red-500">
                PYTHON & FULL-STACK DEVELOPER • DATA SCRAPING & AI BASICS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
              Raunak • Python & Web Engineer
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="text-emerald-400 font-bold">99% Match for Tech Roles</span>
              <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
                Python • FastAPI • Web Scraping • React.js
              </span>
              <span className="text-zinc-400">• Basics of AI • Physics & Maths • Sketching</span>
            </div>

            <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
              Specialized in Python development, Web Scraping & Data Crawling (Pandas, Matplotlib), FastAPI/Express backends, and React.js interfaces. Passionate about AI fundamentals, Physics, Mathematics, and creative sketching.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/introduction")}
                className="flex items-center gap-2 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-lg"
              >
                <UserCheck className="h-5 w-5" />
                <span>Behind The Scenes / About Me →</span>
              </button>
              <button
                onClick={() => navigate("/originals")}
                className="flex items-center gap-2 rounded bg-white px-6 py-3 font-bold text-black transition hover:bg-zinc-200 cursor-pointer"
              >
                <Briefcase className="h-5 w-5" />
                <span>View Portfolio Projects</span>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 rounded bg-zinc-800/80 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
              >
                <Mail className="h-5 w-5 text-red-500" />
                <span>Get In Touch / Hire</span>
              </button>
            </div>
          </div>
        </section>

        {/* Recruiter Section Rows */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 mt-8 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
              Featured Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {renderSimpleCard("About Me / Behind Scenes", "Biography", "Full Story & Principles", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", () => navigate("/introduction"), "99% Match")}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
              Technical Writing & System Docs
            </h2>
            {blogs.length === 0 ? (
              renderNoBlogsCard("Recruiter")
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogs.map((b) => (
                  <div key={b.slug} className="aspect-video w-full">
                    <BlogCard blog={b} onMoreInfo={(blog) => setPreviewBlog(blog)} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-red-950/40 p-8 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                RECRUITER QUICK ACTION
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Interested in working together?</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Reach out directly via email, GitHub, or LinkedIn to schedule an interview or request code samples.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-lg bg-red-600 px-8 py-3.5 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg"
            >
              Contact Candidate Now →
            </button>
          </div>
        </div>

        {previewBlog && (
          <BlogPreviewModal blog={previewBlog} allBlogs={blogs} onClose={() => setPreviewBlog(null)} />
        )}
      </div>
    );
  }

        // -------------------------------------------------------------
        // DEVELOPER VIEW
        // -------------------------------------------------------------
        if (profileId.includes("developer")) {
    return (
        <div className="min-h-screen bg-black text-white pb-24 font-mono">
          {/* Developer Active Profile Bar */}
          <div className="bg-zinc-900/90 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span className="text-xs text-zinc-300">
                Active Environment: <strong className="text-emerald-400">Developer Command Center</strong>
              </span>
              <span className="rounded bg-emerald-950 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-800/50">
                DEV MODE
              </span>
            </div>
            <button
              onClick={handleSwitchProfile}
              className="text-xs text-zinc-400 hover:text-white transition cursor-pointer font-sans"
            >
              Switch Profile →
            </button>
          </div>

          {/* Hero Billboard */}
          <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Developer View"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12 font-sans">
              <div className="mb-3 flex items-center gap-2">
                <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  ARCHITECTURE & DEV LAB
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
                Dev Terminal & Codebases
              </h1>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
                <span className="text-emerald-400 font-bold font-mono">STATUS: 200 OK</span>
                <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded font-mono">
                  Vite 8 + React 19 + Tailwind v4
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
                Explore state isolation, Redux Toolkit slices, dynamic import modules, custom hooks, and markdown parsing workflows used across this project.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/introduction")}
                  className="flex items-center gap-2 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-lg"
                >
                  <UserCheck className="h-5 w-5" />
                  <span>Behind The Scenes / About Me →</span>
                </button>
                <button
                  onClick={() => navigate("/documentary")}
                  className="flex items-center gap-2 rounded bg-zinc-800 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <FileText className="h-5 w-5 text-red-500" />
                  <span>Read Tech Articles</span>
                </button>
                <button
                  onClick={() => navigate("/originals")}
                  className="flex items-center gap-2 rounded bg-zinc-800 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <Code className="h-5 w-5 text-emerald-400" />
                  <span>Browse Code Projects</span>
                </button>
              </div>
            </div>
          </section>

          {/* Developer Section Rows */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-8 space-y-10 font-sans">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
                <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
                Dev Tech Stack & Dependencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {renderSimpleCard("About Me / Behind Scenes", "Biography", "Full Story & Principles", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", () => navigate("/introduction"), "99% Match")}
                {renderSimpleCard("React 19 & DOM", "Framework", "v19.2.8", "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop", () => navigate("/originals"), "100% Match")}
                {renderSimpleCard("Vite 8 & ESBuild", "Bundler", "Instant HMR", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", () => navigate("/documentary"), "99% Match")}
                {renderSimpleCard("Redux Toolkit", "State Machine", "Slice & Dispatch", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", () => navigate("/originals"), "98% Match")}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
                <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
                Architecture & Tech Documentaries
              </h2>
              {getBlogsByProfile("Developer").length === 0 ? (
                renderNoBlogsCard("Developer")
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {getBlogsByProfile("Developer").map((b) => (
                    <div key={b.slug} className="aspect-video w-full">
                      <BlogCard blog={b} onMoreInfo={(blog) => setPreviewBlog(blog)} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {previewBlog && (
            <BlogPreviewModal blog={previewBlog} allBlogs={blogs} onClose={() => setPreviewBlog(null)} />
          )}
        </div>
        );
  }

        // -------------------------------------------------------------
        // READER VIEW
        // -------------------------------------------------------------
        if (profileId.includes("reader")) {
    return (
        <div className="min-h-screen bg-black text-white pb-24">
          {/* Reader Active Profile Bar */}
          <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-red-500" />
              <span className="text-xs font-semibold text-zinc-300">
                Profile: <strong className="text-white">Reader & Article Enthusiast</strong>
              </span>
            </div>
            <button
              onClick={handleSwitchProfile}
              className="text-xs font-semibold text-zinc-400 hover:text-white transition cursor-pointer"
            >
              Switch Profile →
            </button>
          </div>

          {/* Hero Billboard */}
          <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop"
              alt="Reader View"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12">
              <div className="mb-3 flex items-center gap-2">
                <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  THE ENGINEERING PRESS
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
                Documentaries & Stories
              </h1>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
                <span className="text-emerald-400 font-bold">98% Story Match</span>
                <span className="text-zinc-300">{blogs.length} Articles Available</span>
                <span className="text-zinc-400">• High-Readability Markdown</span>
              </div>

              <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
                Explore in-depth articles on building streaming UIs, system architecture, AI coding agents, and software engineering career insights.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/introduction")}
                  className="flex items-center gap-2 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-lg"
                >
                  <UserCheck className="h-5 w-5" />
                  <span>Behind The Scenes / About Me →</span>
                </button>
                <button
                  onClick={() => navigate("/documentary")}
                  className="flex items-center gap-2 rounded bg-zinc-800 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <Play className="h-5 w-5 fill-white" />
                  <span>Start Reading Articles</span>
                </button>
              </div>
            </div>
          </section>

          {/* Reader Section Rows */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-8 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
                Featured Documentary Series
              </h2>
              {getBlogsByProfile("Reader").length === 0 ? (
                renderNoBlogsCard("Reader")
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {getBlogsByProfile("Reader").map((b) => (
                    <div key={b.slug} className="aspect-video w-full">
                      <BlogCard blog={b} onMoreInfo={(blog) => setPreviewBlog(blog)} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {previewBlog && (
            <BlogPreviewModal blog={previewBlog} allBlogs={blogs} onClose={() => setPreviewBlog(null)} />
          )}
        </div>
        );
  }

        // -------------------------------------------------------------
        // DEFAULT / EXPLORER VIEW
        // -------------------------------------------------------------
        return (
        <div className="min-h-screen bg-black text-white pb-24">
          {/* Explorer Active Profile Bar */}
          <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Compass className="h-4 w-4 text-red-500 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-xs font-semibold text-zinc-300">
                Profile: <strong className="text-white">Explorer Mode</strong>
              </span>
            </div>
            <button
              onClick={handleSwitchProfile}
              className="text-xs font-semibold text-zinc-400 hover:text-white transition cursor-pointer"
            >
              Switch Profile →
            </button>
          </div>

          {/* Hero Billboard */}
          <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"
              alt="Explorer View"
              className="h-full w-full object-cover transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-16 left-0 right-0 mx-auto max-w-7xl px-6 md:px-12">
              <div className="mb-3 flex items-center gap-2">
                <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                  RAUNAK FLIX UNIVERSE
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-extrabold text-white max-w-4xl leading-tight">
                Developer • Designer • Creator
              </h1>

              <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
                <span className="text-emerald-400 font-bold">100% Match for Explorers</span>
                <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
                  Interactive Universe
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
                Welcome to the Raunak Flix portfolio platform. Explore original projects, read engineering documentaries, check awards, and connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/introduction")}
                  className="flex items-center gap-2 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-lg"
                >
                  <UserCheck className="h-5 w-5" />
                  <span>Behind The Scenes / About Me →</span>
                </button>
                <button
                  onClick={() => navigate("/originals")}
                  className="flex items-center gap-2 rounded bg-white px-6 py-3 font-bold text-black transition hover:bg-zinc-200 cursor-pointer"
                >
                  <Play className="h-5 w-5 fill-black" />
                  <span>Explore Originals</span>
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 rounded bg-zinc-800/80 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <Users className="h-5 w-5 text-emerald-400" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          </section>

          {/* Explorer Section Rows */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-8 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
                Trending Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {renderSimpleCard("About Me / Behind Scenes", "Biography", "Full Story & Principles", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", () => navigate("/introduction"), "99% Match")}
                {renderSimpleCard("Original Projects", "Originals", "Web Apps & Tools", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", () => navigate("/originals"), "100% Match")}
                {renderSimpleCard("Documentary Blogs", "Documentary", "Tech Articles", "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop", () => navigate("/documentary"), "99% Match")}
                {renderSimpleCard("Cast & Reach Me", "Contact", "Social Channels", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", () => navigate("/contact"), "97% Match")}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
                Featured Documentaries (Blogs)
              </h2>
              {getBlogsByProfile("Explorer").length === 0 ? (
                renderNoBlogsCard("Explorer")
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {getBlogsByProfile("Explorer").map((b) => (
                    <div key={b.slug} className="aspect-video w-full">
                      <BlogCard blog={b} onMoreInfo={(blog) => setPreviewBlog(blog)} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {previewBlog && (
            <BlogPreviewModal blog={previewBlog} allBlogs={blogs} onClose={() => setPreviewBlog(null)} />
          )}
        </div>
        );
}