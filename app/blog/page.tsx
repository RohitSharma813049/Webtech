"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import { DiscountPopup } from "@/components/discount-popup"
import { SectionCarousel } from "@/components/section-carousel"
import HeroVideoSection from "@/components/hero-video-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CTASection } from "@/components/cta-section"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    const message = `*Newsletter Subscription*%0A%0AEmail: ${email}`
    window.open(`https://wa.me/918860876087?text=${message}`, "_blank")

    toast({
      title: "Subscription Request Sent",
      description: "We'll contact you on WhatsApp to confirm your subscription",
    })

    setEmail("")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-6 py-2" variant="secondary">
              <BookOpen className="w-4 h-4 mr-2" />
              Our Blog
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Insights &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">Updates</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world of web development and digital
              marketing
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-12 pr-4 py-6 text-lg rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={filteredPosts[0].image || "/seo-analytics-dashboard.webp"}
                        alt={filteredPosts[0].title}
                        fill
                        className="object-contain"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">{filteredPosts[0].category}</Badge>
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {filteredPosts[0].date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {filteredPosts[0].readTime}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                        {filteredPosts[0].title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {filteredPosts[0].tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-fit">
                        <Link
                          href={`/blog/${filteredPosts[0].slug || filteredPosts[0].title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="flex items-center gap-2"
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Other Posts */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
                <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.slice(1).map((post) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image || "/seo-analytics-dashboard.webp"}
                          alt={post.title}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">{post.category}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent"
                        >
                          <Link
                            href={`/blog/${post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="flex items-center gap-2 w-full justify-center"
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="lg:hidden">
                  <SectionCarousel
                    items={filteredPosts.slice(1)}
                    renderItem={(post) => (
                      <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden h-full flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={post.image || "/seo-analytics-dashboard.webp"}
                            alt={post.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">{post.category}</Badge>
                        </div>
                        <CardContent className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent"
                          >
                            <Link
                              href={`/blog/${post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                              className="flex items-center gap-2 w-full justify-center"
                            >
                              Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
     <CTASection/>
    </div>
  )
}
