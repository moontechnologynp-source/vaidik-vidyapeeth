import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input } from "./FormFields";

export default function MapShell({ section }: { section: SectionItem }) {
  return (
    <div className="grid gap-5">
      {section.fields.map((field) => (
        <Input key={field} label={field} placeholder={field} />
      ))}

      <div className="flex min-h-72 items-center justify-center rounded-[1.5rem] border border-dashed border-black/15 bg-[#fffaf1] text-sm font-semibold text-slate-400">
        Google Map preview placeholder
      </div>
    </div>
  );
}