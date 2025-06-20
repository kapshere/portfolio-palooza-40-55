
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PhilosophicalContent from "@/components/PhilosophicalContent";

const PhilosophicalPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="page-wrapper min-h-screen bg-gray-50">
      <Navigation />
      <PhilosophicalContent slug={slug || ""} />
    </div>
  );
};

export default PhilosophicalPostPage;
