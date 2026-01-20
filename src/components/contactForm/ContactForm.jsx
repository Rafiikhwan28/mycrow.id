export default function ContactForm() {
  return (
    <section className="flex items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-5xl">

        {/* Title */}
        <h2 className="mb-12 text-2xl font-semibold text-purple-600">
          Discuss your needs with us with us
        </h2>

        {/* Form */}
        <form className="space-y-8">

          {/* Name */}
          <div className="grid grid-cols-[180px_20px_1fr] items-center gap-4">
            <label className="font-medium text-purple-600">Name</label>
            <span className="text-purple-600">:</span>
            <input
              type="text"
              className="w-full px-4 py-3 border border-purple-300 outline-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Mobile Phone */}
          <div className="grid grid-cols-[180px_20px_1fr] items-center gap-4">
            <label className="font-medium text-purple-600">
              Mobile Phone
            </label>
            <span className="text-purple-600">:</span>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-purple-300 outline-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-[180px_20px_1fr] items-center gap-4">
            <label className="font-medium text-purple-600">Email</label>
            <span className="text-purple-600">:</span>
            <input
              type="email"
              className="w-full px-4 py-3 border border-purple-300 outline-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Brief */}
          <div className="grid grid-cols-[180px_20px_1fr] gap-4">
            <label className="pt-3 font-medium text-purple-600">
              Give us <br /> a short brief
            </label>
            <span className="pt-3 text-purple-600">:</span>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border border-purple-300 outline-none resize-none rounded-xl bg-purple-50 focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="px-10 py-3 font-semibold text-white transition bg-purple-600 rounded-xl hover:bg-purple-700 active:scale-95"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
