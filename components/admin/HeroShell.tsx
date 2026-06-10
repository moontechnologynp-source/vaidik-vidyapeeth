import { Image } from "lucide-react";
import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input, Textarea, isLongField } from "./FormFields";

export default function HeroShell({ section }: { section: SectionItem }) {
  return (
    <div className="grid gap-5">
      {section.fields.map((field) =>
        isLongField(field) ? (
          <Textarea key={field} label={field} placeholder={field} />
        ) : (
          <Input key={field} label={field} placeholder={field} />
        )
      )}

      <div className="rounded-[1.5rem] border border-dashed border-black/15 bg-[#fffaf1] p-5">
        <div className="flex items-center gap-3">
          <Image className="h-5 w-5 text-rose-700" />

          <div>
            <h3 className="font-bold text-slate-950">Image Upload Area</h3>
            <p className="mt-1 text-sm text-slate-500">
              Later you can connect this to image upload backend or media
              library.
            </p>
          </div>
        </div>

        <div className="mt-4 flex min-h-44 items-center justify-center rounded-[1.25rem] border border-black/10 bg-white text-sm font-semibold text-slate-400">
          Image preview placeholder
        </div>
      </div>
    </div>
  );
}
