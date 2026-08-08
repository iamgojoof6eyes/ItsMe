/**
 * Netflix-Style Blog Loader Workflow
 * Dynamically loads and parses markdown files placed in /src/blogs/*.md
 */

// Helper to parse YAML frontmatter from raw markdown strings
import RaunakLogo from "@/assets/Raunak.png";
function parseFrontMatter(rawContent, filename = "") {
  const defaultImage = RaunakLogo;
  // Strip BOM if present and any leading whitespace
  const sanitizedContent = rawContent.replace(/^\uFEFF/, "").trimStart();
  const frontMatterRegex = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?([\s\S]*)$/;
  const match = sanitizedContent.match(frontMatterRegex);

  let metadata = {};
  let content = sanitizedContent;

  if (match) {
    const yamlString = match[1];
    content = match[2];

    const lines = yamlString.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const colonIdx = trimmed.indexOf(":");
      if (colonIdx !== -1) {
        const key = trimmed.slice(0, colonIdx).trim();
        let value = trimmed.slice(colonIdx + 1).trim();

        // Strip quotes
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        // Parse boolean
        if (value === "true") value = true;
        else if (value === "false") value = false;

        // Parse Array like ["Tag1", "Tag2"]
        else if (value.startsWith("[") && value.endsWith("]")) {
          try {
            value = JSON.parse(value.replace(/'/g, '"'));
          } catch {
            value = value
              .slice(1, -1)
              .split(",")
              .map((s) => s.trim().replace(/^["']|["']$/g, ""));
          }
        }

        metadata[key] = value;
      }
    }
  }

  // Derive missing slug from filename
  const derivedSlug = filename
    .replace(/^.*[\\/]/, "")
    .replace(/\.md$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

  const slug = metadata.slug || derivedSlug;

  // Calculate read time if not provided
  let readTime = metadata.readTime;
  if (!readTime) {
    const wordCount = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    readTime = `${minutes} min read`;
  }

  // Default fallback image
  // Parse target profiles (e.g. profiles: ["recruiter", "developer"] or profile: "recruiter" or profile: "all")
  let targetProfiles = ["all"];
  let hasExplicitProfiles = false;

  if (metadata.profiles) {
    hasExplicitProfiles = true;
    targetProfiles = Array.isArray(metadata.profiles)
      ? metadata.profiles.map((p) => String(p).toLowerCase().trim())
      : [String(metadata.profiles).toLowerCase().trim()];
  } else if (metadata.profile) {
    hasExplicitProfiles = true;
    targetProfiles = Array.isArray(metadata.profile)
      ? metadata.profile.map((p) => String(p).toLowerCase().trim())
      : [String(metadata.profile).toLowerCase().trim()];
  }

  return {
    title: metadata.title || "Untitled Documentary",
    slug,
    date: metadata.date || new Date().toISOString().split("T")[0],
    readTime,
    category: metadata.category || "Documentary",
    matchScore: metadata.matchScore || `${Math.floor(Math.random() * 5 + 95)}% Match`,
    rating: metadata.rating || "HD 4K",
    season: metadata.season || "S1",
    episode: metadata.episode || "E1",
    coverImage: metadata.coverImage || defaultImage,
    synopsis: metadata.synopsis || content.slice(0, 150) + "...",
    author: metadata.author || "Raunak",
    authorRole: metadata.authorRole || "Software Architect",
    authorAvatar:
      metadata.authorAvatar || "https://api.dicebear.com/7.x/bottts/svg?seed=Raunak",
    tags: Array.isArray(metadata.tags) ? metadata.tags : ["Documentary", "Tech"],
    featured: metadata.featured === true,
    profiles: targetProfiles,
    hasExplicitProfiles,
    content,
    raw: rawContent,
  };
}

// Vite glob import of all markdown files in src/blogs/
const rawMarkdownFiles = import.meta.glob("/src/blogs/*.md", {
  query: "?raw",
  eager: true,
});

export function getAllBlogs() {
  const blogs = [];
  for (const path in rawMarkdownFiles) {
    const rawModule = rawMarkdownFiles[path];
    const rawText = typeof rawModule === "string" ? rawModule : rawModule.default || "";
    if (rawText) {
      blogs.push(parseFrontMatter(rawText, path));
    }
  }

  // Sort by date descending
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogsByProfile(profileId) {
  const blogs = getAllBlogs();
  if (!profileId) return blogs;

  const pid = profileId.toLowerCase().trim();

  return blogs.filter((b) => {
    const profs = b.profiles || ["all"];

    // 1. Explicit frontmatter match
    if (profs.includes("all")) return true;
    if (profs.some((p) => pid.includes(p) || p.includes(pid))) return true;

    // If explicit profiles were specified on the blog but didn't match pid, exclude it
    if (b.hasExplicitProfiles) {
      return false;
    }

    // 2. Smart category/tag fallback for blogs without explicit profile field
    const cat = (b.category || "").toLowerCase();
    const tags = (b.tags || []).map((t) => t.toLowerCase());

    if (pid.includes("recruiter")) {
      return (
        cat.includes("system") ||
        cat.includes("architecture") ||
        cat.includes("recruiter") ||
        cat.includes("career") ||
        cat.includes("docs") ||
        tags.some((t) =>
          ["system", "architecture", "career", "docs", "engineering", "recruiter"].includes(t)
        )
      );
    }

    if (pid.includes("developer")) {
      return (
        cat.includes("dsa") ||
        cat.includes("dev") ||
        cat.includes("tech") ||
        cat.includes("code") ||
        cat.includes("system") ||
        cat.includes("architecture") ||
        tags.some((t) =>
          ["dsa", "optimization", "code", "react", "vite", "architecture", "dev", "tech"].includes(t)
        )
      );
    }

    if (pid.includes("reader") || pid.includes("explorer")) {
      return true;
    }

    return true;
  });
}

export function getBlogBySlug(slug) {
  const blogs = getAllBlogs();
  return blogs.find((b) => b.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export function getBlogsByCategory(category) {
  const blogs = getAllBlogs();
  if (!category || category === "All") return blogs;
  return blogs.filter(
    (b) => b.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedBlog() {
  const blogs = getAllBlogs();
  return blogs.find((b) => b.featured) || blogs[0] || null;
}

export function getAllCategories() {
  const blogs = getAllBlogs();
  const categories = new Set(blogs.map((b) => b.category));
  return ["All", ...Array.from(categories)];
}
