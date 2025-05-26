
import Navigation from "@/components/Navigation";
import Publications from "@/components/Publications";

const PublicationsPage = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding">
        <Publications />
      </div>
    </div>
  );
};

export default PublicationsPage;
