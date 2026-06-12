"use client";

import { useState } from "react";

export default function LeadForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            interest: formData.get("interest"),
            message: formData.get("message"),
        };

        try {
            // 👉 Replace with your CRM / backend API
            // await fetch("/api/leads", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(payload),
            // });

            console.log("Lead captured:", payload);

            alert("Enquiry submitted successfully!");
            e.currentTarget.reset();
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="page-panel flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="feature-label">Quick Enquiry Form</p>

            <input name="name" placeholder="Full Name" className="p-3 border rounded" required />

            <input name="email" type="email" placeholder="Email Address" className="p-3 border rounded" required />

            <input name="phone" placeholder="Phone Number" className="p-3 border rounded" required />

            <select name="interest" className="p-3 border rounded" defaultValue="Admission">
                <option value="Admission">Admission</option>
                <option value="Enquiry">General Enquiry</option>
                <option value="Campus Visit">Campus Visit</option>
            </select>

            <textarea name="message" placeholder="Message" rows={4} className="p-3 border rounded" />

            <button
                type="submit"
                disabled={loading}
                className="bg-black text-white py-3 rounded hover:opacity-90"
            >
                {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
        </form>
    );
}