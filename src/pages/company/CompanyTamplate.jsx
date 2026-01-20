export default function CompanyTemplate({ data }) {
  if (!data) return <NotFound />;

  return (
    <main className="pt-32 bg-gray-50">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {data.content}
        </p>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Company page not found
    </div>
  );
}
