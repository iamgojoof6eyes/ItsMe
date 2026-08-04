import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/R.svg";
import DeveloperImage from "@/assets/avatars/Developer.svg";
import ExplorerImage from "@/assets/avatars/Explorer.svg";
import ReaderImage from "@/assets/avatars/Reader.svg";
import RecruiterImage from "@/assets/avatars/Recruiter.svg";
import { updateViewer } from "@/store/viewer";
import { playNetflixAudio } from "@/utils/audio";
import { Play, RotateCcw } from "lucide-react";

const profiles = [
  { id: "recruiter", name: "Recruiter", icon: RecruiterImage },
  { id: "developer", name: "Developer", icon: DeveloperImage },
  { id: "reader", name: "Reader", icon: ReaderImage },
  { id: "explorer", name: "Explorer", icon: ExplorerImage },
];

export default function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Animation states: 'idle', 'center', 'disappear', 'corner'
  const [animState, setAnimState] = useState("idle");

  const startAnimation = () => {
    playNetflixAudio();
    setAnimState("center");

    // Timeline sequence:
    // 0s: R appears in middle with netflix-sound.mp3
    // 1.8s: Disappears / pulses
    // 2.8s: Moves to top left corner & Who's Watching profiles reveal
    setTimeout(() => {
      setAnimState("disappear");
    }, 1800);

    setTimeout(() => {
      setAnimState("corner");
    }, 2800);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectProfile = (profile) => {
    localStorage.setItem("viewer", profile.id);
    dispatch(updateViewer({ id: profile.id, name: profile.name, avatar: profile.icon }));
    navigate("/home");
  };

  const skipIntro = () => {
    setAnimState("corner");
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center select-none">
      {/* Dynamic Background Flare / Glow */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${
          animState === "center"
            ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/70 via-black to-black opacity-100"
            : animState === "disappear"
            ? "bg-black opacity-100"
            : "bg-black opacity-90"
        }`}
      />

      {/* The Animated R.svg Logo */}
      <div
        onClick={() => {
          if (animState === "idle") startAnimation();
        }}
        className={`fixed z-50 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${
          animState === "idle"
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 opacity-90"
            : animState === "center"
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 shadow-[0_0_80px_rgba(229,9,20,0.9)] opacity-100"
            : animState === "disappear"
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-200 opacity-0"
            : "top-6 left-6 md:top-8 md:left-12 translate-x-0 translate-y-0 scale-90 opacity-100"
        }`}
      >
        <img
          src={Logo}
          alt="Raunak Flix"
          className={`h-12 w-auto md:h-16 transition-all duration-700 ${
            animState === "center"
              ? "drop-shadow-[0_0_35px_rgba(229,9,20,1)]"
              : "drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
          }`}
        />
      </div>

      {/* Center Title Banner during Intro Phase */}
      <div
        className={`fixed top-2/3 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ${
          animState === "center"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-black tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(229,9,20,0.8)]">
          RAUNAK FLIX
        </h1>
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mt-2 font-bold">
          DOCUMENTARIES • ORIGINALS • STORIES
        </p>
      </div>

      {/* Skip / Replay Intro Controls */}
      {animState !== "corner" && (
        <button
          onClick={skipIntro}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-zinc-900/80 px-5 py-2 text-xs font-bold text-zinc-300 backdrop-blur-md border border-zinc-800 transition hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Skip Intro →
        </button>
      )}

      {animState === "corner" && (
        <button
          onClick={startAnimation}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-zinc-900/80 px-4 py-2 text-xs font-semibold text-zinc-400 backdrop-blur-md border border-zinc-800 transition hover:text-white hover:border-zinc-700 cursor-pointer"
          title="Replay Netflix Ta-dum Intro"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Replay Intro</span>
        </button>
      )}

      {/* Who's Watching Profile Selection (Fades in when R moves to corner) */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-all duration-1000 ${
          animState === "corner"
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Title */}
        <h1 className="mb-12 text-center text-4xl font-extrabold text-white md:text-6xl tracking-tight drop-shadow-md">
          Who's Watching?
        </h1>

        {/* Profile Avatars Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 px-6">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => handleSelectProfile(profile)}
              className="group flex flex-col items-center outline-none cursor-pointer"
            >
              {/* Avatar Box */}
              <div
                className="
                  flex h-32 w-32 md:h-36 md:w-36 items-center justify-center
                  rounded-md
                  border-2 border-zinc-800
                  bg-zinc-900
                  overflow-hidden
                  transition-all
                  duration-300
                  ease-out

                  group-hover:-translate-y-2
                  group-hover:scale-105
                  group-hover:border-red-600
                  group-hover:shadow-[0_0_25px_rgba(229,9,20,0.8),0_0_50px_rgba(229,9,20,0.4)]
                "
              >
                <img
                  src={profile.icon}
                  alt={profile.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Profile Name */}
              <p
                className="
                  mt-4
                  text-lg
                  font-medium
                  text-zinc-400
                  transition-colors
                  duration-300
                  group-hover:text-white
                  group-hover:font-bold
                "
              >
                {profile.name}
              </p>
            </button>
          ))}
        </div>

        {/* Footer Subtitle */}
        <p className="mt-16 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Select a profile to enter Raunak Flix
        </p>
      </div>
    </div>
  );
}
