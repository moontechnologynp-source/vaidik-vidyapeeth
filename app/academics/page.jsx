"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Languages,
  Palette,
  PenLine,
  Sparkles,
} from "lucide-react";

import SiteShell from "../../components/site-shell";
import { learningFlow, programs } from "../../lib/site-content";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const academicDetails = [
  {
    title: "Language And Communication",
    text: "Reading, writing, speaking, and presentation are treated as central academic skills.",
    icon: Languages,
    color: "bg-[#0f766e]",
  },
  {
    title: "Mathematics And Reasoning",
    text: "Students build confidence through structured practice, application, and step-by-step clarity.",
    icon: Brain,
    color: "bg-[#be123c]",
  },
  {
    title: "Science And Discovery",
    text: "Observation, explanation, and hands-on work help learners connect theory with reality.",
    icon: FlaskConical,
    color: "bg-[#0e7490]",
  },
  {
    title: "Creative And Co-Curricular",
    text: "Arts, clubs, performances, and events strengthen expression, teamwork, and confidence.",
    icon: Palette,
    color: "bg-[#2563eb]",
  },
];

const learningStyles = [
  {
    key: "concept",
    title: "Concept First",
    text: "Students begin with clear explanations, examples, and guided understanding.",
  },
  {
    key: "practice",
    title: "Practice Daily",
    text: "Regular classwork, revision, and exercises help students build confidence.",
  },
  {
    key: "present",
    title: "Present Clearly",
    text: "Speaking, writing, and classroom participation help students express ideas.",
  },
];

export default function AcademicsPage() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeStyle, setActiveStyle] = useState("concept");

  const activeProgramData = programs[activeProgram] || programs[0];

  const activeLearningStyle = useMemo(() => {
    return (
      learningStyles.find((item) => item.key === activeStyle) ||
      learningStyles[0]
    );
  }, [activeStyle]);

  return (
    <SiteShell>
      <main
        className={`${nunito.variable} ${fraunces.variable} overflow-hidden bg-[#f8fbfb] font-[var(--font-nunito)] text-slate-900`}
      >
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#0f766e]/15 blur-3xl" />
            <div className="absolute right-[-80px] top-20 h-80 w-80 rounded-full bg-[#be123c]/12 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-[#0e7490]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#0f766e]/15 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e] shadow-sm backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#be123c]" />
                Academics
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-2xl font-[var(--font-fraunces)] text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#083344] sm:text-5xl lg:text-[56px]"
              >
                Learning that feels clear, active, and confidence-building.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Learning at Vaidik Vidyapeeth moves from clear concepts to
                regular practice, active participation, and confident
                presentation.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="group inline-flex items-center rounded-full bg-[#be123c] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#be123c]/20 transition hover:-translate-y-0.5 hover:bg-[#9f1239]"
                >
                  Start Admissions
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#0f766e]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#0f766e] transition hover:-translate-y-0.5 hover:bg-[#ecfdf5]"
                >
                  Book Campus Visit
                </Link>
              </motion.div>
            </motion.div>

            {/* HERO PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="rounded-[34px] border border-white bg-white p-6 shadow-2xl shadow-slate-900/[0.07]">
                <div className="rounded-[28px] bg-gradient-to-br from-[#083344] via-[#0f766e] to-[#be123c] p-6 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                    Academic Focus
                  </p>

                  <h3 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight">
                    Progression, practice, and confidence.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    Students are supported through age-appropriate expectations,
                    purposeful activities, and steady feedback.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Concept", "Practice", "Confidence"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f8fbfb] p-4 text-center"
                    >
                      <p className="font-[var(--font-fraunces)] text-2xl font-semibold text-[#083344]">
                        0{index + 1}
                      </p>
                      <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROGRAM LEVELS INTERACTIVE */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Program Levels
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                Academic stages parents can understand at a glance.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Each program level supports a different stage of growth, from
                early readiness to independent learning.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-3"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {programs.map((program, index) => {
                  const isActive = activeProgram === index;

                  return (
                    <motion.button
                      key={program.title}
                      variants={fadeUp}
                      type="button"
                      onClick={() => setActiveProgram(index)}
                      whileHover={{ y: -3 }}
                      className={`rounded-3xl border p-4 text-left transition ${
                        isActive
                          ? "border-transparent bg-[#083344] text-white shadow-lg shadow-[#083344]/15"
                          : "border-slate-100 bg-[#f8fbfb] text-[#083344] hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <BookOpen
                        className={`h-5 w-5 ${
                          isActive ? "text-cyan-200" : "text-[#be123c]"
                        }`}
                      />

                      <p className="mt-3 text-sm font-extrabold">
                        {program.title}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                key={activeProgramData.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0f766e] via-[#0e7490] to-[#be123c] p-[1px]"
              >
                <div className="rounded-[29px] bg-white p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                    Selected Level
                  </p>

                  <h3 className="mt-3 font-[var(--font-fraunces)] text-2xl font-semibold leading-snug text-[#083344]">
                    {activeProgramData.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activeProgramData.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* LEARNING CYCLE */}
        <section className="bg-[#f8fbfb]">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Learning Cycle
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                A classroom rhythm that feels active and intentional.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Students move from instruction to understanding through a clear
                academic rhythm.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              {learningFlow.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-[30px] border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/[0.05]"
                >
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-extrabold text-white ${
                      index === 0
                        ? "bg-[#0f766e]"
                        : index === 1
                        ? "bg-[#be123c]"
                        : index === 2
                        ? "bg-[#0e7490]"
                        : "bg-[#2563eb]"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="font-[var(--font-fraunces)] text-xl font-semibold text-[#083344]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE LEARNING STYLE */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[32px] bg-[#083344] p-6 text-white shadow-xl shadow-[#083344]/10"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <PenLine className="h-5 w-5" />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-100">
                Learning Path
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight">
                Choose how students grow.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                This interactive section helps parents understand the school’s
                academic approach in a simple way.
              </p>

              <div className="mt-6 grid gap-2">
                {learningStyles.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveStyle(item.key)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-extrabold transition ${
                      activeStyle === item.key
                        ? "bg-white text-[#083344]"
                        : "bg-white/10 text-white/70 hover:bg-white/15"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              key={activeLearningStyle.key}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[32px] border border-slate-100 bg-[#f8fbfb] p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fce7f3] text-[#be123c]">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Selected Approach
              </p>

              <h3 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight text-[#083344]">
                {activeLearningStyle.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {activeLearningStyle.text}
              </p>

              <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm font-extrabold text-[#083344]">
                  Classroom outcome
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Learners become more confident because every lesson has a
                  clear purpose, guided practice, and space to express
                  understanding.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACADEMIC AREAS */}
        <section className="bg-[#f8fbfb]">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Academic Areas
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                Learning areas that build skill, curiosity, and expression.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The academic program balances language, reasoning, discovery,
                creativity, and communication.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10 grid gap-4 md:grid-cols-2"
            >
              {academicDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="group rounded-[30px] border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-slate-900/[0.05]"
                  >
                    <div
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl ${item.color} text-white`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                      Focus Area
                    </p>

                    <h3 className="mt-3 font-[var(--font-fraunces)] text-2xl font-semibold text-[#083344]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-6 py-12 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#083344] via-[#0f766e] to-[#be123c] p-7 text-white shadow-xl shadow-slate-900/10 md:flex-row md:items-center"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                Admissions
              </p>

              <h2 className="mt-3 max-w-2xl font-[var(--font-fraunces)] text-3xl font-semibold tracking-[-0.02em]">
                Start your child’s academic journey with confidence.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
                Explore programs, visit the campus, and understand how learning
                happens at Vaidik Vidyapeeth.
              </p>
            </div>

            <Link
              href="/admissions"
              className="group shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-[#be123c] transition hover:-translate-y-0.5 hover:bg-[#fff1f2]"
            >
              Start Admissions
              <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}