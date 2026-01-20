export default function ServiceTemplate({ data }) {
  if (!data) return <NotFound />;

  return (
    <main className="pt-32 bg-white">
      <section className="max-w-6xl px-6 mx-auto mb-32">
        <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
        <p className="max-w-3xl mb-12 text-gray-600">
          {data.description}
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.services.map((item, i) => (
            <li
              key={i}
              className="p-6 font-medium bg-purple-50 rounded-xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
