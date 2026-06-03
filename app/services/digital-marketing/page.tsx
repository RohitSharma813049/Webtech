"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import { DiscountPopup } from "@/components/discount-popup"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { SectionCarousel } from "@/components/section-carousel"
import { PricingSection } from "@/components/pricing-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { servicesData } from "@/lib/services-data"
import { portfolioData } from "@/lib/portfolio-data"
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Target,
  Star,
  Sparkles,
  Rocket,
  Chrome,
  Facebook,
  Mail,
  Palette,
  LineChart,
  Network,
  Layers3,
  Compass,
  Linkedin,
    Search,
  BarChart3,
  Bird
} from "lucide-react"
import { useState } from "react"
import {
  Share2,
  ChevronDown,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function DigitalMarketingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const category = servicesData.find((cat) => cat.name === "Digital Marketing")
  const relatedPortfolio = portfolioData.filter((item) =>
    ["Social Media Marketing", "SEO", "Google Ads", "Content Marketing", "Digital Marketing"].includes(item.category),
  )

  useEffect(() => {
    gsap.fromTo(
      ".hero-badge",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 },
    )

    gsap.fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 })

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 },
    )

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 },
    )
  }, [])

  return (
    <div className="min-h-screen">
     
      <DiscountPopup serviceType="digital-marketing" />

      <HeroSection
        title="Digital Marketing"
        titleHighlight="Excellence"
        description="Drive growth, engagement, and ROI with comprehensive digital marketing strategies tailored to your business goals. From SEO to social media, we've got you covered."
        primaryCTA={{ label: "View Our Work", href: "/portfolio" }}
        secondaryCTA={{ label: "Get Free Consultation",  type: "enquiry", }}
        showImages={true}
          imagesData={[
    {
      src: "/image/images/hero-sections/webeside-technology-banner-web-development.webp",
      alt: "Web Development",
      label: "Web Development",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-digital-marketing.webp",
      alt: "Digital Marketing",
      label: "Digital Marketing",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-seo-services.webp",
      alt: "SEO Services",
      label: "SEO Services",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-ecommerce.webp",
      alt: "E-Commerce",
      label: "E-Commerce",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-mobile-app.webp",
      alt: "Mobile App Development",
      label: "Mobile Apps",
    },

  ]}
      />
   
   
      {/* Services Section */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Our Digital Marketing Services
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
        From SEO to social media, we cover all aspects of digital marketing
      </p>
    </div>

    {/* Responsive Grid/Slider */}
    {category?.services && (
      <SectionCarousel
        items={category.services}
        itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        renderItem={(service) => (
          <Card className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
            {/* IMAGE */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={
                  service.image ||
                  "/seo-analytics-dashboard.webp?height=192&width=391&query=digital marketing service"
                }
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain bg-muted/20 w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold line-clamp-2">
                {service.title}
              </h3>
            </div>
            {/* CONTENT */}
            <CardContent className="p-6 flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 mb-6 flex-1">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <EnquiryPopup
                  preselectedCategory="Digital Marketing"
                  preselectedService={service.title}
                  trigger={
                    <Button size="sm" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enquiry
                    </Button>
                  }
                />
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  asChild
                >
                  <a href="tel:+918860876087">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      />
    )}

  </div>
</section>

      {/* Why Choose Our Digital Marketing */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Our Digital Marketing Services?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results with data-driven strategies
            </p>
          </div>

          <SectionCarousel
            items={[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Targeted Campaigns",
                description: "Precise audience targeting for maximum ROI",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Results",
                description: "300% average increase in online engagement",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Certified digital marketing specialists",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award Winning",
                description: "Recognized excellence in digital marketing",
              },
            ]}
            itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            renderItem={(item) => (
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                <CardContent className="p-6 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-auto">{item.description}</p>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>

      {/* Marketing Process Section */}
  <section className="py-16 lg:py-24 bg-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-12 lg:mb-16">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        Our Approach
      </Badge>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Digital Marketing Process
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Strategic approach to maximize your digital marketing ROI
      </p>
    </div>

    {/* Process Data */}
    {[
      {
        step: "01",
        title: "Research & Analysis",
        description:
          "Deep dive into your market, competitors, and audience behavior.",
        icon: Search,
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Creating customized marketing strategies aligned with your goals.",
        icon: BarChart3,
      },
      {
        step: "03",
        title: "Campaign Execution",
        description:
          "Implementing campaigns across multiple digital channels.",
        icon: Rocket,
      },
      {
        step: "04",
        title: "Monitor & Optimize",
        description:
          "Continuous tracking and optimization for better performance.",
        icon: TrendingUp,
      },
    ].length > 0 && (
      <>

        <SectionCarousel
          items={[
            {
              step: "01",
              title: "Research & Analysis",
              description:
                "Deep dive into your market, competitors, and audience behavior.",
              icon: Search,
            },
            {
              step: "02",
              title: "Strategy Development",
              description:
                "Creating customized marketing strategies aligned with your goals.",
              icon: BarChart3,
            },
            {
              step: "03",
              title: "Campaign Execution",
              description:
                "Implementing campaigns across multiple digital channels.",
              icon: Rocket,
            },
            {
              step: "04",
              title: "Monitor & Optimize",
              description:
                "Continuous tracking and optimization for better performance.",
              icon: TrendingUp,
            },
          ]}
          itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          renderItem={(item) => (
            <div className="relative h-full flex flex-col rounded-3xl border bg-gradient-to-br from-card to-secondary/20 p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Background Step */}
              <div className="absolute top-4 right-4 text-5xl lg:text-6xl font-bold text-primary/10">
                {item.step}
              </div>
              {/* Icon */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mb-5 lg:mb-6">
                <item.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mt-auto">
                {item.description}
              </p>
            </div>
          )}
        />

      </>
    )}

  </div>
</section>

      {/* Marketing Tools & Platforms Section */}
<section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/20 to-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-12 lg:mb-16">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        Tools & Platforms
      </Badge>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Marketing Tools We Use
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Industry-leading platforms for comprehensive digital marketing
      </p>
    </div>

    <SectionCarousel
      items={[
        { name: "Google Ads", icon: Chrome, color: "from-blue-500 to-green-500" },
        { name: "Meta Ads", icon: Facebook, color: "from-blue-600 to-cyan-500" },
        { name: "Google Analytics", icon: BarChart3, color: "from-orange-500 to-yellow-500" },
        { name: "SEMrush", icon: Search, color: "from-orange-600 to-red-500" },
        { name: "Mailchimp", icon: Mail, color: "from-yellow-400 to-orange-400" },
        { name: "Hootsuite", icon: Bird, color: "from-slate-700 to-slate-900" },
        { name: "Canva", icon: Palette, color: "from-cyan-500 to-blue-500" },
        { name: "Ahrefs", icon: LineChart, color: "from-indigo-500 to-blue-700" },
        { name: "HubSpot", icon: Network, color: "from-orange-500 to-amber-500" },
        { name: "Buffer", icon: Layers3, color: "from-sky-500 to-blue-500" },
        { name: "Moz", icon: Compass, color: "from-teal-500 to-emerald-500" },
        { name: "LinkedIn Ads", icon: Linkedin, color: "from-blue-700 to-sky-500" },
      ]}
      itemClassName="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)]"
      renderItem={(tool) => (
        <Card className="group h-full border bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg mb-4`}>
              <tool.icon className="w-8 h-8 text-white" />
            </div>
            <p className="font-semibold text-sm group-hover:text-primary transition-colors">
              {tool.name}
            </p>
          </CardContent>
        </Card>
      )}
    />

  </div>
</section>



      {/* Pricing Section */}
      <PricingSection defaultTab="Digital Marketing" />

      {/* Digital Marketing Portfolio Section with Service Tabs */}
      {/* <section className="py-24 bg-background display-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Star className="w-4 h-4 mr-2" />
              Our Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Digital Marketing Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses grow their online presence
            </p>
          </div>

          <Tabs defaultValue="SEO" className="w-full">
            <TabsList className="w-full justify-start flex-wrap h-auto gap-1 bg-secondary/50 p-2 mb-8">
              <TabsTrigger value="SEO">Search Engine Optimization (SEO)</TabsTrigger>
              <TabsTrigger value="Ads">Pay-Per-Click Advertising</TabsTrigger>
              <TabsTrigger value="Social">Social Media Marketing</TabsTrigger>
              <TabsTrigger value="WhatsApp">Bulk WhatsApp Marketing</TabsTrigger>
              <TabsTrigger value="Content">Content Writing & Designing</TabsTrigger>
            </TabsList>

            <TabsContent value="SEO">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData
                  .filter((item) => ["Marketing", "Business Services"].includes(item.category))
                  .slice(0, 6)
                  .map((item) => (
                    <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={item.imageUrl || "/seo-analytics-dashboard.webp?height=400&width=600"}
                            alt={item.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 right-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-1">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Ads">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData
                  .filter((item) => ["Marketing", "Technology"].includes(item.category))
                  .slice(0, 6)
                  .map((item) => (
                    <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={item.imageUrl || "/seo-analytics-dashboard.webp?height=400&width=600"}
                            alt={item.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 right-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-1">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Social">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData
                  .filter((item) => ["Entertainment", "Lifestyle"].includes(item.category))
                  .slice(0, 6)
                  .map((item) => (
                    <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={item.imageUrl || "/seo-analytics-dashboard.webp?height=400&width=600"}
                            alt={item.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 right-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-1">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="WhatsApp">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData
                  .filter((item) => ["Business Services", "E-Commerce"].includes(item.category))
                  .slice(0, 6)
                  .map((item) => (
                    <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={item.imageUrl || "/seo-analytics-dashboard.webp?height=400&width=600"}
                            alt={item.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 right-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-1">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Content">
              <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData
                  .filter((item) => ["Education", "Entertainment"].includes(item.category))
                  .slice(0, 6)
                  .map((item) => (
                    <Link href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={item.imageUrl || "/seo-analytics-dashboard.webp?height=400&width=600"}
                            alt={item.title}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 right-4">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-primary" />
                              </div>
                            </div>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-1">{item.businessType}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/portfolio">
                View All Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
<section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/20 to-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-12 lg:mb-16">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <Users className="w-4 h-4 mr-2" />
        Client Success
      </Badge>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        What Our Clients Say
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
        Real results from businesses we've helped grow
      </p>
    </div>

    <SectionCarousel
      items={[
        {
          name: "Rajesh Kumar",
          role: "CEO, TechStart India",
          content: "Their SEO strategies increased our organic traffic by 300% in just 6 months!",
          rating: 5,
        },
        {
          name: "Priya Sharma",
          role: "Marketing Head, Fashion Hub",
          content: "Social media campaigns delivered exceptional ROI. Highly recommended!",
          rating: 5,
        },
        {
          name: "Amit Patel",
          role: "Owner, Local Restaurant",
          content: "Google My Business optimization brought 10x more customers to our restaurant.",
          rating: 5,
        },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
      renderItem={(testimonial) => (
        <Card className="group h-full border hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <CardContent className="flex flex-col p-6 h-full">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            {/* Content */}
            <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed flex-1">
              "{testimonial.content}"
            </p>
            {/* Client Info with Initial Logo */}
            <div className="flex items-center gap-3 pt-4 border-t">
              {/* Initial Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                {testimonial.name.charAt(0).toUpperCase()}
              </div>
              {/* Name + Role */}
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    />

  </div>
</section>

{/* FAQ Section */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-16">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <CheckCircle2 className="w-4 h-4 mr-2" />
        FAQs
      </Badge>

      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
        Frequently Asked Questions
      </h2>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Find answers to common questions about our digital marketing services
      </p>
    </div>

    {/* STATE (INLINE - NO COMPONENT) */}
    {(() => {
      const [openIndex, setOpenIndex] = useState<number | null>(null)

      const faqs = [
        {
          icon: Search,
          question: "How long before I see results from SEO?",
          answer:
            "SEO typically takes 3–6 months to show significant results. We provide monthly reports tracking your progress and rankings.",
        },
        {
          icon: Share2,
          question: "What's included in social media management?",
          answer:
            "Content creation, posting schedule, community management, paid ads, analytics, and monthly strategy reviews.",
        },
        {
          icon: BarChart3,
          question: "Do you manage Google Ads campaigns?",
          answer:
            "Yes, we handle complete campaign setup, optimization, A/B testing, and provide detailed ROI reports.",
        },
        {
          icon: Mail,
          question: "Can you help with email marketing?",
          answer:
            "We create campaigns, design templates, manage lists, and optimize for better open and click rates.",
        },
      ]

      return (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">

          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border rounded-xl bg-card hover:shadow-md transition"
              >

                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="text-base lg:text-lg font-semibold">
                      {faq.question}
                    </h3>

                  </div>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* Answer */}
                <div
                  className={`px-5 pb-5 text-muted-foreground text-sm lg:text-base leading-relaxed ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>

              </div>
            )
          })}

        </div>
      )
    })()}

    {/* Button */}
    <div className="text-center mt-10">
      <Button asChild size="lg" className="rounded-full px-8">
        <Link href="/faq">
          View All FAQs <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </div>

  </div>
</section>

      {/* Call to Action with Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/image/new-images/Website-technology-company-innovating-digital-solutions-for-you.webp"
                alt="Digital Marketing Team"
                fill
                className="object-contain object-center rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-4" variant="secondary">
                Get Started
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Dominate Your Market?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Partner with us to create data-driven marketing campaigns that deliver real, measurable results for your
                business.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg">Free Marketing Audit Worth ₹15,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg">ROI-Focused Strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg">Transparent Monthly Reports</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <EnquiryPopup
                  trigger={
                    <Button size="lg" className="text-lg px-8 py-6">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Start Your Campaign
                    </Button>
                  }
                />
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <a href="tel:+918860876087">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 886 087 6087
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
