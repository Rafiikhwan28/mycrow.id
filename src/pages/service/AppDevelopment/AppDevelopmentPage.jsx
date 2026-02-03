import { useParams } from "react-router-dom";
import AppDevelopment from "../../../data/Service/AppDevelopment/appDevelopment.js";
import AppDevelopmentTemplate from "./AppDevelopmentTamplate.jsx";

export default function AppDevelopmentPage() {
  const { slug } = useParams();

  const data = AppDevelopment.appDevelopment?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        App Development Service not found
      </div>
    );
  }

  return <AppDevelopmentTemplate data={data} />;
}
