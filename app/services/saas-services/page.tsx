"use client"

import { useState } from "react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import { DiscountPopup } from "@/components/discount-popup"
import { PricingSection } from "@/components/pricing-section"
import { SectionCarousel } from "@/components/section-carousel"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { servicesData } from "@/lib/services-data"
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Cloud } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Lock,
  TrendingUp,
  RefreshCw,
} from "lucide-react"
import {
  ClipboardList,
  Building2,
  Code2,
  Rocket,
} from "lucide-react"
  import {
  Bell,
  CreditCard,
  Smartphone,
} from "lucide-react"
import {
  ChevronLeft,
  ChevronRight,
    ChevronDown,
} from "lucide-react"
import {
  Settings,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"
 import {
  Shield,
  Zap,
  BarChart3,
  Users,
  Database,
  Globe,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger)

export default function SaaSServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
const [openIndex, setOpenIndex] = useState<number | null>(null)

const faqs = [
  {
    icon: Settings,
    question: "Can I customize a ready-to-use SaaS solution?",
    answer:
      "Yes! Our ready-to-use solutions are fully customizable. We can modify features, workflows, branding, and integrations according to your business requirements.",
  },
  {
    icon: Cloud,
    question: "What's the difference between cloud and on-premise?",
    answer:
      "Cloud hosting runs on secure remote servers accessible anywhere, while on-premise solutions are installed on your own infrastructure for complete control.",
  },
  {
    icon: GraduationCap,
    question: "Do you provide training for our team?",
    answer:
      "Absolutely. We provide onboarding sessions, video tutorials, documentation, and hands-on training for your internal team.",
  },
  {
    icon: ShieldCheck,
    question: "What happens after development is complete?",
    answer:
      "We continue supporting your product with maintenance, feature updates, monitoring, security patches, and technical assistance.",
  },
]
  const category = servicesData.find((cat) => cat.name === "SaaS Services")

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
     
       <DiscountPopup serviceType="saas" />
      <HeroSection
        title="SaaS"
        titleHighlight="Solutions"
        description="Scalable software-as-a-service solutions for modern businesses looking to streamline operations and boost productivity with cloud-based systems."
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

      {/* Why Choose Us - Mobile Slider */}
      
      {/* Our SaaS Solutions - Mobile Slider */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our SaaS Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready-to-deploy software solutions for various business needs
            </p>
          </div>

          {category?.services && (
            <SectionCarousel
              items={category.services}
              renderItem={(service) => (
                <Card
                  className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden"
                >
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
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <EnquiryPopup
                        preselectedCategory="SaaS Services"
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

<section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
  <div className="container mx-auto px-4">

    {/* HEADER */}
    <div className="text-center mb-12">
      <Badge className="mb-4" variant="secondary">
        Why Choose Us
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Why Choose Our SaaS Solutions?
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Scalable, secure, and feature-rich software solutions
      </p>
    </div>

    {/* CARDS */}
    <SectionCarousel
      items={[
        {
          icon: Cloud,
          title: "Cloud-Based",
          description: "Access your software from anywhere, anytime",
        },
        {
          icon: Lock,
          title: "Secure & Reliable",
          description: "Bank-level security with 99.9% uptime",
        },
        {
          icon: TrendingUp,
          title: "Scalable",
          description: "Grows with your business needs",
        },
        {
          icon: RefreshCw,
          title: "Regular Updates",
          description: "Continuous improvements and new features",
        },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
      renderItem={(item) => {
        const Icon = item.icon
        return (
          <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center h-full flex flex-col items-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
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

      {/* Implementation Process - Mobile Slider */}


<section className="py-16 lg:py-20 bg-background">
  <div className="container mx-auto px-4">

    {/* HEADER */}
    <div className="text-center mb-12">
      <Badge className="mb-4" variant="secondary">
        Implementation Process
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        How We Deliver SaaS Solutions
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        From concept to deployment in simple steps
      </p>
    </div>

    {/* STEPS */}
    <SectionCarousel
      items={[
        {
          step: "01",
          icon: ClipboardList,
          title: "Requirements Analysis",
          description: "Understanding your business needs and workflows",
        },
        {
          step: "02",
          icon: Building2,
          title: "Architecture Design",
          description: "Planning scalable system architecture",
        },
        {
          step: "03",
          icon: Code2,
          title: "Development & Testing",
          description: "Building and rigorous quality assurance",
        },
        {
          step: "04",
          icon: Rocket,
          title: "Deployment & Training",
          description: "Launch and team onboarding",
        },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
      renderItem={(item) => {
        const Icon = item.icon
        return (
          <div className="h-full flex flex-col items-center text-center">
            {/* STEP NUMBER */}
            <div className="text-6xl mb-4 opacity-20 font-bold text-primary">
              {item.step}
            </div>
            {/* ICON */}
            <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mt-auto">
              {item.description}
            </p>
          </div>
        )
      }}
    />

  </div>
</section>

      {/* Key Features - Mobile Slider */}

<section className="py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
  <div className="container mx-auto px-4">

    {/* HEADER */}
    <div className="text-center mb-12">
      <Badge className="mb-4" variant="secondary">
        Features
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Key Features of Our SaaS Platforms
      </h2>
    </div>

    <SectionCarousel
      items={[
        { icon: Users, title: "Multi-User Access", description: "Role-based permissions and user management" },
        { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time insights and reporting" },
        { icon: Bell, title: "Notifications", description: "Email, SMS, and push notifications" },
        { icon: CreditCard, title: "Payment Integration", description: "Multiple payment gateways supported" },
        { icon: Smartphone, title: "Mobile Apps", description: "iOS and Android applications" },
        { icon: Globe, title: "API Access", description: "RESTful APIs for integrations" },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
      renderItem={(feature) => {
        const Icon = feature.icon
        return (
          <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0 h-full flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-auto">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        )
      }}
    />

  </div>
</section>

<section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <Badge className="mb-4" variant="secondary">
        SaaS Features
      </Badge>

      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Everything Your Business Needs
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Scale faster with secure, modern, and powerful software solutions.
      </p>
    </div>

    <SectionCarousel
      items={[
        { name: "Cloud Hosting", icon: Cloud, color: "from-blue-500 to-cyan-500" },
        { name: "Secure Platform", icon: Shield, color: "from-green-500 to-emerald-500" },
        { name: "Fast Performance", icon: Zap, color: "from-yellow-500 to-orange-500" },
        { name: "Analytics", icon: BarChart3, color: "from-purple-500 to-pink-500" },
        { name: "Team Collaboration", icon: Users, color: "from-indigo-500 to-blue-500" },
        { name: "Database Sync", icon: Database, color: "from-red-500 to-rose-500" },
        { name: "Global Access", icon: Globe, color: "from-cyan-500 to-sky-500" },
        { name: "Automation", icon: Workflow, color: "from-violet-500 to-purple-500" },
      ]}
      itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
      renderItem={(feature) => {
        const Icon = feature.icon;
        return (
          <Card className="h-full border bg-card/60 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center h-full flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-auto">
                Built for speed, scale, and reliability.
              </p>
            </CardContent>
          </Card>
        );
      }}
    />

  </div>
</section>

      {/* Pricing Models */}
      <PricingSection defaultTab="SaaS Services" />


<div className="max-w-4xl mx-auto space-y-4">
  {faqs.map((faq, index) => {
    const Icon = faq.icon
    const isOpen = openIndex === index

    return (
      <div
        key={index}
        className="rounded-xl border bg-card overflow-hidden"
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
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* ANSWER */}
        {isOpen && (
          <div className="px-5 pb-5 pl-[72px] text-muted-foreground leading-relaxed">
            {faq.answer}
          </div>
        )}
      </div>
    )
  })}
</div>
 

    </div>
  )
}