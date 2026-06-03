"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight, Award } from "lucide-react"
import { EnquiryPopup } from "./enquiry-popup"

const clientLogos = [
  // Column 1 - Scrolls Up
  [
    "/clintelogo/ew.webp",
    "/clintelogo/lex.webp",
    "/clintelogo/logo1.webp",
    "/clintelogo/logo2.webp",
    "/clintelogo/logo4.webp",
    "/clintelogo/logo5.webp",
  ],
  // Column 2 - Scrolls Down
  [
    "/clintelogo/logo6.webp",
    "/clintelogo/logo7.webp",
    "/clintelogo/nse.webp",
    "/clintelogo/pinaki.webp",
    "/clintelogo/sobha.webp",
    "/clintelogo/toy.webp",
  ],
  // Column 3 - Scrolls Up
  [
   "/clintelogo/ew.webp",
    "/clintelogo/lex.webp",
    "/clintelogo/logo1.webp",
    "/clintelogo/logo2.webp",
    "/clintelogo/logo4.webp",
    "/clintelogo/logo5.webp",
  ],
]

export function ClientLogoCarousel() {
  const column1Ref = useRef<HTMLDivElement>(null)
  const column2Ref = useRef<HTMLDivElement>(null)
  const column3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const columns = [
      { ref: column1Ref, direction: "up" },
      { ref: column2Ref, direction: "down" },
      { ref: column3Ref, direction: "up" },
    ]

    columns.forEach(({ ref, direction }) => {
      if (!ref.current) return

      const scrollHeight = ref.current.scrollHeight / 2
      let scrollPosition = direction === "up" ? 0 : scrollHeight

      const scroll = () => {
        if (direction === "up") {
          scrollPosition += 0.5
          if (scrollPosition >= scrollHeight) {
            scrollPosition = 0
          }
        } else {
          scrollPosition -= 0.5
          if (scrollPosition <= 0) {
            scrollPosition = scrollHeight
          }
        }
        if (ref.current) {
          ref.current.scrollTop = scrollPosition
        }
      }

      const interval = setInterval(scroll, 20)
      return () => clearInterval(interval)
    })
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
             <Badge className="mb-4 px-4 py-2 text-[var(--chart-4)]" variant="secondary">
              <Award className="w-4 h-4 mr-2" />
              Trusted Partners
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Trusted by Leading Brands Across India</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              We've helped over 900+ businesses transform their digital presence and achieve remarkable growth through
              our innovative solutions and dedicated support.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "900+ Projects Delivered Successfully",
                "99% Client Satisfaction Rate",
                "24/7 Dedicated Support Team",
                "Award-Winning Design & Development",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/portfolio">
                  View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
         <EnquiryPopup
  trigger={
    <Button
      size="lg"
      variant="outline"
      className="rounded-full px-8 bg-transparent"
    >
      Get Free Consultation
    </Button>
  }
/>
            </div>
          </div>

          {/* Right Side - Tilted Scrolling Logo Columns */}
          <div className="relative h-[600px] hidden lg:block bg-transparent">
            <div
              className="absolute inset-0 flex gap-6 justify-center items-center"
              style={{ transform: "rotate(-15deg)", transformOrigin: "center" }}
            >
              {/* Column 1 - Scrolls Up */}
              <div ref={column1Ref} className="w-48 h-full overflow-hidden relative" style={{ scrollBehavior: "auto" }}>
                <div className="flex flex-col gap-6">
                  {[...clientLogos[0], ...clientLogos[0]].map((logo, index) => (
                    <div
                      key={index}
                      className="bg-card border-2 border-border rounded-xl p-6 flex items-center justify-center min-h-[120px] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative w-full h-16">
                        <Image
                          src={logo || "/placeholder.svg"}
                          alt={`Client ${index + 1}`}
                          fill
                          className="object-contain opacity-70"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 - Scrolls Down */}
              <div ref={column2Ref} className="w-48 h-full overflow-hidden relative" style={{ scrollBehavior: "auto" }}>
                <div className="flex flex-col gap-6">
                  {[...clientLogos[1], ...clientLogos[1]].map((logo, index) => (
                    <div
                      key={index}
                      className="bg-card border-2 border-border rounded-xl p-6 flex items-center justify-center min-h-[120px] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative w-full h-16">
                        <Image
                          src={logo || "/placeholder.svg"}
                          alt={`Client ${index + 1}`}
                          fill
                          className="object-contain opacity-70"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3 - Scrolls Up */}
              <div ref={column3Ref} className="w-48 h-full overflow-hidden relative" style={{ scrollBehavior: "auto" }}>
                <div className="flex flex-col gap-6">
                  {[...clientLogos[2], ...clientLogos[2]].map((logo, index) => (
                    <div
                      key={index}
                      className="bg-card border-2 border-border rounded-xl p-6 flex items-center justify-center min-h-[120px] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative w-full h-16">
                        <Image
                          src={logo || "/placeholder.svg"}
                          alt={`Client ${index + 1}`}
                          fill
                          className="object-contain opacity-70"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
