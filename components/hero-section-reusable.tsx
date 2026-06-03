"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroImageCarousel } from "@/components/hero-image-carousel"
import { EnquiryPopup } from "@/components/enquiry-popup"
import {
  Sparkles,
  Star,
  Rocket,
} from "lucide-react"

interface HeroSectionProps {
  title: string
  titleHighlight?: string
  description: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; type: string }
  showImages?: boolean
  imagesData?: { src: string; alt: string; label: string }[]
}

export function HeroSection({
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  showImages = true,
  imagesData = [],
}: HeroSectionProps) {

  const images = imagesData && imagesData.length > 0 ? imagesData : [
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
  ]

  return (
    <section className="relative flex items-center overflow-hidden py-10">

      {/* Background */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <Badge
              variant="secondary"
              className="px-6 py-2"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 150+ Businesses
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#9c6c1f] px-4 py-3 rounded-lg inline-block">
              {title}{" "}
              <span className="text-[#1f0159]">
                {titleHighlight}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground ">
              {description}
            </p>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <span className="font-semibold">4.9/5</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {primaryCTA && (
                <Button className="golden-hover cursor-golden hover:text-amber-300 hover:border hover:border-yellow-600 hover:bg-white" asChild size="lg">
                  <Link href={primaryCTA.href}>
                    <Rocket className="mr-2 w-5 h-5" />
                    {primaryCTA.label}
                  </Link>
                </Button>
              )}

              {secondaryCTA && secondaryCTA.type === "enquiry" ? (
                <EnquiryPopup
                  trigger={
                    <Button className="golden-hover cursor-golden hover:text-amber-300 " size="lg" variant="outline">
                      {secondaryCTA.label}
                    </Button>
                  }
                />
              ) : secondaryCTA ? (
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">{secondaryCTA.label}</Link>
                </Button>
              ) : null}
            </div>

          </div>

          {/* RIGHT */}
          <div className="w-full">

            {/* MOBILE */}
            <div className="lg:hidden flex justify-center">
              <HeroImageCarousel images={images} />
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block overflow-hidden w-full">

              <div className="animate-marquee flex gap-5">

                {[...images, ...images].map((image, index) => (
                  <div
                    key={index}
                    className="relative w-[220px] h-[410px] rounded-3xl overflow-hidden flex-shrink-0 bg-background golden-hover cursor-golden"
                    style={{
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.20), 0 2px 8px rgba(0,0,0,0.12)",
                      border: "1.5px solid rgba(255,255,255,0.18)",
                    }}
                  >

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />

                    {/* Label with gradient + text-shadow */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-3"
                      style={{
                        paddingTop: 40,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)",
                      }}
                    >
                      <p
                        className="text-white text-sm font-semibold tracking-[0.01em]"
                        style={{
                          textShadow:
                            "0 1px 3px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6), 0 4px 24px rgba(0,0,0,0.4)",
                        }}
                      >
                        {image.label}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}