"use client";

import { useEffect, useState } from "react";
import {
  Edit3,
  Eye,
  Image,
  Loader2,
  Plus,
  RefreshCw,
  Save,
  Trash2,
  X,
} from "lucide-react";
import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input, Textarea } from "./FormFields";

type HeroForm = {
  page: string;
  kicker: string;
  title: string;
  subtitle: string;

  primaryButtonText: string;
  primaryButtonLink: string;

  secondaryButtonText: string;
  secondaryButtonLink: string;

  trustItemOne: string;
  trustItemTwo: string;
  trustItemThree: string;
  trustItemFour: string;

  miniCardValue: string;
  miniCardLabel: string;

  visualEyebrow: string;
  visualTitle: string;
  visualText: string;

  backgroundImage: string;
  panelImage: string;
};

type HeroItem = HeroForm & {
  id: number;
  created_at?: string;
  updated_at?: string;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

const emptyForm: HeroForm = {
  page: "home",
  kicker: "",
  title: "",
  subtitle: "",

  primaryButtonText: "",
  primaryButtonLink: "",

  secondaryButtonText: "",
  secondaryButtonLink: "",

  trustItemOne: "",
  trustItemTwo: "",
  trustItemThree: "",
  trustItemFour: "",

  miniCardValue: "",
  miniCardLabel: "",

  visualEyebrow: "",
  visualTitle: "",
  visualText: "",

  backgroundImage: "",
  panelImage: "",
};

export default function HeroShell({ section }: { section: SectionItem }) {
  const [form, setForm] = useState<HeroForm>(emptyForm);
  const [heroes, setHeroes] = useState<HeroItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateField = (key: keyof HeroForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setMessage("");
    setError("");
  };

  const fetchHeroes = async () => {
    try {
      setFetchLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/hero`);
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch hero sections");
      }

      setHeroes(data.heroes || []);
    } catch (err: any) {
      setError(err.message || "Something went wrong while fetching heroes");
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setMessage("");
      setError("");

      if (!form.title.trim()) {
        setError("Hero title is required");
        return;
      }

      const url = editingId
        ? `${API_BASE}/hero/${editingId}`
        : `${API_BASE}/hero/create`;

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to save hero section");
      }

      setMessage(
        editingId
          ? "Hero section updated successfully"
          : "Hero section created successfully"
      );

      resetForm();
      await fetchHeroes();
    } catch (err: any) {
      setError(err.message || "Something went wrong while saving");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (hero: HeroItem) => {
    setEditingId(hero.id);

    setForm({
      page: hero.page || "home",
      kicker: hero.kicker || "",
      title: hero.title || "",
      subtitle: hero.subtitle || "",

      primaryButtonText: hero.primaryButtonText || "",
      primaryButtonLink: hero.primaryButtonLink || "",

      secondaryButtonText: hero.secondaryButtonText || "",
      secondaryButtonLink: hero.secondaryButtonLink || "",

      trustItemOne: hero.trustItemOne || "",
      trustItemTwo: hero.trustItemTwo || "",
      trustItemThree: hero.trustItemThree || "",
      trustItemFour: hero.trustItemFour || "",

      miniCardValue: hero.miniCardValue || "",
      miniCardLabel: hero.miniCardLabel || "",

      visualEyebrow: hero.visualEyebrow || "",
      visualTitle: hero.visualTitle || "",
      visualText: hero.visualText || "",

      backgroundImage: hero.backgroundImage || "",
      panelImage: hero.panelImage || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hero section?"
    );

    if (!confirmDelete) return;

    try {
      setError("");
      setMessage("");

      const res = await fetch(`${API_BASE}/hero/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete hero section");
      }

      setMessage("Hero section deleted successfully");

      if (editingId === id) {
        resetForm();
      }

      await fetchHeroes();
    } catch (err: any) {
      setError(err.message || "Something went wrong while deleting");
    }
  };

  return (
    <div className="grid gap-8">
      {/* FORM */}
      <div className="rounded-[1.5rem] border border-black/10 bg-[#fffaf1] p-5">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-950">
              {editingId ? "Edit Hero Section" : "Add Hero Section"}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage the main hero content of your website.
            </p>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-950 hover:text-white"
          >
            <Plus className="h-4 w-4" />
            New Hero
          </button>
        </div>

        {message && (
          <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            {error}
          </div>
        )}

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Page"
              placeholder="home"
              value={form.page}
              onChange={(value) => updateField("page", value)}
            />

            <Input
              label="Kicker"
              placeholder="Kathmandu-32, Koteshwor"
              value={form.kicker}
              onChange={(value) => updateField("kicker", value)}
            />
          </div>

          <Textarea
            label="Hero Title"
            placeholder="A school where values, learning, and confidence grow together."
            value={form.title}
            onChange={(value) => updateField("title", value)}
          />

          <Textarea
            label="Hero Subtitle"
            placeholder="Short description for hero section"
            value={form.subtitle}
            onChange={(value) => updateField("subtitle", value)}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Primary Button Text"
              placeholder="Apply for Admission"
              value={form.primaryButtonText}
              onChange={(value) => updateField("primaryButtonText", value)}
            />

            <Input
              label="Primary Button Link"
              placeholder="/admissions"
              value={form.primaryButtonLink}
              onChange={(value) => updateField("primaryButtonLink", value)}
            />

            <Input
              label="Secondary Button Text"
              placeholder="View Academic Programs"
              value={form.secondaryButtonText}
              onChange={(value) => updateField("secondaryButtonText", value)}
            />

            <Input
              label="Secondary Button Link"
              placeholder="/academics"
              value={form.secondaryButtonLink}
              onChange={(value) => updateField("secondaryButtonLink", value)}
            />
          </div>

          <div className="rounded-[1.25rem] border border-black/10 bg-white p-4">
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-rose-700">
              Trust Items
            </h4>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Trust Item One"
                placeholder="Discipline"
                value={form.trustItemOne}
                onChange={(value) => updateField("trustItemOne", value)}
              />

              <Input
                label="Trust Item Two"
                placeholder="Confidence"
                value={form.trustItemTwo}
                onChange={(value) => updateField("trustItemTwo", value)}
              />

              <Input
                label="Trust Item Three"
                placeholder="Creativity"
                value={form.trustItemThree}
                onChange={(value) => updateField("trustItemThree", value)}
              />

              <Input
                label="Trust Item Four"
                placeholder="Care"
                value={form.trustItemFour}
                onChange={(value) => updateField("trustItemFour", value)}
              />
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-black/10 bg-white p-4">
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-rose-700">
              Right Visual Card
            </h4>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Mini Card Value"
                placeholder="3"
                value={form.miniCardValue}
                onChange={(value) => updateField("miniCardValue", value)}
              />

              <Input
                label="Mini Card Label"
                placeholder="Academic wings"
                value={form.miniCardLabel}
                onChange={(value) => updateField("miniCardLabel", value)}
              />
            </div>

            <div className="mt-5 grid gap-5">
              <Input
                label="Visual Eyebrow"
                placeholder="School Environment"
                value={form.visualEyebrow}
                onChange={(value) => updateField("visualEyebrow", value)}
              />

              <Textarea
                label="Visual Title"
                placeholder="Structured learning with personal attention"
                value={form.visualTitle}
                onChange={(value) => updateField("visualTitle", value)}
              />

              <Textarea
                label="Visual Text"
                placeholder="A balanced routine that supports academic focus..."
                value={form.visualText}
                onChange={(value) => updateField("visualText", value)}
              />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-dashed border-black/15 bg-white p-5">
            <div className="flex items-center gap-3">
              <Image className="h-5 w-5 text-rose-700" />

              <div>
                <h3 className="font-bold text-slate-950">Hero Images</h3>
                <p className="mt-1 text-sm text-slate-500">
                  For now, paste image URLs or public image paths. Upload backend
                  can be added later.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Input
                label="Background Image"
                placeholder="/school-bg.jpg"
                value={form.backgroundImage}
                onChange={(value) => updateField("backgroundImage", value)}
              />

              <Input
                label="Panel Image"
                placeholder="/school-panel.jpg"
                value={form.panelImage}
                onChange={(value) => updateField("panelImage", value)}
              />
            </div>

            {(form.backgroundImage || form.panelImage) && (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {form.backgroundImage && (
                  <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-slate-100">
                    <img
                      src={form.backgroundImage}
                      alt="Hero background preview"
                      className="h-48 w-full object-cover"
                    />
                  </div>
                )}

                {form.panelImage && (
                  <div className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-slate-100">
                    <img
                      src={form.panelImage}
                      alt="Hero panel preview"
                      className="h-48 w-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}

              {editingId ? "Update Hero" : "Save Hero"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-950 hover:text-white"
              >
                <X className="h-4 w-4" />
                Cancel Edit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* VIEW HERO LIST */}
      <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-xl shadow-slate-900/5">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-950">
              Saved Hero Sections
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              View, edit, or delete existing hero records.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchHeroes}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-950 hover:text-white"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        {fetchLoading ? (
          <div className="flex min-h-40 items-center justify-center rounded-[1.25rem] bg-[#fffaf1]">
            <Loader2 className="h-6 w-6 animate-spin text-rose-700" />
          </div>
        ) : heroes.length === 0 ? (
          <div className="flex min-h-40 items-center justify-center rounded-[1.25rem] bg-[#fffaf1] text-sm font-semibold text-slate-500">
            No hero sections found.
          </div>
        ) : (
          <div className="grid gap-4">
            {heroes.map((hero) => (
              <div
                key={hero.id}
                className="rounded-[1.25rem] border border-black/10 bg-[#fffaf1] p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-rose-700">
                      <Eye className="h-3.5 w-3.5" />
                      {hero.page || "home"}
                    </div>

                    <h4 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                      {hero.title}
                    </h4>

                    <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">
                      {hero.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        hero.trustItemOne,
                        hero.trustItemTwo,
                        hero.trustItemThree,
                        hero.trustItemFour,
                      ]
                        .filter(Boolean)
                        .map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600"
                          >
                            {item}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(hero)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-rose-800"
                      title="Edit"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(hero.id)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-700 transition hover:bg-rose-700 hover:text-white"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {(hero.backgroundImage || hero.panelImage) && (
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {hero.backgroundImage && (
                      <img
                        src={hero.backgroundImage}
                        alt="Background"
                        className="h-36 w-full rounded-2xl object-cover"
                      />
                    )}

                    {hero.panelImage && (
                      <img
                        src={hero.panelImage}
                        alt="Panel"
                        className="h-36 w-full rounded-2xl object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}