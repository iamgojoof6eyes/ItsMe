import { clearViewer } from "@/store/viewer";
import { LogOut } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ mobile = false }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const viewer = useSelector((state) => state.viewer.currentViewer);

    const switchProfile = () => {
        dispatch(clearViewer());
        navigate("/");
    };

    if (mobile) {
        return (
        <button
            onClick={switchProfile}
            className="w-full rounded-lg bg-red-600 py-3 font-medium text-white transition hover:bg-red-700"
        >
            Switch Profile
        </button>
        );
    }

    return (
        <div className="relative group">

        {/* Avatar + Name */}
        <div
            className="
            flex items-center
            rounded-full
            bg-zinc-900

            transition-all
            duration-300

            pr-0
            group-hover:pr-4

            hover:shadow-[0_0_20px_rgba(229,9,20,.45)]
            "
        >
            <img
            src={viewer.avatar}
            alt={viewer.name}
            className="
                h-11
                w-11
                rounded-full
                object-cover

                border-2
                border-transparent

                transition-all
                duration-300

                group-hover:border-red-600
            "
            />

            <span
            className="
                ml-0
                max-w-0
                overflow-hidden
                whitespace-nowrap

                text-sm
                font-medium
                text-white

                opacity-0

                transition-all
                duration-300

                group-hover:ml-3
                group-hover:max-w-40
                group-hover:opacity-100
            "
            >
            {viewer.name}
            </span>
        </div>

        {/* Dropdown */}
        <div
            className="
            invisible
            absolute
            right-0
            mt-3
            w-72

            origin-top-right

            rounded-xl
            border
            border-zinc-800
            bg-zinc-950

            shadow-2xl

            opacity-0
            scale-95
            translate-y-2

            transition-all
            duration-300

            group-hover:visible
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:translate-y-0
            "
        >
            <div className="flex flex-col items-center border-b border-zinc-800 p-6">

            <img
                src={viewer.avatar}
                alt={viewer.name}
                className="
                h-20
                w-20
                rounded-full
                object-cover

                border-2
                border-red-600
                "
            />

            <h2 className="mt-4 text-xl font-semibold text-white">
                {viewer.name}
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
                Current Profile
            </p>

            </div>

            <div className="p-3">

            <button
                onClick={switchProfile}
                className="
                w-full
                rounded-lg
                flex items-center justify-center
                gap-2
                border
                border-zinc-700

                py-3

                font-medium
                text-white

                transition-all
                duration-300

                hover:border-red-600
                hover:bg-red-600
                hover:shadow-[0_0_20px_rgba(229,9,20,.4)]
                group
                "
            >
                Switch Profile 
                <LogOut
                    size={18}
                    className="text-red-500 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2.25}
                />
            </button>

            </div>
        </div>
        </div>
    );
}