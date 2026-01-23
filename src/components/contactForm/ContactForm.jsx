import { useState } from "react";

export default function ContactForm() {
  const ADMIN_PHONE = "6287835759531"; // GANTI nomor admin

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

    // Validasi sederhana
    if (!form.name || !form.phone || !form.brief) {
      alert("Please fill required fields");
      return;
    }

    const message = `
📩 *New Contact Request*

👤 Name:
${form.name}

📱 Phone:
${form.phone}

📧 Email:
${form.email || "-"}

📝 Brief:
${form.brief}
    `;

    const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl">
        <h2 className="mb-10 text-xl font-semibold text-purple-600 sm:text-2xl">
          Discuss your needs with us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Name */}
          <div className="grid gap-2 sm:gap-4 sm:grid-cols-[180px_20px_1fr] items-center">
            <label className="font-medium text-purple-600">Name</label>
            <span className="hidden text-purple-600 sm:block">:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border border-purple-300 outline-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Phone */}
          <div className="grid gap-2 sm:gap-4 sm:grid-cols-[180px_20px_1fr] items-center">
            <label className="font-medium text-purple-600">Mobile Phone</label>
            <span className="hidden text-purple-600 sm:block">:</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+62..."
              className="w-full px-4 py-3 border border-purple-300 outline-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div className="grid gap-2 sm:gap-4 sm:grid-cols-[180px_20px_1fr] items-center">
            <label className="font-medium text-purple-600">Email</label>
            <span className="hidden text-purple-600 sm:block">:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-purple-300 outline-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Brief */}
          <div className="grid gap-2 sm:gap-4 sm:grid-cols-[180px_20px_1fr]">
            <label className="font-medium text-purple-600 sm:pt-3">
              Give us a short brief
            </label>
            <span className="hidden pt-3 text-purple-600 sm:block">:</span>
            <textarea
              rows={4}
              name="brief"
              value={form.brief}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-purple-300 outline-none resize-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-start pt-4 sm:justify-end">
            <button
              type="submit"
              className="w-full px-10 py-3 font-semibold text-white transition bg-purple-600 sm:w-auto rounded-xl hover:bg-purple-700 active:scale-95"
            >
              Send to WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
