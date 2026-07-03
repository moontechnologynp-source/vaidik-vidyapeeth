"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Loader2,
  Plus,
  RefreshCw,
  Save,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Upload,
} from "lucide-react";

import type { SectionItem } from "../../lib/admin/adminTypes";
import { Input, Textarea, isLongField } from "./FormFields";

type AboutContent = Record<string, string>;

type AboutItem = {
  id?: number;
  section_id: string;
  content: AboutContent;
  sort_order: number;
  imageFile?: File | null;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050/api/v1";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5050";

const singleItemSections = ["aboutHero", "aboutFeeCalculator", "aboutCta"];

function createEmptyContent(fields: string[]) {
  return fields.reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {} as AboutContent);
}

function normalizeContent(fields: string[], content?: AboutContent) {
  const base = createEmptyContent(fields);

  if (!content) return base;

  fields.forEach((field) => {
    base[field] = content[field] ?? "";
  });

  return base;
}

function getPreviewImageUrl(imageValue: string, imageFile?: File | null) {
  if (imageFile) {
    return URL.createObjectURL(imageFile);
  }

  if (!imageValue) return "";

  if (imageValue.startsWith("http")) {
    return imageValue;
  }

  if (imageValue.startsWith("/images")) {
    return imageValue;
  }

  return `${SITE_URL}${imageValue}`;
}

export default function AboutSectionEditor({
  section,
}: {
  section: SectionItem;
}) {
  const isSingleItem = useMemo(
    () => singleItemSections.includes(section.id),
    [section.id]
  );

  const [items, setItems] = useState<AboutItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const getToken = () => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("token") || "";
  };

  const getJsonHeaders = () => {
    const token = getToken();

    return {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  };

  const getFormHeaders = () => {
    const token = getToken();

    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  };

  const createBlankItem = (sortOrder = 1): AboutItem => ({
    section_id: section.id,
    content: createEmptyContent(section.fields),
    sort_order: sortOrder,
    imageFile: null,
  });

  const fetchSectionData = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");

      const res = await fetch(`${API_BASE}/about/${section.id}`);
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch about section");
      }

      const loadedItems: AboutItem[] = (data.data || []).map(
        (item: AboutItem, index: number) => ({
          id: item.id,
          section_id: item.section_id || section.id,
          content: normalizeContent(section.fields, item.content),
          sort_order: item.sort_order || index + 1,
          imageFile: null,
        })
      );

      if (loadedItems.length > 0) {
        setItems(loadedItems);
      } else {
        setItems([createBlankItem()]);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong while loading data");
      setItems([createBlankItem()]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section.id]);

  const updateField = (index: number, field: string, value: string) => {
    setItems((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              content: {
                ...item.content,
                [field]: value,
              },
            }
          : item
      )
    );
  };

  const updateImageFile = (index: number, file: File | null) => {
    setItems((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              imageFile: file,
            }
          : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [...prev, createBlankItem(prev.length + 1)]);
  };

  const removeItem = async (index: number) => {
    const item = items[index];

    if (!item.id) {
      setItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const res = await fetch(`${API_BASE}/about/${item.id}`, {
        method: "DELETE",
        headers: getJsonHeaders(),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete item");
      }

      setItems((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
      setMessage("Item deleted successfully.");
    } catch (err: any) {
      setError(err.message || "Something went wrong while deleting item");
    } finally {
      setSaving(false);
    }
  };

  const saveSection = async () => {
    try {
      setSaving(true);
      setError("");
      setMessage("");

      const token = getToken();

      if (!token) {
        setError("Please login first. Token not found in localStorage.");
        return;
      }

      const savedItems: AboutItem[] = [];

      for (let index = 0; index < items.length; index++) {
        const item = items[index];

        const payloadContent = normalizeContent(section.fields, item.content);

        const formData = new FormData();
        formData.append("section_id", section.id);
        formData.append("sort_order", String(index + 1));
        formData.append("content", JSON.stringify(payloadContent));

        if (item.imageFile) {
          formData.append("image", item.imageFile);
        }

        const url = item.id
          ? `${API_BASE}/about/${item.id}`
          : `${API_BASE}/about`;

        const method = item.id ? "PUT" : "POST";

        const res = await fetch(url, {
          method,
          headers: getFormHeaders(),
          body: formData,
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to save section");
        }

        savedItems.push({
          id: item.id || data.data?.id,
          section_id: section.id,
          content: data.data?.content || payloadContent,
          sort_order: index + 1,
          imageFile: null,
        });
      }

      setItems(savedItems);
      setMessage(`${section.label} saved successfully.`);
    } catch (err: any) {
      setError(err.message || "Something went wrong while saving section");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-3 rounded-[1.5rem] border border-black/10 bg-[#fffaf1] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-950">
            {section.label}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Data is connected with{" "}
            <span className="font-semibold text-slate-900">
              /api/v1/about/{section.id}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={fetchSectionData}
            disabled={loading || saving}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Refresh
          </button>

          {!isSingleItem && (
            <button
              type="button"
              onClick={addItem}
              disabled={loading || saving}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Plus className="h-4 w-4" />
              Add Item
            </button>
          )}

          <button
            type="button"
            onClick={saveSection}
            disabled={loading || saving}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Section
          </button>
        </div>
      </div>

      {message && (
        <div className="flex items-start gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          {message}
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex min-h-[240px] items-center justify-center rounded-[1.5rem] border border-black/10 bg-white">
          <Loader2 className="h-6 w-6 animate-spin text-rose-700" />
        </div>
      ) : (
        <div className="grid gap-4">
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-lg shadow-slate-900/5"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    {isSingleItem ? section.label : `Item ${index + 1}`}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {item.id ? `Database ID: ${item.id}` : "New item"}
                  </p>
                </div>

                {!isSingleItem && items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    disabled={saving}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {section.fields.map((field) => {
                  if (field === "Image URL") {
                    const imageValue = item.content[field] || "";
                    const previewUrl = getPreviewImageUrl(
                      imageValue,
                      item.imageFile
                    );

                    return (
                      <div key={field} className="md:col-span-2">
                        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                          Upload Image
                        </label>

                        <div className="rounded-2xl border border-dashed border-black/15 bg-[#fffaf1] p-4">
                          {previewUrl ? (
                            <div className="mb-4 overflow-hidden rounded-xl border border-black/10 bg-white">
                              <img
                                src={previewUrl}
                                alt="Preview"
                                className="h-56 w-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="mb-4 flex h-40 flex-col items-center justify-center rounded-xl border border-dashed border-black/10 bg-white text-center">
                              <Upload className="h-7 w-7 text-slate-400" />
                              <p className="mt-2 text-sm font-semibold text-slate-600">
                                No image selected
                              </p>
                              <p className="mt-1 text-xs text-slate-400">
                                Upload JPG, PNG, WEBP, or any image file
                              </p>
                            </div>
                          )}

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              updateImageFile(
                                index,
                                e.target.files?.[0] || null
                              )
                            }
                            className="block w-full cursor-pointer rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-rose-800"
                          />

                          {imageValue && (
                            <p className="mt-3 break-all text-xs font-medium text-slate-500">
                              Current image: {imageValue}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  }

                  return isLongField(field) ? (
                    <Textarea
                      key={field}
                      label={field}
                      placeholder={field}
                      value={item.content[field] || ""}
                      onChange={(value) => updateField(index, field, value)}
                    />
                  ) : (
                    <Input
                      key={field}
                      label={field}
                      placeholder={field}
                      value={item.content[field] || ""}
                      onChange={(value) => updateField(index, field, value)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}