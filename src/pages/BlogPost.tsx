
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BlogContent from "@/components/BlogContent";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <BlogContent slug={slug || ""} />
    </div>
  );
};

export default BlogPostPage;
