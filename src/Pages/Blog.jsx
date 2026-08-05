import { useState } from "react";
import BlogHero from "@/components/Blog/BlogHero";
import BlogPreviewModal from "@/components/Blog/BlogPreviewModal";
import BlogRow from "@/components/Blog/BlogRow";
import BlogCard from "@/components/Blog/BlogCard";
import {
  getAllBlogs,
  getAllCategories,
  getBlogsByCategory,
  getFeaturedBlog,
} from "@/utils/blogLoader";
import { Film, Search, Sparkles, X } from "lucide-react";

export default function Blog() {
  const allBlogs = getAllBlogs();
  const featuredBlog = getFeaturedBlog();
  const categories = getAllCategories();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewBlog, setPreviewBlog] = useState(null);

  // Filter logic
  let filteredBlogs = getBlogsByCategory(selectedCategory);

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredBlogs = filteredBlogs.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.synopsis.toLowerCase().includes(query) ||
        b.tags.some((t) => t.toLowerCase().includes(query))
    );
  }

  // Extract all categories excluding "All" for dynamic row generation
  const categoryList = categories.filter((c) => c !== "All");

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Category Navigation & Search Header Bar */}
      <div className="sticky top-20 z-40 bg-black/90 px-6 py-4 backdrop-blur-xl border-b border-zinc-800/80 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Pills (Scrollable with flex-1 & min-w-0 to prevent overlap) */}
          <div className="flex-1 min-w-0 flex items-center gap-2 overflow-x-auto netflix-scrollbar py-1.5 pr-2">
            <span className="flex items-center gap-1.5 font-bold text-red-600 mr-2 text-sm flex-shrink-0">
              <Film className="h-4 w-4" />
              Documentaries
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${selectedCategory === cat
                    ? "bg-red-600 text-white shadow-[0_0_12px_rgba(229,9,20,0.6)]"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box (Fixed width and flex-shrink-0 so categories don't overflow behind it) */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search documentary titles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md bg-zinc-900/90 pl-9 pr-8 py-2 text-xs text-white placeholder-zinc-500 border border-zinc-800 focus:border-red-600 focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Featured Hero Billboard (shown when no active search/category filter) */}
      {selectedCategory === "All" && !searchQuery && featuredBlog && (
        <BlogHero blog={featuredBlog} onMoreInfo={(b) => setPreviewBlog(b)} />
      )}

      {/* Dynamic Rows of Blogs (Netflix Category Sections) */}
      {selectedCategory === "All" && !searchQuery ? (
        <div className="relative z-20 mt-4 space-y-6">
          {/* Trending Row */}
          <BlogRow
            title="Trending Documentaries"
            blogs={allBlogs}
            onMoreInfo={(b) => setPreviewBlog(b)}
          />

          {/* Dynamic Category Rows */}
          {categoryList.map((cat) => {
            const categoryBlogs = allBlogs.filter((b) => b.category === cat);
            if (categoryBlogs.length === 0) return null;

            return (
              <BlogRow
                key={cat}
                title={cat}
                blogs={categoryBlogs}
                onMoreInfo={(b) => setPreviewBlog(b)}
              />
            );
          })}
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-red-500" />
            Showing results for "{searchQuery || selectedCategory}"
          </h2>

          {filteredBlogs.length === 0 ? (
            <div className="rounded-lg bg-zinc-900/50 p-12 text-center border border-zinc-800 my-12">
              <p className="text-lg text-zinc-400">
                No documentaries found matching your search.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded bg-red-600 px-6 py-2 text-xs font-semibold text-white transition hover:bg-red-700 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBlogs.map((blog) => (
                <div key={blog.slug} className="aspect-video w-full">
                  <BlogCard blog={blog} onMoreInfo={(b) => setPreviewBlog(b)} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Quick Info Preview Modal */}
      {previewBlog && (
        <BlogPreviewModal
          blog={previewBlog}
          allBlogs={allBlogs}
          onClose={() => setPreviewBlog(null)}
        />
      )}
    </div>
  );
}
