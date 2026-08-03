import DeveloperImage from "@/assets/avatars/Developer.svg";
import ExplorerImage from "@/assets/avatars/Explorer.svg";
import ReaderImage from "@/assets/avatars/Reader.svg";
import RecruiterImage from "@/assets/avatars/Recruiter.svg";
import { updateViewer } from "@/store/viewer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const profiles = [
    {
        id: "recruiter",
        name: "Recruiter",
        icon: RecruiterImage,
    },
    {
        id: "developer",
        name: "Developer",
        icon: DeveloperImage,
    },
    {
        id: "reader",
        name: "Reader",
        icon: ReaderImage,
    },
    {
        id: "explorer",
        name: "Explorer",
        icon: ExplorerImage,
    },
];

export default function WhoWatching() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSelect = (profile) => {
        localStorage.setItem("viewer", profile.id);
        dispatch(updateViewer({id: profile.id, name: profile.name, avatar: profile.icon}));
        navigate("/home");
    };

    return (
        <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6">

        {/* Heading */}
        <h1 className="mb-16 text-center text-5xl font-semibold text-white md:text-6xl">
            Who's Watching?
        </h1>

        {/* Profiles */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {profiles.map((profile) => (
            <button
                key={profile.id}
                onClick={() => handleSelect(profile)}
                className="group flex flex-col items-center outline-none"
            >
                {/* Avatar */}
                <div
                className="
                    flex h-36 w-36 items-center justify-center
                    rounded-md
                    border-2 border-zinc-800
                    bg-zinc-900
                    text-7xl

                    transition-all
                    duration-500
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:-translate-y-2
                    group-hover:scale-105
                    group-hover:border-red-600
                    group-hover:shadow-[0_0_15px_rgba(229,9,20,0.7),0_0_35px_rgba(229,9,20,0.45),0_0_60px_rgba(229,9,20,0.25)]

                    group-focus:border-red-600
                    group-focus:shadow-[0_0_15px_rgba(229,9,20,0.7),0_0_35px_rgba(229,9,20,0.45)]
                "
                >
                <img
                    src={profile.icon}
                    alt={profile.name}
                    className="rounded-md object-cover"
                />
                </div>

                {/* Name */}
                <p
                className="
                    mt-5
                    text-xl
                    font-medium
                    text-zinc-500

                    transition-colors
                    duration-300

                    group-hover:text-white
                    group-focus:text-white
                "
                >
                {profile.name}
                </p>
            </button>
            ))}
        </div>

        {/* Footer Text */}
        <p className="mt-20 text-center text-zinc-600">
            Select a profile to begin your journey.
        </p>
        </section>
    );
}