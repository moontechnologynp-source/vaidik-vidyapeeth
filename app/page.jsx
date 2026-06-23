"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  GraduationCap,
  School,
  Sparkles,
} from "lucide-react";

import SiteShell from "../components/site-shell";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const cards = [
  {
    title: "Pre School",
    eyebrow: "Early Years",
    text: "A warm, joyful beginning for young learners through Euro Star School.",
    href: "https://eurostarschool.edu.np/",
    external: true,
    icon: School,
  },
  {
    title: "School",
    eyebrow: "Vaidik Vidyapeeth",
    text: "Continue to the main school landing page for academics, admissions, and more.",
    href: "/",
    external: false,
    icon: GraduationCap,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ChoosePage() {
  return (
    <SiteShell>
      <main
        className={`${poppins.variable} relative overflow-hidden bg-[#f8f4ec] font-[var(--font-poppins)] text-slate-950`}
      >
        <section className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.12),transparent_30%),linear-gradient(135deg,#fffaf0_0%,#f8f4ec_46%,#efe2cf_100%)]" />
          <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-700 shadow-sm backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-700" />
              Choose Your Section
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 max-w-3xl text-balance text-2xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-3xl"
            >
              Select the learning pathway you want to explore.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              Pick Pre School for Euro Star School or School for the main Vaidik
              Vidyapeeth landing page.
            </motion.p>

            <motion.div
              variants={container}
              className="mt-12 grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:gap-8"
            >
              {cards.map((card) => {
                const Icon = card.icon;

                const content = (
                  <motion.div
                    variants={item}
                    whileHover={{ y: -8, scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="group relative flex aspect-square min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/70 bg-white/72 p-7 text-left shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition duration-300 hover:border-slate-950/15 hover:bg-white"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-slate-900 opacity-80" />
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-amber-100/70 transition duration-500 group-hover:scale-125" />
                    <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-slate-900/[0.04] transition duration-500 group-hover:scale-125" />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15 transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 transition duration-300 group-hover:translate-x-1">
                        {card.external ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
                        {card.eyebrow}
                      </p>

                      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                        {card.title}
                      </h2>

                      <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
                        {card.text}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                );

                return card.external ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${card.title}`}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={card.title}
                    href={card.href}
                    aria-label={`Open ${card.title}`}
                  >
                    {content}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}