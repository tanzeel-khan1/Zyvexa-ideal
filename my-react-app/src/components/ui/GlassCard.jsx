import React from "react";

export default function GlassCard({ className = "", children }) {
  return (
    <div
      className={[
        "group rounded-3xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_80px_rgba(34,3,38,0.25)] backdrop-blur-xl",
        "transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_30px_90px_rgba(34,3,38,0.32)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

