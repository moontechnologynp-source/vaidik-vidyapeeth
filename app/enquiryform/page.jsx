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
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
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

            <section className="section-block">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Left Info Card */}
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#c02d55]/10 blur-3xl" />
                            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

                            <div className="relative flex h-full flex-col">
                                <div>
                                    <p className="feature-label">Need Help?</p>
                                    <h2 className="feature-title">
                                        We are happy to guide you.
                                    </h2>
                                    <p className="feature-copy mt-3">
                                        Whether you are planning admission, visiting the campus, or
                                        learning about the school environment, send your enquiry and
                                        our team will respond soon.
                                    </p>
                                </div>

                                <div className="mt-8 grid gap-4">
                                    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                                        <p className="text-sm font-bold text-slate-900">
                                            School Location
                                        </p>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Kathmandu-32, Koteshwor
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                                        <p className="text-sm font-bold text-slate-900">
                                            Best For
                                        </p>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Admission questions, school visits, academic information,
                                            and general enquiries.
                                        </p>
                                    </div>
                                </div>

                                {/* This fills the empty space beautifully */}
                                <div className="mt-8 flex-1 rounded-3xl bg-gradient-to-br from-[#c02d55] to-[#8f1f3e] p-6 text-white shadow-xl shadow-[#c02d55]/20">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                                        What Happens Next?
                                    </p>

                                    <div className="mt-6 space-y-5">
                                        <div className="flex gap-4">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                                                1
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold">Submit Enquiry</h3>
                                                <p className="mt-1 text-sm leading-6 text-white/75">
                                                    Share your question or admission interest with us.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                                                2
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold">School Review</h3>
                                                <p className="mt-1 text-sm leading-6 text-white/75">
                                                    Our team will review your details carefully.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                                                3
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold">We Contact You</h3>
                                                <p className="mt-1 text-sm leading-6 text-white/75">
                                                    You will receive guidance for the next step.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 rounded-2xl bg-white/10 p-4">
                                        <p className="text-sm font-semibold">
                                            Looking for direct admission?
                                        </p>
                                        <Link
                                            href="/online-admission-form"
                                            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#c02d55] transition hover:-translate-y-0.5 hover:bg-white/90"
                                        >
                                            Open Admission Form
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Card */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
                            <div className="mb-8">
                                <p className="feature-label">Send Enquiry</p>
                                <h2 className="feature-title">
                                    Fill in your details below
                                </h2>
                                <p className="feature-copy mt-2">
                                    We will use these details only to respond to your enquiry.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="grid gap-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Full Name
                                        </label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Phone Number
                                        </label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="98XXXXXXXX"
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                                    />
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Enquiry Type
                                        </label>
                                        <select
                                            name="enquiryType"
                                            value={formData.enquiryType}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
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
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Interested Class
                                        </label>
                                        <select
                                            name="childClass"
                                            value={formData.childClass}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
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
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Preferred Contact Method
                                    </label>
                                    <select
                                        name="preferredContact"
                                        value={formData.preferredContact}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                                    >
                                        <option value="">Select contact method</option>
                                        <option value="Phone Call">Phone Call</option>
                                        <option value="Email">Email</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Write your enquiry here..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#c02d55] focus:bg-white focus:ring-4 focus:ring-[#c02d55]/10"
                                    />
                                </div>

                                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-sm text-slate-500">
                                        We usually respond as soon as possible.
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