import React from "react";

export default function Icon({ children }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
      <span className="text-white">{children}</span>
    </span>
  );
}

