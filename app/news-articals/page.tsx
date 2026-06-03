import { HeroSection } from "@/components/hero-section-reusable";
import HeroVideoSection from "@/components/hero-video-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

function NewsArticles() {
  // Dummy Articles Data
  const articles = [
    {
      id: 1,
      title: "How AI is Transforming Digital Marketing in 2026",
      excerpt: "Explore how artificial intelligence is reshaping content creation, customer targeting, and campaign optimization.",
      category: "Technology",
      date: "May 20, 2026",
      readTime: "8 min",
      author: "Shivam Sharma",
      image: "/images/articles/ai-marketing.jpg",
    },
    {
      id: 2,
      title: "Top 10 Web Design Trends That Will Dominate 2026",
      excerpt: "From neumorphism to AI-powered interfaces, discover the latest design trends that will define the future of the web.",
      category: "Design",
      date: "May 18, 2026",
      readTime: "6 min",
      author: "Priya Patel",
      image: "/images/articles/web-design.jpg",
    },
    {
      id: 3,
      title: "Why Your Business Needs a Strong Digital Presence in 2026",
      excerpt: "In today's competitive market, having a professional website and active social media is no longer optional.",
      category: "Business",
      date: "May 15, 2026",
      readTime: "10 min",
      author: "Rahul Verma",
      image: "/images/articles/digital-presence.jpg",
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2026",
      excerpt: "Learn the latest SEO techniques including E-E-A-T, AI search optimization, and voice search readiness.",
      category: "SEO",
      date: "May 12, 2026",
      readTime: "7 min",
      author: "Ananya Gupta",
      image: "/images/articles/seo.jpg",
    },
  ];

  // Dummy FAQs
  const faqs = [
    {
      question: "How often do you publish new articles?",
      answer: "We publish 2-3 high-quality articles every week covering the latest trends in technology, marketing, and business.",
    },
    {
      question: "Are these articles free to read?",
      answer: "Yes, all our articles are completely free and accessible to everyone. No subscription required.",
    },
    {
      question: "Can I contribute an article to your blog?",
      answer: "Absolutely! We welcome guest contributions from industry experts. Please reach out to us via the contact form.",
    },
    {
      question: "How can I stay updated with new articles?",
      answer: "You can subscribe to our newsletter or follow us on social media platforms for instant updates.",
    },
  ];

  return (
    <div className="news-articles-page">
     
      {/* Hero Section */}
      <HeroSection
        title="Latest"
        titleHighlight="Articles"
        description="Discover insightful articles, industry trends, expert tips, and digital strategies to help your business grow and stay ahead in the competitive online world."
        primaryCTA={{ label: "Read Articles", href: "/articles" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        showImages={true}
      />

      {/* Featured Articles Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-bold">Featured Articles</h2>
            <Button variant="outline" asChild>
              <Link href="/articles">View All Articles →</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3">{article.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-2 text-lg leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles / Dummy Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((article) => (
              <div key={article.id} className="flex gap-6 group cursor-pointer">
                <div className="w-28 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {article.category}
                  </Badge>
                  <h3 className="font-semibold leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-md mx-auto mb-8 opacity-90">
            Subscribe to our newsletter and never miss the latest insights and trends.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            Subscribe Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default NewsArticles;