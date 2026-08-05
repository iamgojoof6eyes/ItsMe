import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Filter,
  Flame,
  Medal,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import Logo from "@/assets/R.svg";

const achievementCategories = [
  "All Accolades",
  "Hackathons & Contests",
  "Certifications",
  "Engineering Milestones",
  "Recognition & Awards",
];

const achievementsList = [
  {
    id: "participated-college-fests",
    title: "Participated in college fests",
    category: "Hackathons & Contests",
    issuer: "College Judge",
    year: "2025",
    matchScore: "100% Match",
    type: "Gold Trophy",
    iconColor: "text-amber-400",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/50",
    coverImage: "https://images.unsplash.com/vector-1750615396616-284f8eaf7643?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    synopsis: "Made a maze solver which creates a maze and solve it by itself by using BFS and A* Algorithms in C++",
    skills: ["BFS", "A* Algorithms", "C++"],
    credentialUrl: "https://github.com/iamgojoof6eyes/Learnings/tree/main/Sem1/MazeSolver",
  },
];

export default function Achivements() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Accolades");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredAchievements = achievementsList.filter((item) => {
    if (selectedCategory === "All Accolades") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Top Status Bar */}
      <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-black px-6 py-3 border-b border-zinc-800/80 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Trophy className="h-4 w-4 text-amber-400 animate-bounce" />
          <span className="text-xs font-semibold text-zinc-300">
            Raunak's Accolades: <strong className="text-white">Hall of Fame & Certifications</strong>
          </span>
          <span className="hidden sm:inline-block rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-500/50">
            VERIFIED CREDENTIALS
          </span>
        </div>
      </div>

      {/* Hero Billboard */}
      <section className="relative min-h-[440px] w-full overflow-hidden flex flex-col justify-end pb-12 pt-16">
        <img
          src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1200&auto=format&fit=crop"
          alt="Hall of Fame Billboard"
          className="absolute inset-0 h-full w-full object-cover transform scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-3 flex items-center gap-2">
            <img src={Logo} alt="R" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              ORIGINAL ACCOLADES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
            Hall of Fame & Achievements
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Trophy className="h-4 w-4" /> 100% Verified Trophies
            </span>
            <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
              GOLD & SILVER WINNER
            </span>
            <span className="text-zinc-400">• Hackathons • Certs • Honors</span>
          </div>

          <p className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg">
            A curated showcase of hackathon victories, industry certifications, code optimization awards, and open-source milestones achieved throughout my career.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-[0_0_25px_rgba(229,9,20,0.6)]"
            >
              <ShieldCheck className="h-5 w-5" />
              <span>Hire / Request Credentials →</span>
            </button>
            <button
              onClick={() => navigate("/introduction")}
              className="flex items-center gap-2 rounded bg-zinc-800/80 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-700 transition cursor-pointer"
            >
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span>Behind The Scenes (About Me)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-10 space-y-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 border-b border-zinc-800 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 mr-2">
            <Filter className="h-3.5 w-3.5 text-red-500" />
            Filter Accolades:
          </span>
          {achievementCategories.map((cat) => (
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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-900/90 border border-zinc-800 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-amber-500/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_25px_rgba(234,179,8,0.3)] cursor-pointer"
            >
              {/* Card Cover Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <img src={Logo} alt="R" className="h-5 w-auto drop-shadow-[0_0_6px_rgba(229,9,20,0.9)]" />
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase border ${item.badgeBg}`}>
                    {item.type}
                  </span>
                </div>

                <div className="absolute top-3 right-3 rounded bg-black/70 px-2 py-0.5 text-[11px] font-bold text-amber-400 backdrop-blur-md border border-amber-500/40">
                  {item.year}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-emerald-400">{item.matchScore}</span>
                    <span className="text-zinc-400">{item.issuer}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.synopsis}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300 font-mono"
                    >
                      #{s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="bg-zinc-950 px-6 py-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white transition">
                <span>View Full Credential</span>
                <ChevronRight className="h-4 w-4 text-amber-400 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Netflix Preview Popup Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl">
            {/* Modal Image Header */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={activeModalItem.coverImage}
                alt={activeModalItem.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-zinc-300 hover:text-white border border-zinc-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className={`rounded px-2.5 py-1 text-xs font-extrabold uppercase border ${activeModalItem.badgeBg}`}>
                  {activeModalItem.type}
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-white">
                  {activeModalItem.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-sm text-zinc-300">
              <div className="flex items-center gap-4 text-xs font-semibold border-b border-zinc-800 pb-3">
                <span className="text-emerald-400 font-bold">{activeModalItem.matchScore}</span>
                <span className="text-zinc-400 font-bold">Issued By: {activeModalItem.issuer}</span>
                <span className="text-zinc-400 font-bold">Year: {activeModalItem.year}</span>
              </div>

              <p className="leading-relaxed text-zinc-200">
                {activeModalItem.synopsis}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Demonstrated Competencies & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.skills.map((sk) => (
                    <span
                      key={sk}
                      className="rounded bg-zinc-800 px-3 py-1 text-xs text-white border border-zinc-700 font-mono"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400 flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Verified Credential Record
                </span>

                <a
                  href={activeModalItem.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded bg-amber-500 px-5 py-2 text-xs font-bold text-black hover:bg-amber-400 transition cursor-pointer shadow-md"
                >
                  <span>Verify External Credential</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
