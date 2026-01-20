import { useParams } from "react-router-dom";
import {erpData} from "../../../data/DataProduct/erpData.js";
import ErpTemplate from "./ErpTemplate.jsx";

export default function ErpPage() {
  const { slug } = useParams();

  const data = erpData?.erp?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        ERP not found
      </div>
    );
  }

  return <ErpTemplate data={data} />;
}
