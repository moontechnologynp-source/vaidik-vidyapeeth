"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import SectionHeading from "../../components/section-heading";
import SiteShell from "../../components/site-shell";
import {
  admissionDocuments,
  admissionFaq,
  admissionSteps,
} from "../../lib/site-content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

export default function AdmissionsPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="page-hero page-hero-warm">
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-10 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Admissions
            </motion.p>

            <motion.h1 variants={fadeUp} className="page-title mt-5">
              A clear admissions path for new families.
            </motion.h1>

            <motion.p variants={fadeUp} className="page-copy">
              Families can begin with a conversation, visit the campus,
              understand class expectations, and receive guidance for a smooth
              transition.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link href="/contact" className="hero-primary group">
                Contact The School
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link href="/academics" className="hero-secondary">
                View Academics
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -6 }}
            className="page-panel relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-rose-200/45 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 shadow-sm">
                <MessageCircle className="h-6 w-6" />
              </div>

              <p className="feature-label">Parent Journey</p>

              <h3 className="feature-title">
                Clear, warm, and easy to follow
              </h3>

              <p className="feature-copy">
                The process helps parents understand the school before making
                an enrollment decision.
              </p>

              <div className="mt-6 grid gap-3">
                {["Campus visit", "Student interaction", "Placement guidance"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-700" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADMISSION STEPS */}
      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeading
              eyebrow="Admission Steps"
              title="A simple process from inquiry to enrollment."
              text="Every step gives families the information they need to feel prepared and confident."
              align="center"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {admissionSteps.map((step, index) => (
              <motion.article
                key={step}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="step-card group"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="step-number">{index + 1}</div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 transition group-hover:bg-slate-950 group-hover:text-white">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="step-title">Step {index + 1}</h3>
                <p className="step-copy">{step}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="section-block section-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeading
              eyebrow="Required Items"
              title="Documents and preparation, presented in a simpler way."
              text="Admissions information becomes more approachable when it is grouped cleanly."
            />

            <div className="mt-8 rounded-[1.5rem] border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <FileText className="h-5 w-5" />
              </div>

              <p className="text-sm leading-7 text-slate-600">
                Please bring the available documents during the admission
                discussion. The school team will guide you if anything is
                missing.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {admissionDocuments.map((item, index) => (
              <motion.article
                key={item}
                variants={fadeUp}
                whileHover={{ x: 7 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="preview-row-card group"
              >
                <div className="preview-row-dot" />

                <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                  <p className="preview-row-copy mt-0">{item}</p>

                  <span className="hidden rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white sm:inline-flex">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeading
              eyebrow="Frequently Asked"
              title="Short answers for the questions families usually ask first."
              text="These answers help families understand the first conversation, student interaction, and placement guidance."
              align="center"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {admissionFaq.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="feature-card group"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 transition group-hover:bg-slate-950 group-hover:text-white">
                  <HelpCircle className="h-5 w-5" />
                </div>

                <p className="feature-label">FAQ</p>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-block section-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl shadow-slate-900/20 sm:px-10 lg:py-16"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-rose-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
                Ready To Begin?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Start with a simple conversation with our admission team.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
                We will help you understand the school, the admission process,
                and the right academic placement for your child.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="hero-primary group">
                  Contact The School
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link href="/academics" className="hero-secondary">
                  Explore Academics
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}