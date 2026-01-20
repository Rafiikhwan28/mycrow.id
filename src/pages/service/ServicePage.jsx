import { useParams } from "react-router-dom";
import { serviceData } from "../../data/serviceData";
import ServiceTemplate from "./ServiceTamplate";

export default function ServicePage() {
  const { slug } = useParams();
  return <ServiceTemplate data={serviceData[slug]} />;
}
