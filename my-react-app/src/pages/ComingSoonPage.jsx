import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <div className="min-h-dvh bg-[#220326] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
        >
          <span aria-hidden>←</span> Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-white/70">
            Zyvexa
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Coming Soon
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            We’re building a faster, cleaner workflow to connect you with trusted
            electricians and plumbers in real-time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@zyvexa.com"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#220326] shadow-sm transition hover:-translate-y-px hover:shadow-md"
            >
              Email us
            </a>
            <Link
              to="/request"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Request a Service
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

