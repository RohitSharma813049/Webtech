"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import HeroVideoSection from "@/components/hero-video-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // Find the blog post by converting title to slug format
  const post = blogPosts.find((p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug)

  if (!post) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen">
     
      <WhatsAppWidget />
      <CallWidget phoneNumber="+918860876087" />
      <Chatbot />

      <article className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Header */}
            <div className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 pb-8 border-b">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-xl overflow-hidden mb-12">
              <Image src={post.image || "/seo-analytics-dashboard.webp"} alt={post.title} fill className="object-contain" />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="space-y-6 leading-relaxed">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
                <ul className="space-y-2">
                  <li>Understanding the latest trends and best practices in the industry</li>
                  <li>Implementing effective strategies for your business growth</li>
                  <li>Staying ahead of the competition with innovative solutions</li>
                  <li>Maximizing ROI through data-driven decisions</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>
                  In conclusion, staying updated with the latest trends and implementing best practices is crucial for
                  business success. By following the strategies outlined in this article, you can position your business
                  for growth and stay competitive in the ever-evolving digital landscape.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const relatedSlug = relatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                  return (
                    <Card
                      key={relatedPost.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden"
                    >
                      <Link href={`/blog/${relatedSlug}`}>
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedPost.image || "/seo-analytics-dashboard.webp"}
                            alt={relatedPost.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {relatedPost.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {relatedPost.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {relatedPost.readTime}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                        </CardContent>
                      </Link>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

    </div>
  )
}
