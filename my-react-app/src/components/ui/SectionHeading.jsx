import React from "react";

export default function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={[
          "text-sm font-semibold tracking-[0.18em] uppercase",
          dark ? "text-white/70" : "text-[#3B0A45]/70",
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-[#220326]",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/75" : "text-[#220326]/70",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

