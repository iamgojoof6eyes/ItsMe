import Logo from "@/assets/R.svg";
import { Award, BookOpen, Briefcase, Film, Home, Menu, Search, Sparkles, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const links = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Behind The Scene", path: "/introduction", icon: Sparkles },
  { name: "Originals", path: "/originals", icon: Briefcase },
  { name: "Documentary", path: "/documentary", icon: Film },
  { name: "Awards", path: "/awards", icon: Award },
  { name: "Cast", path: "/contact", icon: Users },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const viewer = useSelector((state) => state.viewer.currentViewer);

  // Dynamic Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/documentary?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
    }
  };

  // DO NOT render header, search bar, or navigation links if on Who's Watching page ("/") or no viewer profile active
  if (!viewer || location.pathname === "/") {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] border-b border-zinc-800/80 py-3"
          : "bg-gradient-to-b from-black via-black/60 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <NavLink to="/home" className="group relative flex items-center gap-2">
            <img
              src={Logo}
              alt="Raunak Flix"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(229,9,20,0.9)]"
            />
            <span className="hidden sm:inline-block font-black text-lg tracking-tighter text-white group-hover:text-red-500 transition">
              FLIX
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const IconComponent = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-white bg-red-600/90 shadow-[0_0_12px_rgba(229,9,20,0.6)]"
                        : "text-zinc-300 hover:text-white hover:bg-zinc-900/60"
                    }`
                  }
                >
                  <IconComponent className="h-3.5 w-3.5 text-red-500" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Right Action Icons & Profile */}
        <div className="flex items-center gap-4">
          {/* Quick Header Search Bar */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search articles, projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-48 sm:w-64 rounded-full bg-zinc-900 px-4 py-1.5 text-xs text-white placeholder-zinc-500 border border-red-600 focus:outline-none shadow-lg animate-fadeIn"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-300 transition hover:bg-zinc-800 hover:text-white border border-zinc-800 cursor-pointer"
                title="Search Site"
              >
                <Search className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Desktop Profile Menu */}
          <div className="hidden md:block">
            <ProfileMenu />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white border border-zinc-800 md:hidden cursor-pointer"
          >
            {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`overflow-hidden bg-zinc-950/95 backdrop-blur-2xl transition-all duration-300 md:hidden border-b border-zinc-800 ${
          mobileMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-red-600 text-white shadow-md"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                <IconComponent className="h-4 w-4 text-red-500" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}

          {/* Mobile Profile Switcher Section */}
          <div className="border-t border-zinc-800 pt-4 mt-2">
            <ProfileMenu mobile />
          </div>
        </nav>
      </div>
    </header>
  );
}