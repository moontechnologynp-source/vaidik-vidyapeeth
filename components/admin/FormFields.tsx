export function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-slate-800">{label}</span>

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/10"
      />
    </label>
  );
}

export function Textarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-slate-800">{label}</span>

      <textarea
        rows={4}
        placeholder={placeholder}
        className="resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/10"
      />
    </label>
  );
}

export function isLongField(field: string) {
  const lower = field.toLowerCase();

  return (
    lower.includes("description") ||
    lower.includes("text") ||
    lower.includes("answer") ||
    lower.includes("title") ||
    lower.includes("note")
  );
}