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
import { CTASection } from "@/components/cta-section"
import { PricingSection } from "@/components/pricing-section"
import { SectionCarousel } from "@/components/section-carousel"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { EnquiryPopup } from "@/components/enquiry-popup"

import { servicesData } from "@/lib/services-data"

import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import { Palette, Zap, RefreshCw, Briefcase } from "lucide-react";
import {
  Search,
  Lightbulb,
  Pencil,
  Sparkles,
  Package,
} from "lucide-react";
import {
  PenTool,
  Pen,
  Figma,
  FigmaIcon,
  Aperture,
  FileText,
} from "lucide-react";
import {
  Layers,
} from "lucide-react";
import {
  Chrome,
  Facebook,
  BarChart3,
  Mail,
  Bird,
  LineChart,
  Network,
  Layers3,
  Compass,
  Linkedin,
  Video,
  PlayCircle,
  ShoppingBag,
} from "lucide-react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function DesigningServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const category = servicesData.find(
    (cat) => cat.name === "Designing Services"
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
      )

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 }
      )

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
      )

      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
      )

      // SERVICES
      if (servicesRef.current) {
        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
     
      <DiscountPopup serviceType="designing" />

      <HeroSection
        title="Designing"
        titleHighlight="Excellence"
        description="Creative design solutions that captivate audiences and communicate your brand message effectively. From logos to complete brand identities."
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

            {/* SERVICES - Mobile Slider */}
      <section ref={servicesRef} className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Design Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From logos to complete brand identities
            </p>
          </div>

          {category?.services && (
            <SectionCarousel
              items={category.services}
              renderItem={(service) => (
                <Card
                  className="service-card h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 bg-muted/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
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
                        preselectedCategory="Designing Services"
                        preselectedService={service.title}
                        trigger={
                          <Button size="sm" className="flex-1">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Enquiry
                          </Button>
                        }
                      />
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href="tel:+918860876087">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            />
          )}
        </div>
      </section>

      {/* WHY CHOOSE US - Mobile Slider */}


<section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <Badge className="mb-4" variant="secondary">
        Why Choose Us
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Why Choose Our Design Services?
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Creative excellence with strategic thinking
      </p>
    </div>

    <SectionCarousel
      items={[
        {
          icon: Palette,
          title: "Creative Excellence",
          description: "Award-winning designs that stand out",
        },
        {
          icon: Zap,
          title: "Quick Turnaround",
          description: "Fast delivery without quality compromise",
        },
        {
          icon: RefreshCw,
          title: "Unlimited Revisions",
          description: "We iterate until you're 100% satisfied",
        },
        {
          icon: Briefcase,
          title: "Professional Team",
          description: "Experienced designers with proven track record",
        },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
      renderItem={(item) => {
        const Icon = item.icon;

        return (
          <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center h-full flex flex-col items-center">
              
              <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 text-primary" strokeWidth={1.8} />
              </div>

              <h3 className="font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-auto">
                {item.description}
              </p>

            </CardContent>
          </Card>
        );
      }}
    />

  </div>
</section>

      {/* PROCESS - Mobile Slider */}


<section className="py-16 lg:py-20 bg-background">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <Badge className="mb-4" variant="secondary">
        Design Process
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Our Creative Process
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Structured approach to deliver exceptional designs
      </p>
    </div>

    <SectionCarousel
      items={[
        {
          step: "01",
          title: "Brief & Research",
          description: "Understanding your brand and target audience",
          icon: Search,
        },
        {
          step: "02",
          title: "Concept Development",
          description: "Creating initial design concepts",
          icon: Lightbulb,
        },
        {
          step: "03",
          title: "Design Execution",
          description: "Bringing the chosen concept to life",
          icon: Pencil,
        },
        {
          step: "04",
          title: "Refinement",
          description: "Perfecting every detail",
          icon: Sparkles,
        },
        {
          step: "05",
          title: "Delivery",
          description: "Final files in all required formats",
          icon: Package,
        },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)]"
      renderItem={(item) => {
        const Icon = item.icon;

        return (
          <div className="text-center h-full flex flex-col items-center">
            {/* Step */}
            <div className="text-6xl mb-4 opacity-20 font-bold text-primary">
              {item.step}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <Icon className="w-10 h-10 text-primary" strokeWidth={1.8} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
              {item.description}
            </p>
          </div>
        );
      }}
    />

  </div>
</section>

      {/* TOOLS - Mobile Slider */}


<section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-12">
      <Badge className="mb-4" variant="secondary">
        Marketing Tools
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Tools We Master
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Powerful platforms we use to grow brands and deliver results
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
        { name: "TikTok Ads", icon: Video, color: "from-pink-500 to-black" },
        { name: "YouTube Ads", icon: PlayCircle, color: "from-red-500 to-red-700" },
        { name: "Shopify", icon: ShoppingBag, color: "from-green-500 to-emerald-700" },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)]"
      renderItem={(tool) => {
        const Icon = tool.icon;
        return (
          <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
            <CardContent className="p-0 h-full flex flex-col items-center justify-center">
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="font-semibold text-sm">
                {tool.name}
              </p>
            </CardContent>
          </Card>
        );
      }}
    />

  </div>
</section>
      <PricingSection defaultTab="Designing Services" />
      <CTASection />
    </div>
  )
}