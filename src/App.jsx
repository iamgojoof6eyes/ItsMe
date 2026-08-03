import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;