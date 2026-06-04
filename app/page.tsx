"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { WelcomePopup } from "@/components/welcome-popup"
import { DiscountPopup } from "@/components/discount-popup"
import { VideoPopup } from "@/components/video-popup"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientLogoCarousel } from "@/components/client-logo-carousel"
import { CTASection } from "@/components/cta-section"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { SectionCarousel } from "@/components/section-carousel"
import { HeroImageCarousel } from "@/components/hero-image-carousel"
import { ServiceIcon } from "@/components/service-icon"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { TestimonialsSection } from "@/components/testimonials-section"
import HeroVideoSection from "@/components/hero-video-section"
import {Carousel,CarouselNext,CarouselPrevious,CarouselContent,CarouselItem} from "@/components/ui/carousel"
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Award,
  HeadphonesIcon,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Target,
  Rocket,
  Phone,
  MessageCircle,
  Star,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Heart,
  Utensils,
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react"

import {
  Globe,
  ShieldCheck,
  BadgeDollarSign,
  Megaphone,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { portfolioData } from "@/lib/portfolio-data"
import { serviceCategories } from "@/lib/services-data"
import { HeroSection } from "@/components/hero-section-reusable"


gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!counterRef.current || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          gsap.to(
            { value: 0 },
            {
              value: end,
              duration,
              ease: "power1.out",
              onUpdate: function () {
                setCount(Math.floor(this.targets()[0].value))
              },
            },
          )
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(counterRef.current)

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={counterRef} className="text-5xl lg:text-6xl font-bold mb-3 text-brand">
      {count}
      {suffix}
    </div>
  )
}

export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";

  let videoId = "";

  // Handle different YouTube URL formats
  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0] || "";
  } 
  else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
  } 
  else if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("shorts/")[1]?.split("?")[0] || "";
  } 
  else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("embed/")[1]?.split("?")[0] || "";
  }

  if (!videoId) {
    return url; // Fallback
  }

  // Reliable parameters (mute=1 is important for autoplay to work reliably)
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef(null)

  // Testimonials data
  const testimonials = [
    {
      videoId: "dQw4w9WgXcQ?si=example",
      rating: 5,
      review:
        "Working with Webeside Technology has been an absolute game-changer for our business. They transformed our outdated website into a modern, high-performing platform that not only looks stunning but has increased our online conversions by 300%. Their team's expertise, professionalism, and dedication to our success is truly exceptional.",
      initials: "RK",
      clientName: "Rajesh Kumar",
      position: "CEO & Founder",
      projectName: "TechStart India Portal",
      serviceType: "Website Development",
      industry: "Technology",
      completion: "December 2023",
      result: "300% Increase in Conversions",
      headerImage: "/image/images/hero-sections/webeside-technology-banner-web-development.webp",
    },
    {
      videoId: "exampleVideoId2",
      rating: 4,
      review:
        "The team at Webeside Technology did an amazing job with our e-commerce platform. They understood our vision and delivered a user-friendly, visually appealing site that has significantly boosted our sales. Highly recommend their services!",
      initials: "SM",
      clientName: "Sarah Miller",
      position: "Marketing Manager",
      projectName: "Gourmet Goods Online",
      serviceType: "E-commerce Development",
      industry: "Retail",
      completion: "August 2023",
      result: "250% Increase in Online Sales",
      headerImage: "/image/images/hero-sections/webeside-technology-banner-ecommerce.webp",
    },
    {
      videoId: "exampleVideoId3",
      rating: 5,
      review:
        "We were struggling with our online presence until we partnered with Webeside Technology. Their SEO expertise helped us rank higher on search engines, bringing in more qualified leads than ever before. Professional and results-driven!",
      initials: "JP",
      clientName: "John Peterson",
      position: "Business Owner",
      projectName: "Local Service Pros",
      serviceType: "SEO & Digital Marketing",
      industry: "Services",
      completion: "March 2023",
      result: "Increased Lead Generation by 400%",
      headerImage: "/image/images/hero-sections/webeside-technology-banner-seo-services.webp",
    },
    {
      videoId: "exampleVideoId4",
      rating: 5,
      review:
        "From concept to launch, Webeside Technology provided a seamless experience. Their mobile app development team is top-notch, delivering a high-quality product on time and within budget. Our users love the new app!",
      initials: "AL",
      clientName: "Anna Lee",
      position: "Product Manager",
      projectName: "ConnectApp Mobile",
      serviceType: "Mobile App Development",
      industry: "Technology",
      completion: "November 2023",
      result: "100k+ Downloads in First Month",
      headerImage: "/image/images/hero-sections/webeside-technology-banner-mobile-app.webp",
    },
    {
      videoId: "exampleVideoId5",
      rating: 4,
      review:
        "Webeside Technology helped us redesign our corporate website with a focus on user experience and brand storytelling. The new design is modern, engaging, and has received fantastic feedback from our stakeholders.",
      initials: "MC",
      clientName: "Michael Chen",
      position: "Head of Communications",
      projectName: "Innovate Solutions Corp.",
      serviceType: "Website Redesign",
      industry: "Corporate",
      completion: "June 2023",
      result: "Improved User Engagement by 50%",
      headerImage: "/image/images/hero-sections/webeside-technology-banner-digital-solutions.webp",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <>
      <HeroVideoSection />
        <section
          ref={statsRef}
          className=" bg-gradient-to-b from-secondary/20 to-background overflow-hidden mt-20"
        >
          <div className="container mx-auto px-4  ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="stat-card text-center p-6 rounded-2xl bg-card border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedCounter  end={900} suffix="+" />
                <div className="text-base lg:text-lg text-muted-foreground font-medium t">Projects Completed</div>
              </div>
              <div className="stat-card text-center p-6 rounded-2xl bg-card border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedCounter end={120} suffix="+" />
                <div className="text-base lg:text-lg text-muted-foreground font-medium">Happy Clients</div>
              </div>
              <div className="stat-card text-center p-6 rounded-2xl bg-card border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedCounter end={10} suffix="+" />
                <div className="text-base lg:text-lg text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="stat-card text-center p-6 rounded-2xl bg-card border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <AnimatedCounter end={100} suffix="%" />
                <div className="text-base lg:text-lg text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hero Section */}
        <HeroSection
          title="Your Brand Development &."
          titleHighlight="Marketing Partner"
          description="We craft exceptional websites, mobile apps, and digital marketing solutions that drive real growth and exceed expectations. Your success is our mission."
          primaryCTA={{ label: "View Portfolio", href: "/portfolio" }}
          secondaryCTA={{ label: "Lets talk", type: "enquiry" }}
          showImages={true}
          imagesData={[
            {
              src: "/image/images/hero-sections/webeside-technology-banner-web-development.webp",
              alt: "E-commerce",
              label: "E-commerce",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-digital-marketing.webp",
              alt: "Design & Marketing",
              label: "Design & Marketing",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-seo-services.webp",
              alt: "Education platforms",
              label: "Education platforms",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-ecommerce.webp",
              alt: "Gems store E-commerce",
              label: "Gems store E-commerce",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-mobile-app.webp",
              alt: "Handcrafted E-Commerce",
              label: "Handcrafted E-Commerce",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-digital-solutions.webp",
              alt: "Business Solutions",
              label: "Business Solutions",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-it-services.webp",
              alt: "Education platforms",
              label: "Education platforms",
            },
            {
              src: "/image/images/hero-sections/webeside-technology-banner-tech-services.webp",
              alt: "Tech Services",
              label: "Uber Type rental system",
            },
          ]}
        />
        
<section className="py-10 lg:py-16 bg-background overflow-hidden">
  <div className="container mx-auto px-4 lg:px-6">

    {/* Heading */}
    <div className="text-center mb-8 lg:mb-12">
      <Badge
        className="mb-4 px-4 py-2 text-[var(--chart-4)]"
        variant="secondary"
      >
        <Building2 className="w-4 h-4 mr-2" />
        Industries We Serve
      </Badge>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance text-brand">
        Businesses We Deal With
      </h2>

      <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        Providing cutting-edge digital solutions across diverse industries
      </p>
    </div>

    {/* Mobile Horizontal Scroll */}
    <div className="lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 w-max pb-2">
        {[
          {
            icon: <ShoppingBag className="w-6 h-6" />,
            name: "E-Commerce",
          },
          {
            icon: <GraduationCap className="w-6 h-6" />,
            name: "Education",
          },
          {
            icon: <Heart className="w-6 h-6" />,
            name: "Healthcare",
          },
          {
            icon: <Building2 className="w-6 h-6" />,
            name: "Real Estate",
          },
          {
            icon: <Utensils className="w-6 h-6" />,
            name: "Food & Drink",
          },
          {
            icon: <Factory className="w-6 h-6" />,
            name: "Manufacturing",
          },
        ].map((industry, index) => (
          <Card
            key={index}
            className="min-w-[140px] border hover:border-primary/50 transition-all duration-300"
          >
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {industry.icon}
              </div>

              <h3 className="text-sm font-semibold leading-tight">
                {industry.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Desktop Grid */}
    <div className="hidden lg:grid grid-cols-3 xl:grid-cols-6 gap-5">
      {[
        {
          icon: <ShoppingBag className="w-8 h-8" />,
          name: "E-Commerce",
        },
        {
          icon: <GraduationCap className="w-8 h-8" />,
          name: "Education",
        },
        {
          icon: <Heart className="w-8 h-8" />,
          name: "Healthcare",
        },
        {
          icon: <Building2 className="w-8 h-8" />,
          name: "Real Estate",
        },
        {
          icon: <Utensils className="w-8 h-8" />,
          name: "Food & Beverage",
        },
        {
          icon: <Factory className="w-8 h-8" />,
          name: "Manufacturing",
        },
      ].map((industry, index) => (
        <Card
          key={index}
          className="group border hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              {industry.icon}
            </div>

            <h3 className="text-sm font-semibold">
              {industry.name}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Services Section */}
<section className="services-section py-12 lg:py-16 bg-gradient-to-b from-background to-secondary/20">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <Target className="w-4 h-4 mr-2" />
        Our Services
      </Badge>

      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
        What We Offer
      </h2>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Comprehensive digital solutions across multiple domains to help your
        business thrive
      </p>
    </div>

    <Tabs defaultValue="Digital Marketing" className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-0.5 mb-12 h-auto p-1 bg-secondary/50">
        {serviceCategories.map((category) => (
          <TabsTrigger
            key={category.name}
            value={category.name}
            className="text-xs sm:text-sm lg:text-base py-2 px-2 sm:px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-normal text-center min-h-[3rem] sm:min-h-[3.5rem]"
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {serviceCategories.map((category) => (
        <TabsContent
          key={category.name}
          value={category.name}
          className="mt-8"
        >
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <SectionCarousel
              items={category.services.slice(0, 6)}
              renderItem={(service) => (
                <Card
                  key={service.id}
                  className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden h-full flex flex-col golden-hover cursor-golden"
                >
                  {/* Media */}
                  <div className="relative h-48 overflow-hidden">
            {/* Media */}
<div className="relative h-48 overflow-hidden bg-muted">
  <div className="relative w-full h-full flex items-center justify-center">
    {service.image?.endsWith(".mp4") ? (
      <video
        src={service.image}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          w-full
          h-full
          object-contain
          group-hover:scale-105
          transition-transform
          duration-500
        "
      />
    ) : (
      <Image
        src={
          service.image ||
          "/image/images/seo-analytics-dashboard.webp"
        }
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="
          object-contain
          p-2
          group-hover:scale-105
          transition-transform
          duration-500
        "
      />
    )}
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

  {service.reactIcon && (
    <div className="absolute bottom-3 left-3 bg-primary/90 p-2.5 rounded-lg z-10">
      <ServiceIcon
        iconName={service.reactIcon}
        size="lg"
        className="text-white"
      />
    </div>
  )}
</div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {service.reactIcon && (
                      <div className="absolute bottom-3 left-3 bg-primary/90 p-2.5 rounded-lg z-10">
                        <ServiceIcon
                          iconName={service.reactIcon}
                          size="lg"
                          className="text-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <EnquiryPopup
                        preselectedCategory={category.name}
                        preselectedService={service.title}
                        trigger={
                          <Button size="sm" className="flex-1">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Let's Enquiry
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
                          Let's Call
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            />
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {category.services.slice(0, 6).map((service) => (
              <Card
                key={service.id}
                className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden golden-hover cursor-golden"
              >
                {/* Media */}
                <div className="relative h-48 overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden">
                    {service.image?.endsWith(".mp4") ? (
                      <video
                        src={service.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <Image
                        src={
                          service.image ||
                          "/image/images/seo-analytics-dashboard.webp"
                        }
                        alt={service.title}
                        fill
                        className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {service.reactIcon && (
                    <div className="absolute bottom-3 left-3 bg-primary/90 p-2.5 rounded-lg z-10">
                      <ServiceIcon
                        iconName={service.reactIcon}
                        size="lg"
                        className="text-white"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <EnquiryPopup
                      preselectedCategory={category.name}
                      preselectedService={service.title}
                      trigger={
                        <Button size="sm" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Let's Enquiry
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
                        Let's Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="text-center mt-8">
            <Button asChild size="lg" className="rounded-full px-8 mx-auto">
              <Link href="/services">
                View All {category.name} Services{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </div>
</section>

        {/* Video Showcase Section - Local Videos */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
                <Sparkles className="w-4 h-4 mr-2" />
                Video Showcase
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Watch how we transform businesses with our digital solutions
              </p>
            </div>

            <SectionCarousel
              items={[
                { videoSrc: "/videos/Launch Your Online Business with Expert Web Design, SEO, & Ads! _ Website Design _ Webeside Agency.mp4", title: "Digital Marketing", description: "Boost your online presence with expert strategies.", cta: "Get Started" },
                { videoSrc: "/videos/Boost Your Food Business with a Stunning Website by Webeside _ Website Development _ Faridabad.mp4", title: "Web Development", description: "Fast, secure websites for all business types.", cta: "Contact Us" },
                { videoSrc: "/videos/Struggling to Manage Your Learners_ Discover the Power of Our LMS Today!.mp4", title: "LMS Solutions", description: "Powerful learning management systems.", cta: "Learn More" },
                { videoSrc: "/videos/Create Your Perfect Tour & Travel Packages Website with Webeside _ Website Development _ Faridabad.mp4", title: "Tour & Travel", description: "Showcase your tour packages beautifully.", cta: "Get Quote" },
                { videoSrc: "/videos/Take Your Food Business Online Today _ Website Development _ Webeside Agency _ Faridabad.mp4", title: "Food Business", description: "Take your restaurant online.", cta: "Start Now" },
                { videoSrc: "/videos/Start Your Tour & Travel Website with Webeside! _ Website Design _ Travel Website _ Webeside Agency.mp4", title: "Travel Website", description: "Build your travel business online.", cta: "Get Started" },
                { videoSrc: "/videos/videoplayback.mp4", title: "Our Story", description: "See how we transform businesses.", cta: "Watch Now" },
              ]}
              itemClassName="flex-shrink-0 w-[160px] sm:w-[calc(50%-8px)] lg:w-[calc(14.28%-12px)]"
              renderItem={(video) => (
                <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-black aspect-[9/16] h-full">
                  <video className="absolute inset-0 w-full h-full object-cover" src={video.videoSrc} autoPlay loop muted playsInline preload="metadata" />
                  {/* Always show text at bottom for mobile, hover for desktop. We can achieve this with CSS classes or just always showing it. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-sm lg:text-lg font-bold mb-1">{video.title}</h3>
                    <p className="text-white/80 lg:text-white/90 text-[10px] lg:text-xs mb-2 lg:mb-3 line-clamp-2 lg:line-clamp-none">{video.description}</p>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white text-[10px] lg:text-xs rounded-full h-7 lg:h-auto">{video.cta}</Button>
                  </div>
                </div>
              )}
            />
          </div>
        </section>

{/* Portfolio Section */}
<section className="portfolio-section py-12 lg:py-16 bg-background">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-8">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <Sparkles className="w-4 h-4 mr-2" />
        Our Work
      </Badge>

      <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
        Featured Portfolio
      </h2>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
        Explore our diverse portfolio of successful projects across various industries
      </p>
    </div>

<Tabs defaultValue="All" className="w-full">
  {/* ==================== TABS ==================== */}
  <TabsList className="w-full bg-transparent p-0 h-auto">
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="w-full px-10"
    >
      <CarouselContent className="-ml-2">
        {[
          "All",
          ...Array.from(
            new Set(
              portfolioData.map(
                (item) => item.category
              )
            )
          ),
        ].map((category) => (
          <CarouselItem
            key={category}
            className="pl-2 basis-auto"
          >
            <TabsTrigger
              value={category}
              className="whitespace-nowrap px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category}
            </TabsTrigger>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Tabs Desktop Buttons */}
      <CarouselPrevious className="hidden md:flex -left-2" />
      <CarouselNext className="hidden md:flex -right-2" />
    </Carousel>
  </TabsList>

  {[
    "All",
    ...Array.from(
      new Set(portfolioData.map((item) => item.category))
    ),
  ].map((category) => (
    <TabsContent
      key={category}
      value={category}
      className="mt-8"
    >
      {/* ==================== PORTFOLIO CAROUSEL ==================== */}
      <div className="block">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {portfolioData
              .filter(
                (item) =>
                  category === "All" ||
                  item.category === category
              )
              .slice(0, 6)
              .map((item) => {
                const mobileVideo =
                  item.mobileVideoUrl ||
                  item.desktopVideoUrl

                return (
                  <CarouselItem
                    key={item.id}
                    className="pl-2 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full bg-white border-none rounded-xl golden-hover cursor-golden">
                      {/* Video / Image */}
                      <div className="relative aspect-video overflow-hidden mx-0.5 mt-0.5 rounded-t-xl bg-black">
                        {mobileVideo ? (
                          <>
                            <iframe
                              src={getYouTubeEmbedUrl(
                                mobileVideo
                              )}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                              title={`${item.title} Preview`}
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                              <Badge className="mb-2 bg-primary text-white border-none">
                                {item.category}
                              </Badge>

                              <h3 className="text-lg font-bold text-white mb-1">
                                {item.title}
                              </h3>

                              <p className="text-white/90 text-xs mb-4 line-clamp-2">
                                {item.description ||
                                  item.businessType}
                              </p>

                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs gap-2 bg-white/20 text-white border-white/30 hover:bg-white/40 backdrop-blur-sm"
                                    onClick={(e) =>
                                      e.stopPropagation()
                                    }
                                  >
                                    <Smartphone className="w-3.5 h-3.5" />
                                   Let's View Mobile
                                  </Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0 shadow-none flex justify-center">
                                  <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[12px] border-white shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden outline-1 outline-slate-200">
                                    {/* Mobile Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white rounded-b-3xl z-20 flex items-center justify-center border-x border-b border-slate-100">
                                      <div className="w-10 h-1 bg-slate-200 rounded-full" />
                                    </div>

                                    {/* Mobile Video */}
                                    <div className="absolute inset-0 bg-black">
                                      <iframe
                                        src={getYouTubeEmbedUrl(
                                          item.mobileVideoUrl ||
                                            item.desktopVideoUrl!
                                        )}
                                        className="absolute inset-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                        title={`${item.title} Mobile Preview`}
                                      />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </>
                        ) : (
                          <>
                            <Link
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 z-10"
                            >
                              <span className="sr-only">
                                Visit {item.title}
                              </span>
                            </Link>

                            <Image
                              src={
                                item.imageUrl ||
                                "/image/images/webeside-technology-showcase-demo.webp"
                              }
                              alt={item.title}
                              fill
                              className="object-contain"
                            />
                          </>
                        )}
                      </div>

                      {/* Card Footer */}
                      <CardContent className="p-6">
                        <Badge
                          className="mb-2"
                          variant="secondary"
                        >
                          {item.category}
                        </Badge>

                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-sm">
                          {item.businessType}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
          </CarouselContent>

          {/* Portfolio Desktop Buttons */}
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Button
          asChild
          size="lg"
          className="rounded-full px-8"
        >
          <Link href="/portfolio">
            View All Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </TabsContent>
  ))}
</Tabs>
  </div>
</section>


{/* Why Choose Us */}
<section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
  <div className="container mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-10 lg:mb-14">
      <Badge
        className="mb-4 px-4 py-2 text-[var(--chart-4)]"
        variant="secondary"
      >
        <Award className="w-4 h-4 mr-2" />
        Why Choose Us
      </Badge>

      <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
        Why WB Technology?
      </h2>

      <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        We combine expertise, innovation, and dedication to deliver exceptional
        digital solutions that help your business grow faster.
      </p>
    </div>

    {/* Carousel */}
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-4 cursor-grab active:cursor-grabbing pb-4">
        {[
          {
            image: "/image/why-choose-us/quality-assurance.webp",
            title: "Quality Assurance",
            description:
              "Rigorous testing and quality checks ensure flawless performance.",
          },

          {
            image: "/image/why-choose-us/expert-team.webp",
            title: "Expert Team",
            description:
              "Skilled developers and designers with proven track records.",
          },

          {
            image: "/image/why-choose-us/fast-delivery.webp",
            title: "Fast Delivery",
            description:
              "Efficient workflows ensure timely project completion.",
          },

          {
            image: "/image/why-choose-us/award-winning.webp",
            title: "Award-Winning",
            description:
              "Recognized for excellence in design and development.",
          },

          {
            image: "/image/why-choose-us/growth-focused.webp",
            title: "Growth Focused",
            description:
              "Solutions designed to scale with your business.",
          },

          {
            image: "/image/why-choose-us/support-24-7.webp",
            title: "24/7 Support",
            description:
              "Dedicated support team available round the clock.",
          },
        ].map((item, index) => (
          <CarouselItem
            key={index}
            className="
              pl-4
              basis-[85%]
              sm:basis-1/2
              lg:basis-1/4
            "
          >
            <Card
              className="
                h-[320px]
                border
                border-border/50
                bg-background/80
                backdrop-blur-xl
                rounded-3xl
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/50
              "
            >
              <CardContent className="p-4 lg:p-6 flex flex-col items-center text-center h-full">
                
                {/* Image */}
                <div className="w-full flex items-center justify-center mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="
                      object-contain
                      w-[100%]
                      h-[100%]
                      lg:w-[120%]
                      lg:h-[120%]
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselPrevious className="hidden lg:flex -left-5" />
      <CarouselNext className="hidden lg:flex -right-5" />
    </Carousel>
  </div>
</section>


        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
                <Rocket className="w-4 h-4 mr-2" />
                Our Process
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                A streamlined process that transforms ideas into exceptional digital experiences
              </p>
            </div>

            <SectionCarousel
              items={[
                { step: "01", title: "Discovery", description: "Understanding your goals", image: "/image/new-images/Discovery.webp" },
                { step: "02", title: "Design", description: "Crafting beautiful interfaces", image: "/image/new-images/Design.webp" },
                { step: "03", title: "Development", description: "Building with best practices", image: "/image/new-images/Development.webp" },
                { step: "04", title: "Launch", description: "Deploying with support", image: "/image/new-images/Launch.webp" },
              ]}
              itemClassName="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              renderItem={(item) => (
                <Card className="how-we-work-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                  <div className="relative h-32 lg:h-40 overflow-hidden shrink-0">
                    <Image
                      src={item.image || "/image/images/seo-analytics-dashboard.webp"}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="lg:hidden absolute top-3 left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <CardContent className="p-4 lg:p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )}
            />
          </div>
        </section>
        
<section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-10 lg:mb-16">
       <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
        <Users className="w-4 h-4 mr-2" />
        Client Reviews
      </Badge>

      <h2 className="text-3xl lg:text-6xl font-bold mb-4 lg:mb-6 text-balance">
        What Our Clients Say
      </h2>

      <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Real testimonials from businesses we've helped transform
      </p>
    </div>

    <div className="max-w-full mx-auto relative">

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden relative">

        {/* Left Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentTestimonial((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 rounded-full w-11 h-11 shadow-xl bg-background border "
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Right Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentTestimonial((prev) =>
              prev === testimonials.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 rounded-full w-11 h-11 shadow-xl bg-background border"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Mobile Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden">

          {/* Image */}
          {/* <div className="relative h-52 w-full">
            <Image
              src={testimonials[currentTestimonial].headerImage}
              alt={testimonials[currentTestimonial].serviceType}
              fill
              className="object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <Badge
                variant="secondary"
                className="text-xs bg-primary text-white border-0"
              >
                {testimonials[currentTestimonial].serviceType}
              </Badge>
            </div>
          </div> */}

          {/* Content */}
          <CardContent className="p-5">

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                )
              )}
            </div>

            {/* Review */}
            <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-5">
              "{testimonials[currentTestimonial].review}"
            </blockquote>

            {/* Client */}
            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                {testimonials[currentTestimonial].initials}
              </div>

              <div>
                <h4 className="text-base font-bold">
                  {testimonials[currentTestimonial].clientName}
                </h4>

                <p className="text-xs text-muted-foreground">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 w-2"
                  }`}
                />
              ))}
            </div>

          </CardContent>
        </Card>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center relative">

        {/* Left Phone */}
        <div className="flex justify-center">
          <div className="relative">

            <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

        {/* LEFT DESKTOP BUTTON */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentTestimonial((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
          className="absolute -left-6 xl:-left-14 top-1/2 -translate-y-1/2 z-30 rounded-full w-14 h-14 shadow-2xl bg-background border"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* RIGHT DESKTOP BUTTON */}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentTestimonial((prev) =>
              prev === testimonials.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute -right-6 xl:-right-14 top-1/2 -translate-y-1/2 z-30 rounded-full w-14 h-14 shadow-2xl bg-background border"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
              {/* Screen */}
              <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">

                <Image
                  key={testimonials[currentTestimonial].headerImage}
                  src={testimonials[currentTestimonial].headerImage}
                  alt={testimonials[currentTestimonial].serviceType}
                  fill
                  className="object-contain transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">

                  <Badge className="w-fit mb-3 text-xs bg-primary border-0 text-white">
                    {testimonials[currentTestimonial].serviceType}
                  </Badge>

                  <h4 className="text-white font-bold text-lg leading-tight">
                    {testimonials[currentTestimonial].clientName}
                  </h4>

                  <p className="text-white/70 text-sm">
                    {testimonials[currentTestimonial].position}
                  </p>

                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[4rem] blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Right Review */}
        <div className="space-y-6">

          <Card className="bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300">

            <CardContent className="p-6 lg:p-8">

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-500 fill-yellow-500"
                    />
                  )
                )}
              </div>

              {/* Review */}
              <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].review}"
              </blockquote>

              {/* User */}
              <div className="flex items-center gap-4">

                {/* <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-primary/20 shadow-md">
                  <Image
                    src={testimonials[currentTestimonial].headerImage}
                    alt={testimonials[currentTestimonial].serviceType}
                    fill
                    className="object-contain"
                  />
                </div> */}

                <div>
                  <h4 className="text-xl font-bold">
                    {testimonials[currentTestimonial].clientName}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 w-2"
                    }`}
                  />
                ))}
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="py-12 lg:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge
            className="mb-4 px-4 py-2 rounded-full"
            variant="secondary"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            FAQs
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-5xl mx-auto space-y-5">

          {[
    {
      icon: Globe,
      question: "How long does it take to build a website?",
      answer:
        "Typically, a standard website takes 2-4 weeks, while complex applications may take 6-12 weeks depending on requirements.",
    },
    {
      icon: ShieldCheck,
      question: "Do you provide website maintenance?",
      answer:
        "Yes, we offer comprehensive maintenance packages including updates, security patches, backups, and support.",
    },
    {
      icon: BadgeDollarSign,
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and customized according to your business requirements.",
    },
    {
      icon: Megaphone,
      question: "Do you offer digital marketing services?",
      answer:
        "Yes, we provide SEO, PPC, social media marketing, branding, and content marketing services.",
    },
  ].map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary shadow-2xl bg-card"
                    : "border-border bg-card/60 hover:border-primary/40 hover:shadow-lg"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-5 p-5 lg:p-7 text-left"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* TEXT */}
                    <h3
                      className={`text-base sm:text-lg lg:text-xl font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 lg:px-7 pb-6 lg:pb-7 pl-[5.4rem]">
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

        {/* BUTTON */}
        <div className="text-center mt-10 lg:mt-14">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-12 shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link href="/faq">
              View All FAQs

              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>

        {/* Client Logo Carousel Section */}
        <ClientLogoCarousel />

        {/* CTA Section before Footer */}
        <CTASection />

    </>
  )
}
