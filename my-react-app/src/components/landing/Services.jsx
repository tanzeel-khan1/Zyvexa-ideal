import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const categories = [
  {
    title: "Electricians",
    desc: "Power issues, fittings, repairs, and upgrades.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 2L4 14h7l-1 8 10-14h-7l0-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Plumbers",
    desc: "Leaks, blockages, installations, and fixes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3h10v4H7V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path
          d="M9 7v7a3 3 0 0 0 6 0V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="The essentials, done right"
          description="Two high-frequency categories to start, built for speed, clarity, and trust."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((c, idx) => (
            <Reveal key={c.title} delayMs={80 * idx}>
              <div className="group relative overflow-hidden rounded-3xl border border-[#220326]/10 bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_20%_0%,rgba(59,10,69,0.10),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#220326] text-white shadow-sm transition duration-300 group-hover:scale-[1.03]">
                    {c.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#220326]">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#220326]/70">{c.desc}</p>
                    <p className="mt-4 text-sm font-semibold text-[#3B0A45]">Built for real-time matching →</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

