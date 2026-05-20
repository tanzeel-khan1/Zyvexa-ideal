import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RequestServicePage() {
  return (
    <div className="min-h-dvh bg-[#E7DDF2] text-[#220326]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#220326]/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[#220326] shadow-sm transition hover:bg-white"
          >
            <span aria-hidden>←</span> Back
          </Link>
          <Link
            to="/coming-soon"
            className="inline-flex items-center justify-center rounded-2xl bg-[#220326] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:shadow-md"
          >
            Coming Soon
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 overflow-hidden rounded-[32px] border border-[#220326]/10 bg-white/70 p-7 shadow-sm"
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#3B0A45]/70">
            Request a Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A clean request flow is coming
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#220326]/70 sm:text-lg">
            This page is a placeholder for the upcoming request workflow (service
            type → location → details → matching → chat).
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@zyvexa.com"
              className="inline-flex items-center justify-center rounded-2xl bg-[#220326] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-px hover:shadow-md"
            >
              Join early access
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl border border-[#220326]/15 bg-white/80 px-6 py-3 text-sm font-semibold text-[#220326] shadow-sm transition hover:bg-white"
            >
              Go to landing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

