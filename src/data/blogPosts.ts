
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  contentPath: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "ONDC: Peer to Peer E-Commerce Network",
    slug: "ondc-peer-to-peer-ecommerce-network",
    date: "2023-07-14",
    author: "Kapil Jain",
    excerpt: "ONDC (Open Network for Digital Commerce) is revolutionizing e-commerce in India by creating an open, interoperable network that decouples buyers from sellers and platforms from products.",
    contentPath: "/blog-posts/ondc-p2p-ecommerce.md"
  }
];
