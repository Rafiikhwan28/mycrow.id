import { useParams } from "react-router-dom";
import industryData from "../../data/DataSolution/industryData";
import ByIndustryTemplate from "./ByIndustryTemplate";

export default function ByIndustryPage() {
  const { slug } = useParams();

  const data = industryData?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Industry not found
      </div>
    );
  }

  return <ByIndustryTemplate data={data} />;
}
