"use client";

import { useMemo, useState } from "react";
import { Save, ChevronRight } from "lucide-react";

import AdminEditor from "./AdminEditor";
import { pageTabs, pageSections } from "../../lib/admin/adminData";
import type { PageKey } from "../../lib/admin/adminTypes";

export default function AdminPageShell() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [activeSectionId, setActiveSectionId] = useState("homeHero");

  const currentSections = pageSections[activePage];

  const activeSection = useMemo(() => {
    return (
      currentSections.find((section) => section.id === activeSectionId) ||
      currentSections[0]
    );
  }, [currentSections, activeSectionId]);

  const handlePageChange = (page: PageKey) => {
    setActivePage(page);
    setActiveSectionId(pageSections[page][0].id);
  };

  return (
    <main className="min-h-screen bg-[#f8f4ec] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        {/* HEADER */}
        <div className="mb-6 rounded-[2rem] border border-black/10 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-rose-700">
            Vaidik Vidyapeeth
          </p>

          <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Website Admin Panel
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Empty frontend shell to update page contents later. Backend can
                be connected section by section.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-rose-800"
            >
              <Save className="h-4 w-4" />
              Save All Changes
            </button>
          </div>
        </div>

        {/* PAGE TABS */}
        <div className="mb-6 overflow-x-auto rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          <div className="flex min-w-max gap-2">
            {pageTabs.map((page) => {
              const Icon = page.icon;
              const isActive = activePage === page.id;

              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handlePageChange(page.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-900/15"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {page.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* SECTION SIDEBAR */}
          <aside className="rounded-[2rem] border border-black/10 bg-white/80 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl lg:sticky lg:top-8 lg:self-start">
            <div className="mb-4 rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
                Current Page
              </p>

              <h2 className="mt-2 text-2xl font-extrabold capitalize tracking-[-0.03em]">
                {activePage}
              </h2>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Select a section below to edit its content.
              </p>
            </div>

            <nav className="grid gap-2">
              {currentSections.map((section, index) => {
                const isActive = activeSection.id === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSectionId(section.id)}
                    className={`group flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                      isActive
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-900/15"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span>{section.label}</span>
                    </span>

                    <ChevronRight className="h-4 w-4 shrink-0 opacity-60" />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* EDITOR */}
          <section className="min-w-0">
            <AdminEditor page={activePage} section={activeSection} />
          </section>
        </div>
      </div>
    </main>
  );
}