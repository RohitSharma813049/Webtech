"use client"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { portfolioData, videoPortfolioItems, getYouTubeEmbedUrl } from "@/lib/portfolio-data"
import { Smartphone } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { PortfolioStats } from "@/components/portfolio-stats"
import { Sparkles } from "lucide-react"
import { PortfolioCarousel } from "@/components/portfolio-carousel"

export default function PortfolioPage() {
  const [activePreview, setActivePreview] = useState<{ id: number; mode: "desktop" | "mobile" }>({
    id: 0,
    mode: "desktop",
  })

  const categories = [
    "All",
    "Education",
    "Real Estate",
    "Healthcare",
    "Manufacturing",
    "Electronics",
    "Tour and Travel",
    "Astrology",
    "Ecommerce",
    "Banking & Finance",
    "Interior",
    "Skin & Beauty",
    "Other Service",
  ]

  const serviceCategories = {
    "Digital Marketing": {
      SEO: portfolioData
        .filter((item) => item.category === "Marketing" || item.category === "Business Services")
        .slice(0, 6),
      "Paid Advertising": portfolioData
        .filter((item) => item.category === "Marketing" || item.category === "Technology")
        .slice(0, 6),
      "Social Media Marketing": portfolioData
        .filter((item) => item.category === "Entertainment" || item.category === "Lifestyle")
        .slice(0, 6),
      "WhatsApp Marketing": portfolioData
        .filter((item) => item.category === "Business Services" || item.category === "E-Commerce")
        .slice(0, 6),
      "Content Writing": portfolioData
        .filter((item) => item.category === "Education" || item.category === "Entertainment")
        .slice(0, 6),
    },
    "Website & App Development": {
      "Enquiry Website": portfolioData
        .filter((item) => item.category === "Business Services" || item.category === "Technology")
        .slice(0, 6),
      "E-commerce Website": portfolioData.filter((item) => item.category === "E-Commerce").slice(0, 6),
      "Booking Website": portfolioData
        .filter((item) => item.category === "Travel" || item.category === "Healthcare")
        .slice(0, 6),
      "Rental Website": portfolioData
        .filter((item) => item.category === "Automotive" || item.category === "Transportation")
        .slice(0, 6),
      "App Development": portfolioData
        .filter((item) => item.category === "Technology" || item.category === "E-Commerce")
        .slice(0, 6),
    },
    "SaaS Services": {
      "Gym Management System": portfolioData.filter((item) => item.category === "Health & Fitness").slice(0, 6),
      HRMS: portfolioData
        .filter((item) => item.category === "Business Services" || item.category === "Technology")
        .slice(0, 6),
      "E-commerce Solutions": portfolioData.filter((item) => item.category === "E-Commerce").slice(0, 6),
      LMS: portfolioData.filter((item) => item.category === "Education").slice(0, 6),
      "Service API Provider": portfolioData.filter((item) => item.category === "Technology").slice(0, 6),
    },
    "Designing Services": {
      "Logo & Favicon": portfolioData
        .filter((item) => item.category === "Design" || item.category === "Fashion")
        .slice(0, 6),
      "Poster Designing": portfolioData
        .filter((item) => item.category === "Marketing" || item.category === "Entertainment")
        .slice(0, 6),
      "Banner Designing": portfolioData
        .filter((item) => item.category === "Marketing" || item.category === "E-Commerce")
        .slice(0, 6),
      "Brochure Designing": portfolioData
        .filter((item) => item.category === "Business Services" || item.category === "Education")
        .slice(0, 6),
      "Catalogue Designing": portfolioData
        .filter((item) => item.category === "E-Commerce" || item.category === "Fashion")
        .slice(0, 6),
    },
  }

  return (
    <div className="min-h-screen">
     
  


      <HeroSection
        title="Client Success"
        titleHighlight="Stories"
        description="Explore how we've helped businesses across various industries achieve their digital transformation goals with our proven strategies and expert execution."
        primaryCTA={{ label: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ label: "Our Services", href: "/services" }}
        showImages={true}
      />

      {/* Portfolio Stats Counter Section */}
      <PortfolioStats />

      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Featured Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our diverse range of successful projects across multiple industries
            </p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="w-full justify-center flex-wrap h-auto gap-0.5 bg-secondary/50 p-1 mb-10">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm px-6">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="All">
              {/* Mobile Carousel */}
              <PortfolioCarousel items={videoPortfolioItems.slice(0, 12)} getYouTubeEmbedUrl={getYouTubeEmbedUrl} />

              {/* Desktop Grid */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPortfolioItems.slice(0, 12).map((item) => (
                  <Card
                    key={item.id}
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                  >
                    <div className="block w-full h-full">
                      <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden lg:block absolute inset-0 z-10"
                        >
                          <span className="sr-only">Visit {item.title}</span>
                        </Link>

                        <iframe
                          src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                          className="absolute inset-0 w-full h-full scale-[1.05]"
                          allow="autoplay; encrypted-media"
                          title={`${item.title} Desktop Preview`}
                        ></iframe>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                          <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.description}</p>

                          <div onClick={(e) => e.stopPropagation()}>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm relative z-30"
                                >
                                  <Smartphone className="w-3.5 h-3.5" />
                                  View Mobile
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                                <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                    <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                                    <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                                  </div>
                                  <div className="absolute inset-0 w-full h-full bg-black">
                                    <iframe
                                      src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                                      allow="autoplay; encrypted-media"
                                      title={`${item.title} Mobile Preview`}
                                    ></iframe>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2" variant="secondary">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.businessType}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="Education">
              {/* Mobile Carousel */}
              <PortfolioCarousel
                items={videoPortfolioItems.filter((item) => item.category === "Education")}
                getYouTubeEmbedUrl={getYouTubeEmbedUrl}
              />

              {/* Desktop Grid */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPortfolioItems
                  .filter((item) => item.category === "Education")
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                    >
                      <div className="block w-full h-full">
                        <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block absolute inset-0 z-10"
                          >
                            <span className="sr-only">Visit {item.title}</span>
                          </Link>

                          <iframe
                            src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            allow="autoplay; encrypted-media"
                            title={`${item.title} Desktop Preview`}
                          ></iframe>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                            <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.description}</p>

                            <div onClick={(e) => e.stopPropagation()}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm relative z-30"
                                  >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    View Mobile
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                                  <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                      <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                                      <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 w-full h-full bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                                        allow="autoplay; encrypted-media"
                                        title={`${item.title} Mobile Preview`}
                                      ></iframe>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.businessType}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Real Estate">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPortfolioItems
                  .filter((item) => item.category === "Real Estate")
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                    >
                      <div className="block w-full h-full">
                        <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block absolute inset-0 z-10"
                          >
                            <span className="sr-only">Visit {item.title}</span>
                          </Link>

                          <iframe
                            src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            allow="autoplay; encrypted-media"
                            title={`${item.title} Desktop Preview`}
                          ></iframe>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                            <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.description}</p>

                            <div onClick={(e) => e.stopPropagation()}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm relative z-30"
                                  >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    View Mobile
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                                  <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                      <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                                      <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 w-full h-full bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                                        allow="autoplay; encrypted-media"
                                        title={`${item.title} Mobile Preview`}
                                      ></iframe>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.businessType}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Healthcare">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPortfolioItems
                  .filter((item) => item.category === "Healthcare")
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                    >
                      <div className="block w-full h-full">
                        <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block absolute inset-0 z-10"
                          >
                            <span className="sr-only">Visit {item.title}</span>
                          </Link>

                          <iframe
                            src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            allow="autoplay; encrypted-media"
                            title={`${item.title} Desktop Preview`}
                          ></iframe>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                            <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.description}</p>

                            <div onClick={(e) => e.stopPropagation()}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm relative z-30"
                                  >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    View Mobile
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                                  <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                      <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                                      <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 w-full h-full bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                                        allow="autoplay; encrypted-media"
                                        title={`${item.title} Mobile Preview`}
                                      ></iframe>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.businessType}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Manufacturing">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPortfolioItems
                  .filter((item) => item.category === "Manufacturing")
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                    >
                      <div className="block w-full h-full">
                        <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block absolute inset-0 z-10"
                          >
                            <span className="sr-only">Visit {item.title}</span>
                          </Link>

                          <iframe
                            src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            allow="autoplay; encrypted-media"
                            title={`${item.title} Desktop Preview`}
                          ></iframe>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                            <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.description}</p>

                            <div onClick={(e) => e.stopPropagation()}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm relative z-30"
                                  >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    View Mobile
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                                  <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                      <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                                      <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 w-full h-full bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                                        allow="autoplay; encrypted-media"
                                        title={`${item.title} Mobile Preview`}
                                      ></iframe>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.businessType}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Electronics">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPortfolioItems
                  .filter((item) => item.category === "Electronics")
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                    >
                      <div className="block w-full h-full">
                        <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block absolute inset-0 z-10"
                          >
                            <span className="sr-only">Visit {item.title}</span>
                          </Link>

                          <iframe
                            src={getYouTubeEmbedUrl(item.desktopVideoUrl || "")}
                            className="absolute inset-0 w-full h-full scale-[1.05]"
                            allow="autoplay; encrypted-media"
                            title={`${item.title} Desktop Preview`}
                          ></iframe>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                            <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.description}</p>

                            <div onClick={(e) => e.stopPropagation()}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm relative z-30"
                                  >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    View Mobile
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 flex justify-center shadow-none">
                                  <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline outline-1 outline-slate-200">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                      <div className="w-10 h-1 bg-slate-200 rounded-full mr-2"></div>
                                      <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-0 w-full h-full bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(item.mobileVideoUrl || "")}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none"
                                        allow="autoplay; encrypted-media"
                                        title={`${item.title} Mobile Preview`}
                                      ></iframe>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.businessType}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {categories.slice(6).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioData
                    .filter((item) => item.category === category)
                    .slice(0, 12)
                    .map((item) => (
                      <Card
                        key={item.id}
                        className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                      >
                        <div className="block w-full h-full">
                          <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                            <Link
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hidden lg:block absolute inset-0 z-10"
                            >
                              <span className="sr-only">Visit {item.title}</span>
                            </Link>

                            <Image
                              src={item.imageUrl || "/modern-business-website.webp"}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                              <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                              <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.businessType}</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <Badge className="mb-2" variant="secondary">
                            {item.category}
                          </Badge>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* {Object.entries(serviceCategories).map(([category, services]) => (
        <section key={category} className="py-16 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{category}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our portfolio of {category.toLowerCase()} projects
              </p>
            </div>

            <Tabs defaultValue={Object.keys(services)[0]} className="w-full">
              <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-secondary/50 p-2 mb-8">
                {Object.keys(services).map((service) => (
                  <TabsTrigger key={service} value={service} className="text-sm">
                    {service}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(services).map(([service, items]) => (
                <TabsContent key={service} value={service}>
                  <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <Card
                        key={item.id}
                        className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-fit bg-white border-none rounded-xl"
                      >
                        <div className="block w-full h-full">
                          <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5">
                            <Link
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hidden lg:block absolute inset-0 z-10"
                            >
                              <span className="sr-only">Visit {item.title}</span>
                            </Link>

                            <Image
                              src={item.imageUrl || "/modern-business-website.webp"}
                              alt={item.title}
                              fill
                              className="object-contain"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                              <Badge className="mb-2 bg-primary text-white border-none">{item.category}</Badge>
                              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                              <p className="text-white/90 text-xs mb-4 line-clamp-2">{item.businessType}</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <Badge className="mb-2" variant="secondary">
                            {item.category}
                          </Badge>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      ))} */}

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
