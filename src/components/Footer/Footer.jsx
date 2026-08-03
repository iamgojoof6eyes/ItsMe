export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-zinc-400 md:flex-row md:justify-between">

                <p>© {new Date().getFullYear()} Raunak. All rights reserved.</p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-red-500">
                        GitHub
                    </a>

                    <a href="#" className="hover:text-red-500">
                        LinkedIn
                    </a>

                    <a href="#" className="hover:text-red-500">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}