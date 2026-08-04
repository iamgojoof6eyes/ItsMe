import { BookOpen, Calendar, Clock, Play, Plus, ThumbsUp, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/R.svg";

export default function BlogPreviewModal({ blog, onClose, allBlogs = [] }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!blog) return null;

  const relatedBlogs = allBlogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
      {/* Modal Overlay backdrop */}
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      {/* Main Modal Box */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-zinc-900 shadow-2xl border border-zinc-800 my-8 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/80 text-white backdrop-blur-md transition hover:bg-zinc-800 cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Hero Banner Header */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

          {/* Title and Buttons inside Header */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-2 flex items-center gap-2">
              <img
                src={Logo}
                alt="R"
                className="h-6 w-auto drop-shadow-[0_0_8px_rgba(229,9,20,0.9)]"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                {blog.category}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {blog.title}
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  navigate(`/documentary/${blog.slug}`);
                }}
                className="flex items-center gap-2 rounded bg-white px-6 py-2.5 font-bold text-black transition hover:bg-zinc-200 cursor-pointer"
              >
                <Play className="h-5 w-5 fill-black" />
                <span>Read Article</span>
              </button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/80 text-white transition hover:border-white cursor-pointer ${
                  isSaved ? "bg-red-600 border-red-600" : ""
                }`}
              >
                <Plus className="h-5 w-5" />
              </button>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/80 text-white transition hover:border-white cursor-pointer ${
                  isLiked ? "text-red-500 border-red-500" : ""
                }`}
              >
                <ThumbsUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Details & Metadata Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Metadata & Synopsis */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="text-emerald-400 font-bold">{blog.matchScore}</span>
                <span className="border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300 rounded">
                  {blog.rating}
                </span>
                <span className="text-zinc-400">{blog.readTime}</span>
                <span className="flex items-center gap-1 text-zinc-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {blog.date}
                </span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {blog.synopsis}
              </p>
            </div>

            {/* Right Column: Cast / Credits */}
            <div className="space-y-3 text-xs text-zinc-400 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
              <div>
                <span className="text-zinc-500 font-medium">Author: </span>
                <span className="text-zinc-200 font-semibold">{blog.author}</span>
              </div>
              <div>
                <span className="text-zinc-500 font-medium">Role: </span>
                <span className="text-zinc-200">{blog.authorRole}</span>
              </div>
              <div>
                <span className="text-zinc-500 font-medium">Category: </span>
                <span className="text-zinc-200">{blog.category}</span>
              </div>
              <div>
                <span className="text-zinc-500 font-medium">Tags: </span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles / Episode Recommendations */}
          {relatedBlogs.length > 0 && (
            <div className="border-t border-zinc-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-4">More Like This</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedBlogs.map((rel) => (
                  <div
                    key={rel.slug}
                    onClick={() => {
                      onClose();
                      navigate(`/documentary/${rel.slug}`);
                    }}
                    className="group cursor-pointer rounded-md bg-zinc-800/60 overflow-hidden border border-zinc-700/50 hover:border-red-600 transition"
                  >
                    <div className="aspect-video w-full overflow-hidden relative">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <img
                        src={Logo}
                        alt="R"
                        className="absolute top-2 left-2 h-4 w-auto drop-shadow"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-white group-hover:text-red-500 line-clamp-1">
                        {rel.title}
                      </h4>
                      <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2">
                        {rel.synopsis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
