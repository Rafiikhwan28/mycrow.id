import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    brief: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDASI
    if (!form.name || !form.phone || !form.brief) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "SERVICE_ID", // contoh: service_xxxxx
        "TEMPLATE_ID", // contoh: template_xxxxx
        {
          name: form.name,
          phone: form.phone,
          email: form.email || "-",
          brief: form.brief,
        },
        "PUBLIC_KEY" // contoh: xxxxxxxxx
      )
      .then(() => {
        alert("Message sent successfully to admin email ✅");
        setForm({
          name: "",
          phone: "",
          email: "",
          brief: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send email ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  return (
    <section className="flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl">
        <h2 className="mb-10 text-xl font-semibold text-purple-600 sm:text-2xl">
          Discuss your needs with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* NAME */}
          <div className="grid gap-2 sm:grid-cols-[180px_20px_1fr] items-center">
            <label className="font-medium text-purple-600">Name</label>
            <span className="hidden sm:block">:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* PHONE */}
          <div className="grid gap-2 sm:grid-cols-[180px_20px_1fr] items-center">
            <label className="font-medium text-purple-600">
              Mobile Phone
            </label>
            <span className="hidden sm:block">:</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+62..."
              className="w-full px-4 py-3 border rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* EMAIL */}
          <div className="grid gap-2 sm:grid-cols-[180px_20px_1fr] items-center">
            <label className="font-medium text-purple-600">Email</label>
            <span className="hidden sm:block">:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* BRIEF */}
          <div className="grid gap-2 sm:grid-cols-[180px_20px_1fr]">
            <label className="font-medium text-purple-600 sm:pt-3">
              Give us a short brief
            </label>
            <span className="hidden pt-3 sm:block">:</span>
            <textarea
              rows={4}
              name="brief"
              value={form.brief}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border resize-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* SUBMIT */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Email"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
