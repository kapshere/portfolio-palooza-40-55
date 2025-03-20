
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
    title: "Public Blockchain Network are perfect for SME Segment",
    slug: "public-blockchain-network-sme-segment",
    date: "2022-03-24",
    author: "Kapil Jain",
    excerpt: "Public blockchain networks offer benefits that could particularly benefit small and medium-sized enterprises, providing security, transparency, and access to global markets.",
    contentPath: "/blog-posts/blockchain-for-sme.md"
  },

  {
    title: "Instant Payments across the world",
    slug: "public-blockchain-payment-network",
    date: "2020-01-02",
    author: "Kapil Jain",
    excerpt: "the current holy grail of digital economy is converting all financial transactions to be instant or real time but still complying with regulatory needs like AMLD5, KYC and such. Solution which can make these happen instantly can be the winning ticket but what is the best way to do it?",
    contentPath: "/blog-posts/blockchain-for-payments.md"
  }
];
