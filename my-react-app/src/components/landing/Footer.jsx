import React from "react";
import Reveal from "../ui/Reveal";

export default function Footer() {
  const socials = [
    {
      name: "Linked",
      href: "https://www.linkedin.com/company/zyvexa/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.42v6.33ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
        </svg>
      ),
    },
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M18.9 2H22l-6.78 7.74L23 22h-6.2l-4.86-6.26L6.6 22H3.5l7.25-8.28L1 2h6.35l4.4 5.7L18.9 2Zm-1.1 18h1.72L6.41 3.9H4.57L17.8 20Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
          <path
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.6-1.5h1.7V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V11H7v3h2.8v8h3.7Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-[#220326]/10 bg-white/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-tight text-[#220326]">
                Zyvexa
              </p>
              <p className="mt-1 text-sm text-[#220326]/70">Karachi, Pakistan</p>
              <a
                className="mt-3 inline-flex text-sm font-semibold text-[#3B0A45] underline decoration-[#3B0A45]/30 underline-offset-4 transition hover:decoration-[#3B0A45]"
                href="mailto:hello@zyvexa.com"
              >
                hello@zyvexa.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="inline-flex items-center justify-center rounded-2xl border border-[#220326]/10 bg-white/70 p-3 text-[#220326] shadow-sm transition hover:-translate-y-px hover:bg-white hover:shadow-md"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-xs text-[#220326]/60">
          © {new Date().getFullYear()} Zyvexa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

