import { clearViewer } from "@/store/viewer";
import { LogOut, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ mobile = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewer = useSelector((state) => state.viewer.currentViewer);

  // Single Unified Profile Switching Logic
  const handleSwitchProfile = () => {
    dispatch(clearViewer());
    navigate("/", { replace: true });
  };

  if (!viewer) return null;

  if (mobile) {
    return (
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-3 bg-zinc-900/90 p-3 rounded-lg border border-zinc-800">
          <img
            src={viewer.avatar}
            alt={viewer.name}
            className="h-10 w-10 rounded-full border-2 border-red-600 object-cover"
          />
          <div>
            <p className="text-sm font-bold text-white">{viewer.name}</p>
            <p className="text-[11px] text-zinc-400">Current Active Profile</p>
          </div>
        </div>

        <button
          onClick={handleSwitchProfile}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-xs font-bold text-white transition hover:bg-red-700 cursor-pointer shadow-lg"
        >
          <LogOut className="h-4 w-4" />
          <span>Switch Profile</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative group/menu">
      {/* Active Avatar Trigger Button */}
      <button className="flex items-center gap-2 rounded-full bg-zinc-900/90 py-1 pl-1 pr-3 border border-zinc-800 transition-all duration-300 group-hover/menu:border-red-600 group-hover/menu:shadow-[0_0_15px_rgba(229,9,20,0.4)] cursor-pointer">
        <img
          src={viewer.avatar}
          alt={viewer.name}
          className="h-8 w-8 rounded-full object-cover border-2 border-red-600"
        />
        <span className="text-xs font-semibold text-white tracking-wide">
          {viewer.name}
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 group-hover/menu:rotate-180" />
      </button>

      {/* Dropdown Menu Box */}
      <div className="invisible absolute right-0 mt-2 w-64 origin-top-right rounded-xl border border-zinc-800 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-2xl opacity-0 scale-95 translate-y-2 transition-all duration-300 group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:scale-100 group-hover/menu:translate-y-0 z-50">
        {/* Active Profile Header */}
        <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3 mb-3">
          <img
            src={viewer.avatar}
            alt={viewer.name}
            className="h-12 w-12 rounded-full object-cover border-2 border-red-600 shadow-md"
          />
          <div>
            <h4 className="text-sm font-bold text-white">{viewer.name}</h4>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/50">
              Active Profile
            </span>
          </div>
        </div>

        {/* Single Unified Switch Profile Button */}
        <button
          onClick={handleSwitchProfile}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-xs font-bold text-white transition hover:bg-red-700 hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>Switch Profile</span>
        </button>
      </div>
    </div>
  );
}