import { useParams } from "react-router-dom";
import knowledgeData from "../../data/Knowledge/knowledgeData";
import KnowledgeArticleTemplate from "./KnowledgeTemplate";

export default function KnowledgePage() {
  const { slug } = useParams();

  const data = knowledgeData.knowledge?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Knowledge Article not found
      </div>
    );
  }

  return <KnowledgeArticleTemplate data={data} />;
}
