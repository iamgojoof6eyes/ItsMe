import { ChevronDown, Play, Plus, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/R.svg";

export default function BlogCard({ blog, onMoreInfo }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!blog) return null;

  return (
    <div
      onClick={() => navigate(`/documentary/${blog.slug}`)}
      className="group/card relative aspect-video w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-md bg-zinc-900 border border-zinc-800 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_20px_rgba(229,9,20,0.5)]"
    >
      {/* Background Cover Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
      />

      {/* Top Badges Overlay */}
      <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5">
        <img
          src={Logo}
          alt="R"
          className="h-5 w-auto drop-shadow-[0_0_6px_rgba(229,9,20,0.9)]"
        />
        <span className="rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-zinc-300 backdrop-blur-md border border-zinc-700/50">
          {blog.category}
        </span>
      </div>

      {/* Default Bottom Title Overlay (Visible when not hovering this specific card) */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-8 transition-opacity duration-300 group-hover/card:opacity-0">
        <h3 className="text-sm font-bold text-white line-clamp-1">
          {blog.title}
        </h3>
        <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-400">
          <span className="font-semibold text-emerald-400">{blog.matchScore}</span>
          <span>{blog.readTime}</span>
        </div>
      </div>

      {/* Hover Action Overlay (Appears ONLY when hovering over this specific card) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-black/30 p-3 opacity-0 transition-all duration-300 ease-out group-hover/card:opacity-100">
        {/* Title */}
        <h3 className="text-xs font-bold text-white line-clamp-1 group-hover/card:text-red-400">
          {blog.title}
        </h3>

        {/* Action Buttons Row */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/documentary/${blog.slug}`);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-zinc-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md"
              title="Read Article"
            >
              <Play className="h-4 w-4 fill-black ml-0.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSaved(!isSaved);
              }}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/90 text-white transition hover:border-white hover:scale-110 active:scale-95 cursor-pointer ${isSaved ? "bg-red-600 border-red-600" : ""
                }`}
              title="Add to My List"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/90 text-white transition hover:border-white hover:scale-110 active:scale-95 cursor-pointer ${isLiked ? "text-red-500 border-red-500" : ""
                }`}
              title="Like"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoreInfo?.(blog);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/90 text-white transition hover:border-white hover:scale-110 active:scale-95 cursor-pointer"
            title="More Info"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Metadata Badges */}
        <div className="mt-2 flex items-center justify-between text-[10px] font-semibold text-zinc-300">
          <span className="text-emerald-400 font-bold">{blog.matchScore}</span>
          <span className="border border-zinc-700 px-1.5 py-0.2 text-[9px] text-zinc-300 rounded">
            {blog.rating}
          </span>
          <span className="text-zinc-400">{blog.readTime}</span>
        </div>
      </div>
    </div>
  );
}
