import { useLocation, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  Film,
  Home,
  Play,
  Search,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import Logo from "@/assets/R.svg";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { title: "Raunak Flix Home", path: "/home", icon: Home, desc: "Explore main billboard & trending titles" },
    { title: "Original Projects", path: "/originals", icon: Film, desc: "View full-stack web apps & software" },
    { title: "Documentaries", path: "/documentary", icon: Sparkles, desc: "Read technical articles & system guides" },
    { title: "Behind The Scenes", path: "/introduction", icon: UserCheck, desc: "Explore career timeline & tech arsenal" },
  ];

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 py-16 bg-black text-white overflow-hidden">
      {/* Background Glows & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-zinc-950 to-black pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-8">
        {/* Logo & Netflix Status Header */}
        <div className="flex items-center justify-center gap-3">
          <img
            src={Logo}
            alt="R"
            className="h-10 w-auto drop-shadow-[0_0_15px_rgba(229,9,20,0.9)] animate-pulse"
          />
          <span className="rounded-md bg-red-600/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-500 border border-red-800/50">
            ERROR CODE: NSES-404
          </span>
        </div>

        {/* Giant 404 Headline */}
        <div className="space-y-3">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-600 tracking-tight drop-shadow-2xl">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Lost Your Way?
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
            Sorry, we can't find that title or page. You'll find lots of original software, documentaries, and projects to explore on our home page.
          </p>
        </div>

        {/* Attempted Route Info Box */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400 backdrop-blur-md">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <span>Attempted Route:</span>
          <span className="text-red-400 font-bold bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
            {location.pathname}
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">Match Score: <strong className="text-red-500">0% Match</strong></span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 rounded bg-red-600 px-7 py-3 font-bold text-white transition hover:bg-red-700 hover:scale-105 cursor-pointer shadow-[0_0_25px_rgba(229,9,20,0.6)]"
          >
            <Play className="h-5 w-5 fill-white" />
            <span>Raunak Flix Home</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded bg-zinc-900 px-6 py-3 font-semibold text-white border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 rounded bg-zinc-900 px-6 py-3 font-semibold text-zinc-300 border border-zinc-800 hover:text-white hover:border-red-600 transition cursor-pointer"
          >
            <Users className="h-4 w-4 text-red-500" />
            <span>Switch Profile</span>
          </button>
        </div>

        {/* Quick Recommendation Rails */}
        <div className="pt-8 border-t border-zinc-800/80 text-left space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 text-center flex items-center justify-center gap-2">
            <Search className="h-3.5 w-3.5 text-red-500" />
            Popular Destinations to Explore Instead
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {quickLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <div
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="group cursor-pointer rounded-lg bg-zinc-900/60 p-4 border border-zinc-800/80 hover:border-red-600 hover:bg-zinc-900 transition-all duration-200 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <IconComp className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">HD 4K</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-snug">
                      {link.desc}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-semibold text-zinc-500 group-hover:text-zinc-300 flex items-center gap-1">
                    <span>Explore Now</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
