import { BookOpen, Info, Play, Plus, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/R.svg";

export default function BlogHero({ blog, onMoreInfo }) {
  const navigate = useNavigate();
  const [muted, setMuted] = useState(true);

  if (!blog) return null;

  return (
    <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden text-white">
      {/* Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Left & Bottom Shadow Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent h-full" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-12">
        {/* Brand Tag with R.svg Logo */}
        <div className="mb-3 flex items-center gap-2">
          <img
            src={Logo}
            alt="Raunak"
            className="h-7 w-auto drop-shadow-[0_0_10px_rgba(229,9,20,0.9)]"
          />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            DOCUMENTARY SERIES
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
          {blog.title}
        </h1>

        {/* Metadata Badges */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
          <span className="text-emerald-400 font-bold">{blog.matchScore}</span>
          <span className="border border-zinc-600 px-2 py-0.5 text-xs text-zinc-300 rounded">
            {blog.rating}
          </span>
          <span className="bg-zinc-800/80 px-2 py-0.5 text-xs text-zinc-200 rounded border border-zinc-700">
            {blog.season} {blog.episode}
          </span>
          <span className="text-zinc-300">{blog.readTime}</span>
          <span className="text-zinc-400">• {blog.category}</span>
        </div>

        {/* Synopsis */}
        <p className="mt-4 max-w-2xl text-base text-zinc-300 line-clamp-3 drop-shadow-sm md:text-lg">
          {blog.synopsis}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => navigate(`/documentary/${blog.slug}`)}
            className="flex items-center gap-3 rounded bg-white px-7 py-3 font-semibold text-black transition-all duration-200 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <Play className="h-6 w-6 fill-black" />
            <span>Read Article</span>
          </button>

          <button
            onClick={() => onMoreInfo?.(blog)}
            className="flex items-center gap-3 rounded bg-zinc-600/60 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-zinc-600/80 hover:scale-105 active:scale-95 cursor-pointer border border-zinc-500/30"
          >
            <Info className="h-6 w-6" />
            <span>More Info</span>
          </button>

          <div className="ml-auto hidden md:flex items-center gap-3">
            <button
              onClick={() => setMuted(!muted)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 bg-black/40 text-white backdrop-blur-md transition hover:border-white hover:bg-black/60 cursor-pointer"
              title={muted ? "Unmute Ambient Audio" : "Mute Ambient Audio"}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <span className="border-l-2 border-zinc-400 bg-black/40 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-md">
              MATURE (13+)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
