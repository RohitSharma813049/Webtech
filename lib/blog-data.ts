export interface BlogPost {
  id: number
  title: string
  slug?: string
  excerpt: string
  content: string
  author: string
  authorImage: string
  date: string
  category: string
  image: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2025",
    slug: "10-essential-web-design-trends-for-2025",
    excerpt:
      "Discover the latest web design trends that will dominate in 2025 and how to implement them in your projects.",
    content:
      "Web design is constantly evolving, and staying ahead of the curve is crucial for businesses looking to make an impact online...",
    author: "Rahul Sharma",
    authorImage: "/image/new-images/Essential-Web-design-trends.webp",
    date: "January 15, 2025",
    category: "Web Design",
    
    image: "/image/new-images/Essential-Web-design-trands.webp",
    readTime: "5 min read",
    tags: ["Design", "Trends", "UX"],
  },
  {
    id: 2,
    title: "Why Your Business Needs a Mobile App in 2025",
    slug: "why-your-business-needs-a-mobile-app-in-2025",
    excerpt: "Explore the benefits of mobile apps and why they're essential for modern businesses to stay competitive.",
    content:
      "In today's mobile-first world, having a mobile app is no longer a luxury—it's a necessity for businesses of all sizes...",
    author: "Priya Mehta",
    authorImage: "/image/new-images/Why-your-Business-needs-a-mobile-app-in-2026.webp",
    date: "January 12, 2025",
    category: "Mobile Development",
    image: "/image/new-images/Why-your-Business-needs-a-mobile-app-in-2026.webp",
    readTime: "7 min read",
    tags: ["Mobile", "Apps", "Business"],
  },
  {
    id: 3,
    title: "SEO Best Practices: A Complete Guide for 2025",
    slug: "seo-best-practices-complete-guide-for-2025",
    excerpt: "Master the art of SEO with our comprehensive guide covering the latest strategies and techniques.",
    content:
      "Search Engine Optimization remains one of the most effective ways to drive organic traffic to your website...",
    author: "Amit Kumar",
    authorImage: "/professional-indian-male-executive.jpg",
    date: "January 10, 2025",
    category: "Digital Marketing",
    image: "/image/new-images/SEO-Best-Pratices.webp",
    readTime: "10 min read",
    tags: ["SEO", "Marketing", "Strategy"],
  },
  {
    id: 4,
    title: "The Power of E-commerce: Building Your Online Store",
    slug: "the-power-of-ecommerce-building-your-online-store",
    excerpt: "Learn how to create a successful e-commerce store that converts visitors into loyal customers.",
    content: "E-commerce has revolutionized the way we shop, and for businesses, it opens up endless opportunities...",
    author: "Neha Singh",
    authorImage: "/professional-indian-female-ceo.jpg",
    date: "January 8, 2025",
    category: "E-commerce",
    image: "/image/new-images/The-power-of-E-commerce-Building-your-online-store.webp",
    readTime: "8 min read",
    tags: ["E-commerce", "Online Business", "Sales"],
  },
  {
    id: 5,
    title: "How AI is Transforming Digital Marketing",
    slug: "how-ai-is-transforming-digital-marketing",
    excerpt:
      "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
    content:
      "Artificial Intelligence is no longer just a buzzword—it's actively transforming how businesses approach marketing...",
    author: "Vikram Patel",
    authorImage: "/professional-indian-fitness-entrepreneur.jpg",
    date: "January 5, 2025",
    category: "Technology",
    image: "/image/new-images/How-Ai-is-Transforming-Degital-marketing.webp",
    readTime: "6 min read",
    tags: ["AI", "Marketing", "Innovation"],
  },
  {
    id: 6,
    title: "Social Media Marketing Strategies That Work",
    slug: "social-media-marketing-strategies-that-work",
    excerpt: "Proven social media strategies to boost your brand awareness and engage with your target audience.",
    content: "Social media has become an indispensable tool for businesses to connect with their audience...",
    author: "Anjali Gupta",
    authorImage: "/team-member-2.png",
    date: "January 3, 2025",
    category: "Social Media",
    image: "/image/new-images/Social-marketing-stategies.webp",
    readTime: "7 min read",
    tags: ["Social Media", "Marketing", "Engagement"],
  },
]

export const blogCategories = [
  "All",
  "Web Design",
  "Mobile Development",
  "Digital Marketing",
  "E-commerce",
  "Technology",
  "Social Media",
]
