
import Navigation from "@/components/Navigation";
import Publications from "@/components/Publications";

const PublicationsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Publications />
      </div>
    </div>
  );
};

export default PublicationsPage;
