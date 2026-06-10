import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input, Textarea, isLongField } from "./FormFields";

export default function SimpleFieldsShell({
  section,
}: {
  section: SectionItem;
}) {
  return (
    <div className="grid gap-5">
      {section.fields.map((field) =>
        isLongField(field) ? (
          <Textarea key={field} label={field} placeholder={field} />
        ) : (
          <Input key={field} label={field} placeholder={field} />
        )
      )}
    </div>
  );
}