import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";

export default function Vision() {
  return (
    <section id="vision" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#3B0A45]/70">
                Vision
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#220326] sm:text-4xl">
                Built to make home services feel instant
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#220326]/70 sm:text-lg">
                Zyvexa is building a faster and simpler way to access trusted
                local home services—starting with electricians and plumbers,
                powered by a clean workflow system designed for real-time
                coordination.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#220326] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:shadow-md"
                >
                  Request a Service
                </Link>
                <a
                  href="mailto:hello@zyvexa.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#220326]/15 bg-white/70 px-6 py-3 text-sm font-semibold text-[#220326] shadow-sm transition hover:bg-white"
                >
                  Contact us
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative overflow-hidden rounded-[32px] border border-[#220326]/10 bg-white/70 p-6 shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_50%_0%,rgba(59,10,69,0.12),transparent_60%)]" />
              <div className="relative">
                <p className="text-sm font-semibold text-[#220326]">What you’ll feel</p>
                <div className="mt-4 space-y-3">
                  {[
                    "Premium UI with clean spacing and clarity",
                    "Real-time updates without the clutter",
                    "A workflow you can understand instantly",
                    "Local-first trust, built into the product",
                  ].map((t, idx) => (
                    <Reveal key={t} delayMs={80 * idx}>
                      <div className="flex items-start gap-3 rounded-2xl border border-[#220326]/10 bg-white/60 p-4 backdrop-blur-xl">
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3B0A45] text-white transition duration-300 group-hover:scale-[1.02]">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-sm leading-relaxed text-[#220326]/75">{t}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

