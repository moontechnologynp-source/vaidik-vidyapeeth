import type { LucideIcon } from "lucide-react";

export type PageKey =
  | "home"
  | "about"
  | "academics"
  | "facilities"
  | "admissions"
  | "contact";

export type PageTab = {
  id: PageKey;
  label: string;
  icon: LucideIcon;
};

export type SectionItem = {
  id: string;
  label: string;
  description: string;
  fields: string[];
};