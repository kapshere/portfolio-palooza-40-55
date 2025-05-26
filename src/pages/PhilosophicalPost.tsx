
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PhilosophicalContent from "@/components/PhilosophicalContent";

const PhilosophicalPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="page-wrapper blog matte-finish">
      <Navigation />
      <PhilosophicalContent slug={slug || ""} />
    </div>
  );
};

export default PhilosophicalPostPage;
