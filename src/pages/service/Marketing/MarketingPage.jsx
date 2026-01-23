import { useParams } from "react-router-dom";
import marketingData from "../../../data/Service/Marketing/marketingData.js";
import MarketingTemplate from "./MarketingTamplate.jsx";

export default function MarketingPage() {
  const { slug } = useParams();

  const data = marketingData.marketing?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Marketing Service not found
      </div>
    );
  }

  return <MarketingTemplate data={data} />;
}
