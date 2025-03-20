
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BlogContent from "@/components/BlogContent";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="pt-20">
        <BlogContent slug={slug || ""} />
      </div>
    </div>
  );
};

export default BlogPostPage;
