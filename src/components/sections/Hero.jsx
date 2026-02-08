import React from "react";
import Navbar from "../layout/Navbar.jsx"
import useHeader from "../../hooks/useHeader.js";
import useStats from "../../hooks/useStats.js";
import Stats from "../sections/Stats";

export default function HeroContainer() {
  const { data: heroData, isLoading: heroLoading } = useHeader();
  const { data: statsData = [], isLoading: statsLoading } = useStats();

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: window.innerWidth < 768 ? "95% center" : "center 80%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1a1a1a", // Fallback warna gelap sambil nunggu gambar
    backgroundImage: heroData?.banner
      ? `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("${heroData.banner}")`
      : "none",
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[850px] md:h-[1033px] overflow-hidden"
    >
      <Navbar />

      {/* ================= HERO BACKGROUND ================= */}
      <div
        className="
          absolute top-0 left-0 w-full h-[850px] z-0
          bg-[length:cover]
          bg-[position:20%_center]
          md:bg-[position:center_80%]
        "
        style={heroStyle}
      />


      {/* ================= HERO CONTENT ================= */}
      <div className="relative w-full h-[850px] flex flex-col items-center justify-center text-center px-6 z-20">
        {heroLoading ? (
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-16 w-3/4 bg-white/20 rounded-lg"></div>
            <div className="h-6 w-1/2 bg-white/10 rounded-lg"></div>
          </div>
        ) : (
          <>
            <h1 className="text-white text-4xl md:text-[64px] font-semibold leading-[120%] capitalize mb-6 max-w-4xl md:max-w-[888px] font-saira">
              {heroData?.title}
            </h1>

            <p className="text-white text-sm md:text-xl opacity-90 max-w-2xl md:max-w-[627px] mx-auto leading-[150%] tracking-[0.01em] mb-10 font-saira">
              {heroData?.description}
            </p>
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-white" />
            <button className="px-[80px] py-[16px] bg-white/10 backdrop-blur-md border border-white/30 rounded-[10px] text-white font-medium text-lg md:text-xl hover:bg-white/20 transition-all active:scale-95">
              Shop Now
            </button>
          </>
        )}
      </div>


      {/* ================= DECORATION DOTS ================= */}
      <Dot top={266} left={220} />
      <Dot top={557} left={290} />
      <Dot top={657} left={1335} />

      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-white" />

      {/* ================= Bagian Stats ================= */}
      <Stats statsData={statsData} loading={statsLoading} />
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

function Dot({ top, left }) {
  return (
    <div
      className="absolute hidden md:block z-20"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition border border-white">
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
      </div>
    </div>
  );
}

function StatItem({ value, label, mobile }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 font-saira">
      <span
        className={`text-white font-semibold leading-[120%] ${mobile ? "text-[24px] uppercase" : "text-[40px]"
          }`}
      >
        {value}
      </span>
      <span
        className={`text-white font-normal leading-[130%] tracking-[0.01em] text-center opacity-90 whitespace-pre-line ${mobile ? "text-[14px]" : "text-[20px]"
          }`}
      >
        {label}
      </span>
    </div>
  );
}
