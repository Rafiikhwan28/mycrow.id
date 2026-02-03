import { useParams } from "react-router-dom";

export default function DynamicPage() {
  const { section, slug } = useParams();

  return (
    <main className="px-6 pt-32">
      <h1 className="text-3xl font-bold text-purple-600">
        {slug}
      </h1>

      <p className="mt-4 opacity-70">
        Section: {section || "-"}
      </p>
    </main>
  );
}
