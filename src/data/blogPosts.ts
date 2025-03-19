
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
    date: "2022-06-29",
    author: "Kapil Jain",
    excerpt: "ONDC (Open Network for Digital Commerce) is revolutionizing e-commerce in India by creating an open, interoperable network that decouples buyers from sellers and platforms from products.",
    contentPath: "/blog-posts/ondc-p2p-ecommerce.md"
  },
  {
    title: "Public Blockchain Network May Have a Use Case for the SME Segment",
    slug: "public-blockchain-network-sme-segment",
    date: "2022-03-24",
    author: "Kapil Jain",
    excerpt: "Public blockchain networks offer benefits that could particularly benefit small and medium-sized enterprises, providing security, transparency, and access to global markets.",
    contentPath: "/blog-posts/blockchain-for-sme.md"
  }
];
