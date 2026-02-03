import { useParams } from "react-router-dom";
import graphictDesighnData from "../../../data/Service/GraphicDesignData/graphicDesighnData.js";
import GraphicDesighnTemplate from "./GraphicDesighnTamplate.jsx";

export default function GraphicDesighnPage() {
  const { slug } = useParams();

  const data = graphictDesighnData.grapicDesign?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Graphict Desighn Service not found
      </div>
    );
  }

  return <GraphicDesighnTemplate data={data} />;
}
