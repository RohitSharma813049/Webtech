"use client"

import { useState } from "react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ServiceIcon } from "@/components/service-icon"
import { ServiceCarouselMobile } from "@/components/services-carousel-mobile"
import { PricingSection } from "@/components/pricing-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { servicesData } from "@/lib/services-data"
import { CheckCircle2, Phone, MessageCircle, Target } from "lucide-react"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { DiscountPopup } from "@/components/discount-popup"
import { CallWidget } from "@/components/call-widget"
import { Chatbot } from "@/components/chatbot"
import HeroVideoSection from "@/components/hero-video-section"
import { HeroSection } from "@/components/hero-section-reusable"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(servicesData[0].name)

  return (
    <div className="min-h-screen ">
     
            <HeroSection
              title="Our"
              titleHighlight="Services"
              description=" Comprehensive digital solutions to help your business thrive in the modern world. From web development to
              digital marketing, we've got you covered."
              primaryCTA={{ label: "Start Your Project", href: "/contact" }}
              secondaryCTA={{ label: "Our Services", href: "/services" }}
              showImages={true}
            />

      {/* Added Pricing Section */}
      <PricingSection />

      {/* Services Section */}
      <section className="py-12 lg:py-16">
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex overflow-x-auto whitespace-nowrap scrollbar-hide snap-x justify-start h-auto p-2 bg-muted/50 w-full sm:flex-wrap mb-8">
              {servicesData.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="px-8 py-4 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full shadow-md data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Services Content */}
            {servicesData.map((category) => (
              <TabsContent key={category.name} value={category.name} className="mt-0">
                {/* Mobile Carousel */}
                <ServiceCarouselMobile services={category.services} title={category.name} categoryName={category.name} />

                {/* Desktop Grid */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Card
                      key={service.id}
                      className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 flex flex-col h-full group"
                    >
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <Image
                          src={service.image || "/seo-analytics-dashboard.webp"}
                          alt={service.title}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {service.reactIcon && (
                          <div className="absolute bottom-3 left-3 bg-primary/90 p-2.5 rounded-lg">
                            <ServiceIcon iconName={service.reactIcon} size="lg" className="text-white" />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                          {service.description}
                        </p>
                        <div className="space-y-1.5 mb-4">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2 pt-4 border-t">
                          <EnquiryPopup
                            preselectedService={service.title}
                            preselectedCategory={category.name}
                            trigger={
                              <Button size="sm" className="flex-1 rounded-full">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Enquiry
                              </Button>
                            }
                          />
                          <Button size="sm" variant="outline" className="flex-1 rounded-full bg-transparent" asChild>
                            <a href="tel:+918860876087">
                              <Phone className="w-4 h-4 mr-2" />
                              Call
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
        </div>
      </section>

      <CTASection />
    </div>
  )
}
