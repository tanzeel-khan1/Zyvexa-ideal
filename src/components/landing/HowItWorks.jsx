import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const steps = [
  {
    title: "Request",
    desc: "Tell us what you need in seconds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Accept",
    desc: "A trusted pro accepts your job.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Chat",
    desc: "Confirm details and timing instantly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Complete",
    desc: "Finish the job with confidence.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(59,10,69,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A simple workflow that feels effortless"
          description="Zyvexa keeps it clean: request, get accepted by a nearby provider, chat in real-time, and mark the job complete."
        />

       <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
  {steps.map((s, idx) => (
    <Reveal key={s.title} delayMs={80 * idx}>
      <div className="h-full rounded-3xl border border-[#220326]/10 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/75 hover:shadow-md flex flex-col">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#3B0A45] to-[#220326] text-white shadow-sm transition duration-300">
            {s.icon}
          </span>

          <h3 className="text-lg font-semibold tracking-tight text-[#220326]">
            {s.title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#220326]/70">
          {s.desc}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}

