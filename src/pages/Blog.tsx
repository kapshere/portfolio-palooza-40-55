
import Navigation from "@/components/Navigation";
import BlogList from "@/components/BlogList";

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Articles and Writings</h1>
        <div className="prose prose-lg max-w-none">
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
