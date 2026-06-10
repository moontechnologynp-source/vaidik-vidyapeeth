"use client";

import { Save } from "lucide-react";
import type { PageKey, SectionItem } from "../../lib/admin/adminTypes";

import HeroShell from "./HeroShell";
import SimpleFieldsShell from "./SimpleFieldsShell";
import MapShell from "./MapShell";
import ContactDetailsShell from "./ContactDetailsShell";
import RepeatableSectionShell from "./RepeatableSectionShell";

export default function AdminEditor({
  page,
  section,
}: {
  page: PageKey;
  section: SectionItem;
}) {
  const sectionId = section.id.toLowerCase();

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white/85 p-6 shadow-2xl shadow-slate-900/8 backdrop-blur-xl">
      <div className="mb-6 flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-700">
            Edit {page} Page
          </p>

          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-3xl">
            {section.label}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
            {section.description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-rose-800"
        >
          <Save className="h-4 w-4" />
          Save Section
        </button>
      </div>

      {sectionId.includes("hero") && !sectionId.includes("carousel") ? (
        <HeroShell section={section} />
      ) : sectionId.includes("cta") ? (
        <SimpleFieldsShell section={section} />
      ) : sectionId.includes("map") ? (
        <MapShell section={section} />
      ) : sectionId.includes("contactdetails") ? (
        <ContactDetailsShell section={section} />
      ) : sectionId.includes("feecalculator") ? (
        <SimpleFieldsShell section={section} />
      ) : (
        <RepeatableSectionShell section={section} />
      )}
    </div>
  );
}