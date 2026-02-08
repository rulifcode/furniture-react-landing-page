import React from "react";

export default function StatItem({ value, label, mobile }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 font-saira">
      <span
        className={`text-white font-semibold leading-[120%] ${
          mobile ? "text-[24px]" : "text-[40px]"
        }`}
      >
        {value}
      </span>

      <span
        className={`text-white font-normal leading-[130%] tracking-[0.01em] text-center opacity-90 ${
          mobile ? "text-[14px]" : "text-[20px]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
