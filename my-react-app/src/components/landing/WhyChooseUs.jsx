import React from "react";
import GlassCard from "../ui/GlassCard";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const benefits = [
  {
    title: "Fast response",
    desc: "Less waiting, fewer back-and-forths.",
    glyph: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Real-time communication",
    desc: "Chat directly with your assigned pro.",
    glyph: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H9l-5 3V6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Simple experience",
    desc: "One workflow from request to completion.",
    glyph: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 7h10M7 12h10M7 17h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Trusted local providers",
    desc: "Quality-focused network, locally grounded.",
    glyph: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#220326] py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#E7DDF2]/18 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[520px] w-[520px] rounded-full bg-[#A855F7]/18 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Why choose us"
            title="Premium experience, not a marketplace maze"
            description="Zyvexa is designed around a clean workflow—so customers get help quickly and providers can focus on the job."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {benefits.map((b, idx) => (
            <Reveal key={b.title} delayMs={80 * idx}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <Icon>{b.glyph}</Icon>

                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {b.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {b.desc}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
