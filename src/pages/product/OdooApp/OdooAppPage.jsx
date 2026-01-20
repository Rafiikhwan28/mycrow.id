import { useParams } from "react-router-dom";
import odooAppData from "../../../data/DataProduct/odoAppData.js";
import OdooAppTemplate from "./OdooAppTemplate.jsx";

export default function OdooAppPage() {
  const { slug } = useParams();

  const data = odooAppData.odooApp?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Industry not found
      </div>
    );
  }

  return <OdooAppTemplate data={data} />;
}
