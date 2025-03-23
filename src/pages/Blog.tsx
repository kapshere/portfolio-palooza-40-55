
import Navigation from "@/components/Navigation";
import BlogList from "@/components/BlogList";

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding">
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPage;
