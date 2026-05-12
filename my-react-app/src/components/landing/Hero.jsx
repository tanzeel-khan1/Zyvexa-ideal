import React from "react";
import { Link } from "react-router-dom";
import Pill from "../ui/Pill";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#220326] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#A855F7]/25 blur-3xl" />
        <div className="absolute -bottom-56 right-[-180px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-120px,rgba(231,221,242,0.25),transparent_60%),linear-gradient(135deg,#220326_0%,#3B0A45_40%,#220326_100%)]" />
      </div>

    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

  {/* Logo */}
  <a
    className="group inline-flex items-center gap-3 rounded-2xl px-2 py-2 transition-all duration-300 "
    aria-label="Zyvexa home"
  >
    <div className="relative ml-0  md:ml-20">
      <div className="absolute ml-20 inset-0 rounded-2xl  blur-lg opacity-0 transition duration-300 group-hover:opacity-100"></div>

      <img
        src="/zlogo.png"
        alt="Zyvexa Logo"
        className="relative h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10 transition duration-300 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-col leading-tight">
      <span className="text-xl font-bold tracking-tight text-white">
        Zyvexa
      </span>

     
    </div>
  </a>

  {/* Nav Links */}
  <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl sm:flex">

    <a
      href="#how"
      className="rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
    >
      How it works
    </a>

    <a
      href="#services"
      className="rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
    >
      Services
    </a>

    <a
      href="#why"
      className="rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
    >
      Why Zyvexa
    </a>
  </div>

  {/* Buttons */}
  <div className="flex items-center gap-3">

    <Link
      to="/request"
      className="hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:inline-flex"
    >
      Request a Service
    </Link>

    <Link
      to="/coming-soon"
      className="inline-flex rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-[#220326] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
    >
      Coming Soon
    </Link>
  </div>
</nav> 
{/* <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
  <a
    className="inline-flex items-center gap-3 rounded-2xl px-2 py-1 transition hover:bg-white/5"
    aria-label="Zyvexa home"
  >
    <img
      src="/zlogo.png"
      alt="Zyvexa Logo"
      className="h-10 w-10 rounded-2xl object-cover"
    />

    <span className="text-lg font-semibold tracking-tight">
      Zyvexa
    </span>
  </a>

  <div className="hidden items-center gap-2 sm:flex">
    <a
      href="#how"
      className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/5"
    >
      How it works
    </a>

    <a
      href="#services"
      className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/5"
    >
      Services
    </a>

    <a
      href="#why"
      className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white hover:bg-white/5"
    >
      Why Zyvexa
    </a>
  </div>

  <div className="flex items-center gap-2">
    <Link
      to="/request"
      className="hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-white/15 sm:inline-flex"
    >
      Request a Service
    </Link>

    <Link
      to="/coming-soon"
      className="inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#220326] shadow-sm transition hover:-translate-y-px hover:shadow-md"
    >
      Coming Soon
    </Link>
  </div>
</nav> */}
      <div
        id="top"
        className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24"
      >
        <div className="mx-auto max-w-3xl text-center">
         

          <h1 className="zyvexa-fade-up-delayed mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Fast &amp; Simple Local Home Services
          </h1>
          <p className="zyvexa-fade-up-delayed-2 mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Connect with trusted electricians and plumbers in real-time.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              id="request"
              to="/request"
              className="zyvexa-glow inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#220326] transition hover:-translate-y-px hover:shadow-lg"
            >
              Request a Service
            </Link>
            <Link
              to="/coming-soon"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Coming Soon
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { k: "Live matching", v: "Find pros faster" },
              { k: "In-app chat", v: "Clear communication" },
              { k: "Workflow", v: "Request → Complete" },
            ].map((it, idx) => (
              <Reveal key={it.k} delayMs={80 * idx}>
                <div className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-left backdrop-blur-xl">
                  <p className="text-sm font-semibold text-white">{it.k}</p>
                  <p className="mt-1 text-sm text-white/70">{it.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

