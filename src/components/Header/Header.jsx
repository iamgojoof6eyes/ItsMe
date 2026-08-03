import Logo from "@/assets/R.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const links = [
    {
        name: "Home",
        path: "/home",
    },
    {
        name: "Originals",
        path: "/originals",
    },
    {
        name: "Documentary",
        path: "/documentary",
    },
    {
        name: "Awards",
        path: "/awards",
    },
    {
        name: "Cast",
        path: "/contact",
    },
];

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const viewers = useSelector((state) => state.viewer.currentViewer);
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

            {/* Logo */}
            <NavLink to="/home">
            <img
                src={Logo}
                alt="Raunak"
                className="h-12 w-auto transition duration-300 hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
            />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
                <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                    `transition-all duration-300 ${
                    isActive
                        ? "text-red-600"
                        : "text-white hover:text-red-500"
                    }`
                }
                >
                {link.name}
                </NavLink>
            ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">

            {/* Desktop Profile */}
            {viewers && <div className="hidden md:block">
                <ProfileMenu />
            </div>}

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="text-white md:hidden"
            >
                {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>

            </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`overflow-hidden bg-black transition-all duration-300 md:hidden ${
            mobileMenu ? "max-h-[500px]" : "max-h-0"
            }`}
        >
            <nav className="flex flex-col">

            {links.map((link) => (
                <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                    `border-b border-zinc-800 px-6 py-4 transition ${
                    isActive
                        ? "text-red-600"
                        : "text-white hover:text-red-500"
                    }`
                }
                >
                {link.name}
                </NavLink>
            ))}

            {/* Mobile Profile */}
            <div className="border-t border-zinc-800 p-4">
                {viewers && <ProfileMenu mobile />}
            </div>

            </nav>
        </div>
        </header>
    );
}