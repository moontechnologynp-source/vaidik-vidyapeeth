// "use client";

// import { useState } from "react";
// import SiteShell from "../../components/site-shell";

// export default function EnquiryFormPage() {
//     const [formData, setFormData] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         enquiryType: "",
//         childClass: "",
//         preferredContact: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Enquiry Form:", formData);
//         alert("Enquiry submitted successfully!");
//     };

//     return (
//         <SiteShell>
//             <section className="page-hero page-hero-cool">
//                 <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
//                     <div className="max-w-3xl">
//                         <p className="section-eyebrow">Enquiry Form</p>
//                         <h1 className="page-title">
//                             Ask your questions about Vaidik Vidyapeeth.
//                         </h1>
//                         <p className="page-copy">
//                             Send us your enquiry about admissions, academics, facilities,
//                             school visits, or general information.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="section-block">
//                 <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
//                     <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
//                         <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
//                             <p className="feature-label">Need Help?</p>
//                             <h2 className="feature-title">
//                                 We are happy to guide you.
//                             </h2>
//                             <p className="feature-copy mt-3">
//                                 Whether you are planning admission, visiting the campus, or
//                                 learning about the school environment, send your enquiry and our
//                                 team will respond soon.
//                             </p>

//                             <div className="mt-8 space-y-5">
//                                 <div className="rounded-2xl bg-slate-50 p-5">
//                                     <p className="text-sm font-bold text-slate-800">
//                                         School Location
//                                     </p>
//                                     <p className="mt-1 text-sm text-slate-500">
//                                         Kathmandu-32, Koteshwor
//                                     </p>
//                                 </div>

//                                 <div className="rounded-2xl bg-slate-50 p-5">
//                                     <p className="text-sm font-bold text-slate-800">
//                                         Best For
//                                     </p>
//                                     <p className="mt-1 text-sm text-slate-500">
//                                         Admission questions, school visits, academic information,
//                                         and general enquiries.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
//                             <div className="mb-8">
//                                 <p className="feature-label">Send Enquiry</p>
//                                 <h2 className="feature-title">
//                                     Fill in your details below
//                                 </h2>
//                             </div>

//                             <form onSubmit={handleSubmit} className="grid gap-6">
//                                 <div className="grid gap-6 md:grid-cols-2">
//                                     <div>
//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Full Name
//                                         </label>
//                                         <input
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="Enter your name"
//                                             className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Phone Number
//                                         </label>
//                                         <input
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="98XXXXXXXX"
//                                             className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="example@email.com"
//                                         className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                     />
//                                 </div>

//                                 <div className="grid gap-6 md:grid-cols-2">
//                                     <div>
//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Enquiry Type
//                                         </label>
//                                         <select
//                                             name="enquiryType"
//                                             value={formData.enquiryType}
//                                             onChange={handleChange}
//                                             required
//                                             className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                         >
//                                             <option value="">Select enquiry type</option>
//                                             <option value="Admission">Admission</option>
//                                             <option value="Academics">Academics</option>
//                                             <option value="Facilities">Facilities</option>
//                                             <option value="Campus Visit">Campus Visit</option>
//                                             <option value="Other">Other</option>
//                                         </select>
//                                     </div>

//                                     <div>
//                                         <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                             Interested Class
//                                         </label>
//                                         <select
//                                             name="childClass"
//                                             value={formData.childClass}
//                                             onChange={handleChange}
//                                             className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                         >
//                                             <option value="">Select class</option>
//                                             <option value="Nursery">Nursery</option>
//                                             <option value="LKG">LKG</option>
//                                             <option value="UKG">UKG</option>
//                                             <option value="Grade 1">Grade 1</option>
//                                             <option value="Grade 2">Grade 2</option>
//                                             <option value="Grade 3">Grade 3</option>
//                                             <option value="Grade 4">Grade 4</option>
//                                             <option value="Grade 5">Grade 5</option>
//                                             <option value="Grade 6">Grade 6</option>
//                                             <option value="Grade 7">Grade 7</option>
//                                             <option value="Grade 8">Grade 8</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                         Preferred Contact Method
//                                     </label>
//                                     <select
//                                         name="preferredContact"
//                                         value={formData.preferredContact}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                     >
//                                         <option value="">Select contact method</option>
//                                         <option value="Phone Call">Phone Call</option>
//                                         <option value="Email">Email</option>
//                                         <option value="WhatsApp">WhatsApp</option>
//                                     </select>
//                                 </div>

//                                 <div>
//                                     <label className="mb-2 block text-sm font-semibold text-slate-700">
//                                         Your Message
//                                     </label>
//                                     <textarea
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         required
//                                         rows={6}
//                                         placeholder="Write your enquiry here..."
//                                         className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
//                                     />
//                                 </div>

//                                 <div className="flex justify-end pt-4">
//                                     <button
//                                         type="submit"
//                                         className="inline-flex items-center justify-center rounded-xl bg-[#c02d55] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c02d55]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a92549]"
//                                     >
//                                         Submit Enquiry
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </SiteShell>
//     );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import SiteShell from "../../components/site-shell";

export default function EnquiryFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    childClass: "",
    preferredContact: "",
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
    console.log("Enquiry Form:", formData);
    alert("Enquiry submitted successfully!");
  };

  return (
    <SiteShell>
      <section className="page-hero page-hero-cool">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Enquiry Form</p>
            <h1 className="page-title">
              Ask your questions about Vaidik Vidyapeeth.
            </h1>
            <p className="page-copy">
              Send us your enquiry about admissions, academics, facilities,
              school visits, or general information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid items-start gap-6 lg:grid-cols-[0.4fr_0.6fr]">
            {/* LEFT CARD */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-6 lg:sticky lg:top-24">
              <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-rose-50/40 p-5">
                <p className="feature-label">Need Help?</p>

                <h2 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                  We are happy to guide you.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Whether you are planning admission, visiting the campus, or
                  learning about the school environment, send your enquiry and
                  our team will respond soon.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-[#c02d55]">
                    <span className="text-lg">📍</span>
                  </div>

                  <p className="text-sm font-extrabold text-slate-900">
                    School Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Kathmandu-32, Koteshwor
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-[#c02d55]">
                    <span className="text-lg">✨</span>
                  </div>

                  <p className="text-sm font-extrabold text-slate-900">
                    Best For
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Admission questions, school visits, academic information,
                    and general enquiries.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#c02d55]/15 bg-[#c02d55]/5 p-5">
                  <p className="text-sm font-extrabold text-slate-900">
                    Quick Response
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Please include your phone number clearly so our school team
                    can contact you easily.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
              <div className="mb-6 border-b border-slate-100 pb-6">
                <p className="feature-label">Send Enquiry</p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-slate-950">
                  Fill in your details below
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share your contact details and question. We will get back to
                  you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-600">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-600">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="98XXXXXXXX"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-600">
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                    >
                      <option value="">Select enquiry type</option>
                      <option value="Admission">Admission</option>
                      <option value="Academics">Academics</option>
                      <option value="Facilities">Facilities</option>
                      <option value="Campus Visit">Campus Visit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-600">
                      Interested Class
                    </label>
                    <select
                      name="childClass"
                      value={formData.childClass}
                      onChange={handleChange}
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
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
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-600">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                  >
                    <option value="">Select contact method</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-600">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your enquiry here..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                  />
                </div>

                <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-slate-500">
                    Our school team will contact you after reviewing your
                    enquiry.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-[#c02d55] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c02d55]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a92549]"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}