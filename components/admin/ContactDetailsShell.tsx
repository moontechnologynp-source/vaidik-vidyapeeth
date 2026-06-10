import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input } from "./FormFields";

export default function ContactDetailsShell({
  section,
}: {
  section: SectionItem;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {section.fields.map((field) => (
        <Input key={field} label={field} placeholder={field} />
      ))}
    </div>
  );
}