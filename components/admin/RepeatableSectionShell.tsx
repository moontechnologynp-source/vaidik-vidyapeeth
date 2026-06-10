"use client";

import { useState } from "react";
import { LayoutDashboard, Plus, Trash2 } from "lucide-react";
import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input, Textarea, isLongField } from "./FormFields";

export default function RepeatableSectionShell({
  section,
}: {
  section: SectionItem;
}) {
  const [items, setItems] = useState([Date.now()]);

  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-[#fffaf1] p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-950">
            {section.label} Items
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Add, edit, or remove items from this section.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setItems((prev) => [...prev, Date.now()])}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-800"
        >
          <Plus className="h-4 w-4" />
          Add Item
        </button>
      </div>

      <div className="grid gap-4">
        {items.map((item, index) => (
          <div
            key={item}
            className="rounded-[1.25rem] border border-black/10 bg-white p-4 shadow-lg shadow-slate-900/5"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-sm font-bold text-slate-950">
                <LayoutDashboard className="h-4 w-4 text-rose-700" />
                Item {index + 1}
              </p>

              <button
                type="button"
                onClick={() =>
                  setItems((prev) => prev.filter((value) => value !== item))
                }
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-700 transition hover:bg-rose-700 hover:text-white"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4">
              {section.fields.map((field) =>
                isLongField(field) ? (
                  <Textarea key={field} label={field} placeholder={field} />
                ) : (
                  <Input key={field} label={field} placeholder={field} />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}