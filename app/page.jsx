"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Megaphone,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../components/section-heading";
import SiteShell from "../components/site-shell";
import {
  facilities,
  highlights,
  programs,
  quickFacts,
  schoolStrengths,
  updates,
} from "../lib/site-content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

const fallbackHero = {
  kicker: "Kathmandu-32, Koteshwor",
  title: "A school where values, learning, and confidence grow together.",
  subtitle:
    "Vaidik Vidyapeeth provides a calm, disciplined, and inspiring learning environment where students are guided academically, socially, and personally.",

  primaryButtonText: "Apply for Admission",
  primaryButtonLink: "/admissions",

  secondaryButtonText: "View Academic Programs",
  secondaryButtonLink: "/academics",

  trustItemOne: "Discipline",
  trustItemTwo: "Confidence",
  trustItemThree: "Creativity",
  trustItemFour: "Care",

  miniCardValue: "3",
  miniCardLabel: "Academic wings",

  visualEyebrow: "School Environment",
  visualTitle: "Structured learning with personal attention",
  visualText:
    "A balanced routine that supports academic focus, good manners, classroom participation, and overall student growth.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export default function HomePage() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [hero, setHero] = useState(fallbackHero);

  const activeProgramData = useMemo(() => {
    return programs[activeProgram] || programs[0];
  }, [activeProgram]);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(`${API_BASE}/hero/page/home`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (res.ok && data.success && data.hero) {
          setHero({
            ...fallbackHero,
            ...data.hero,
          });
        }
      } catch (error) {
        console.error("Hero fetch error:", error);
      }
    };

    fetchHero();
  }, []);

  const trustItems = [
    hero.trustItemOne,
    hero.trustItemTwo,
    hero.trustItemThree,
    hero.trustItemFour,
  ].filter(Boolean);

  return (
    <SiteShell>
      <main
        className={`${poppins.variable} overflow-hidden bg-[#f8f4ec] font-[var(--font-poppins)] text-slate-900`}
      >
        {/* HERO - BACKEND CONNECTED */}
        <section className="hero-shell relative overflow-hidden">
          <div
            className="hero-backdrop"
            style={
              hero.backgroundImage
                ? {
                    backgroundImage: `url(${hero.backgroundImage})`,
                  }
                : undefined
            }
          />
          <div className="hero-overlay" />

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-6 top-24 z-10 hidden h-24 w-24 rounded-full border border-white/25 bg-white/10 blur-[1px] backdrop-blur-md lg:block"
          />

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute bottom-20 right-10 z-10 hidden h-32 w-32 rounded-full bg-amber-200/20 blur-2xl lg:block"
          />

          <div className="relative z-20 mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              {/* LEFT CONTENT */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="hero-copy max-w-3xl"
              >
                {hero.kicker && (
                  <motion.p
                    variants={fadeUp}
                    className="hero-kicker inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-black/10 backdrop-blur-md"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    {hero.kicker}
                  </motion.p>
                )}

                <motion.h1
                  variants={fadeUp}
                  className="hero-title mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white drop-shadow-xl sm:text-5xl lg:text-7xl"
                >
                  {hero.title}
                </motion.h1>

                {hero.subtitle && (
                  <motion.p
                    variants={fadeUp}
                    className="hero-text mt-6 max-w-2xl text-sm font-normal leading-7 text-white/82 sm:text-base"
                  >
                    {hero.subtitle}
                  </motion.p>
                )}

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {hero.primaryButtonText && hero.primaryButtonLink && (
                    <Link
                      href={hero.primaryButtonLink}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-50"
                    >
                      <span className="flex-1 text-center">
                        {hero.primaryButtonText}
                      </span>
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}

                  {hero.secondaryButtonText && hero.secondaryButtonLink && (
                    <Link
                      href={hero.secondaryButtonLink}
                      className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      <span className="flex-1 text-center">
                        {hero.secondaryButtonText}
                      </span>
                    </Link>
                  )}
                </motion.div>

                {trustItems.length > 0 && (
                  <motion.div
                    variants={fadeUp}
                    className="hero-trust-row mt-8 flex flex-wrap gap-2"
                    aria-label="School values"
                  >
                    {trustItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-md"
                      >
                        {item}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* RIGHT PANEL */}
              <motion.aside
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="hero-panel rounded-[2rem] border border-white/20 bg-white/13 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className="hero-visual relative overflow-hidden rounded-[1.65rem]"
                  style={
                    hero.panelImage
                      ? {
                          backgroundImage: `url(${hero.panelImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {(hero.miniCardValue || hero.miniCardLabel) && (
                    <div className="hero-mini-card absolute left-5 top-5 z-10 rounded-2xl border border-white/25 bg-white/90 px-5 py-4 text-slate-950 shadow-xl backdrop-blur-md">
                      {hero.miniCardValue && (
                        <span className="hero-mini-card-value block text-3xl font-extrabold leading-none">
                          {hero.miniCardValue}
                        </span>
                      )}

                      {hero.miniCardLabel && (
                        <span className="hero-mini-card-label mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {hero.miniCardLabel}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="hero-visual-copy relative z-10 flex min-h-[360px] flex-col justify-end p-6 text-white">
                    {hero.visualEyebrow && (
                      <p className="hero-visual-eyebrow text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
                        {hero.visualEyebrow}
                      </p>
                    )}

                    {hero.visualTitle && (
                      <h3 className="hero-visual-title mt-2 max-w-md text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl">
                        {hero.visualTitle}
                      </h3>
                    )}

                    {hero.visualText && (
                      <p className="hero-visual-text mt-3 max-w-md text-sm leading-7 text-white/78">
                        {hero.visualText}
                      </p>
                    )}
                  </div>
                </motion.div>

                <div className="mt-5 grid gap-3">
                  {highlights.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6, scale: 1.01 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="highlight-row flex items-center gap-3 rounded-2xl border border-white/18 bg-white/12 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 backdrop-blur-md"
                    >
                      <span className="highlight-dot h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_18px_rgba(253,230,138,0.9)]" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.aside>
            </div>

            {/* QUICK FACTS KEPT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {quickFacts.map((fact) => (
                <motion.article
                  key={fact.label}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="fact-card rounded-[1.5rem] border border-white/20 bg-white/15 p-6 text-white shadow-xl shadow-black/15 backdrop-blur-xl"
                >
                  <div className="fact-value text-3xl font-extrabold tracking-[-0.04em]">
                    {fact.value}
                  </div>
                  <p className="fact-label mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                    {fact.label}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-block relative overflow-hidden bg-[#f8f4ec]">
          <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-200/45 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SectionHeading
                  eyebrow="About Vaidik Vidyapeeth"
                  title="A thoughtful school experience built around learning and character."
                  text="We believe education should help children become capable, respectful, confident, and curious. Our approach combines academic structure with values, creativity, and guided participation."
                />
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                  <BookOpen className="h-5 w-5" />
                </div>

                <p className="text-sm leading-8 text-slate-700 sm:text-base">
                  From classroom learning to school activities, every part of
                  the day is designed to help students build discipline,
                  communication, confidence, and responsibility. Families can
                  expect a caring environment where children are noticed,
                  guided, and encouraged.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 grid gap-6 lg:grid-cols-3"
            >
              {[
                {
                  label: "01 / Values",
                  title: "Learning with discipline",
                  text: "Students are encouraged to develop respect, responsibility, honesty, and positive daily habits.",
                  strong: true,
                },
                {
                  label: "02 / Academics",
                  title: "Strong classroom foundation",
                  text: "Lessons are planned to help students understand concepts, practise regularly, and grow step by step.",
                },
                {
                  label: "03 / Growth",
                  title: "Confidence beyond books",
                  text: "Activities, presentations, creativity, and participation help students express themselves with confidence.",
                },
              ].map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -9 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className={`feature-card rounded-[2rem] border p-7 shadow-xl transition ${
                    item.strong
                      ? "feature-card-strong border-transparent bg-slate-950 text-white shadow-slate-900/20"
                      : "border-black/10 bg-white/80 text-slate-900 shadow-slate-900/5 backdrop-blur-xl"
                  }`}
                >
                  <p
                    className={`feature-label text-xs font-bold uppercase tracking-[0.22em] ${
                      item.strong ? "text-amber-200" : "text-rose-700"
                    }`}
                  >
                    {item.label}
                  </p>

                  <h3 className="feature-title mt-4 text-2xl font-bold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p
                    className={`feature-copy mt-4 text-sm leading-7 ${
                      item.strong ? "text-white/70" : "text-slate-600"
                    }`}
                  >
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CAMPUS STRIP */}
        <section className="section-block section-soft relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.25 }}
              className="campus-strip grid gap-5 lg:grid-cols-3"
            >
              {[
                {
                  className: "campus-photo campus-photo-one",
                  label: "Focused Classrooms",
                },
                {
                  className: "campus-photo campus-photo-two",
                  label: "Creative Learning",
                },
                {
                  className: "campus-photo campus-photo-three",
                  label: "Active School Life",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -10, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={`${item.className} group relative min-h-[360px] overflow-hidden rounded-full shadow-2xl shadow-slate-900/15`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition duration-500 group-hover:from-black/80" />

                  <span className="relative z-10 mt-auto inline-flex bg-white/15 px-5 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
                    {item.label}
                  </span>

                  <div className="absolute right-5 top-5 z-10 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    0{index + 1}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section-block strength-band relative overflow-hidden bg-[#fffaf1]">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-900/15 to-transparent" />

          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <div className="strength-layout grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="lg:sticky lg:top-24"
              >
                <SectionHeading
                  eyebrow="Why Choose Us"
                  title="A balanced environment for academics, values, and personal growth."
                  text="Vaidik Vidyapeeth focuses on building good learners and good individuals through a structured school routine and supportive guidance."
                />

                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:bg-rose-800"
                >
                  Learn More About School
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="strength-list grid gap-4"
              >
                {schoolStrengths.map((item, index) => (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ x: 8, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="strength-card group grid gap-5 rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:grid-cols-[auto_1fr]"
                  >
                    <div className="strength-index flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-sm font-extrabold text-rose-800 transition duration-300 group-hover:bg-slate-950 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="feature-label text-xs font-bold uppercase tracking-[0.22em] text-rose-700">
                        {item.label}
                      </p>

                      <h3 className="feature-title mt-2 text-xl font-bold tracking-[-0.02em] text-slate-950">
                        {item.title}
                      </h3>

                      <p className="feature-copy mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="section-block relative overflow-hidden bg-[#f8f4ec]">
          <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-teal-200/25 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            >
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="Academic Programs"
                  title="Learning stages designed with clear progress."
                  text="Each academic wing follows age-appropriate learning goals, classroom routines, practice methods, and activities."
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  href="/academics"
                  className="inline-link group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
                >
                  Explore Academics
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-3"
              >
                {programs.map((program, index) => {
                  const isActive = activeProgram === index;

                  return (
                    <motion.button
                      key={program.title}
                      variants={fadeUp}
                      type="button"
                      onClick={() => setActiveProgram(index)}
                      whileHover={{ x: 7, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className={`rounded-[1.6rem] border p-5 text-left transition duration-300 ${
                        isActive
                          ? "border-transparent bg-slate-950 text-white shadow-2xl shadow-slate-900/20"
                          : "border-black/10 bg-white/75 text-slate-900 shadow-lg shadow-slate-900/5 hover:bg-white hover:shadow-xl"
                      }`}
                    >
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.22em] ${
                          isActive ? "text-amber-200" : "text-rose-700"
                        }`}
                      >
                        {program.stage || "Level"}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em]">
                        {program.title}
                      </h3>
                    </motion.button>
                  );
                })}
              </motion.div>

              <motion.article
                key={activeProgramData.title}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="program-card relative min-h-[340px] overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 p-7 shadow-2xl shadow-slate-900/8 backdrop-blur-xl sm:p-9"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-rose-100 blur-2xl" />

                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 shadow-lg shadow-rose-900/5">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <p className="program-kicker relative text-xs font-bold uppercase tracking-[0.24em] text-rose-700">
                  {activeProgramData.stage || "Selected Level"}
                </p>

                <h3 className="program-title relative mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  {activeProgramData.title}
                </h3>

                <p className="program-copy relative mt-4 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                  {activeProgramData.text}
                </p>

                <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                  {["Readiness", "Practice", "Confidence"].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -5 }}
                      className="rounded-2xl border border-black/10 bg-white/75 p-4 text-center shadow-lg shadow-slate-900/5"
                    >
                      <CheckCircle2 className="mx-auto h-5 w-5 text-teal-700" />
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="program-line absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-rose-700 via-amber-400 to-teal-600" />
              </motion.article>
            </div>
          </div>
        </section>

        {/* FACILITIES + UPDATES */}
        <section className="section-block section-soft relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:px-10">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionHeading
                eyebrow="Campus Facilities"
                title="Spaces that make learning more active and engaging."
                text="Our facilities support classroom focus, reading, creativity, activities, and student participation throughout the school day."
              />

              <div className="mt-8 grid gap-4">
                {facilities.slice(0, 3).map((facility) => (
                  <motion.article
                    key={facility.title}
                    whileHover={{ x: 7, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="preview-row-card group flex gap-4 rounded-[1.5rem] border border-black/10 bg-white/80 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
                  >
                    <div className="preview-row-dot mt-2 h-3 w-3 shrink-0 rounded-full bg-rose-700 shadow-[0_0_18px_rgba(190,18,60,0.35)]" />

                    <div>
                      <h3 className="preview-row-title text-xl font-bold tracking-[-0.02em] text-slate-950">
                        {facility.title}
                      </h3>
                      <p className="preview-row-copy mt-2 text-sm leading-7 text-slate-600">
                        {facility.text}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <Link
                href="/facilities"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-300 hover:-translate-y-1 hover:bg-rose-800"
              >
                View All Facilities
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.aside
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="updates-panel overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/25 sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Megaphone className="h-5 w-5" />
              </div>

              <p className="updates-panel-eyebrow text-xs font-bold uppercase tracking-[0.24em] text-amber-200">
                Latest Updates
              </p>

              <h3 className="updates-panel-title mt-3 text-3xl font-extrabold leading-tight tracking-[-0.04em]">
                Helpful information for parents and students
              </h3>

              <div className="mt-6 grid gap-4">
                {updates.map((item) => (
                  <motion.article
                    key={item.title}
                    whileHover={{ y: -5 }}
                    className="update-card rounded-[1.35rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md transition hover:bg-white/12"
                  >
                    <div className="update-badge mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.label}
                    </div>

                    <div>
                      <h3 className="update-title text-lg font-bold tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                      <p className="update-copy mt-2 text-sm leading-7 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-block bg-[#f8f4ec]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-slate-950 px-6 py-14 text-center text-white shadow-2xl shadow-slate-900/25 sm:px-10 lg:py-20"
            >
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-rose-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
                  Admissions Open
                </p>

                <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
                  Give your child a school environment built on care,
                  confidence, and strong values.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
                  Connect with our team to learn more about admissions,
                  academic programs, school facilities, and the daily learning
                  experience.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/admissions"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-50"
                  >
                    Start Admission Inquiry
                    <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    Contact School
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}