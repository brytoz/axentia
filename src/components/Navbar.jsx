import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black/10 backdrop-blur-md text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Axentia</div>


        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-teal-300 transition">About</a>
          <a href="#contact" className="hover:text-teal-300 transition">Contact</a>
          <a href="#support" className="hover:text-teal-300 transition">Support</a>
        </div>


        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-black/10 backdrop-blur-md text-white">
          <a href="#about" className="block hover:text-teal-300">About</a>
          <a href="#contact" className="block hover:text-teal-300">Contact</a>
          <a href="#support" className="block hover:text-teal-300">Support</a>
        </div>
      )}
    </nav>
  );
}