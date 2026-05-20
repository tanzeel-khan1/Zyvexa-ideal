import React from "react";

export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
      {children}
    </span>
  );
}

