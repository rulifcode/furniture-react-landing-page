import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-6 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-white text-3xl font-bold font-saira">
          FurniShop
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-16 text-white items-center">
          <a className="font-semibold hover:opacity-80" href="#home">Home</a>
          <a className="hover:opacity-80" href="#about">About</a>
          <a className="hover:opacity-80" href="#features">Features</a>
          <a className="hover:opacity-80" href="#contact">Contact</a>
        </nav>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 z-50"
        >
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10 text-white text-xl">
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#features">Features</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>

        </nav>
      </div>
    </header>
  );
}
