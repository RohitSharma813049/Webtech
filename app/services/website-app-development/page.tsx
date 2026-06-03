"use client"

import {useState,useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import { DiscountPopup } from "@/components/discount-popup"
import HeroVideoSection from "@/components/hero-video-section"
import { PricingSection } from "@/components/pricing-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { SectionCarousel } from "@/components/section-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { servicesData } from "@/lib/services-data"
import { portfolioData } from "@/lib/portfolio-data"
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Sparkles, Star } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Rocket, Gem, Wrench, Zap } from "lucide-react"
import { Search, Palette, Cog } from "lucide-react"
import {
  Calendar,
  Smartphone,
  Globe,
  ChevronDown,
} from "lucide-react"
      import {
  Code2,
  MonitorSmartphone,
  Database,
  Server,
  Shield,
  LayoutDashboard,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger)

export default function WebsiteAppDevelopmentPage() {
  const heroRef = useRef<HTMLElement>(null)

  const category = servicesData.find((cat) => cat.name === "Website & App Development")
  const relatedPortfolio = portfolioData.filter((item) =>
    [
      "Enquiry Website",
      "E-commerce",
      "Booking Website",
      "Rental Website",
      "Portfolio Website",
      "Business Website",
      "Landing Page",
    ].includes(item.category),
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
     
      <DiscountPopup serviceType="web-development" />

      <HeroSection
        title="Website & App"
        titleHighlight="Development"
        description="Professional web and mobile development services that bring your vision to life with cutting-edge technology. From websites to mobile apps, we build it all."
        primaryCTA={{ label: "View Our Work", href: "/portfolio" }}
        secondaryCTA={{ label: "Get Free Consultation",   type: "enquiry", }}
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
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Website & App Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From modern websites to custom applications
            </p>
          </div>

          {category?.services && (
            <SectionCarousel
              items={category.services}
              itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              renderItem={(service) => (
                <Card className="group h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain bg-muted/20 w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6 flex-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <EnquiryPopup
                        preselectedCategory="Website & App Development"
                        preselectedService={service.title}
                        trigger={
                          <Button size="sm" className="flex-1">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Enquiry
                          </Button>
                        }
                      />
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
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
      
      {/* Why Choose Us - Mobile Slider */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Why Choose Us
            </Badge>

            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Why Choose Our Development Services?
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver high-quality, scalable solutions with latest technologies
            </p>
          </div>

          <SectionCarousel
            items={[
              {
                icon: Rocket,
                title: "Fast Delivery",
                description: "Quick turnaround without compromising quality",
              },
              {
                icon: Gem,
                title: "Premium Quality",
                description: "Clean code and best practices guaranteed",
              },
              {
                icon: Wrench,
                title: "Free Maintenance",
                description: "3 months free support and bug fixes",
              },
              {
                icon: Zap,
                title: "Latest Tech",
                description: "Modern frameworks and cutting-edge tools",
              },
            ]}
            itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            renderItem={(item) => {
              const Icon = item.icon
              return (
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-auto">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            }}
          />

        </div>
      </section>

      {/* Development Process - Mobile Slider */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Our Process
            </Badge>

            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Development Process
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <SectionCarousel
            items={[
              {
                step: "01",
                icon: Search,
                title: "Discovery & Planning",
                description:
                  "We analyze your requirements and create a detailed project roadmap",
              },
              {
                step: "02",
                icon: Palette,
                title: "Design & Prototyping",
                description:
                  "Creating wireframes and interactive prototypes for your approval",
              },
              {
                step: "03",
                icon: Cog,
                title: "Development",
                description: "Building your website/app with clean, scalable code",
              },
              {
                step: "04",
                icon: Rocket,
                title: "Testing & Launch",
                description: "Rigorous testing followed by smooth deployment",
              },
            ]}
            itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            renderItem={(item) => {
              const Icon = item.icon
              return (
                <div className="p-6 border rounded-xl bg-card hover:shadow-lg hover:-translate-y-2 transition h-full flex flex-col">
                  <div className="text-5xl font-bold text-primary/20 mb-3">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-auto">
                    {item.description}
                  </p>
                </div>
              )
            }}
          />

        </div>
      </section>



      {/* Rest of sections (unchanged except spacing) */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image src="/image/new-images/Types-of-Websites.webp" alt="Success" fill className="object-contain" />
            </div>
            <div>
              <Badge className="mb-4" variant="secondary">Ready to Start?</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your ideas into reality with our expert development team. Get a free consultation and project
                quote today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg">100% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg">On-Time Delivery Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg">Post-Launch Support Included</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <EnquiryPopup
                  trigger={
                    <Button size="lg" className="text-lg px-8 py-6">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Start Your Project
                    </Button>
                  }
                />
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <a href="tel:+918860876087">
                    <Phone className="mr-2 w-5 h-5" />
                    +91 886 087 6087
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            Web Development
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technologies We Master
          </h2>
        </div>

        <SectionCarousel
          items={[
            {
              name: "Frontend",
              icon: Code2,
              color: "from-blue-500 to-cyan-500",
            },
            {
              name: "Responsive Design",
              icon: MonitorSmartphone,
              color: "from-purple-500 to-pink-500",
            },
            {
              name: "Backend API",
              icon: Server,
              color: "from-orange-500 to-red-500",
            },
            {
              name: "Database",
              icon: Database,
              color: "from-green-500 to-emerald-500",
            },
            {
              name: "Security",
              icon: Shield,
              color: "from-teal-500 to-green-600",
            },
            {
              name: "Performance",
              icon: Zap,
              color: "from-yellow-500 to-orange-500",
            },
            {
              name: "Dashboard",
              icon: LayoutDashboard,
              color: "from-violet-500 to-purple-600",
            },
            {
              name: "Hosting",
              icon: Globe,
              color: "from-cyan-500 to-blue-500",
            },
          ]}
          itemClassName="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
          renderItem={(tool) => (
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="font-semibold text-sm">
                  {tool.name}
                </p>
              </CardContent>
            </Card>
          )}
        />

      </div>
    </section>

      {/* FAQ Section */}

<section className="py-16 lg:py-20 bg-background">
  <div className="container mx-auto px-4">

    {/* HEADER */}
    <div className="text-center mb-12">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <CheckCircle2 className="w-4 h-4 mr-2" />
        FAQs
      </Badge>

      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
        Frequently Asked Questions
      </h2>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
        Find answers to common questions about our development services
      </p>
    </div>

    {/* DATA */}
    {(() => {
      const [openIndex, setOpenIndex] = useState(null)

      const faqs = [
        {
          icon: Calendar,
          question: "How long does it take to build a website?",
          answer:
            "Typically, a standard website takes 2-4 weeks, while complex e-commerce or custom applications may take 6-12 weeks depending on requirements.",
        },
        {
          icon: Wrench,
          question: "Do you provide website maintenance?",
          answer:
            "Yes, we offer comprehensive maintenance packages including regular updates, security patches, backups, and technical support.",
        },
        {
          icon: Smartphone,
          question: "Can you develop mobile apps for iOS and Android?",
          answer:
            "Yes, we develop native and cross-platform mobile apps using React Native and Flutter for both iOS and Android platforms.",
        },
        {
          icon: Globe,
          question: "Do you help with hosting and domain setup?",
          answer:
            "We assist with domain registration, hosting setup, SSL certificates, and complete deployment of your website.",
        },
      ]

      return (
        <div className="max-w-6xl mx-auto space-y-4">

          {faqs.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border rounded-xl bg-card/50 overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
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
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}

        </div>
      )
    })()}

    {/* CTA */}
    <div className="text-center mt-10">
      <a
        href="/faq"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white"
      >
        View All FAQs <ArrowRight className="w-4 h-4" />
      </a>
    </div>

  </div>
</section>

<PricingSection defaultTab="Website & App Development" />

  
    </div>
  )
}