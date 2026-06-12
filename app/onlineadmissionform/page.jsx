"use client";

import { useState } from "react";
import Link from "next/link";
import SiteShell from "../../components/site-shell";

export default function OnlineAdmissionFormPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    applyingClass: "",
    previousSchool: "",
    parentName: "",
    relation: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admission Form:", formData);
    alert("Admission form submitted successfully!");
  };

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10";

  const labelClass = "mb-2 block text-xs font-bold text-slate-600";

  return (
    <SiteShell>
      <section className="page-hero page-hero-cool">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Online Admission</p>

            <h1 className="page-title">
              Apply for admission at Vaidik Vidyapeeth.
            </h1>

            <p className="page-copy">
              Start your child&apos;s admission journey by filling out the form
              below. Our school office will contact you for the next step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid items-start gap-6 lg:grid-cols-[0.4fr_0.6fr]">
            {/* LEFT SIDE CARD */}
            <aside className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:sticky lg:top-24">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#c02d55] via-[#a92a4e] to-[#6f1f3b] px-6 py-6 text-white sm:px-7">
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                    Admission Open
                  </p>

                  <h2 className="mt-4 text-2xl font-bold leading-tight">
                    Begin your child&apos;s journey with us.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Fill the admission form and our school office will guide you
                    through the next step.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c02d55]/10 text-sm font-bold text-[#c02d55]">
                        1
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Submit Details
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Add student, guardian, and contact information.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c02d55]/10 text-sm font-bold text-[#c02d55]">
                        2
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          School Review
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Our team reviews your application and class
                          preference.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c02d55]/10 text-sm font-bold text-[#c02d55]">
                        3
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Next Step
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          We contact you for documents, visit, or confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[#c02d55]/15 bg-[#c02d55]/5 p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Not sure before applying?
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    Ask us about classes, documents, campus visits, or the
                    admission process.
                  </p>

                  <Link
                    href="/enquiry-form"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#c02d55] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c02d55]/20 transition hover:-translate-y-0.5 hover:bg-[#a92549]"
                  >
                    Open Enquiry Form
                  </Link>
                </div>
              </div>
            </aside>

            {/* FORM CARD */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
              <div className="mb-6 border-b border-slate-100 pb-6">
                <p className="feature-label">Admission Form</p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-950">
                  Student and parent information
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Please provide accurate details so we can guide you properly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-7">
                {/* STUDENT DETAILS */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#c02d55]" />
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#c02d55]">
                      Student Details
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Student Full Name</label>
                      <input
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        placeholder="Enter student's full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Applying For Class
                      </label>
                      <select
                        name="applyingClass"
                        value={formData.applyingClass}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1">
                      <label className={labelClass}>Previous School</label>
                      <input
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="Enter previous school name"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* PARENT DETAILS */}
                <div className="border-t border-slate-100 pt-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#c02d55]" />
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#c02d55]">
                      Parent / Guardian Details
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        Parent / Guardian Name
                      </label>
                      <input
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        placeholder="Enter parent name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Relation</label>
                      <select
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select relation</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="98XXXXXXXX"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className={inputClass}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass}>Address</label>
                      <input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full address"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* ADDITIONAL INFORMATION */}
                <div className="border-t border-slate-100 pt-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#c02d55]" />
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#c02d55]">
                      Additional Information
                    </p>
                  </div>

                  <label className={labelClass}>Additional Message</label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write any additional information here..."
                    className={`${inputClass} h-auto resize-none py-3`}
                  />
                </div>

                {/* SUBMIT BOX */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-slate-500">
                      Our school team will contact you after receiving your
                      form.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-[#c02d55] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c02d55]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a92549]"
                    >
                      Submit Admission Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}