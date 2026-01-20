import { useParams } from "react-router-dom";
import { stagesData } from "../../data/DataSolution/stagesData";
import ByStragesTemplate from "./ByStragesTemplate";

export default function ByStagesPage() {
  const { slug } = useParams();

  // ✅ AMBIL DATA YANG BENAR
  const data = stagesData.byStages?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Stages not found
      </div>
    );
  }

  return <ByStragesTemplate data={data} />;
}
