import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Copy,
  Film,
  Play,
  Share2,
  ThumbsUp,
} from "lucide-react";
import Logo from "@/assets/R.svg";
import { getAllBlogs, getBlogBySlug } from "@/utils/blogLoader";
import { playNetflixAudio } from "@/utils/audio";

// Code block with Copy button component
function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, "");

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-sm shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs text-zinc-400">
        <span className="font-semibold">{className ? className.replace("language-", "") : "Code"}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded bg-zinc-800 px-2.5 py-1 text-[11px] text-zinc-300 transition hover:bg-zinc-700 hover:text-white cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-zinc-200 leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const blog = getBlogBySlug(slug || "");
  const allBlogs = getAllBlogs();

  // Play Netflix sound & trigger logo opening overlay whenever opening a blog
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowIntro(true);
    playNetflixAudio();

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [slug]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 className="text-4xl font-extrabold text-red-600">404 - Title Not Found</h1>
        <p className="mt-4 text-zinc-400">The documentary episode you requested does not exist or has been removed.</p>
        <button
          onClick={() => navigate("/documentary")}
          className="mt-6 rounded bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 cursor-pointer"
        >
          Back to Documentaries
        </button>
      </div>
    );
  }

  const nextEpisodes = allBlogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-zinc-200 pb-24">
      {/* Blog Opening Netflix Logo + Sound Intro Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-700 pointer-events-none ${
          showIntro ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <div className="relative flex flex-col items-center">
          <img
            src={Logo}
            alt="R"
            className="h-20 w-auto md:h-28 animate-pulse drop-shadow-[0_0_50px_rgba(229,9,20,1)]"
          />
          <h2 className="mt-6 text-xl md:text-3xl font-black text-white tracking-widest text-center px-6 drop-shadow-[0_0_20px_rgba(229,9,20,0.8)]">
            {blog.title}
          </h2>
          <span className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-red-500">
            RAUNAK DOCUMENTARY PRESENTS
          </span>
        </div>
      </div>

      {/* Top Player Style Header Bar */}
      <div className="sticky top-20 z-40 bg-black/90 backdrop-blur-xl border-b border-zinc-800 px-6 py-3">
        {/* Reading Progress Line */}
        <div
          className="absolute top-0 left-0 h-1 bg-red-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button
            onClick={() => navigate("/documentary")}
            className="flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white cursor-pointer group"
          >
            <ArrowLeft className="h-5 w-5 text-red-600 transition-transform group-hover:-translate-x-1" />
            <span>Documentaries</span>
          </button>

          <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-400">
            <img src={Logo} alt="R" className="h-4 w-auto drop-shadow" />
            <span className="font-bold text-red-500 uppercase tracking-widest">
              {blog.season} {blog.episode}
            </span>
            <span>•</span>
            <span className="text-zinc-200 font-semibold line-clamp-1 max-w-xs md:max-w-md">
              {blog.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                liked
                  ? "border-red-600 bg-red-600/20 text-red-500"
                  : "border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              <ThumbsUp className="h-3.5 w-3.5" />
              <span>{liked ? "Liked" : "Like"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-4xl px-6">
          <div className="mb-3 flex items-center gap-2">
            <img src={Logo} alt="R" className="h-6 w-auto drop-shadow-[0_0_8px_rgba(229,9,20,0.9)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              {blog.category}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl leading-tight">
            {blog.title}
          </h1>

          {/* Author & Episode Metadata Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <img
                src={blog.authorAvatar}
                alt={blog.author}
                className="h-9 w-9 rounded-full bg-zinc-800 p-0.5 border border-zinc-700"
              />
              <div>
                <p className="font-bold text-white leading-none">{blog.author}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">{blog.authorRole}</p>
              </div>
            </div>

            <span className="text-zinc-600">|</span>

            <span className="font-bold text-emerald-400">{blog.matchScore}</span>
            <span className="border border-zinc-700 px-1.5 py-0.5 text-[11px] text-zinc-300 rounded">
              {blog.rating}
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Clock className="h-3.5 w-3.5" />
              {blog.readTime}
            </span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Calendar className="h-3.5 w-3.5" />
              {blog.date}
            </span>
          </div>
        </div>
      </div>

      {/* Main Markdown Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="mt-10 mb-6 border-l-4 border-red-600 pl-4 text-2xl font-bold text-white sm:text-3xl">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-8 mb-4 border-l-2 border-red-600/80 pl-3 text-xl font-bold text-white sm:text-2xl">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-6 mb-3 text-lg font-bold text-white sm:text-xl">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="my-4 text-base sm:text-lg leading-relaxed text-zinc-300">
                {children}
              </p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-8 rounded-r-lg border-l-4 border-red-600 bg-zinc-900/90 p-6 text-zinc-200 italic shadow-lg">
                {children}
              </blockquote>
            ),
            ul: ({ children }) => (
              <ul className="my-4 ml-6 list-disc space-y-2 text-zinc-300">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-4 ml-6 list-decimal space-y-2 text-zinc-300">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-base text-zinc-300">{children}</li>
            ),
            code: ({ inline, className, children }) => {
              if (inline) {
                return (
                  <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-red-400">
                    {children}
                  </code>
                );
              }
              return <CodeBlock className={className}>{children}</CodeBlock>;
            },
            img: ({ src, alt }) => (
              <div className="my-8 overflow-hidden rounded-lg border border-zinc-800 shadow-2xl">
                <img
                  src={src}
                  alt={alt}
                  className="w-full object-cover max-h-[450px]"
                />
                {alt && (
                  <p className="bg-zinc-900 px-4 py-2 text-center text-xs text-zinc-400 italic">
                    {alt}
                  </p>
                )}
              </div>
            ),
            table: ({ children }) => (
              <div className="my-6 overflow-x-auto rounded-lg border border-zinc-800">
                <table className="w-full text-left text-sm text-zinc-300">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-zinc-900 text-xs font-bold uppercase text-zinc-400 border-b border-zinc-800">
                {children}
              </thead>
            ),
            th: ({ children }) => <th className="px-4 py-3">{children}</th>,
            td: ({ children }) => (
              <td className="px-4 py-3 border-t border-zinc-800">{children}</td>
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>

        {/* Tags footer */}
        <div className="mt-12 border-t border-zinc-800 pt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
            Tags & Keywords
          </h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300 border border-zinc-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Binge Next / Next Episode Recommendations */}
      {nextEpisodes.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 border-t border-zinc-800/80 pt-12">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
              Watch Next Episodes
            </h3>
            <button
              onClick={() => navigate("/documentary")}
              className="text-xs font-semibold text-red-500 hover:text-red-400 transition cursor-pointer"
            >
              View All Documentaries →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nextEpisodes.map((ep) => (
              <div
                key={ep.slug}
                onClick={() => navigate(`/documentary/${ep.slug}`)}
                className="group cursor-pointer rounded-lg bg-zinc-900 overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-red-600/80 hover:shadow-[0_0_20px_rgba(229,9,20,0.3)]"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={ep.coverImage}
                    alt={ep.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <img src={Logo} alt="R" className="h-4 w-auto drop-shadow" />
                    <span className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-zinc-300 backdrop-blur-md">
                      {ep.season} {ep.episode}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold text-emerald-400">
                    {ep.matchScore}
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-white line-clamp-1 group-hover:text-red-500 transition">
                    {ep.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                    {ep.synopsis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
