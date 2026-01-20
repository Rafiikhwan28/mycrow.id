import { useParams } from "react-router-dom";
import { companyData } from "../../data/companyData";
import CompanyTemplate from "./CompanyTamplate";

export default function CompanyPage() {
  const { slug } = useParams();
  return <CompanyTemplate data={companyData[slug]} />;
}
