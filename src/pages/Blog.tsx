
import Navigation from "@/components/Navigation";
import BlogList from "@/components/BlogList";

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="pt-20">
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPage;
