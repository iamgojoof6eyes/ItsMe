import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogRow({ title, blogs, onMoreInfo }) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  if (!blogs || blogs.length === 0) return null;

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="group/row relative space-y-2 px-6 md:px-12 my-6">
      {/* Row Section Title */}
      <h2 className="text-xl font-bold text-white transition duration-300 hover:text-red-500 md:text-2xl flex items-center gap-2">
        <span className="h-4 w-1 bg-red-600 rounded-full inline-block" />
        {title}
      </h2>

      {/* Slider Container */}
      <div className="relative md:-ml-2">
        {/* Left Arrow */}
        <button
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-10 items-center justify-center bg-black/70 text-white transition hover:bg-black/90 cursor-pointer rounded-r-md ${
            !isMoved ? "hidden" : "flex"
          }`}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        {/* Card Row */}
        <div
          ref={rowRef}
          className="flex items-center gap-4 overflow-x-scroll scrollbar-none py-3 px-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogs.map((blog) => (
            <div key={blog.slug} className="w-[260px] md:w-[320px] flex-shrink-0">
              <BlogCard blog={blog} onMoreInfo={onMoreInfo} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-0 z-40 m-auto flex h-full w-10 items-center justify-center bg-black/70 text-white transition hover:bg-black/90 cursor-pointer rounded-l-md"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
