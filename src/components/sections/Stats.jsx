import React from "react";
import StatItem from "../ui/StatsItem";

export default function Stats({ statsData, loading }) {
  if (loading || !statsData) return null;

  return (
    <div
      className="
        relative
        md:absolute
        md:left-1/2 md:-translate-x-1/2
        md:top-[760px]
        z-30
        px-6
        w-full
        flex
        justify-center
        mt-[-80px] md:mt-0
      "
    >
      {/* DESKTOP */}
      <div className="hidden md:flex items-center w-full max-w-[1240px] h-[180px] bg-[#286F6C] rounded-[20px] px-16 shadow-xl divide-x divide-white/30">
        {statsData.map((item, i) => (
          <StatItem key={i} value={item.value} label={item.label} />
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full max-w-[340px] bg-[#286F6C] rounded-[20px] shadow-xl relative overflow-hidden mb-10">
        <div className="grid grid-cols-2 grid-rows-2">
          {/* Baris Pertama (Top Row) */}
          <div className="relative col-span-2 grid grid-cols-2">
            {statsData.slice(0, 2).map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center justify-center py-10 px-6">
                  <StatItem value={item.value} label={item.label} mobile />
                </div>
                {/* Line vertikal di tengah baris atas */}
                {i === 0 && (
                  <div className="absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-white/30 -translate-x-1/2" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Baris Kedua (Bottom Row) */}
          <div className="relative col-span-2 grid grid-cols-2">
            {statsData.slice(2, 4).map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center justify-center py-10 px-6">
                  <StatItem value={item.value} label={item.label} mobile />
                </div>
                {/* Line vertikal di tengah baris bawah */}
                {i === 0 && (
                  <div className="absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-white/30 -translate-x-1/2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}