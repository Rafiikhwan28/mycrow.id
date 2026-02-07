import { useParams } from "react-router-dom";
import companyData from "../../data/Company/companyData.js";
import CompanyTemplate from "./CompanyTamplate.jsx";

export default function CompanyPage() {
  const { slug } = useParams();

  const data = companyData.company?.[slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Company page not found
      </div>
    );
  }

  return <CompanyTemplate data={data} />;
}
