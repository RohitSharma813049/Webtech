"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"
import { SectionCarousel } from "@/components/section-carousel"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Eye, Heart, Shield, Zap, Sparkles } from "lucide-react"

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined" && window.gsap) {
        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger

        if (ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger)
        }

        if (statsRef.current && ScrollTrigger) {
          gsap.from(statsRef.current.querySelectorAll(".stat-item"), {
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
            opacity: 0,
            scale: 0.8,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(1.7)",
          })
        }

        if (valuesRef.current && ScrollTrigger) {
          gsap.from(valuesRef.current.querySelectorAll(".value-card"), {
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          })
        }
      }
    }
    const timer = setTimeout(loadGSAP, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
     
      <HeroSection
        title="Our Work"
        titleHighlight="Portfolio"
        description="See how we've transformed businesses across industries with our innovative solutions and expert digital strategies."
        primaryCTA={{ label: "View Portfolio", href: "/portfolio" }}
        secondaryCTA={{ label: "Learn More", href: "#services" }}
        showImages={true}
      />

      {/* Story Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, WB Tech Agency (part of Webeside Technology) started with a simple mission: to help
                  businesses establish a strong online presence through innovative digital solutions.
                </p>
                <p>
                  Over the years, we've grown from a small team of passionate developers to a full-service digital
                  agency with 900+ successful projects across various industries. Our commitment to excellence and
                  client satisfaction has made us a trusted partner for businesses of all sizes.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in web and mobile development, digital
                  marketing, and UI/UX design. Our team of experts stays ahead of industry trends to deliver
                  cutting-edge solutions that drive real business results.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden h-[80%] w-[100%]">
              <Image src="/image/about-us/Ourstory.PNG" alt="WB Tech Team" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Years in Business</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">900+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">120+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                  and create lasting value. We strive to be the trusted technology partner that businesses can rely on
                  for their digital transformation journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a global leader in digital innovation, known for delivering exceptional quality,
                  fostering creativity, and building long-term partnerships. We envision a future where technology
                  seamlessly connects businesses with their customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Our Values
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The core principles that guide our work and relationships
            </p>
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Client-Centric",
                description: "Your success is our success. We go above and beyond to exceed expectations.",
                color: "primary",
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Innovation",
                description: "We embrace new technologies and creative solutions to stay ahead.",
                color: "primary",
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Integrity",
                description: "Honesty and transparency in all our interactions and deliverables.",
                color: "primary",
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "Excellence",
                description: "Commitment to delivering the highest quality in everything we do.",
                color: "primary",
              },
            ].map((value, idx) => (
              <Card key={idx} className="value-card">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    value.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:hidden">
            <SectionCarousel
              items={[
                {
                  icon: <Heart className="w-8 h-8 text-primary" />,
                  title: "Client-Centric",
                  description: "Your success is our success. We go above and beyond to exceed expectations.",
                  color: "primary",
                },
                {
                  icon: <Zap className="w-8 h-8 text-accent" />,
                  title: "Innovation",
                  description: "We embrace new technologies and creative solutions to stay ahead.",
                  color: "accent",
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  title: "Integrity",
                  description: "Honesty and transparency in all our interactions and deliverables.",
                  color: "primary",
                },
                {
                  icon: <Award className="w-8 h-8 text-accent" />,
                  title: "Excellence",
                  description: "Commitment to delivering the highest quality in everything we do.",
                  color: "accent",
                },
              ]}
              renderItem={(value) => (
                <Card className="value-card h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      value.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </div>
  )
}
